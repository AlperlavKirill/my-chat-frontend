import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  InputContainer,
  InputField,
  InputLabel,
  Button,
} from "../../utils/styles";
import { UserRegisterParams } from "../../utils/types";
import styles from "./index.module.scss";
import { postUserRegister } from "../../utils/api/api";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<UserRegisterParams>();

  const onSubmit = async (data: UserRegisterParams) => {
    console.log(data);

    try {
      postUserRegister(data);
      navigate('/')
    } catch (exeption) {
      console.log(exeption);
    }
  };

  const navigate = useNavigate();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="username">Username</InputLabel>
        <InputField
          type="text"
          id="username"
          {...register("username", { required: true })}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
      </InputContainer>

      <section className={styles.halfFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First name</InputLabel>
          <InputField
            type="text"
            id="firstName"
            {...register("firstname", { required: false })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last name</InputLabel>
          <InputField
            type="text"
            id="lastName"
            {...register("lastname", { required: false })}
          />
        </InputContainer>
      </section>

      <Button className={styles.button}>Create an account</Button>

      <div className={styles.footerText}>
        <span>Already have an account?</span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};
