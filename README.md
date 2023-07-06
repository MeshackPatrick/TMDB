## Movie Search App

The Movie Search App is a web application that allows users to search for movies using the Movie Database (TMDB) API. 
It provides users with detailed movie information, including ratings, overviews, and posters. 
The app offers a user-friendly interface and interactive features to enhance the movie search experience.

## Features

  - Search for movies by title
  - Display movie details including title, rating, overview, and poster
  - Hover over a movie to view the movie overview
  - Click on a movie to see more information on a dedicated page
## Technologies Used

  - HTML
  - CSS
  - JavaScript
  - TMDB API


## Installation

  1.Clone the repository:
    git clone https://github.com/your-username/TMDB.git
  2.Navigate to the project directory:
    cd treading movie 
  4.Open the index.html file in your preferred web browser.
## Usage

  1.Enter a movie title in the search bar and press Enter or click the search button.
  2.The app will fetch data from the TMDB API and display the search results.
  3.Hover over a movie to see a brief overview.
  4.Click on a movie to view more detailed information on a dedicated page.
## API Configuration

To use the TMDB API, you need to obtain an API key. Follow these steps:

  1.Create an account on the TMDB website.
  2.Go to your account settings and navigate to the "API" section.
  3.Generate a new API key for your application.
  4.Copy the generated API key.
  5.In the script.js file, replace 'YOUR_API_KEY' with your TMDB API key.
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY`;
      const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=`;
## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Credits

  The Movie Database (TMDB) for providing the movie data API.
  
## Contact

  For any inquiries or feedback, please contact misheck.wachiuri@student.moringaschool.com
