<div align="center">
  <h1 align="center">🎵 Music Player</h1>
  <p align="center">
    A modern desktop music player built with Electron and React
    <br />
    <a href="https://github.com/guillercp93/music-player"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/guillercp93/music-player/issues">Report Bug</a>
    ·
    <a href="https://github.com/guillercp93/music-player/issues">Request Feature</a>
  </p>
</div>

## 🎧 Features

- 🎵 Play and manage your music library
- 🎨 Beautiful dark/light theme
- 🚀 Built with modern web technologies
- 🖥️ Cross-platform support (Windows, macOS, Linux)
- ⚡ Fast and responsive interface

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/guillercp93/music-player.git
   cd music-player
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Or using Bun (recommended)
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm run electron:build
   ```

## 🏗️ Project Structure

```
music-player/
├── electronapp/        # Electron main and preload scripts
├── src/                # React application
│   ├── components/     # Reusable UI components
│   ├── Containers/     # Page layouts
│   ├── context/        # React context providers
│   ├── Interfaces/     # TypeScript interfaces
│   ├── Services/       # Application services
│   ├── Store/          # State management
│   └── Utils/         # Utility functions
├── public/             # Static assets
└── dist/              # Build outputs
```

## 🎨 Key Components

- **Main Process** (`electronapp/main.ts`)
  - Manages application lifecycle
  - Creates and controls browser windows
  - Handles native OS interactions

- **Render Process** (`src/`)
  - Built with React and TypeScript
  - Uses Context API for state management
  - Responsive design with Tailwind CSS

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build the application |
| `npm run electron:build` | Package the app for distribution |
| `npm run format:lint` | Format and lint the code |

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

## 👤 Author

**Guillermo Castillo Patiño**

- GitHub: [@guillercp93](https://github.com/guillercp93)
- LinkedIn: [Guillermo Castillo](https://www.linkedin.com/in/guillermo-castillo-patino/)

## 🙌 Acknowledgments

- [Electron](https://www.electronjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
