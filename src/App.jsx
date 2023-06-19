import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './pages/Home';






function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> ,
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
