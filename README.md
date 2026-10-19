# SDLC Notes — Website belajar interaktif

Website edukasi SDLC dengan tema biru + cream. Dibangun menggunakan HTML, CSS, JavaScript, JSON, dan Google Apps Script opsional sebagai backend Google Sheets.

## Isi ZIP
- `index.html` — halaman dan komponen UI
- `style.css` — desain responsif
- `app.js` — navigasi, latihan, pencarian, tanya jawab, admin CRUD
- `data.js` — data materi awal dalam JSON JavaScript
- `apps-script/Code.gs` — API Apps Script; membuat sheet dan header otomatis
- `apps-script/appsscript.json` — manifest Apps Script
- `DEPLOY.md` — langkah deployment
- `.nojekyll` — membantu GitHub Pages
- `LICENSE.txt` — lisensi untuk kode contoh

## Penting: mode lokal vs backend
Tanpa Apps Script, website tetap bisa dipakai untuk belajar dan latihan. CRUD lokal tidak diaktifkan sebagai login admin; admin baru bisa masuk setelah Apps Script dikonfigurasi. Untuk penyimpanan bersama dan admin yang benar-benar diverifikasi server, hubungkan Apps Script sesuai `DEPLOY.md`.

Jangan menyimpan password, token, API key, atau rahasia di `app.js`, `data.js`, HTML, ataupun repository GitHub. Password admin disimpan di **Apps Script Script Properties**. `Bismillaah` tidak ditanam di source code.

## Fitur
- Dasar SDLC, istilah, Waterfall vs Agile
- Enam tahapan SDLC: tujuan, tugas, peran, output, dan pertanyaan berpikir
- Kartu peran dan tugas SDLC dengan pencarian/filter
- Pertanyaan interview dan contoh kerangka jawaban
- Latihan pilihan ganda dengan umpan balik dan skor lokal
- Tanya jawab dan formulir pengajuan pertanyaan
- Admin CRUD untuk bank soal, tanya jawab, dan catatan
- Otomatis membuat Google Spreadsheet dan tab/header saat API pertama dipanggil
- Data pengunjung tidak dilacak secara diam-diam; formulir pertanyaan hanya mengirim isi yang ditulis pengguna jika backend aktif
