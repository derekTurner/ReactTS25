import { createHashRouter } from "react-router-dom";
import Home from "./components/Home";
import Display from "./components/Display";
import NoMatch from "./components/NoMatch";
import Header from "./components/Header";

// Ensure these paths are correct relative to the public directory
const presentationPath = "/src/assets/page1/Presentation.md";
const tutorialPath = "/src/assets/page2/Tutorial.md";

export const router = createHashRouter([
    {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
    {
    path: "/home",
    element: (
      <>
        <Header />
        <Home />
      </>
    )

  },  
  {
    path: "/presentation",
    element: (
      <>
        <Header />
        <Display />
      </>
    ),
    loader: async () =>
      fetch(presentationPath)
        .then((res) => res.text())
        .catch((error) => console.error("Error loading markdown:", error)),
  },
  {
    path: "/tutorial",
    element: (
      <>
        <Header />
        <Display />
      </>
    ),
    loader: async () =>
      fetch(tutorialPath)
        .then((res) => res.text())
        .catch((error) => console.error("Error loading markdown:", error)),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NoMatch />
      </>
    ),
  },
]);