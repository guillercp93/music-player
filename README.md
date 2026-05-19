<div align="center">
  <h1 align="center">🎵 Premium Desktop Music Player</h1>
  <p align="center">
    A gorgeous, high-fidelity desktop music player built with React 19, Electron 35, and Tailwind CSS v4.
    <br />
    <a href="https://github.com/guillercp93/music-player"><strong>Explore the Repository »</strong></a>
    <br />
    <br />
    <a href="https://github.com/guillercp93/music-player/issues">Report Bug</a>
    ·
    <a href="https://github.com/guillercp93/music-player/issues">Request Feature</a>
  </p>
</div>

---

## 🎧 Overview

This is a premium-grade desktop music player application engineered with a **responsive glassmorphic UI**, seamless local storage synchronization, OS-level media integration, and an advanced synced lyrics scroller. Powered by **Vite 6**, **React 19**, and **Electron 35**, it is designed to run blazingly fast while providing a polished, harmonious sensory experience for audio playback.

---

## ✨ Features

### 🌟 Premium Glassmorphic User Interface
- **Ambient Visuals**: Sleek dark and light themes crafted using vibrant slate-navy metallic gradients, subtle glows, and glassmorphic panels.
- **Responsive Layout**: Designed with a fixed left navigation sidebar for desktop monitors, wrapping dynamically to custom bottom navigation tabs on mobile screens.
- **Smooth Animations**: Tailored hover micro-interactions, responsive scale-down active click feedbacks, and layout translations.

### 🧠 Centralized Playback Engine
- **Global Context Architecture**: Powered by a robust React Player Context that coordinates and synchronizes global audio states (play, pause, seek, volume, track indices, queue history).
- **Persistent Playback Memory**: Automatically registers, caches, and hydrades audio volume preferences and the last played song from `localStorage` across application reloads.
- **Mini-Equalizer Waveform**: Displays a CSS-driven mechanical visualizer waveform (equalizer bars) next to the currently playing track in lists, animated dynamically to play/pause states.

### 📜 Interactive Timed Lyrics Scroller
- **Dynamic Timing Parser**: Ingestion of metadata formatted in timestamp tags `[mm:ss]` which parses plain strings into precise playback time indices.
- **Autoscroll-to-Center Focus**: Tracks active audio timestamps and automatically scrolls matching lyric sentences smoothly into the center of the viewport container.
- **Rich Text Highlighting Search**: Offers an integrated query search box utilizing regular expressions and dynamic HTML `<mark>` nodes to highlight keyword matches live in the lyric panels.

### 📀 Spinning Vinyl Disc Player
- **Interactive Visualizer**: Custom rotating vinyl disc widget displaying circular groove textures, shiny borders, and rotating album art corresponding perfectly to playback state.
- **Immersive Animations**: Uses modern CSS view transitions for gorgeous screen changes.

### 🖥️ Native OS Media Sessions
- **System Integration**: Syncs playback events to the native OS Media Session API to display active track metadata (titles, artists, albums, high-res cover art) directly on OS lock screens, notifications, and hardware controls.
- **Hardware Bindings**: Maps native play, pause, next track, and previous track buttons/media keys directly to the React playback state.

---

## 🚀 Technical Stack

- **Core Framework**: React 19 (React-Router-Dom v7)
- **Desktop Shell**: Electron 35
- **Styling System**: Tailwind CSS v4
- **Bundler & Server**: Vite 6
- **Runtime Environment**: Node.js & Bun
- **Language**: TypeScript (strict-typed)
- **Formatting & Lints**: ESLint (v9) & Prettier

---

## 🏗️ Project Structure

```
music-player/
├── electronapp/            # Native Electron process scripts
│   ├── main.ts             # Main process entrypoint & native window managers
│   └── preload.ts          # IPC communication bridge between main & renderer
├── src/                    # Frontend React 19 application
│   ├── components/         # Reusable structural components
│   │   ├── icons/          # Premium custom SVG icons
│   │   └── UI/             # Shared UI widgets (Button, Box, Vinyl, Tooltip...)
│   ├── Containers/         # Screen pages layouts (Player, Lists, Sidebars)
│   │   ├── Layout.tsx      # Sidebar, bottom tabs navigation, and theme layouts
│   │   ├── Player.tsx      # Now Playing disc visualizer & scrollable lyrics parser
│   │   ├── SongList.tsx    # List grid of all songs with instant search filter
│   │   ├── AlbumList.tsx   # Grid of albums playing integrated queues
│   │   └── ArtistList.tsx  # Grid of artists playing integrated queues
│   ├── context/            # Global React state managers
│   │   ├── PlayerContext.tsx # Centralized playback engine (Audio, Queue, MediaSession)
│   │   └── ThemeContext.tsx  # Global light/dark themes dispatcher
│   ├── Interfaces/         # Shared TypeScript interfaces (Song, Album, Artist)
│   ├── styles/             # Global stylesheets and modern color theme variables
│   │   └── themes.css      # Harmonious slate-navy gradients and custom font configs
│   ├── utils/              # Data models and static mocked datasets
│   ├── App.tsx             # Application wrapper
│   └── main.tsx            # React application entrypoint
├── public/                 # Static public assets (fonts, images)
├── dist-electron/          # Main process compiled output
└── dist-renderer/          # Renderer process compiled output
```

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended for fastest package execution) or npm
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/guillercp93/music-player.git
   cd music-player
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Start the development application**
   Runs Vite dev server and spawns the Electron app concurrently.
   ```bash
   # Spawns Vite development server
   bun run vite
   
   # Spawns Electron application
   bun run start
   ```

4. **Verify Lints & Formatting**
   Formats codebase with Prettier and checks for ESLint violations (0 problems required).
   ```bash
   bun run format:lint
   ```

5. **Build & Package for production**
   ```bash
   # Compiles production bundles
   bun run build
   
   # Packages the electron executable for your OS
   bun run electron:build
   ```

---

## 📝 Available Command Scripts

| Command | Action |
|---------|-------------|
| `bun run vite` | Runs the Vite dev server for frontend hot reloading |
| `bun run start` | Boots up the Electron process in the sandbox environment |
| `bun run build` | Compiles optimization builds for Electron and the React application |
| `bun run preview` | Previews the compiled static React build |
| `bun run electron:build` | Packs the electron application into a platform-distributable package |
| `bun run format:lint` | Runs Prettier format and ESLint fix routines concurrently |

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

---

## 👤 Author

**Guillermo Castillo Patiño**

- GitHub: [@guillercp93](https://github.com/guillercp93)
- LinkedIn: [Guillermo Castillo](https://www.linkedin.com/in/guillermo-castillo-patino/)

---

## 🙌 Acknowledgments

- [Electron JS](https://www.electronjs.org/)
- [React Framework](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite JS](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
