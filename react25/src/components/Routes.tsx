// https://dev.to/utkvishwas/react-router-v7-a-comprehensive-guide-migration-from-v6-7d1
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
//import Presentation from "./Presentation";
//import Tutorial from "./Tutorial";
import NoMatch from "./NoMatch";
//import Header from "./Header";


  const page1 = "assets/page1/SveltePresentation.md";
  const page2 = "assets/page1/SvelteTutorial.md";

  const router =  createHashRouter([
    {
      id: "root", // Add this id to match useRouteLoaderData("root")
      path: "/",
      element: (<></>),
      loader: async () => fetch(page1)
        .then((res) => res.text())
        .catch((error) => console.error("Error loading markdown:", error))
    },
    {
      id: "presentation", // Add this id to match useRouteLoaderData("presentation")
      path: "/presentation",
      element: (<><p>Presentation</p></>),
      loader: async () => fetch(page1)
        .then((res) => res.text())
        .catch((error) => console.error("Error loading markdown:", error))
    },
    {
      id: "tutorial", // Add this id to match useRouteLoaderData("tutorial")
      path: "/tutorial",
      element: (<><p>Tutorial</p></>),
      loader: async () => fetch(page2)
        .then((res) => res.text())
        .catch((error) => console.error("Error loading markdown:", error))
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ], {
    basename: ''
});

function Routes() : React.JSX.Element {
  return <RouterProvider router={router} />;  
}
export default Routes;
