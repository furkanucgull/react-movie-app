**⚠️ Warning:** This API does not work in Turkey. It functions properly outside of Turkey.

# React Movie App

React Movie App is a movie search application built with React.js, Vite, and Tailwind CSS. It fetches movie data from The Movie Database (TMDb) API and allows users to search for movies while tracking trending searches using Appwrite.

## Features

- 🔍 **Search Movies**: Users can search for movies by title.
- 📈 **Trending Movies**: Displays trending movies based on user searches.
- ⚡ **Fast Performance**: Built with Vite for a smooth development experience.
- 🎨 **Styled with Tailwind CSS**: Modern and responsive UI.
- 📊 **Search Analytics**: Tracks search popularity using Appwrite.

## Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend & Database:** Appwrite
- **API:** The Movie Database (TMDb)

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/furkanucgull/react-movie-app.git
   cd react-movie-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:** Create a `.env` file in the root directory and add:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_DB_ID=your_appwrite_database_id
   VITE_COLLECTION_ID=your_appwrite_collection_id
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```

## Usage

- Enter a movie title in the search bar to find relevant movies.
- The app displays trending movies based on user search frequency.
- Clicking on a movie provides additional details.

## Project Structure
```
/react-movie-app
│── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main application file
│   ├── main.jsx         # React DOM rendering
│── public/              # Static assets
│── .env                 # Environment variables
│── package.json         # Dependencies and scripts
│── vite.config.js       # Vite configuration
```

## Dependencies

- **React.js** (Frontend library)
- **Vite** (Build tool)
- **Tailwind CSS** (Styling)
- **Appwrite** (Database & authentication)
- **react-use** (Hooks for debouncing and other utilities)

## Contributing

Feel free to submit issues or open pull requests if you’d like to improve the project!

## License

This project is licensed under the MIT License.
