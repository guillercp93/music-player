# Music Player 🎵

A modern, cross-platform music player built with Electron, React, TypeScript, and Tailwind CSS. Enjoy your music collection with a beautiful, responsive interface and powerful features.

## ✨ Features

- 🎧 Browse and manage your music library with ease
- 🎨 Dark/Light theme support with system preference detection
- 🎵 View albums, artists, and songs in a clean, modern interface
- 📱 Responsive design that works on desktop and tablet
- ⚡ Built with Vite for fast development and optimized production builds
- 🎨 Styled with Tailwind CSS for consistent, maintainable styling
- 🔄 Real-time updates and smooth animations
- 🔍 Search and filter your music library
- 📁 Local file system integration
- 🚀 Built with modern web technologies

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later) or Bun
- Git

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

3. **Start the development server**
   ```bash
   # Using Bun
   bun run dev
   
   # Or using npm
   npm run dev
   ```

4. **For production build**
   ```bash
   # Build the application
   bun run build
   
   # Start the production server
   bun run preview
   ```

## 🛠 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── UI/             # Basic UI elements (Box, Button, etc.)
│   └── icons/          # SVG icon components
├── Containers/         # Page-level components
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── Interfaces/         # TypeScript type definitions
└── utils/              # Utility functions and constants
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The theme can be toggled between light and dark modes, with support for system preferences.

### Customizing the Theme

Edit the `tailwind.config.js` file to customize the color palette, fonts, and other design tokens.

## 📚 Documentation

For detailed documentation about components, APIs, and development guidelines, see the `docs/` directory:

- [COMPONENTS.md](./docs/COMPONENTS.md) - Documentation for UI components
- [API.md](./docs/API.md) - API reference and data models

## 🧪 Testing

Run tests with:

```bash
bun test
# or
npm test
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Electron](https://www.electronjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **For production build**
   ```bash
   npm run build
   npm start
   ```

## 🎛️ Project Structure

```
music-player/
├── electronapp/       # Electron main process code
├── public/            # Static files
├── src/               # Application source code
│   ├── components/    # React components
│   ├── containers/    # Page layouts and containers
│   ├── context/       # React context providers
│   ├── styles/        # CSS and theme files
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── .eslintrc.js       # ESLint configuration
├── package.json       # Project metadata and dependencies
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.ts     # Vite configuration
```

## 🎮 Usage

### Adding Music
1. Click the "Add Music" button or use the keyboard shortcut `Ctrl+O` (Windows/Linux) or `Cmd+O` (macOS)
2. Select a folder containing your music files
3. The player will automatically scan and add supported audio files

### Playback Controls
- Play/Pause: `Space` or `MediaPlayPause`
- Next Track: `Ctrl+Right` or `MediaNext`
- Previous Track: `Ctrl+Left` or `MediaPrevious`
- Volume Up: `Up Arrow`
- Volume Down: `Down Arrow`
- Mute: `M`

### Queue Management
- Right-click on any song to add it to the queue
- Drag and drop songs to reorder the queue
- Right-click on a song in the queue to remove it

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run electron:build` - Build desktop application
- `npm run format:lint` - Format and lint code

### Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Desktop**: Electron
- **State Management**: React Context API
- **Routing**: React Router
- **Styling**: CSS Modules, Tailwind CSS

## 📝 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Electron](https://www.electronjs.org/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

Guillermo Castillo - [@guillercp93](https://github.com/guillercp93)

Project Link: [https://github.com/guillercp93/music-player](https://github.com/guillercp93/music-player)

## Project Structure
```bash
music-player/
├── electronapp/        # Electron main and preload scripts
├── src/                # React application source code
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── utils/          # Utility functions and constants
│   └── ...
├── public/             # Static assets
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Technical Stack
- **Frontend**: React, TypeScript
- **Backend**: Electron, Node.js
- **Styling**: CSS Modules
- **State Management**: React Context

## Development Setup
1. Install Node.js (v18 or higher)
2. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/music-player-new.git
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm start
   ```
5. Build the application:
   ```sh
   npm run build
   ```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeatureName`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
