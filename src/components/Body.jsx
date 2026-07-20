import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BrowseComponent from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../utilis/firebase";
import {useDispatch} from "react-redux";
import { addUser, removeUser } from "../utilis/userSlice";

const BodyComponent = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        { path: "/login", element: <Login /> },
        { path: "/browse", element: <BrowseComponent /> },
        { path: "/", element: <Login /> }
    ]);


    useEffect(() => {

        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            if (user) {
                const {uid, email} = user;
                dispatch(addUser({uid, email}));
            } else {
                dispatch(removeUser());
            }
        });
    },[]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )

}

export default BodyComponent;