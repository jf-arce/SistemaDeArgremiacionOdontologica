"use client"
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { Button } from "@/components/button";
import { Search } from "@/components/Search/Search";
import { RenderOfTable } from "@/components/RenderOfTable";
import { agremiados } from "@/data/agremiados";
import { useState } from "react";

export default function altaAgremiacion() {

  const getDate = () => {
    const fecha = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleString('es-ES', opciones);

    return fechaFormateada;
  };

  const [agremiadosFiltered, setAgremiadosFiltered] = useState([]);

  const handleSearchTable = (value) => {
    const filterOfAgremiados = agremiados.filter((agremiado) => (agremiado.apellido.toLowerCase()).includes(value.toLowerCase()));
    setAgremiadosFiltered(filterOfAgremiados);
  };

  const handleClick = () => {
    alert('La matricula se ha cargado de forma exitosa')
  };
  
  return (
    <main className="bg-teal-300 h-screen p-20">
      <div className="h-full text-xl flex flex-col justify-between gap-12 bg-slate-50 p-10 rounded-md">
        <div className="flex justify-between">
          <h1 className="text-2xl font-extrabold">Alta de Agremiacion</h1>
          <p className="font-semibold">
            Fecha de alta: <span className="capitalize">{getDate()}</span>
          </p>
        </div>
        <div className="flex gap-12 items-center">
          <div className="flex gap-5 items-center">
            <label>Agremiado:</label>
            <Search handleSearchTable={handleSearchTable}/>
          </div>
          <Link href="/altaAgremiacion/altaAgremiado">
            <IoIosAddCircle className="text-5xl cursor-pointer" />
          </Link>
        </div>
        <RenderOfTable
          agremiados={agremiadosFiltered.length === 0 ? agremiados : agremiadosFiltered} 
        />
        <div className="flex gap-3 items-center">
          <label>Matricula:</label>
          <input
            className="p-2 border-2 border-[#000] rounded-[4px]"
            type="search"
          />
        </div>
    
        <div className="flex gap-5 justify-end">
          <Link href="/">
            <Button text="Cerrar" />
          </Link>
          <Link href="/">
            <Button text="Aceptar" onClick={handleClick}/>
          </Link>
        </div>
      </div>
    </main>
  );
}
