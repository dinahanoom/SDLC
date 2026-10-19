# Panduan deploy GitHub Pages + Google Apps Script

## A. Deploy website ke GitHub Pages
1. Ekstrak ZIP ini.
2. Buat repository GitHub baru. Untuk repository publik, jangan menambahkan password atau rahasia ke file.
3. Upload `index.html`, `style.css`, `app.js`, `data.js`, `README.md`, `.nojekyll`, `DEPLOY.md`, `LICENSE.txt`, dan folder `apps-script`.
4. Di GitHub, buka **Settings → Pages**.
5. Pilih **Deploy from a branch**, pilih branch `main` dan folder `/ (root)`, lalu Save.
6. Tunggu URL Pages tersedia. Website langsung bisa dipakai dalam mode lokal tanpa backend.

## B. Siapkan Apps Script (tanpa membuat Sheet manual)
1. Buka https://script.google.com/ dan buat project Apps Script baru.
2. Salin isi `apps-script/Code.gs` ke editor `Code.gs`. Jangan menaruh password admin ke dalam source.
3. Buka **Project Settings → Script Properties → Add script property**:
   - Property: `ADMIN_PASSWORD`
   - Value: `Bismillaah`
   Password ini berada di Script Properties, bukan repository GitHub.
4. (Opsional, direkomendasikan) Tambahkan Script Property `APP_TOKEN` berisi string acak panjang untuk membatasi akses penulisan publik. Simpan nilainya hanya di Script Properties. Catatan: jika token dipakai pada website publik, token yang dikirim browser dapat dilihat pengunjung; karena itu token bukan pengganti autentikasi admin. Jangan gunakan token rahasia di frontend.
5. Di Apps Script, jalankan fungsi `setup` sekali dari editor dan setujui izin. Fungsi ini membuat spreadsheet otomatis, membuat tab, header, dan data awal jika tab masih kosong. ID spreadsheet disimpan pada Script Properties sebagai `SPREADSHEET_ID`.
6. Deploy → **New deployment** → pilih type **Web app**.
7. Execute as: **Me**. Who has access: **Anyone** (atau opsi setara yang tersedia di akunmu) agar website Pages dapat memanggil endpoint. Kebijakan akun Google dapat membatasi pilihan ini.
8. Deploy dan salin URL Web App yang berakhir dengan `/exec`.
9. Buka website Pages → menu **Admin / Kelola**. Untuk konfigurasi backend, masukkan URL `/exec` pada prompt konfigurasi backend yang tersedia di website. URL endpoint bukan password, tetapi tetap jangan membagikan informasi sensitif.

## C. Penggunaan admin
- Masuk menggunakan password yang telah disimpan pada Script Properties `ADMIN_PASSWORD` (sesuai permintaan awal: `Bismillaah`).
- Admin dapat tambah, edit, dan hapus bank soal, Q&A, serta catatan materi.
- Jangan mengandalkan sesi browser sebagai pengamanan. Server memverifikasi password saat login dan melakukan operasi CRUD di Apps Script.
- Jika mengubah kode Apps Script setelah deployment, buka **Deploy → Manage deployments → Edit** dan buat versi deployment baru.
- Jika endpoint gagal, cek Executions di Apps Script dan pastikan spreadsheet dapat diakses oleh akun pemilik script.

## D. Catatan teknis dan keamanan
- Apps Script otomatis membuat spreadsheet/tab/header. Pengguna tidak perlu membuat sheet manual.
- Jangan menyimpan password admin di HTML, JS, JSON, atau GitHub. Jangan menaruh kredensial di GitHub Actions atau file konfigurasi publik.
- Karena website GitHub Pages bersifat publik, jangan pernah mengirim data pribadi, rahasia perusahaan, atau informasi sensitif lewat formulir.
- Endpoint Apps Script publik berpotensi menerima spam. Pertimbangkan pembatasan akses, validasi, logging seperlunya, dan kuota. Jangan menganggap URL Web App sebagai rahasia.
- Apps Script ContentService dapat mengalami pembatasan CORS/redirect pada beberapa browser atau konfigurasi akun. Jika permintaan lintas-origin gagal, gunakan backend/proxy yang mendukung CORS dengan benar atau sajikan frontend melalui solusi Google Apps Script. Jangan menonaktifkan keamanan browser.
- Data latihan disimpan lokal di browser. Data pengajuan pertanyaan akan dikirim ke backend hanya jika endpoint sudah dikonfigurasi.
- Website tidak memakai Google Sheets untuk menyimpan password; password hanya disimpan di Script Properties.
