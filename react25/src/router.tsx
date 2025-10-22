import { createHashRouter } from "react-router-dom";
import Home from "./components/Home";
import Presentation from "./components/Presentation";
import Tutorial from "./components/Tutorial";
import NoMatch from "./components/NoMatch";
import Header from "./components/Header";

const page1 = "assets/page1/SveltePresentation.md";
const page2 = "assets/page2/SvelteTutorial.md";

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
    ),
    loader: async () =>
      fetch(page2)
        .then((res) => res.text())
        .catch((error) => console.error("Error loading markdown:", error)),
  },  
  {
    path: "/presentation",
    element: (
      <>
        <Header />
        <Presentation />
      </>
    ),
    loader: async () =>
      fetch(page1)
        .then((res) => res.text())
        .catch((error) => console.error("Error loading markdown:", error)),
  },
  {
    path: "/tutorial",
    element: (
      <>
        <Header />
        <Tutorial />
      </>
    ),
    loader: async () =>
      fetch(page2)
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