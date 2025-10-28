import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Display from "./components/Display";
import NoMatch from "./components/NoMatch";

// Ensure these paths are correct relative to the public directory
const presentationPath = "/src/assets/page1/Presentation.md";
const tutorialPath = "/src/assets/page2/Tutorial.md";

export const router = createHashRouter([
    {
    path: "/",
    element: <App />,
    children: [
        {
        path: "/",
        element: <Home />,
        },
        {
        path: "/home",
        element: <Home />,
        },
        {
        path: "/presentation",
        element: <Display />,
        loader: async () =>
            fetch(presentationPath)
                .then((res) => res.text())
                .catch((error) => console.error("Error loading markdown:", error)),
        },
        {
        path: "/tutorial",
        element: <Display />,
        loader: async () =>
            fetch(tutorialPath)
                .then((res) => res.text())
                .catch((error) => console.error("Error loading markdown:", error)),
        },
        {
        path: "*",
        element: <NoMatch />,
        },
    ]
    },
]);