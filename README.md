# WSI Viewer

## Overview
WSI Viewer is a digital pathology tool designed to visualize Whole Slide Images (WSI) with bounding box annotations. It allows users to zoom in/out and analyze detected objects in medical images. The application is built using React.js with React-Bootstrap for responsiveness.

## Features
- Display WSI images with bounding box overlays.
- Responsive UI that adapts to different screen sizes.
- Zoom in and out functionality for detailed analysis.
- Side panels for displaying metadata and findings.
- Optimized JSON parsing for handling inference results.

## Technologies Used
- **React.js** (Vite for fast development)
- **React-Bootstrap** (for responsive UI)
- **JavaScript (ES6+)**
- **CSS** (for styling and viewport adjustments)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/wsi-viewer.git
   ```
2. Navigate to the project folder:
   ```sh
   cd wsi-viewer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
wsiviewer/
│── src/
│   │── assets/           # Image and JSON data
│   │── components/       # React components (BoundingBox, WSIViewer, etc.)
│   │── styles.css        # Custom styles
│   │── App.jsx           # Main application file
│── public/               # Static assets
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation
```

## Usage
1. Open the browser and navigate to `http://localhost:5173`.
2. View the WSI image along with bounding box annotations.
3. Use the zoom controls to inspect details.
4. Check the findings panel for metadata information.

## License
This project is licensed under the MIT License.

## Contact
For questions or contributions, please contact [your-email@example.com].

