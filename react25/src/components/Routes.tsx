import {
  createHashRouter,
} from "react-router-dom";
import Presentation from "./Presentation";
import Tutorial from "./Tutorial";
import NoMatch from "./NoMatch";
import Header from "./Header";

const page1 = "assets/page1/SveltePresentation.md";
const page2 = "assets/page2/SvelteTutorial.md"; // Fixed path to page2

export const router = createHashRouter([
    {
      path: "/",
      element: (<><h1>Routes.tsx</h1><Header/><Presentation /></>),
      loader: async () => fetch(page1)
        .then((res) => res.text())
        .catch((error) => console.error("Error loading markdown:", error))
    },
    {
      id: "tutorial", // Add this id to match useRouteLoaderData("tutorial")
      path: "/tutorial",
      element: (<><Header/><Tutorial  /></>),
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
