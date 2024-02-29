"use client"
import { Button } from "@/components/button";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { TableComponent2 } from "@/components/TableComponent2";
import { agremiados } from "@/data/agremiados";
import { useEffect, useState } from "react";
import {useAppContext} from "@/Context/AppContext";
import { RenderOfTable2 } from "@/components/RenderOfTable2";


export default function PageConsultorio ({params}) {

  const {id} = params;
  const [agremiado, setAgremiado] = useState({});
  
  const {handleIdAgremiadoSeleccionado} = useAppContext();
  handleIdAgremiadoSeleccionado(id); // Setea el id del agremiado seleccionado en el contexto AppContext.jsx
 
  useEffect(() => {
    const agremiado = agremiados.find(agremiado => agremiado.id === parseInt(id));
    setAgremiado(agremiado);
  }, [id]);

  return (
    <main className="bg-teal-300 h-screen p-20">
      <div className="h-full text-xl flex flex-col justify-between gap-12 bg-slate-50 p-10 rounded-md">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-extrabold">Consultorios de {agremiado.apellido}</h1>
          <Link href="/consultorio/altaConsultorio">
            <IoIosAddCircle className="text-5xl cursor-pointer"/> {/* Boton para ir a ventana de alta de consultorio */}
          </Link>
        </div>
        
        <RenderOfTable2/>

        <div className="flex gap-5 justify-end">
          <Link href="/">
            <Button text="Cerrar" />
          </Link>
          <Link href="/altaAgremiacion">
            <Button text="Aceptar" />{" "}
          </Link>
        </div>
      </div>
    </main>
  )
}
