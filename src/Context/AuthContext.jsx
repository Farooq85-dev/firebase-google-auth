import { Spinner } from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Utils/firebase";


export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [user, setUser] = useState({
        isLogin: false,
        userInfo: {},
    });
    const [loading, setLoading] = useState(true)

    function onAuthChange(user) {
        if (user) {
            console.log(user);
            setUser({
                isLogin: true,
                userInfo: {
                    name: user?.displayName,
                    photoUrl: user?.photoURL,
                    email: user?.email,
                }
            })
        }
        else {
            setUser({ isLogin: false, userInfo: {} });
        }
        setLoading(false)
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, onAuthChange);
        return subscriber;
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {
                loading ?
                    <div className="w-full h-96 flex justify-center items-center">
                        <Spinner />
                    </div>
                    :
                    (children)
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider