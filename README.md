# Music Player

A music player built with Electron and React. It is a desktop application that allows users to play their music library and create playlists.

## Installation

To install the application, clone the repository and run the following command in the project directory:

```bash
npm install
```

To run the application, run the following command in the project directory:

```bash
npm run dev
```

To build the application, run the following command in the project directory:

```bash
npm run build
```

To create an executable, run the following command in the project directory:

```bash
npm run electron:build
```

To format the code, run the following command in the project directory:

```bash
npm run format:lint
```

Directory Structure:

- `electronapp`: This directory contains the main Electron files, including the main process and preload script.
- `src`: This directory contains the React application code.
- `public`: This directory contains static assets such as images and the index.html file.
- `dist-electron`: This directory contains the output of the Electron build process.
- `dist-renderer`: This directory contains the output of the React application build process.
- `release`: This directory contains the output of the application build process.

## Key Files

- `electronapp/main.ts`: This is the main process file for Electron. It sets up the Electron app and creates the main window.
- `electronapp/preload.ts`: This file is loaded before the React application is rendered and provides any necessary data or functions to the React application.
- `src/main.tsx`: This is the main entry point for the React application. It sets up the React application and renders the main layout.
- `src/Containers/Layout.tsx`: This file contains the main layout component for the React application.
- `src/components/UI/Button.tsx`: This file contains the button component used throughout the application.
- `src/components/icons`: This directory contains the icon components used throughout the application.
- `src/Interfaces`: This directory contains the interface files used throughout the application.
- `src/Services`: This directory contains the service files used throughout the application.
- `src/Store`: This directory contains the store files used throughout the application.
- `src/Utils`: This directory contains the utility files used throughout the application.

## License

This project is licensed under the Apache-2.0 License - see the LICENSE file for details. 

## Author

Guillermo Castillo Patiño

- [GitHub](https://github.com/guillercp93)
- [LinkedIn](https://www.linkedin.com/in/guillermo-castillo-patino/)
