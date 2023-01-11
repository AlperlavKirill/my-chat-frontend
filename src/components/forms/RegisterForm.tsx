import { InputContainer, InputField } from "../../utils/styles"
import styles from "./index.module.scss";

export const RegisterForm = () => {
    return ( 
        <form>
            <InputContainer className={styles.form}> 
                <InputField></InputField>
            </InputContainer>
        </form>
    )
}