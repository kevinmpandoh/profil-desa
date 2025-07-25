// app/auth/login/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { loginSchema } from "@/validations/login.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { toast } from "sonner";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.data);
      toast.success("Login berhasil!");
      router.push("/dashboard");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Terjadi kesalahan");
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/slider1.jpg"
          alt="Background"
          width={100}
          height={100}
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Form Login */}
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md mx-4">
        {/* Logo & Nama Desa */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo-desa.png"
            alt="Logo Desa"
            width={60}
            height={60}
            className="mb-2"
          />
          <h1 className="text-2xl font-bold text-green-800">Desa Wuwuk</h1>
          <p className="text-base text-gray-600">
            Kec. Tareran, Kab. Minahasa Selatan
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Masukkan email anda"
              className="w-full px-4 py-2 border rounded"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                placeholder="Masukkan password anda"
                className="w-full px-4 py-2 border rounded pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer"
            size={"lg"}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Memproses..." : "Masuk"}
          </Button>
        </form>

        {/* Link Kembali */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-md text-green-700 hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
