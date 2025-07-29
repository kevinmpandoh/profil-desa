"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function UserModal({
  open,
  onClose,
  onSubmit,
  defaultValues,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (form: any) => void;
  defaultValues?: any;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const isEdit = !!defaultValues;

  useEffect(() => {
    if (defaultValues) {
      setForm({
        name: defaultValues.user_metadata.name,
        email: defaultValues.email,
        password: "",
        role: defaultValues.user_metadata.role,
      });
    } else {
      setForm({
        name: "",
        email: "",
        password: "",
        role: "admin",
      });
    }
  }, [defaultValues, open]);

  const handleChange = (e: any) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit Pengguna" : "Tambah Pengguna"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label>Nama</label>
            <Input name="name" value={form.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email</label>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button onClick={handleSubmit}>
              {isEdit ? "Simpan" : "Tambah"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
