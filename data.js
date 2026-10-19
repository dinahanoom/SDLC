/* Data awal website. Data ini bukan rahasia dan dapat diedit melalui admin setelah backend aktif. */
window.SDLC_DATA = {
  "terms": [
    {
      "term": "Stakeholder",
      "definition": "Pihak yang memengaruhi atau terdampak oleh proyek, misalnya pengguna, pemilik bisnis, sponsor, tim operasional, dan regulator."
    },
    {
      "term": "Requirement",
      "definition": "Kebutuhan atau kemampuan yang harus dipenuhi sistem. Bisa berupa kebutuhan fungsional maupun nonfungsional."
    },
    {
      "term": "Functional requirement",
      "definition": "Menjelaskan apa yang harus dilakukan sistem, misalnya pengguna dapat reset password."
    },
    {
      "term": "Non-functional requirement",
      "definition": "Menjelaskan kualitas atau batasan sistem, misalnya performa, keamanan, aksesibilitas, dan ketersediaan."
    },
    {
      "term": "SDLC model",
      "definition": "Cara mengatur alur pengembangan, misalnya Waterfall, Agile, Spiral, atau V-Model."
    },
    {
      "term": "Deliverable",
      "definition": "Hasil kerja yang dapat diperiksa, seperti dokumen kebutuhan, desain, kode, laporan pengujian, atau rilis."
    },
    {
      "term": "Acceptance criteria",
      "definition": "Kondisi terukur yang harus terpenuhi agar sebuah fitur dapat diterima."
    },
    {
      "term": "Deployment",
      "definition": "Proses merilis atau memasang versi software ke lingkungan target."
    },
    {
      "term": "Maintenance",
      "definition": "Aktivitas setelah rilis, termasuk perbaikan bug, pembaruan, pemantauan, dan peningkatan."
    }
  ],
  "phases": [
    {
      "title": "Perencanaan",
      "subtitle": "Planning",
      "goal": "Menentukan masalah, tujuan, ruang lingkup, kelayakan, risiko, dan rencana proyek.",
      "tasks": [
        "Mengidentifikasi masalah dan tujuan bisnis.",
        "Memetakan stakeholder serta pengguna utama.",
        "Memperkirakan biaya, waktu, sumber daya, dan risiko.",
        "Menentukan ruang lingkup awal serta ukuran keberhasilan."
      ],
      "people": [
        "Project Manager / Scrum Master",
        "Business Analyst",
        "Product Owner",
        "Sponsor dan stakeholder"
      ],
      "outputs": [
        "Project charter atau proposal",
        "Scope awal",
        "Jadwal dan estimasi",
        "Daftar risiko"
      ],
      "thinking": "Masalah apa yang hendak diselesaikan? Siapa yang mendapat manfaat? Apakah proyek layak dan apa batasannya?"
    },
    {
      "title": "Analisis kebutuhan",
      "subtitle": "Requirements Analysis",
      "goal": "Mengumpulkan, mengklarifikasi, memprioritaskan, dan memvalidasi kebutuhan pengguna dan bisnis.",
      "tasks": [
        "Wawancara, observasi, workshop, dan analisis proses.",
        "Mendefinisikan kebutuhan fungsional dan nonfungsional.",
        "Menulis user story, use case, atau spesifikasi kebutuhan.",
        "Menyepakati acceptance criteria dan prioritas."
      ],
      "people": [
        "Business Analyst / System Analyst",
        "Product Owner",
        "Pengguna dan stakeholder",
        "UX Designer, bila relevan"
      ],
      "outputs": [
        "SRS atau daftar requirement",
        "User story / use case",
        "Acceptance criteria",
        "Prioritas backlog"
      ],
      "thinking": "Siapa penggunanya? Apa kebutuhan sebenarnya? Bagaimana kebutuhan dibuktikan, diprioritaskan, dan disepakati?"
    },
    {
      "title": "Desain sistem",
      "subtitle": "System Design",
      "goal": "Menerjemahkan kebutuhan menjadi rancangan arsitektur, data, antarmuka, integrasi, dan keamanan.",
      "tasks": [
        "Memilih arsitektur dan teknologi yang sesuai.",
        "Merancang database, API, alur sistem, dan antarmuka.",
        "Menetapkan pendekatan keamanan, performa, dan aksesibilitas.",
        "Meninjau desain dengan tim dan stakeholder."
      ],
      "people": [
        "Software Architect / System Analyst",
        "UI/UX Designer",
        "Developer",
        "Database Engineer dan Security Engineer"
      ],
      "outputs": [
        "Dokumen desain / diagram",
        "Prototype atau wireframe",
        "Skema data",
        "Kontrak API dan keputusan teknis"
      ],
      "thinking": "Bagaimana solusi dibangun? Apa dependensi dan trade-off-nya? Bagaimana sistem aman, terukur, dan mudah dirawat?"
    },
    {
      "title": "Pengembangan",
      "subtitle": "Development / Implementation",
      "goal": "Membangun fitur sesuai desain, standar coding, dan kebutuhan yang telah disepakati.",
      "tasks": [
        "Membuat kode dan mengintegrasikan komponen.",
        "Melakukan code review dan pengujian unit.",
        "Mengelola versi melalui Git dan branch sesuai aturan tim.",
        "Memperbarui dokumentasi serta menangani temuan review."
      ],
      "people": [
        "Frontend / Backend Developer",
        "Mobile Developer",
        "Tech Lead",
        "DevOps Engineer"
      ],
      "outputs": [
        "Source code",
        "Build aplikasi",
        "Unit test dan hasil review",
        "Dokumentasi teknis"
      ],
      "thinking": "Apakah implementasi sesuai requirement dan desain? Apakah kode dapat dibaca, diuji, aman, dan dipelihara?"
    },
    {
      "title": "Pengujian",
      "subtitle": "Testing / Verification",
      "goal": "Memeriksa apakah software memenuhi kebutuhan dan menemukan masalah sebelum atau sesudah rilis.",
      "tasks": [
        "Menyusun test plan, test case, dan data uji.",
        "Melakukan pengujian fungsional, integrasi, sistem, regresi, dan nonfungsional sesuai kebutuhan.",
        "Mencatat bug dengan langkah reproduksi dan tingkat dampak.",
        "Memverifikasi perbaikan serta mendukung user acceptance testing."
      ],
      "people": [
        "QA Engineer / Software Tester",
        "Developer",
        "Business Analyst / Product Owner",
        "Pengguna untuk UAT"
      ],
      "outputs": [
        "Test plan dan test case",
        "Bug / defect report",
        "Test summary",
        "Hasil UAT atau rekomendasi rilis"
      ],
      "thinking": "Apa yang harus benar? Kondisi normal dan edge case apa yang perlu diuji? Seberapa serius risiko jika gagal?"
    },
    {
      "title": "Rilis & pemeliharaan",
      "subtitle": "Deployment & Maintenance",
      "goal": "Merilis software secara terkendali, memantau perilaku di lingkungan nyata, dan memperbaikinya berkelanjutan.",
      "tasks": [
        "Menyiapkan release plan, konfigurasi, backup, dan rollback.",
        "Deploy ke staging/production sesuai proses tim.",
        "Memantau log, performa, keamanan, dan feedback pengguna.",
        "Memperbaiki bug, memperbarui dependensi, dan merencanakan peningkatan."
      ],
      "people": [
        "DevOps / Site Reliability Engineer",
        "Developer",
        "QA Engineer",
        "Support / Operations dan Product Owner"
      ],
      "outputs": [
        "Release notes",
        "Versi aplikasi yang dirilis",
        "Monitoring dan incident log",
        "Daftar perbaikan / backlog pemeliharaan"
      ],
      "thinking": "Apakah rilis aman? Bagaimana mendeteksi masalah, memulihkan layanan, dan mengukur dampak bagi pengguna?"
    }
  ],
  "roles": [
    {
      "name": "Project Manager",
      "category": "delivery",
      "icon": "◷",
      "purpose": "Mengelola rencana, koordinasi, risiko, komunikasi, dan kemajuan proyek.",
      "tasks": [
        "Menyusun jadwal, ruang lingkup, dan kebutuhan sumber daya.",
        "Memantau risiko, hambatan, dan dependensi.",
        "Melaporkan progres serta mengoordinasikan stakeholder."
      ],
      "interview": "Bagaimana Anda menangani perubahan ruang lingkup atau proyek yang terlambat?"
    },
    {
      "name": "Product Owner / Product Manager",
      "category": "business",
      "icon": "◇",
      "purpose": "Memaksimalkan nilai produk dan menentukan prioritas kebutuhan.",
      "tasks": [
        "Memahami pengguna dan tujuan bisnis.",
        "Memprioritaskan backlog berdasarkan nilai dan risiko.",
        "Menjelaskan visi produk dan menerima hasil berdasarkan kriteria."
      ],
      "interview": "Bagaimana Anda menentukan fitur yang harus dikerjakan lebih dulu?"
    },
    {
      "name": "Business Analyst",
      "category": "business",
      "icon": "⌕",
      "purpose": "Menjembatani kebutuhan bisnis dengan solusi yang dapat dikerjakan tim teknis.",
      "tasks": [
        "Menggali kebutuhan melalui wawancara dan workshop.",
        "Membuat requirement, user story, use case, dan acceptance criteria.",
        "Memvalidasi kebutuhan dan mengelola perubahan."
      ],
      "interview": "Bagaimana Anda menangani requirement yang tidak jelas atau saling bertentangan?"
    },
    {
      "name": "System Analyst / Architect",
      "category": "technical",
      "icon": "⌘",
      "purpose": "Menganalisis perilaku sistem dan merancang solusi teknis atau arsitektur.",
      "tasks": [
        "Menganalisis alur, integrasi, data, dan batasan sistem.",
        "Membuat diagram serta spesifikasi teknis.",
        "Menilai trade-off performa, keamanan, biaya, dan pemeliharaan."
      ],
      "interview": "Bagaimana Anda menerjemahkan requirement menjadi desain sistem?"
    },
    {
      "name": "UI/UX Designer",
      "category": "business",
      "icon": "▧",
      "purpose": "Membuat pengalaman dan antarmuka yang mudah dipahami dan digunakan.",
      "tasks": [
        "Melakukan riset pengguna dan memetakan user journey.",
        "Membuat wireframe, prototype, dan design system.",
        "Menguji usability serta berkolaborasi dengan developer."
      ],
      "interview": "Bagaimana Anda mengetahui bahwa desain mudah digunakan?"
    },
    {
      "name": "Software Developer",
      "category": "technical",
      "icon": "{ }",
      "purpose": "Membangun, menguji, memperbaiki, dan memelihara kode aplikasi.",
      "tasks": [
        "Mengimplementasikan fitur dan integrasi.",
        "Menulis unit test, melakukan code review, dan debugging.",
        "Mengikuti standar coding, keamanan, dan dokumentasi."
      ],
      "interview": "Bagaimana Anda menyelidiki bug yang sulit direproduksi?"
    },
    {
      "name": "QA Engineer / Tester",
      "category": "quality",
      "icon": "✓",
      "purpose": "Membantu memastikan software memenuhi kebutuhan dan memiliki kualitas yang memadai.",
      "tasks": [
        "Merancang test plan, test case, dan data pengujian.",
        "Melakukan pengujian manual atau otomatis sesuai strategi.",
        "Mencatat defect, menguji ulang perbaikan, dan melaporkan risiko."
      ],
      "interview": "Apa perbedaan severity dan priority pada bug?"
    },
    {
      "name": "DevOps / SRE Engineer",
      "category": "quality",
      "icon": "⇧",
      "purpose": "Mendukung proses build, deployment, infrastruktur, keandalan, dan observabilitas.",
      "tasks": [
        "Mengotomatisasi CI/CD dan pengelolaan lingkungan.",
        "Mengatur monitoring, logging, backup, dan pemulihan.",
        "Meningkatkan keamanan operasional dan reliabilitas layanan."
      ],
      "interview": "Apa tujuan pipeline CI/CD dan bagaimana rollback membantu?"
    },
    {
      "name": "Database Engineer / DBA",
      "category": "technical",
      "icon": "▤",
      "purpose": "Merancang dan menjaga penyimpanan data yang andal, aman, dan efisien.",
      "tasks": [
        "Merancang skema, indeks, relasi, dan kebijakan akses.",
        "Mengoptimalkan query dan memantau performa.",
        "Mengelola backup, pemulihan, integritas, dan migrasi data."
      ],
      "interview": "Bagaimana Anda menjaga konsistensi dan keamanan data?"
    },
    {
      "name": "Security Engineer",
      "category": "quality",
      "icon": "◇",
      "purpose": "Mengidentifikasi risiko keamanan dan membantu membangun kontrol sejak awal.",
      "tasks": [
        "Melakukan threat modeling dan review risiko.",
        "Merekomendasikan kontrol akses, validasi input, dan pengelolaan rahasia.",
        "Mendukung pengujian keamanan dan penanganan kerentanan."
      ],
      "interview": "Mengapa keamanan perlu dipertimbangkan sejak tahap desain?"
    },
    {
      "name": "Technical Writer",
      "category": "delivery",
      "icon": "✎",
      "purpose": "Membuat dokumentasi yang membantu pengguna dan tim teknis memahami sistem.",
      "tasks": [
        "Menyusun panduan pengguna, API, dan prosedur operasional.",
        "Menjaga dokumentasi selaras dengan perubahan produk.",
        "Memastikan informasi jelas, konsisten, dan mudah dicari."
      ],
      "interview": "Bagaimana Anda memastikan dokumentasi tetap akurat?"
    },
    {
      "name": "Support / Operations",
      "category": "quality",
      "icon": "◉",
      "purpose": "Membantu pengguna dan menjaga layanan berjalan setelah aplikasi dirilis.",
      "tasks": [
        "Memantau tiket, insiden, dan pertanyaan pengguna.",
        "Mengumpulkan bukti serta melakukan eskalasi yang tepat.",
        "Membantu analisis akar masalah dan komunikasi status."
      ],
      "interview": "Bagaimana Anda menentukan prioritas ketika banyak insiden masuk?"
    }
  ],
  "interview": [
    {
      "q": "Jelaskan apa itu SDLC.",
      "answer": "SDLC adalah proses terstruktur untuk mengembangkan dan memelihara software, mulai dari perencanaan, analisis kebutuhan, desain, pengembangan, pengujian, hingga rilis dan pemeliharaan. Tujuannya agar tim memahami kebutuhan, mengelola risiko, menjaga kualitas, dan membuat proses kerja dapat dipantau.",
      "tips": [
        "Sebutkan bahwa model SDLC dapat berbeda sesuai proyek.",
        "Hubungkan tahapan dengan kualitas, risiko, dan kebutuhan pengguna.",
        "Hindari menyebut SDLC sebagai satu metode tunggal yang selalu kaku."
      ]
    },
    {
      "q": "Apa saja tahapan SDLC?",
      "answer": "Tahapan umum meliputi perencanaan, analisis kebutuhan, desain, pengembangan, pengujian, lalu deployment dan pemeliharaan. Dalam praktiknya, aktivitas dapat tumpang tindih atau berulang, terutama pada pendekatan Agile.",
      "tips": [
        "Jelaskan tujuan singkat setiap tahap, bukan hanya menghafal urutan.",
        "Sebutkan bahwa feedback dapat mengembalikan tim ke tahap sebelumnya."
      ]
    },
    {
      "q": "Siapa saja yang terlibat dalam SDLC?",
      "answer": "Tergantung ukuran dan jenis proyek. Biasanya ada stakeholder atau pengguna, Product Owner, Business Analyst, Project Manager atau Scrum Master, UI/UX Designer, developer, QA, DevOps/operations, serta peran keamanan dan database bila diperlukan.",
      "tips": [
        "Jelaskan bahwa satu orang bisa menjalankan beberapa peran.",
        "Hubungkan jawaban dengan posisi yang dilamar."
      ]
    },
    {
      "q": "Apa perbedaan QA dan developer?",
      "answer": "Developer membangun dan memperbaiki software, sedangkan QA membantu merencanakan dan mengevaluasi kualitas melalui strategi pengujian, penemuan defect, dan pelaporan risiko. Keduanya berkolaborasi; kualitas bukan tanggung jawab QA saja.",
      "tips": [
        "Berikan contoh kolaborasi dari requirement sampai verifikasi bug.",
        "Hindari menggambarkan QA hanya sebagai orang yang mencari kesalahan di akhir."
      ]
    },
    {
      "q": "Apa perbedaan Waterfall dan Agile?",
      "answer": "Waterfall cenderung mengatur pekerjaan dalam fase berurutan dengan perencanaan awal yang kuat. Agile mengembangkan produk secara iteratif, mendapat feedback berkala, dan menyesuaikan prioritas. Tidak ada pilihan yang selalu terbaik; konteks proyek menentukan.",
      "tips": [
        "Bandingkan cara menangani perubahan dan feedback.",
        "Jangan menganggap semua proyek Agile tidak memiliki dokumentasi atau perencanaan."
      ]
    },
    {
      "q": "Apa yang dilakukan jika requirement berubah?",
      "answer": "Saya akan mengklarifikasi alasan dan kebutuhan perubahan, menilai dampaknya pada ruang lingkup, waktu, biaya, desain, pengujian, dan risiko, lalu mendokumentasikan keputusan serta memperbarui prioritas bersama pihak yang berwenang. Setelah disepakati, saya memastikan tim terkait mendapat informasi yang sama.",
      "tips": [
        "Tunjukkan komunikasi dan analisis dampak.",
        "Jangan langsung menerima atau menolak tanpa memahami konsekuensinya."
      ]
    },
    {
      "q": "Bagaimana menangani bug kritis menjelang rilis?",
      "answer": "Saya akan mengumpulkan detail dan langkah reproduksi, menilai dampak serta risiko terhadap pengguna, lalu segera mengeskalasi kepada tim terkait. Tim menentukan apakah perlu memperbaiki sebelum rilis, menunda rilis, atau menggunakan mitigasi yang aman. Perbaikan harus diuji ulang dan keputusan dicatat.",
      "tips": [
        "Prioritaskan dampak pengguna dan keselamatan data.",
        "Sebutkan retest/regression test dan komunikasi status."
      ]
    },
    {
      "q": "Bagaimana menjelaskan pengalaman jika masih pemula?",
      "answer": "Saya akan jujur bahwa pengalaman profesional saya masih terbatas, lalu memakai contoh yang relevan dari tugas, proyek belajar, organisasi, atau latihan. Saya jelaskan konteks, tanggung jawab saya, langkah yang saya lakukan, hasilnya, dan hal yang saya pelajari.",
      "tips": [
        "Jangan mengarang pengalaman kerja atau angka dampak.",
        "Siapkan satu contoh kerja tim, pemecahan masalah, dan menerima feedback."
      ]
    },
    {
      "q": "Apa yang dimaksud requirement fungsional dan nonfungsional?",
      "answer": "Requirement fungsional menjelaskan kemampuan yang harus dilakukan sistem, misalnya pengguna dapat membuat akun. Requirement nonfungsional menjelaskan kualitas atau batasan, misalnya waktu respons, keamanan, aksesibilitas, dan ketersediaan.",
      "tips": [
        "Berikan satu contoh yang jelas untuk masing-masing.",
        "Kebutuhan nonfungsional sebaiknya dibuat terukur bila memungkinkan."
      ]
    },
    {
      "q": "Apa itu UAT?",
      "answer": "User Acceptance Testing adalah kegiatan untuk memastikan solusi memenuhi kebutuhan dan kriteria penerimaan dari sudut pandang pengguna atau perwakilan bisnis sebelum penerimaan atau rilis. Pelaksana dan prosesnya mengikuti tata kelola proyek.",
      "tips": [
        "Bedakan UAT dari unit test yang fokus pada komponen kode.",
        "Hubungkan UAT dengan acceptance criteria yang disepakati."
      ]
    }
  ],
  "quiz": [
    {
      "category": "Dasar SDLC",
      "q": "Apa tujuan utama SDLC?",
      "options": [
        "Membuat kode secepat mungkin tanpa rencana",
        "Memberi kerangka kerja untuk mengembangkan dan memelihara software secara terstruktur",
        "Menghilangkan kebutuhan pengujian",
        "Menggantikan komunikasi dengan stakeholder"
      ],
      "answer": 1,
      "explanation": "SDLC membantu tim mengelola kebutuhan, proses, risiko, kualitas, dan pemeliharaan. SDLC bukan berarti semua pekerjaan harus kaku atau selalu berurutan."
    },
    {
      "category": "Analisis",
      "q": "Contoh requirement fungsional adalah…",
      "options": [
        "Aplikasi harus tersedia 99,9% setiap bulan",
        "Halaman harus merespons dalam 2 detik",
        "Pengguna dapat mengatur ulang password melalui email",
        "Data harus dienkripsi saat tersimpan"
      ],
      "answer": 2,
      "explanation": "Kemampuan pengguna untuk reset password adalah perilaku yang harus dilakukan sistem. Contoh lain lebih dekat dengan kualitas atau batasan nonfungsional."
    },
    {
      "category": "Peran tim",
      "q": "Siapa yang biasanya berfokus pada penyusunan test case dan pelaporan defect?",
      "options": [
        "QA Engineer / Tester",
        "Sponsor proyek saja",
        "Technical Writer saja",
        "Pengguna akhir selalu"
      ],
      "answer": 0,
      "explanation": "QA/Tester membantu merencanakan pengujian, menjalankan pengujian, melaporkan defect, dan mengevaluasi risiko kualitas bersama tim."
    },
    {
      "category": "Desain",
      "q": "Kapan keputusan arsitektur, struktur data, dan rancangan API biasanya dirumuskan?",
      "options": [
        "Hanya setelah produk berhenti digunakan",
        "Pada tahap desain sistem, dengan peninjauan sepanjang proyek",
        "Hanya saat wawancara kerja",
        "Tidak perlu direncanakan"
      ],
      "answer": 1,
      "explanation": "Tahap desain menerjemahkan kebutuhan menjadi rancangan teknis. Desain dapat diperbarui saat tim menemukan informasi baru."
    },
    {
      "category": "Testing",
      "q": "Apa tindakan yang tepat setelah developer memperbaiki bug?",
      "options": [
        "Langsung menghapus laporan bug tanpa memeriksa",
        "Menganggap seluruh aplikasi pasti bebas bug",
        "Melakukan retest dan mempertimbangkan regression test",
        "Menghindari dokumentasi"
      ],
      "answer": 2,
      "explanation": "Retest memeriksa apakah masalah yang dilaporkan sudah diperbaiki; regression test membantu memastikan perubahan tidak merusak fungsi lain."
    },
    {
      "category": "Agile",
      "q": "Ciri yang umum pada Agile adalah…",
      "options": [
        "Tidak boleh ada feedback setelah perencanaan",
        "Pengembangan iteratif dan evaluasi berkala",
        "Semua kebutuhan harus selalu tetap",
        "Testing dilarang sebelum akhir proyek"
      ],
      "answer": 1,
      "explanation": "Agile menekankan iterasi, kolaborasi, feedback, dan adaptasi terhadap perubahan. Perencanaan dan dokumentasi tetap dapat digunakan."
    },
    {
      "category": "Rilis",
      "q": "Mengapa rencana rollback dapat penting saat deployment?",
      "options": [
        "Agar pengguna tidak bisa melaporkan masalah",
        "Untuk membantu kembali ke versi stabil jika rilis menimbulkan masalah",
        "Untuk menggantikan semua test case",
        "Agar tidak perlu backup"
      ],
      "answer": 1,
      "explanation": "Rollback adalah salah satu cara pemulihan jika rilis bermasalah. Strategi tepat bergantung pada arsitektur dan risiko sistem."
    },
    {
      "category": "Kebutuhan",
      "q": "Acceptance criteria digunakan untuk…",
      "options": [
        "Mendefinisikan kondisi yang harus dipenuhi agar fitur dapat diterima",
        "Menentukan warna logo saja",
        "Mengganti semua kebutuhan pengguna",
        "Menentukan gaji setiap anggota tim"
      ],
      "answer": 0,
      "explanation": "Acceptance criteria membuat ekspektasi lebih jelas dan dapat membantu pengujian serta keputusan penerimaan fitur."
    },
    {
      "category": "Keamanan",
      "q": "Mengapa keamanan perlu dipikirkan sejak tahap awal?",
      "options": [
        "Karena hanya admin yang perlu peduli keamanan",
        "Agar risiko dapat ditemukan dan dikurangi sebelum mahal untuk diperbaiki",
        "Supaya aplikasi tidak perlu diuji",
        "Karena keamanan hanya terkait desain warna"
      ],
      "answer": 1,
      "explanation": "Memikirkan keamanan sejak awal membantu mengidentifikasi risiko, membatasi akses, melindungi data, dan mengurangi biaya perbaikan di tahap akhir."
    },
    {
      "category": "Interview",
      "q": "Jika requirement berubah, respons awal yang paling tepat adalah…",
      "options": [
        "Mengabaikan perubahan",
        "Langsung mengubah kode tanpa memberi tahu tim",
        "Mengklarifikasi kebutuhan dan menganalisis dampak sebelum menyepakati langkah",
        "Menyalahkan stakeholder"
      ],
      "answer": 2,
      "explanation": "Perubahan perlu dipahami, dinilai dampaknya, disepakati, dan dikomunikasikan agar tim memiliki pemahaman yang sama."
    },
    {
      "category": "Pemeliharaan",
      "q": "Aktivitas pemeliharaan setelah rilis dapat mencakup…",
      "options": [
        "Hanya mengganti nama proyek",
        "Memantau sistem, memperbaiki bug, dan memperbarui dependensi",
        "Menghentikan semua dokumentasi",
        "Menghapus feedback pengguna"
      ],
      "answer": 1,
      "explanation": "Pemeliharaan menjaga software tetap berguna, aman, dan andal setelah digunakan."
    },
    {
      "category": "Perencanaan",
      "q": "Siapa yang termasuk stakeholder proyek?",
      "options": [
        "Hanya developer yang menulis kode",
        "Pihak yang memengaruhi atau terdampak oleh proyek",
        "Hanya orang yang memiliki jabatan manager",
        "Hanya tim QA"
      ],
      "answer": 1,
      "explanation": "Stakeholder dapat mencakup pengguna, pemilik bisnis, sponsor, tim teknis, operasi, dan pihak lain yang terdampak."
    }
  ],
  "qa": [
    {
      "q": "Apa kepanjangan SDLC?",
      "a": "SDLC adalah Software Development Life Cycle, yaitu kerangka proses untuk mengembangkan dan memelihara perangkat lunak."
    },
    {
      "q": "Apakah semua perusahaan menggunakan tahapan SDLC yang sama?",
      "a": "Tidak. Tahapan dan nama peran berbeda menurut organisasi, model pengembangan, ukuran tim, regulasi, dan jenis produk. Enam tahap di materi ini adalah peta umum."
    },
    {
      "q": "Apa tugas Business Analyst?",
      "a": "Business Analyst menggali dan menjelaskan kebutuhan bisnis, menyelaraskan pemahaman stakeholder, menyusun requirement atau user story, serta membantu memvalidasi solusi."
    },
    {
      "q": "Apa tugas QA?",
      "a": "QA membantu merencanakan pendekatan kualitas, membuat atau meninjau test case, melakukan pengujian, mencatat defect, memverifikasi perbaikan, dan menyampaikan risiko kualitas."
    },
    {
      "q": "Apa bedanya bug, defect, dan error?",
      "a": "Pemakaian istilah dapat berbeda antar tim. Umumnya error adalah kekeliruan manusia, defect/bug adalah masalah pada artefak atau software, dan failure adalah perilaku sistem yang tidak sesuai saat dijalankan."
    },
    {
      "q": "Apakah testing hanya dilakukan setelah coding selesai?",
      "a": "Tidak harus. Pengujian dan perencanaan kualitas dapat dimulai sejak requirement dan desain, lalu berlanjut melalui unit, integrasi, sistem, acceptance, dan regression testing sesuai kebutuhan."
    },
    {
      "q": "Apa yang harus dipelajari sebelum interview SDLC?",
      "a": "Pahami tujuan SDLC, tahap dan deliverable, peran tim, perbedaan Waterfall dan Agile, requirement, dasar testing, penanganan perubahan, serta contoh pemecahan masalah yang benar-benar pernah kamu lakukan."
    },
    {
      "q": "Apakah satu orang bisa memegang beberapa peran SDLC?",
      "a": "Bisa, terutama pada tim kecil. Yang penting tanggung jawab, otorisasi keputusan, dan risiko konflik peran tetap jelas."
    },
    {
      "q": "Apa perbedaan severity dan priority bug?",
      "a": "Severity menggambarkan seberapa besar dampak teknis atau operasional defect. Priority menggambarkan seberapa mendesak defect perlu ditangani. Bug dapat berdampak tinggi tetapi prioritas waktunya bergantung konteks bisnis."
    },
    {
      "q": "Apa itu CI/CD?",
      "a": "CI (Continuous Integration) mengintegrasikan perubahan kode secara rutin dengan build dan pemeriksaan otomatis. CD dapat berarti Continuous Delivery atau Continuous Deployment, yang membantu menyiapkan atau merilis perubahan secara konsisten."
    }
  ]
};
