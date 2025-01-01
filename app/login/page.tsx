"use client";

import { TextField } from "@/components/ui/text-field";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { LoginModel } from "./model/login.model";
import Link from "next/link";
import { PublicRoutes } from "@/routes/routes";

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginModel>();

  async function onSubmit(data: LoginModel) {
    console.log(data);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px] flex flex-col gap-4"
      >
        <h1 className="text-center">Login</h1>

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

        <Button type="submit">Login</Button>
      </form>
      <span>Dont have account?</span>
      <Link href={PublicRoutes.REGISTER}>Register</Link>
    </div>
  );
}
export default LoginPage;
