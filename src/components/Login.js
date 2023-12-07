import { useState } from "react";

export function Login(){
const [isLogin,setIsLogin] = useState(false);



return(
    <div>
        <h1>Login</h1>
        {isLogin ? (
            <div>
                <h1>Welcome User</h1>
                <button onClick={() => setIsLogin(false)}>Logout</button>
            </div>
        ) : (
            <div>
                <h1>Please Login</h1>
                <button onClick={() => setIsLogin(true)}>Login</button>
                </div>  

        )
        }
    </div>
)

}