import { Input, Button } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

function Singin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoding] = useState(false)
    const navigate = useNavigate()

    const handleSingInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("result=>", result);
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.                
                const user = result.user;
                console.log("user=>", user);
                navigate("/")
                // IdP data available using getAdditionalUserInfo(user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log("error=>", errorCode, errorMessage , credential)
            });
    }

    const handleOnSingIn = async () => {
        try {
        setLoding(true)
        await signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate("/");
            setLoding(false);
        })
        } catch (err) {
            setLoding(false)
        }
    }

    return (
        <>
            <div className="text-3xl font-semibold m-10">
                <h1>Sing In</h1>
            </div>

            <form >
                <Input
                    isRequired
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue="junior@nextui.org"
                    className="my-10"
                />
                <Input
                    isRequired
                    type="password"
                    label="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    defaultValue="junior@nextui.org"
                    className="my-10"
                />
                <Button 
                isLoading = {loading} 
                onClick={handleOnSingIn} 
                color="primary" 
                className="w-3/5 my-3 font-semibold">
                    Sing Up
                </Button>
                <p className="text-medium">OR</p>
                <Button onClick={handleSingInWithGoogle} color="primary" className="w-3/5 my-3 font-semibold">
                    Sing Up With Google
                </Button>
            </form>
        </>
    )
}

export default Singin