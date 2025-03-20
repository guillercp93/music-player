# Music Player

A modern music player built with Electron and React.

## Features
- Play local music files
- Create and manage playlists
- Dark/Light theme support
- Keyboard shortcuts

## Setup
1. Clone the repository
2. Run `npm install` to install dependencies
3. Start the app with `npm start`

## Usage
- Add music files using the '+' button
- Use the playback controls to play/pause/skip tracks
- Right-click tracks for more options

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
