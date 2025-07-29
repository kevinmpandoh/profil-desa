"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import UserModal from "./UserModal";
import userService from "@/services/user.service";
import { Pencil, Trash } from "lucide-react";

export default function UserManagementPage() {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
  const queryClient = useQueryClient();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: userService.get,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (form: any) => {
      if (editData) {
        return userService.update(editData.id, form);
      }
      return userService.create(form);
    },
    onSuccess: () => {
      toast.success("Data pengguna berhasil disimpan");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setOpenModal(false);
      setEditData(null);
    },
  });

  const { mutate: handleDelete } = useMutation({
    mutationFn: (id: string) => userService.remove(id),
    onSuccess: () => {
      toast.success("Data pengguna berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Manajemen Pengguna</h1>
        <Button
          onClick={() => {
            setEditData(null);
            setOpenModal(true);
          }}
        >
          + Tambah Pengguna
        </Button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-500">Belum ada pengguna.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any, index: number) => (
              <TableRow key={user.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.user_metadata.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="capitalize">
                  {user.user_metadata.role}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditData(user);
                        setOpenModal(true);
                      }}
                    >
                      <Pencil />
                      Edit
                    </Button>
                    {user.user_metadata.role !== "super admin" && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(user.id)}
                      >
                        <Trash />
                        Hapus
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <UserModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditData(null);
        }}
        onSubmit={(form: any) => {
          mutate(form);
        }}
        defaultValues={editData ?? undefined}
      />
    </div>
  );
}
