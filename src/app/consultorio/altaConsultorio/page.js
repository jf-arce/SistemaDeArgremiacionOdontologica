"use client"
import { FormConsultorio } from "@/components/FormConsultorio";

export default function altaAgremiacion() {
  return (
    <main className="bg-teal-300 h-screen p-20">
      <div className="h-full text-xl flex flex-col gap-12 bg-slate-50 p-10 rounded-md">
        <h1 className="text-center font-extrabold text-2xl">Alta de Consultorio</h1>
        <FormConsultorio/>
      </div>
    </main>
  );
}



