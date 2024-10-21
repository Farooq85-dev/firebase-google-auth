import { Input, Button } from "@nextui-org/react";
import { useState } from "react";

function Singup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    return (
        <>
            <div className="text-3xl font-semibold m-10">
                <h1>Sing Up</h1>
            </div>

            <form >
            <Input
                    isRequired
                    type="username"
                    label="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    defaultValue="junior@nextui.org"
                    className="my-10"
                />

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
                <Button color="primary" className="w-3/5 my-3 font-semibold">
                    Sing Up
                </Button>
                <p className="text-medium">OR</p>
                <Button color="primary" className="w-3/5 my-3 font-semibold">
                    Sing Up With Google
                </Button>
            </form>
        </>
    )
}

export default Singup