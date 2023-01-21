import { Link } from "react-router-dom";
import { InputContainer, InputField, InputLabel, Button } from "../../utils/styles"
import styles from "./index.module.scss";

export const RegisterForm = () => {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("register button pressed");
        
        event.preventDefault();
    };

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

            <section className={styles.halfFieldRow}>
                <InputContainer> 
                    <InputLabel htmlFor="firstName">First name</InputLabel> 
                    <InputField type="text" id="firstName"/>
                </InputContainer>
                <InputContainer> 
                    <InputLabel htmlFor="lastName">Last name</InputLabel> 
                    <InputField type="text" id="lastName"/>
                </InputContainer>
            </section>

            <Button className={styles.button}>Create an account</Button>

            <div className={styles.footerText}>
                <span>
                    Already have an account?
                </span>
                <Link to="/login" >
                    <span>Login</span>
                </Link>
            </div>
        </form>
    )
}