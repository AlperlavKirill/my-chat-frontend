import React from "react";
import { Link } from "react-router-dom";
import { InputContainer, InputField, InputLabel, Button } from "../../utils/styles";
import styles from "./index.module.scss";

export const LoginForm = () => {

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("login button pressed");
        
        event.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <InputContainer> 
                <InputLabel htmlFor="username">Username</InputLabel> 
                <InputField type="text" id="username"/>
            </InputContainer>
            <InputContainer> 
                <InputLabel htmlFor="password">Password</InputLabel> 
                <InputField type="password" id="password"/>
            </InputContainer>
            <Button className={styles.button}>Login</Button>

            <div className={styles.footerText}>
                <span>
                    Don`t have an account?
                </span>
                <Link to="/register" >
                    <span>Register</span>
                </Link>
            </div>
        </form>
    )

}