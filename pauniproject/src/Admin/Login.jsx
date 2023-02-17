import React from "react";
// import Add from "../img/add.png"
const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> <span> आपली पवणी </span>
            </span>
                <span className="title">Login</span>

                <form>

                    <input type="email" placeholder="User ID" />
                    <input type="password" placeholder="Password" />
                    <button> Login </button>

                </form>
                {/* <p>You don't have an account? Register</p> */}
            </div>
        </div>
    );

}
export default Login;