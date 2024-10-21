import { Input, Button } from "@nextui-org/react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("user=>", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error=>", errorCode, errorMessage);
      });
  };

  const handleOnSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.error("Sign in error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-3xl font-semibold m-10">
        <h1>Sign In</h1>
      </div>

      <form onSubmit={handleOnSignIn}>
        <Input
          isRequired
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-10"
        />
        <Input
          isRequired
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="my-10"
        />
        <Button
          isLoading={loading}
          type="submit"
          color="primary"
          className="w-3/5 my-3 font-semibold"
        >
          Sign In
        </Button>
        <p className="text-medium">OR</p>
        <Button
          onClick={handleSignInWithGoogle}
          color="primary"
          className="w-3/5 my-3 font-semibold"
        >
          Sign In With Google
        </Button>
      </form>
    </>
  );
}

export default SignIn;
