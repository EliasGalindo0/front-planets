# Star Wars Characters App

A Next.js application that displays Star Wars characters using the SWAPI API and shows placeholder images from `picsum.photos`. Users can filter characters based on their home planets.

## Features

- **Character List:** Display a list of Star Wars characters.
- **Planet Filter:** Filter characters by their home planets.
- **Responsive Design:** The layout adapts to different screen sizes, showing 4 to 6 items per row depending on the viewport size.
- **Images:** Uses `https://picsum.photos/:width/:height` for placeholder images.
- **Proxy Setup:** Configured to handle CORS issues with SWAPI using a local proxy.

## Technologies Used

- Next.js
- React
- CSS for styling
- SWAPI API for character and planet data
- `http-proxy-middleware` for handling CORS

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/star-wars-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd star-wars-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

### Project Structure

- **/pages**: Contains the main pages of the application.
  - **index.js**: The main page that displays the list of characters and the planet filter.
- **/components**: Contains the React components used in the application.
  - **FilterNav.js**: The navigation bar with the planet filter.
  - **PlanetFilter.js**: The dropdown for selecting a planet to filter characters.
  - **CharacterCard.js**: The component that displays an individual character's information.
  - **CharacterList.js**: The component that displays the list of characters.
- **/styles**: Contains the global CSS styles.
  - **globals.css**: The global CSS file for basic styling.
- **/public**: Contains public assets such as images.

### Configuring the Proxy

The project uses a proxy to handle CORS issues with the SWAPI API. The proxy is configured in `next.config.mjs`.

```javascript
import { createProxyMiddleware } from 'http-proxy-middleware';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://swapi.dev/api/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
