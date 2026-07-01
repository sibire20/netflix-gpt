import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BrowseComponent from "./Browse";
import Login from "./Login";

const BodyComponent = () =>{


const appRouter = createBrowserRouter([
    { path: "/login", element: <Login/>},
    { path: "/browse", element: <BrowseComponent/> },
    { path: "/", element: <Login/> }
]);


    return (
        <div>
            <RouterProvider router={appRouter} />
            
        </div>
    )
    
}

export default BodyComponent;