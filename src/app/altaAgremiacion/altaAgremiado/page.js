import { FormAgremiado } from "@/components/FormAgremiado";

export default function altaAgremiado() {
  return (
    <main className="bg-teal-300 h-screen p-20">
      <div className="h-full text-xl flex flex-col justify-between gap-12 bg-slate-50 p-10 rounded-md">
        <div className="flex flex-col items-center justify-center gap-12 h-full">
          <h1 className="text-4xl">Alta de agremiado</h1>
          <FormAgremiado />
        </div>
      </div>
    </main>
  );
}
