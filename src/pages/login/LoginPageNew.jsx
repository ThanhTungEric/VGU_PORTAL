// eslint-disable-next-line no-unused-vars
import React from "react";
// @ts-ignore
import style from "./login.module.css";
// @ts-ignore
import Campus_BG from "../../assets/campus-bg.jpg";

function LoginPage() {
    return (
        <div className={style.container} style={{ backgroundImage: `url(${Campus_BG})` }}>
            <div className={style.formContainer}>
                <h1>Login</h1>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className={style.inputContainer}>
                        <p>Username: </p>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className={style.inputContainer}>
                        <p>Password: </p>
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
