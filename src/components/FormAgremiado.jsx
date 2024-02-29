"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { agremiados } from "@/data/agremiados";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const FormAgremiado = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: agremiados.length + 1,
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    agremiados.push(formData);
    router.push("/altaAgremiacion");
  };

  return (
    <form
      onSubmit={handleForm}
      className="flex flex-col justify-center gap-32 w-full items-center"
    >
      <div className="flex flex-col max-w-[500px] gap-2">
        <label for="nombre"> Nombre </label>
        <input
          onChange={handleChange}
          name="nombre"
          id="nombre"
          type="text"
          className="p-2 border-2 border-[#000] rounded-[4px]"
        />
        <label for="apellido"> Apellido </label>
        <input
          onChange={handleChange}
          name="apellido"
          id="apellido"
          type="text"
          className="p-2 border-2 border-[#000] rounded-[4px]"
        />
        <label for="dni"> Dni </label>
        <input
          onChange={handleChange}
          name="dni"
          id="dni"
          type="text"
          className="p-2 border-2 border-[#000] rounded-[4px]"
        />
        <label for="email"> Email </label>
        <input
          onChange={handleChange}
          name="email"
          id="email"
          type="text"
          className="p-2 border-2 border-[#000] rounded-[4px]"
        />
      </div>
      <div className="flex gap-5 justify-end w-full mr-28">
        <Link href="/altaAgremiacion">
          <Button text="Cerrar" />
        </Link>
        <Button type="submit" text="Aceptar" />
      </div>
    </form>
  );
};
