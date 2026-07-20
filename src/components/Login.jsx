import HeaderComponent from "./Header";
import { useState, useRef } from "react";
import { checkValidateForm } from "../utilis/validate";
import { FIREBASE_AUTH } from "../utilis/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [isSignInForm, setSignINForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const email = useRef(null);
    const password = useRef(null);
    const userFullName = useRef(null);

     const navigate = useNavigate();

    const toggleSignInForm = () => {
        setSignINForm(!isSignInForm);
    }

    const handleButtonClick = (e) => {
        //validate the form data and perform login or signup logic here
        e.preventDefault();
        const { isValid, message } = checkValidateForm(email.current.value, password.current.value);

        if (!isValid) {
            setErrorMessage(message);
            return;
        }
        setErrorMessage("");

        if (isSignInForm) {
            // Perform login logic here
            signInWithEmailAndPassword(FIREBASE_AUTH, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`Error signing in: ${errorCode} - ${errorMessage}`);
                });
        } else {
            // Perform signup logic here
            createUserWithEmailAndPassword(FIREBASE_AUTH, email.current.value, password.current.value, userFullName.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error signing up:", errorCode, errorMessage);
                });
        }

    }

    return (
        <div>
            <HeaderComponent />
            <div className="w-screen h-screen overflow-hidden">
                <div className="relative w-full h-full">
                    <img className="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg" alt="Netflix Logo" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="bg-black/75 p-8 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <form onSubmit={handleButtonClick} >
                        <h6 className="text-white text-2xl font-bold mb-4">
                            {isSignInForm ? "Sign In" : "Sign Up"}
                        </h6>
                        {!isSignInForm &&
                            <input ref={userFullName} type="text" placeholder="Full Name" className="p-2 m-2 bg-black/50 text-white placeholder:text-gray-500 border border-gray-600 rounded-lg" />
                        }
                        <input ref={email} type="text" placeholder="Username" className="p-2 m-2 bg-black/50 text-white placeholder:text-gray-500 border border-gray-600 rounded-lg" />
                        <input ref={password} type="password" placeholder="Password" className="p-2 m-2 bg-black/50 text-white placeholder:text-gray-500 border border-gray-600 rounded-lg" />
                        {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
                        <button className="bg-blue-600 p-2 m-2 rounded-lg" onClick={handleButtonClick}>
                            {isSignInForm ? "Sign In" : "Sign Up"}
                        </button>
                        <p className="text-white text-sm mt-4">
                            {isSignInForm ? "Don't have an account?" : "Already have an account?"}
                            <span className="text-blue-600 cursor-pointer ml-2" onClick={toggleSignInForm}>
                                {isSignInForm ? "Sign Up" : "Sign In"}
                            </span>
                        </p>
                    </form>
                </div>



            </div>
        </div>
    )
}

export default Login;