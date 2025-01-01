"use client";

import { TextField } from "@/components/ui/text-field";
import { RegisterModel } from "./register.model";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PublicRoutes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
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
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px] flex flex-col gap-4"
      >
        <h1 className="text-center">Register</h1>

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
        <Button type="submit">Register</Button>
      </form>
      <span>Have account?</span>
      <Link href={PublicRoutes.LOGIN}>Login</Link>
    </div>
  );
}
export default RegisterPage;
