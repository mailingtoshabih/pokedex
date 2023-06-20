import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './pages/Home';
import { Bookmark } from "./pages/Bookmark";
import { Details } from "./pages/Details";






function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> ,
      // errorElement: <Errorpage />
    },
    {
      path: "/bookmarks",
      element: <Bookmark/> ,
      // errorElement: <Errorpage />
    },
    {
      path: "/details/:name",
      element: <Details/> ,
      // errorElement: <Errorpage />
    },
    

  ]);






  return (
    <div className="font-poppins bg-transparent">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
