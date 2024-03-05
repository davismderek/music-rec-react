import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Home from "./routes/Home";
// import SearchLyrics, { loader as lyricsLoader } from "./routes/SearchLyrics";
import SearchLyrics from "./routes/SearchLyrics";
import MyPlaylists from "./routes/MyPlaylists";
import AccountInfo from "./routes/AccountInfo";
import Contact from "./routes/Contact";
import AboutAddSong from "./routes/AboutAddSong";

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/lyrics",
                element: <SearchLyrics />,
                // loader: lyricsLoader,
            },
            {
                path: "/playlists",
                element: <MyPlaylists />,
            },
            {
                path: "/account",
                element: <AccountInfo />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/aboutAddSong",
                element: <AboutAddSong />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
