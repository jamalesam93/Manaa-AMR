# Mana'a - مناعة

**Antimicrobial Resistance (AMR) Awareness App for Yemen**

A bilingual (Arabic/English) Progressive Web App designed to educate the public about antimicrobial resistance and promote responsible antibiotic use.

## 🌟 Features

- **🏠 Home** - Daily AMR tips with rotating educational facts
- **🎮 Interactive Quiz** - Test your knowledge with 100+ scenario-based questions across 16 categories
- **� Awareness Center** - Educational content about AMR, Yemen-specific statistics, and shareable facts
- **🖼️ Media Gallery** - Educational infographics, podcasts, and video content
- **⚙️ Settings** - Language toggle (Arabic/English) and theme selection (Light/Dark/System)
- **🌐 Bilingual** - Full Arabic and English support with RTL layout
- **📱 PWA** - Install on any device for offline access

## 🛠️ Tech Stack

- **React 19** - Modern UI framework
- **Vite 7** - Fast build tool
- **React Router 7** - Client-side routing
- **Vite PWA** - Progressive Web App support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jamalesam93/Manaa-AMR.git
cd Manaa-AMR

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/         # Navigation (BottomNav)
│   ├── media/          # MediaPlayer, ImageGallery
│   └── feedback/       # EmergencyScreen, MedicalDisclaimer
├── contexts/           # AppContext (language, theme, state)
├── data/               # Quiz scenarios, guidelines data
├── i18n/               # Translations (ar, en)
├── lib/                # Utility functions
└── pages/              # Route pages (Home, Quiz, Awareness, Media, Settings)
```

## 🌐 Deployment

This app is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**

Simply connect your GitHub repository and deploy!

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

## 👥 Contributors

Developed with ❤️ by Gamalix for antimicrobial resistance awareness in Yemen.

---

**Made with ❤️ for public health education**
