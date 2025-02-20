# Netflix Clone

A Netflix clone built with React and TMDB API, featuring a responsive design and real-time movie data.


## Features

-  Real-time movie and TV show data from TMDB
-  Netflix-like UI/UX
-  Fully responsive design
-  Dynamic content loading
-  Smooth animations and transitions
-  "Recently Added" badges
-  Dynamic banner with featured content

## Tech Stack

- React.js
- Styled Components
- Axios
- TMDB API
- Material UI Icons

## Installation

1. Clone the repository: **git clone https://github.com/sumittbiradar/netflix-clone.git**
   
2. Navigate to project directory: **cd netflix-clone**

3. Install dependencies: **npm install**

4. Create a `.env` file in the root directory and add your TMDB API key: **REACT_APP_TMDB_API_KEY=your_api_key_here(You can get your own form TMDB API KEY by sighning in).**

5. Start the development server:**npm start**




## Components

- **Navbar**: Fixed navigation bar with Netflix logo
- **Banner**: Dynamic banner featuring random popular content
- **Row**: Horizontal scrollable list of movies/shows
  - Supports different sizes for featured content
  - Includes "Recently Added" badges
  - Smooth hover animations

## API Integration

This project uses the TMDB API to fetch:
- Trending content
- Top rated movies
- Netflix originals
- Movie/Show details
- Genre-specific content

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the API
- Netflix for the design inspiration
