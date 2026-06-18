import { FaWhatsapp } from "react-icons/fa6";

export const config = {
    developer: {
        name: "Rizal",
        fullName: "Rizal Firmansyah",
        title: "AI & Full-Stack Developer",
        description: "AI & Full-Stack Developer building intelligent systems and modern web applications. Passionate about machine learning, deep learning, and creating next-gen autonomous agents."
    },
    social: {
        github: "red1-for-hek",
        email: "rizalfirmansyah120593@gmail.com",
        location: "Indonesia"
    },
    about: {
        title: "Tentang Saya",
        description: "Saya adalah pengembang yang berfokus pada ekosistem AI dan web development. Menggabungkan keahlian full-stack (React, Node.js, Python) dengan implementasi AI untuk membangun agen cerdas dan asisten personal berbasis teknologi terkini. Berpengalaman dalam menangani proyek dari pengembangan interface web hingga otomatisasi konten yang kompleks. Bagi saya, kode adalah instrumen untuk menciptakan solusi yang berdampak, dan AI adalah kanvas untuk inovasi tanpa batas."
    },
    experiences: [
        {
            position: "Freelance AI & Full-Stack Developer",
            company: "Self-Development",
            period: "2025 - Present",
            location: "Indonesia",
            description: "Terus mengeksplorasi teknologi baru, meneliti sistem AI canggih, dan mendorong batas-batas apa yang mungkin dalam teknologi.",
            responsibilities: [
                "Researching cutting-edge AI and ML technologies",
                "Experimenting with new frameworks and tools",
                "Contributing to open-source projects",
                "Building innovative personal projects"
            ],
            technologies: ["Research", "Innovation", "Open Source", "New Tech"]
        },
        {
            position: "Administrator & Developer",
            company: "Golden Dragon Carpets & Rugs",
            period: "2024 - 2026",
            location: "Indonesia",
            description: "Mengintegrasikan manajemen operasional bisnis dengan solusi teknologi mutakhir. Bertanggung jawab atas efisiensi administratif sekaligus merancang dan mengembangkan sistem AI, chatbot, dan asisten digital berbasis machine learning untuk mengoptimalkan alur kerja perusahaan.",
            responsibilities: [
                "Building AI-powered chatbots and conversational agents",
                "Developing machine learning models with TensorFlow and PyTorch",
                "Working with LLMs and transformer architectures",
                "Creating autonomous AI systems and automation tools"
            ],
            technologies: ["Python", "TensorFlow", "PyTorch", "LLMs", "NLP", "AI Agents"]
        },
        {
            position: "Client Admin Staff",
            company: "YCAB Ventures",
            period: "2023 - 2024",
            location: "Indonesia",
            description: "Mengelola administrasi klien dengan pendekatan berbasis data dan otomatisasi. Berhasil mengoptimalkan efisiensi operasional melalui pengembangan aplikasi web internal, penyusunan RESTful API, dan pengelolaan basis data untuk mempermudah alur kerja klien secara end-to-end.",
            responsibilities: [
                "Developing full-stack web applications using React and Node.js",
                "Building RESTful APIs and integrating databases",
                "Creating responsive and interactive user interfaces",
                "Deploying and maintaining web applications"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"]
        },
        {
            position: "Staging Store Assistant Leader",
            company: "Anteraja",
            period: "2020 - 2023",
            location: "Indonesia",
            description: "Bertanggung jawab atas efisiensi operasional harian di pusat logistik, termasuk manajemen arus barang, koordinasi tim, dan memastikan ketepatan proses staging. Memiliki peran krusial dalam menjaga akurasi data operasional dan mengoptimalkan alur kerja tim untuk memenuhi target produktivitas yang ketat dalam lingkungan logistik yang dinamis.",
            responsibilities: [
                "Learning Python programming and core concepts",
                "Building automation scripts and Discord bots",
                "Exploring data structures and algorithms",
                "Participating in competitive programming"
            ],
            technologies: ["Python", "Automation", "Scripting", "Discord.py", "Problem Solving"]
        },
        {
            position: "Guru / Tutor",
            company: "YCAB Foundation",
            period: "2014 - 2020",
            location: "Indonesia",
            description: "Bertanggung jawab dalam menyampaikan materi edukasi secara sistematis dan komunikatif. Berpengalaman dalam memfasilitasi proses pembelajaran, mengelola dinamika kelompok, serta menyederhanakan konsep yang kompleks menjadi mudah dipahami—keterampilan yang kini saya gunakan untuk memimpin kolaborasi tim teknis dan mendokumentasikan sistem yang kompleks.",
            responsibilities: [
                "Designing logos and brand identity materials",
                "Creating social media graphics and banners",
                "Working with clients on creative projects",
                "Learning design principles and visual aesthetics"
            ],
            technologies: ["Photoshop", "Illustrator", "Canva", "Figma", "Visual Design"]
        },
        {
            position: "Office Boy",
            company: "Artha Graha Bank",
            period: "2011 - 2014",
            location: "Indonesia",
            description: "Started my journey into the digital world by learning Microsoft Office tools. This foundational step introduced me to computers and sparked my curiosity for technology.",
            responsibilities: [
                "Learning Microsoft Word, Excel, and PowerPoint",
                "Creating documents and presentations",
                "Understanding basic computer operations",
                "Building foundational digital skills"
            ],
            technologies: ["MS Word", "MS Excel", "MS PowerPoint", "Computer Basics"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Botika",
            category: "AI / LLM",
            technologies: "Python, PyTorch, Transformers, FastAPI, React, MongoDB",
            image: "/images/botika.png",
            description: "Chatbot AI cerdas canggih pertama di Indonesia yang didukung oleh Model Bahasa Besar (Large Language Model) khusus. Menampilkan pemahaman bahasa alami, percakapan kontekstual, dan dukungan multibahasa termasuk bahasa Indonesia. Dirancang untuk memberikan pengalaman interaktif dan responsif bagi pengguna."
        },
        {
            id: 2,
            title: "VoteChain",
            category: "Blockchain",
            technologies: "Solidity, Web3.js, React, Ethereum, IPFS, MetaMask, Node.js",
            image: "/images/votechain.png",
            description: "Sistem pemilihan terdesentralisasi yang dibangun di atas teknologi blockchain yang memastikan pemungutan suara yang transparan, anti-manipulasi, dan dapat diverifikasi. Dilengkapi dengan kontrak pintar untuk integritas suara dan pelacakan hasil secara waktu nyata."
        },
        {
            id: 3,
            title: "EIE - Earthquake Impact Estimator",
            category: "IoT / Hardware",
            technologies: "Arduino, C++, IoT Sensors, Python, ML, React",
            image: "/images/eie.png",
            description: "Sistem IoT berbasis sirkuit praktis yang memanfaatkan Arduino untuk memprediksi gempa bumi sebelum terjadi. Mengintegrasikan sensor perangkat keras untuk deteksi seismik waktu nyata dan estimasi dampak. Memberikan peringatan dini untuk membantu mitigasi risiko dan meningkatkan kesiapsiagaan bencana."
        },
        {
            id: 4,
            title: "Marketplace",
            category: "Full Stack",
            technologies: "React, Node.js, MongoDB, Express, Stripe, TailwindCSS",
            image: "/images/marketplace.png",
            description: "Platform e-commerce berfitur lengkap untuk produk apa pun. Termasuk otentikasi pengguna, katalog produk, keranjang belanja, pembayaran aman, pelacakan pesanan, dan dasbor admin."
        },
        {
            id: 5,
            title: "RedxChess",
            category: "AI / Game Engine",
            technologies: "Python, C++, Neural Networks, Bitboards, UCI Protocol",
            image: "/images/redxchess.png",
            description: "Mesin catur berkinerja tinggi dengan peringkat ELO 3640. Dilengkapi algoritma pencarian canggih, evaluasi jaringan saraf, dan representasi bitboard yang dioptimalkan untuk menghasilkan langkah secepat kilat. Dirancang untuk pemain catur tingkat lanjut dan penggemar AI."
        },
        {
            id: 6,
            title: "Floodhub",
            category: "AI / ML",
            technologies: "Python, TensorFlow, Pandas, React, FastAPI, GIS",
            image: "/images/floodhub.png",
            description: "Model prediksi banjir yang dirancang khusus untuk sistem sungai Indonesia. Menganalisis pola cuaca, level air, dan data historis untuk memberikan prakiraan banjir yang akurat dan peringatan."
        },
        {
            id: 7,
            title: "Phoenix",
            category: "AI Assistant",
            technologies: "Python, Speech Recognition, PyAutoGUI, OpenAI API, Tkinter",
            image: "/images/phoenix.png",
            description: "Asisten desktop AI pribadi yang terinspirasi oleh JARVIS. Mengontrol fungsi sistem, mengelola tugas, menjawab pertanyaan, mengotomatiskan alur kerja, dan menyediakan pengalaman komputasi yang diaktifkan dengan suara."
        },
        {
            id: 8,
            title: "HekTools",
            category: "Security / Android",
            technologies: "Kotlin, Android SDK, Firebase, Python, Encryption",
            image: "/images/hektools.png",
            description: "Sebuah alat pemantauan dan riset keamanan Android tingkat lanjut. Dilengkapi fitur manajemen perangkat jarak jauh, pencatatan aktivitas, dan transmisi data terenkripsi untuk keperluan pengujian keamanan."
        }
    ],
    contact: {
        email: "rizalfirmansyah120593@gmail.com",
        github: "https://github.com/rizalfirmansyah120593-byte",
        linkedin: "https://linkedin.com/in/rizalfirmansyah120593",
        Whatsapp: "https://wa.me/6281293161515",
        Fastwork: "https://fastwork.id/user/rizalfirmansyah",
        Upwork: "https://www.upwork.com/freelancers/~010c43d8f41101403f?mp_source=share"
    },
    skills: {
        develop: {
            title: "AI DEVELOPER",
            description: "Building intelligent systems & AI solutions",
            details: "Mengembangkan agen AI, chatbot, dan model pembelajaran mesin menggunakan Python, TensorFlow, dan PyTorch. Berspesialisasi dalam LLM, NLP, pembelajaran mendalam, dan sistem otonom.",
            tools: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "LLMs", "NLP", "Deep Learning", "Chatbots", "AI Agents"]
        },
        design: {
            title: "FULL-STACK",
            description: "Modern web development & scalable applications",
            details: "Membangun aplikasi web yang responsif dan berkinerja tinggi menggunakan React, Next.js, Node.js, dan basis data. Menciptakan pengalaman pengguna yang mulus dengan prinsip UI/UX modern.",
            tools: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "TailwindCSS", "REST APIs", "Docker", "Git"]
        }
    }
};


