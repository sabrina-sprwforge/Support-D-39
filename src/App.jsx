
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      // errorElement: <NotFound></NotFound>,
      // children: [
      //   {
      //     path: "/",
      //     element: <Home></Home>,

      //   },
      //   {
      //     path: "/cart",
      //     element: <Cart></Cart>
      //   }
      // ]
    }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
