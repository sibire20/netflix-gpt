import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../utilis/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utilis/userSlice";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state.user !== null);
    const cartNumber = useSelector((state) => state.cart.items.length);

    const nowPlayingMovieList = useSelector((state) => state.nowPlayingMovie.playingMoiveList);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
            if (user) {
                const { uid, email } = user;
                dispatch(addUser({ uid, email }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/login");
            }
        });

        return () => unsubscribe(); // Cleanup the listener on component unmount
    }, []);

    const handleLogout = () => {
        FIREBASE_AUTH.signOut()
            .then(() => {
                //navigate("/login");
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    return (
        <div className="relative bg-gradient-to-b from black z-10 h-20 w-full border-b border-gray-800">
            <img className="h-12 w-30 m-4" src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVBEN9I57czDc_uW4ZnDTNTb9hWvK70hYAqf0VNv_dsufIxZqfNclKrp7ugn5j0DkKCYy_4ncEpi6fJk1wpPuLO61r5YUWiEbVjxFpCESIWdJwAAOvAX.svg" alt="Netflix Logo" />
        
            {isLoggedIn && (
                <button className="absolute right-4 top-4 bg-red-600 text-white px-4 py-2 rounded" onClick={handleLogout}>
                    Logout
                </button>
            )}

            {isLoggedIn && (
                <div className="absolute right-4 top-16 bg-gray-800 text-white px-4 py-2 rounded">
                    Cart Items: {cartNumber || 0}
                    <span className="ml-2"> Movies count: {nowPlayingMovieList?.length}</span>
                </div>
            )}
        </div>
    )
}

export default HeaderComponent;