"use client";

import { TextField } from "@/components/ui/text-field";
import { useForm } from "react-hook-form";
import { LoginModel } from "./login.model";
import { PublicRoutes } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { useUser } from "@/redux/hooks/useUser";
import { Roles } from "@/models/user.model";
import AuthForm from "../components/auth-form";

function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>();
  const { handleSetUser } = useUser();
  async function onSubmit(data: LoginModel) {
    handleSetUser({
      email: data.email,
      role: Roles.CLIENT,
      jwt: "abcdefghijklmnopqrstuvwxyz",
    });

    router.push("/");
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
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
        })}
        label="email"
        type="email"
        error={errors.email?.message}
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
