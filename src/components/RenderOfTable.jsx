import { TableComponent } from "@/components/TableComponent";

export const RenderOfTable = ({agremiados}) => {
  return (
    <div>
      {agremiados.length === 0 ? (
        <p className="text-center text-2xl font-semibold">No hay agremiados registrados</p>
      ) : <TableComponent agremiados={agremiados}/>}
    </div>
  )
}
