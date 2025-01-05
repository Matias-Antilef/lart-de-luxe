"use client";

import { TextField } from "@/components/ui/text-field";
import { useForm } from "react-hook-form";
import { LoginModel } from "./login.model";
import { PublicRoutes } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { useUser } from "@/redux/hooks/useUser";
import { Roles } from "@/models/user.model";
import AuthForm from "../components/auth-form";
import axios from "axios";

function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>();
  const { handleSetUser } = useUser();
  async function onSubmit(data: LoginModel) {
    try {
      axios
        .post(process.env.NEXT_PUBLIC_BASE_URL + "/auth/login", data)
        .then((response) => {
          if (response.status === 200) {
            handleSetUser({
              username: data.username,
              role: Roles.CLIENT,
              jwt: response.data.jwt,
            });
            router.push("/");
          } else {
            alert("Error al crear el usuario. Intenta nuevamente.");
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthForm
      onSubmit={handleSubmit(onSubmit)}
      title="Login"
      footerMsg="Don't have an account yet?"
      href={PublicRoutes.REGISTER}
      footerMsgLink="Register"
    >
      <TextField
        {...register("username", {
          required: {
            value: true,
            message: "Username is required",
          },
        })}
        label="username"
        type="text"
        error={errors.username?.message}
      />

      <TextField
        {...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
        })}
        label="password"
        type="password"
        error={errors.password?.message}
      />
    </AuthForm>
  );
}
export default LoginPage;
