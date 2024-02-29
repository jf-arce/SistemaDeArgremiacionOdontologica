import { consultorios } from "@/data/consultorios";
import { TableComponent2 } from "./TableComponent2";

export const RenderOfTable2 = () => {
  return (
    <div>
      {consultorios.length === 0 ? (
        <p className="text-center text-2xl font-semibold">No hay consultorios registrados</p>
      ) : <TableComponent2/>}
    </div>
  )
}
