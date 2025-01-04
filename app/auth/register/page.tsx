"use client";

import { TextField } from "@/components/ui/text-field";
import { RegisterModel } from "./register.model";
import { PublicRoutes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AuthForm from "../components/auth-form";
function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterModel>();

  async function onSubmit(data: RegisterModel) {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    router.push(PublicRoutes.LOGIN);
  }

  return (
    <AuthForm
      title="Register"
      onSubmit={handleSubmit(onSubmit)}
      href={PublicRoutes.LOGIN}
      footerMsg="Already have an account? "
      footerMsgLink="Login"
    >
      <TextField
        {...register("username", {
          required: {
            value: true,
            message: "Username is required",
          },
        })}
        label="username"
        type="username"
        error={errors.username?.message}
      />

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

      <TextField
        {...register("confirmPassword", {
          required: {
            value: true,
            message: "Confirm password is required",
          },
        })}
        label="confirm password"
        type="password"
        error={errors.confirmPassword?.message}
      />
    </AuthForm>
  );
}
export default RegisterPage;
