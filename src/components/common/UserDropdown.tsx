"use client";
import Image from "next/image";
import React from "react";
import { LogOut, Settings, User } from "lucide-react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logout } from "@/services/auth.service";
import { useAuthStore } from "@/app/stores/useAuthStore";
// import { useAuthStore } from "@/stores/auth.store";
// import { useAuth } from "@/hooks/useAuth";

export default function UserDropdown({
  isOpen,
  onToggle,
  onClose,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const router = useRouter();
  const { clearUser, user } = useAuthStore();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearUser();
      toast.success("Logout berhasil!");
      router.push("/auth/login");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Terjadi kesalahan");
    },
  });

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 border p-1 pr-4 rounded-full text-gray-700 dark:text-gray-400 dropdown-toggle ${
          isOpen ? "bg-brand-25" : ""
        }`}
      >
        <div className="overflow-hidden rounded-full h-10 w-10">
          <Image
            width={44}
            height={44}
            src={user?.avatar_url || "/avatar-default.png"}
            alt="User"
          />
        </div>

        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={onClose}
        className="absolute right-0 mt-[17px] flex w-[320px] flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <div className="flex items-center gap-2">
          <Image
            src={user?.avatar_url || "/avatar-default.png"}
            alt="Profile Image"
            className="w-10 h-10 rounded-full object-contain"
            width={40}
            height={40}
          />
          <div>
            <span className="block font-semibold text-gray-700 text-base dark:text-gray-400">
              {user?.name}
            </span>
            <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
              {user?.email}
            </span>
          </div>
        </div>

        <hr className="my-5" />

        <button
          onClick={() => mutation.mutate()}
          disabled={mutation.isPending}
          className="flex items-center cursor-pointer gap-3 px-4 py-3 mt-3 font-semibolld text-gray-700 rounded-lg group text-theme-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          <LogOut
            className="text-primary  dark:group-hover:fill-gray-300"
            size={24}
          />
          Log Out
        </button>
      </Dropdown>
    </div>
  );
}
