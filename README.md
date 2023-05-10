README

Here are the step-by-step instructions on how to use this movie search app:

1.First, you need to have Node.js installed on your computer. If you don't have it installed already, you can download it from https://nodejs.org/en/download/.

2.Next, clone the project repository from Github onto your computer. You can do this by opening a terminal or command prompt window and typing the following command: git clone https://github.com/<username>/<repository-name>.git

3.Navigate into the project directory using the cd command in your terminal or command prompt window.

4.Once you are in the project directory, run npm install in the terminal or command prompt window to install all of the necessary dependencies.

5.After the dependencies have been installed, run npm start in the terminal or command prompt window to start the app.

6.The app will open in your default web browser. You will see a search bar at the top of the page where you can enter the name of a movie that you want to search for.

7.Enter the name of the movie that you want to search for in the search bar and press the Enter key or click on the Search button.

8.The app will fetch the search results from the TMDB API and display them in the search results section of the page.

9.You can click on any of the movie posters to see more details about that movie.

10.The movie details will be displayed in a modal window, which you can close by clicking the "X" button in the top right corner.

11.As you search for movies, your recent search history will be displayed in the Recent Searches section of the page.

12.You can click on any of the movie posters in the Recent Searches section to search for that movie again.

13.You can also delete individual movies from your recent search history by clicking the "Delete" button next to the movie poster.

14.If you want to delete all of your recent search history, click the "Delete All" button at the bottom of the Recent Searches section.

---

CODE overview:

---

STORE DOCUMENTATION:

The Redux store is a central component of this React app that manages the app's state. In this app, the store is created using the configureStore and createSlice functions from the @reduxjs/toolkit library.

The initial state of the store is defined in the initialState object, which contains the following properties:

data1: an array of data
data2: an array of data
data3: an array of data
recentSearch: an array of strings representing recent search queries
backgroundArray: an array of background images
filterArray: an array of filter objects
search: a string representing the current search query
focus: a boolean indicating whether the search input is currently in focus
The mySlice object is created using the createSlice function, which generates a slice of the Redux store containing the state and a set of reducer functions that can modify that state. The name property of the slice is set to "mySlice", and the reducers property is an object containing the following functions:

updateData1: sets the data1 property to a new array
updateData2: sets the data2 property to a new array
updateData3: sets the data3 property to a new array
updateRecentSearch: sets the recentSearch property to a new array of search queries
updateBackgroundArray: sets the backgroundArray property to a new array of background images
updateFilterArray: sets the filterArray property to a new array of filter objects
updateSearch: sets the search property to a new search query string
setFocus: sets the focus property to a boolean indicating whether the search input is currently in focus
Each of these reducer functions receives the current state as an argument, as well as an action object that contains a payload property with the new data to be set.

The slice's reducer function is generated automatically by createSlice and combines all of the reducer functions into a single function that can be used to modify the store's state. The mySlice.reducer property exports this function.

Finally, the slice's action creators are generated using createSlice's actions property. These action creators can be imported and used in React components to dispatch actions that modify the store's state. The exported action creators include:

updateData1
updateData2
updateData3
updateRecentSearch
updateBackgroundArray
updateFilterArray
updateSearch
setFocus
To use the store in your React app, import the configureStore function from @reduxjs/toolkit, and pass the mySlice.reducer to it as the reducer property. Then, use the exported action creators to dispatch actions that modify the store's state.

---

INDEX.js:

    This code is responsible for setting up and configuring the Redux store for the React app. Here's an explanation of what it does:

    The persistConfig object defines how the store's state should be persisted using redux-persist. In this case, the storage object is used to persist the store's state to local storage with a key of "root" and a version of 1.
    persistReducer is a higher-order reducer that wraps myReducer and applies the persistConfig defined earlier to create a new reducer.
    configureStore is used to create the Redux store. It takes an object with a reducer key, which is the root reducer for the store. In this case, the persistedReducer created with persistReducer is used as the root reducer.
    getDefaultMiddleware returns an array of middleware functions that are included by default in the Redux store. The serializableCheck option is used to configure how actions are checked for serializability. Any actions with types included in the ignoredActions array will not be checked, since they are known to be safe for serialization.
    persistStore is used to create a persistor object, which is responsible for persisting the store's state to storage and rehydrating the store's state from storage when the app starts.
    The Provider component from the react-redux library is used to make the store available to the app.
    The PersistGate component from redux-persist/integration/react is used to delay rendering the App component until the store has been rehydrated from storage. While the store is being rehydrated, the loading prop can be used to render a loading indicator or other UI.
    Finally, ReactDOM.createRoot is used to create a root for the React app and render the App component inside the Provider and PersistGate components.
    In summary, this code sets up a Redux store with persistent state and provides it to the app using the Provider component. The PersistGate component ensures that the store's state is rehydrated from storage before rendering the app.

---

APP.js:

    This is a simple React component named App that renders the Home component inside a div element with the class name App. The Home component is imported from a pages/Home file. This App component is likely the main entry point of the application and serves as a container for the rest of the components in the application. The className attribute is used to apply the "App" CSS class to the container div. The App.css file is also imported, but the contents of that file are not shown here.

---

HOME.js:

This is a React functional component that renders the homepage of a movie app.

The component uses several hooks, including useState to manage state variables, and useEffect to trigger side effects, such as fetching data from an external API. The component also uses useSelector and useDispatch hooks provided by the react-redux library to access and dispatch data from the store.

The Navbar and Background components are imported and rendered as child components of Home. The Row component is used to render a list of popular movies fetched from an external API. The MovieDetails component is used to render details of a selected movie.

The handleClick function is used to set the state of the component based on the user's button click. The setArray function is called to set the array state variable to one of three arrays of fetched data, based on the value passed as an argument.

The component renders either a loading spinner or the content of the page based on the loading and dataFetched state variables. When the data is fetched and the component is loaded, the Navbar, Background, Row, and MovieDetails components are rendered. A set of buttons is also rendered that, when clicked, call the handleClick function to set the array state variable to one of three arrays of fetched data.

---

NAVBAR.js:

This is a React component for a Navbar.

The component imports the FaSearch and FaFilter icons from the react-icons/fa library, as well as two images (logo.png and profile.png) that are used in the Navbar.

The component also imports useSelector and useDispatch from the react-redux library to access and modify data stored in a Redux store.

The menuItems array contains an array of objects that represent the different items in the Navbar menu.

The component renders a container div with a class of "navbar-container" and a nav element with a class of "navbar". The nav element contains two child divs: one with a class of "navbar**left" and one with a class of "navbar**right".

The "navbar\_\_left" div contains an image and a ul element that renders the Navbar menu items using the map method.

The "navbar\_\_right" div contains three child elements:

A div with a class of "navbar**search" that contains an input field, the FaSearch icon, and a Suggestions component that is rendered conditionally based on the value of the focus variable.
A div with a class of "navbar**filter" that contains a select element with two options, and the FaFilter icon.
A div with a class of "navbar\_\_dropdown" that contains an image and a dropdown menu with two options.
The component also defines a handleFocus function that dispatches an action to update the focus variable in the Redux store, and a newfunn function that updates the search variable and dispatches an action to update the filterArray variable in the Redux store based on the search query.

---

BACKGROUND.js:

This is a React functional component called Background.

It imports Recents component, useSelector, and useDispatch hooks from react-redux library and the setFocus action from the store.

It uses the useSelector hook to extract data from the Redux store. Specifically, it uses backgroundArray and recentSearch state values from the store.

The component renders a div element with the background class. Inside this div, there is a header element with the banner class. The banner element has a background-image set to a movie backdrop image fetched from the movie database API. The banner\_\_contents div contains the Recents component with the fetchMovies prop set to the value of recentSearch.

The handleFocus function sets the focus state value to false when the component is focused. This is achieved by dispatching the setFocus action with false as the payload.

Overall, the Background component is responsible for rendering the background image of the website, as well as displaying the recently searched movies.

---

RECENT.js

This code defines a React component called Recents that displays a list of recent movie searches. The component uses the useSelector and useDispatch hooks from the react-redux library to retrieve and update the state of the Redux store.

The recentArray variable is obtained from the Redux store by calling useSelector with the state.recentSearch argument. This variable is an array of objects that contain information about recently searched movies.

The handleDelete function is used to remove a movie from the recent search list. This function takes the ID of the movie to delete as an argument, and uses the filter method to create a new array that does not contain the movie with the specified ID. This new array is then passed to the updateRecentSearch action creator, which updates the recentSearch state in the Redux store.

The deleteAll function is used to remove all movies from the recent search list. This function creates an empty array and passes it to the updateRecentSearch action creator, which updates the recentSearch state in the Redux store.

Finally, the Recents component renders the list of recent movie searches using the map method to iterate over the recentArray and create an HTML element for each movie. Each element includes an image of the movie poster, as well as a "Delete" button that calls the handleDelete function when clicked. If there are more than one recent searches, a "Delete All" button is displayed which calls the deleteAll function when clicked.

---

ROWS.js:

This code defines a functional component called Row which is used to render a row of movie posters along with their metadata such as title, original language, votes, and popularity.

The Row component takes two props, title and fetchMovies. The title prop is a string that represents the title of the row, and the fetchMovies prop is an array of movie objects.

The component renders a div with the class row that contains an h2 element with the title prop as its content, and a div with the class row\_\_posters that contains a map function to render each movie poster and its metadata.

Inside the row**posters div, the component maps over the fetchMovies array and renders a div with the class row**poster\_\_div for each movie. Inside this div, an image is rendered using the poster_path or backdrop_path property of the movie object. The movie-metadata div is used to render the metadata of the movie such as title, original language, votes, and popularity.

---

MOVIEDETAILS:

The code appears to be a React application that displays movie data fetched from a server. The application consists of several components, including Background, Recents, Row, and MovieDetails.

Background is the main component that displays a banner with a background image, fetched from the server, and a list of recent movie searches. Recents component displays a list of recently searched movies and provides functionality to delete individual searches or all searches.

Row is a component that displays a row of movie posters with some metadata such as the movie's title, language, votes, and popularity. MovieDetails component displays detailed information about a single movie, including the movie's poster, title, description, likes, language, rating, release date, and popularity.

The application fetches movie data from a server and updates the state using the Redux store. The application also dispatches actions to update the state based on user interaction, such as deleting recent searches or setting focus on a component.

Overall, the code seems well-structured and organized, and it appears to be working as intended.
THANK YOU.
---
