import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../../utils/api/api";
import {
  InputContainer,
  InputField,
  InputLabel,
  Button,
} from "../../utils/styles";
import { UserLoginParams } from "../../utils/types";
import styles from "./index.module.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginParams>();

  console.log(errors);

  const navigate = useNavigate();

  const onSubmit = async (data: UserLoginParams) => {
    console.log(data);

    try {
      postUserLogin(data);
      navigate("/");
    } catch (exeption) {
      console.log(exeption);
    }
  };

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
      <Button className={styles.button}>Login</Button>

      <div className={styles.footerText}>
        <span>Don`t have an account?</span>
        <Link to="/register">
          <span>Register</span>
        </Link>
      </div>
    </form>
  );
};
