import { InputContainer, InputField, InputLabel, RegisterButton } from "../../utils/styles"
import styles from "./index.module.scss";

export const RegisterForm = () => {
    return ( 
        <form className={styles.form}>
            <InputContainer> 
                <InputLabel htmlFor="username">Username</InputLabel> 
                <InputField type="text" id="username"/>
            </InputContainer>
            <InputContainer> 
                <InputLabel htmlFor="password">Password</InputLabel> 
                <InputField type="password" id="password"/>
            </InputContainer>
            <RegisterButton>Create an account</RegisterButton>
        </form>
    )
}