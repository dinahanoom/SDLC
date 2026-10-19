/**
 * SDLC Notes API — Google Apps Script
 * Rahasia disimpan di Script Properties, bukan di source code.
 * Spreadsheet dan header dibuat otomatis oleh setup()/ensureDatabase_().
 */
const PROP = PropertiesService.getScriptProperties();
const SHEETS = {
  questions: {name: 'BankSoal', headers: ['id','title','body','options','answer','category','updatedAt']},
  qa: {name: 'TanyaJawab', headers: ['id','title','body','category','updatedAt']},
  notes: {name: 'CatatanMateri', headers: ['id','title','body','category','updatedAt']},
  submissions: {name: 'PertanyaanPengunjung', headers: ['id','name','question','status','createdAt']}
};

function setup() {
  const ss = ensureDatabase_();
  seedIfEmpty_(ss);
  Logger.log('Database siap: ' + ss.getUrl());
  return ss.getUrl();
}

function doGet(e) {
  try {
    ensureDatabase_();
    return json_({ok:true, service:'SDLC Notes API', message:'API aktif. Gunakan POST untuk aksi.'});
  } catch (err) {
    return json_({ok:false, error:String(err.message || err)});
  }
}

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const action = String(payload.action || '');
    if (action === 'login') {
      const configured = PROP.getProperty('ADMIN_PASSWORD');
      if (!configured) return json_({ok:false, error:'ADMIN_PASSWORD belum disetel pada Script Properties.'});
      if (!constantTimeEquals_(String(payload.password || ''), configured)) return json_({ok:false, error:'Password tidak cocok.'});
      // Tidak mengembalikan password/token. Operasi admin tetap mengirim password untuk diverifikasi server.
      return json_({ok:true, message:'Login berhasil.'});
    }
    if (action === 'publicList') {
      const ss = ensureDatabase_();
      return json_({ok:true, data:readPublicData_(ss)});
    }
    if (action === 'submitQuestion') {
      const name = String(payload.name || '').trim().slice(0,60);
      const question = String(payload.question || '').trim().slice(0,600);
      if (question.length < 3) return json_({ok:false,error:'Pertanyaan terlalu singkat.'});
      const ss = ensureDatabase_();
      appendObject_(ss.getSheetByName(SHEETS.submissions.name), {id:Utilities.getUuid(),name:name,question:question,status:'Baru',createdAt:new Date().toISOString()});
      return json_({ok:true,message:'Pertanyaan terkirim untuk ditinjau.'});
    }
    if (['list','create','update','delete'].includes(action)) {
      if (!isAdmin_(payload.password)) return json_({ok:false,error:'Autentikasi admin gagal.'});
      const type = String(payload.type || '');
      if (!SHEETS[type] || type === 'submissions') return json_({ok:false,error:'Jenis data tidak valid.'});
      const ss = ensureDatabase_();
      const sheet = ss.getSheetByName(SHEETS[type].name);
      if (action === 'list') return json_({ok:true,data:readObjects_(sheet)});
      if (action === 'create') {
        const obj = sanitizeRecord_(type,payload.record || {});
        obj.id = Utilities.getUuid(); obj.updatedAt = new Date().toISOString();
        appendObject_(sheet,obj);
        return json_({ok:true,data:obj,message:'Data ditambahkan.'});
      }
      const id = String(payload.id || (payload.record && payload.record.id) || '');
      if (!id) return json_({ok:false,error:'ID wajib diisi.'});
      if (action === 'update') {
        const existing = findRowById_(sheet,id);
        if (!existing) return json_({ok:false,error:'Data tidak ditemukan.'});
        const obj = sanitizeRecord_(type,payload.record || {});
        obj.id = id; obj.updatedAt = new Date().toISOString();
        writeObjectAt_(sheet,existing.row,obj);
        return json_({ok:true,data:obj,message:'Data diperbarui.'});
      }
      if (action === 'delete') {
        const existing = findRowById_(sheet,id);
        if (!existing) return json_({ok:false,error:'Data tidak ditemukan.'});
        sheet.deleteRow(existing.row);
        return json_({ok:true,message:'Data dihapus.'});
      }
    }
    return json_({ok:false,error:'Aksi tidak dikenal.'});
  } catch (err) {
    return json_({ok:false,error:String(err.message || err)});
  }
}

function ensureDatabase_() {
  let id = PROP.getProperty('SPREADSHEET_ID');
  let ss;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; }
  }
  if (!ss) {
    ss = SpreadsheetApp.create('SDLC Notes — Database');
    PROP.setProperty('SPREADSHEET_ID', ss.getId());
  }
  Object.keys(SHEETS).forEach(function(key) {
    const spec = SHEETS[key];
    let sheet = ss.getSheetByName(spec.name);
    if (!sheet) sheet = ss.insertSheet(spec.name);
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1,1,1,spec.headers.length).setValues([spec.headers]);
      sheet.setFrozenRows(1);
      sheet.getRange(1,1,1,spec.headers.length).setFontWeight('bold').setBackground('#193d63').setFontColor('#ffffff');
    } else {
      const existing = sheet.getRange(1,1,1,Math.max(sheet.getLastColumn(),1)).getValues()[0].map(String);
      const missing = spec.headers.filter(function(h){return existing.indexOf(h) === -1;});
      if (missing.length) {
        const combined = existing.concat(missing);
        sheet.getRange(1,1,1,combined.length).setValues([combined]);
      }
    }
  });
  return ss;
}

function seedIfEmpty_(ss) {
  const bank = ss.getSheetByName(SHEETS.questions.name);
  if (bank.getLastRow() <= 1) {
    const seed = [
      ['Apa tujuan utama SDLC?','SDLC memberi kerangka terstruktur untuk mengembangkan dan memelihara software.','Membuat kode tanpa rencana|Kerangka pengembangan terstruktur|Menghapus pengujian|Mengganti komunikasi','1','Dasar SDLC'],
      ['Siapa yang biasanya merancang test case?','QA membantu merencanakan dan menjalankan pengujian serta melaporkan defect.','Project sponsor|QA Engineer / Tester|Technical Writer saja|Semua pengguna selalu','1','Peran tim'],
      ['Apa itu acceptance criteria?','Kondisi yang harus dipenuhi agar fitur dapat diterima.','Kondisi penerimaan fitur|Warna logo|Daftar gaji|Nama branch','0','Kebutuhan']
    ];
    seed.forEach(function(r) { appendObject_(bank,{id:Utilities.getUuid(),title:r[0],body:r[1],options:r[2],answer:r[3],category:r[4],updatedAt:new Date().toISOString()}); });
  }
  const qa = ss.getSheetByName(SHEETS.qa.name);
  if (qa.getLastRow() <= 1) {
    [
      {title:'Apa kepanjangan SDLC?',body:'Software Development Life Cycle, yaitu kerangka proses untuk mengembangkan dan memelihara perangkat lunak.',category:'Dasar'},
      {title:'Apa tugas Business Analyst?',body:'Menggali kebutuhan, menyelaraskan stakeholder, menyusun requirement, dan membantu validasi solusi.',category:'Peran'},
      {title:'Apa perbedaan QA dan developer?',body:'Developer membangun dan memperbaiki software; QA merencanakan dan mengevaluasi kualitas melalui pengujian. Keduanya bertanggung jawab atas kualitas.',category:'Peran'}
    ].forEach(function(o){o.id=Utilities.getUuid();o.updatedAt=new Date().toISOString();appendObject_(qa,o);});
  }
  const notes = ss.getSheetByName(SHEETS.notes.name);
  if (notes.getLastRow() <= 1) {
    [
      {title:'Perencanaan',body:'Tentukan tujuan, ruang lingkup, stakeholder, estimasi, sumber daya, dan risiko.',category:'Tahapan'},
      {title:'Analisis kebutuhan',body:'Gali dan validasi kebutuhan fungsional/nonfungsional, user story, serta acceptance criteria.',category:'Tahapan'},
      {title:'Desain sistem',body:'Rancang arsitektur, data, API, antarmuka, keamanan, dan integrasi.',category:'Tahapan'}
    ].forEach(function(o){o.id=Utilities.getUuid();o.updatedAt=new Date().toISOString();appendObject_(notes,o);});
  }
}

function readPublicData_(ss) {
  return {
    questions: readObjects_(ss.getSheetByName(SHEETS.questions.name)),
    qa: readObjects_(ss.getSheetByName(SHEETS.qa.name)),
    notes: readObjects_(ss.getSheetByName(SHEETS.notes.name))
  };
}
function isAdmin_(password) {
  const configured = PROP.getProperty('ADMIN_PASSWORD');
  return !!configured && constantTimeEquals_(String(password || ''),configured);
}
function constantTimeEquals_(a,b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i=0;i<a.length;i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}
function sanitizeRecord_(type, record) {
  const allowed = type === 'questions' ? ['title','body','options','answer','category'] : ['title','body','category'];
  const out = {};
  allowed.forEach(function(k){out[k] = String(record[k] == null ? '' : record[k]).trim().slice(0,k === 'body' ? 5000 : 240);});
  if (!out.title || !out.body) throw new Error('Judul dan isi wajib diisi.');
  return out;
}
function readObjects_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(String);
  return values.slice(1).filter(function(row){return row.some(function(v){return v !== '' && v !== null;});}).map(function(row){
    const obj = {}; headers.forEach(function(h,i){obj[h] = row[i] instanceof Date ? row[i].toISOString() : row[i];}); return obj;
  });
}
function appendObject_(sheet,obj) {
  const headers = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0].map(String);
  sheet.appendRow(headers.map(function(h){return obj[h] !== undefined ? obj[h] : '';}));
}
function findRowById_(sheet,id) {
  if (sheet.getLastRow() < 2) return null;
  const headers = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0].map(String);
  const idCol = headers.indexOf('id') + 1;
  if (!idCol) return null;
  const values = sheet.getRange(2,idCol,sheet.getLastRow()-1,1).getValues();
  for (let i=0;i<values.length;i++) if (String(values[i][0]) === id) return {row:i+2};
  return null;
}
function writeObjectAt_(sheet,row,obj) {
  const headers = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0].map(String);
  const old = sheet.getRange(row,1,1,headers.length).getValues()[0];
  const out = headers.map(function(h,i){return obj[h] !== undefined ? obj[h] : old[i];});
  sheet.getRange(row,1,1,headers.length).setValues([out]);
}
function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
