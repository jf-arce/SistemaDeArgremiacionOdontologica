import { Button } from "@/components/button"
import Link from "next/link";
import { ProvinciasLocalidades } from "@/components/ProvinciasLocalidades";
import { useAppContext } from "@/Context/AppContext";
import { consultorios } from "@/data/consultorios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const FormConsultorio = () => {

    const {idAgremiadoSeleccionado} = useAppContext();
    const router = useRouter();

    const [formData, setFormData] = useState({
        id: consultorios.length + 1,
        nombre: "",
        telefono: "",
        email: "",
        calle: "",
        numero: "",
        piso: "",
        depto: "",
        localidad: "",
        provincia: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setFormData({ ...formData, [name]: value });
    };
    
    const handleForm = (e) => {
        e.preventDefault();
        const { calle, numero, piso, depto} = formData;
        const direc = `${calle} ${numero} ${piso} ${depto}`;

        const newFormData = {...formData, direccion: direc};

        consultorios.push(newFormData);
        
        router.push(`/consultorio/${idAgremiadoSeleccionado}`);
    };

  return (
    <form onSubmit={handleForm} className="flex flex-col gap-16">
        <div className="flex items-center gap-9 flex-wrap">
          <label for="nombre"> Nombre </label>
          <input onChange={handleChange} name="nombre" id="nombre" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
          <label for="telefono"> Telefono </label>
          <input onChange={handleChange} name="telefono" id="telefono" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
          <label for="email"> Email </label>
          <input onChange={handleChange} name="email" id="email" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
        </div>
        
        <div className="flex flex-col bg-neutral-100 border-2 border-black p-3 rounded-lg h-[400px] justify-evenly">
          <h2 className="text-2xl font-extrabold mb-9">Domicilio</h2> 
          <div className="flex gap-5 items-center mb-9 flex-wrap">
            <label for="calle"> calle </label>
            <input onChange={handleChange} name="calle" id="calle" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
            <label for="numero"> Numero </label>
            <input onChange={handleChange} name="numero" id="numero" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
            <label for="piso"> Piso </label>
          <input onChange={handleChange} name="piso" id="piso" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
          <label for="depto"> Depto </label>
          <input onChange={handleChange} name="depto" id="depto" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/> 
          </div>
         
          <ProvinciasLocalidades setFormData={setFormData} formData={formData}/>
        </div>

        <div className="flex gap-5 justify-end">
          <Link href="/">
            <Button text="Cerrar"/>
          </Link>
            <Button text="Aceptar" type="Submit"/>
        </div>

      </form>
  )
}
