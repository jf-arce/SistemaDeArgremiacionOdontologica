import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";

export const TableComponent = ({ agremiados }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleSelection = (index) => {
    setSelectedRow(index);
  };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Apellido</TableColumn>
        <TableColumn>Nombre</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Dni</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody className="overflow-scroll">
        {agremiados.map((agremiado, index) => (
          <TableRow key={agremiado.id}>
            <TableCell>{agremiado.apellido}</TableCell>
            <TableCell>{agremiado.nombre}</TableCell>
            <TableCell>{agremiado.email}</TableCell>
            <TableCell>{agremiado.dni}</TableCell>
            <TableCell className="flex gap-5">
              <Link href={`/consultorio/${agremiado.id}`}>
                <p className="hover:underline">Consultorio</p>
              </Link>
              <FaRegCheckCircle
                onClick={() => handleSelection(index)}
                className={`text-2xl cursor-pointer ${selectedRow === index ? "text-teal-500" : ""}`}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
