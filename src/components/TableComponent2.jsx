"use client"

import {Table, TableHeader, TableColumn, TableBody,TableRow, TableCell} from "@nextui-org/react";
import { consultorios } from "@/data/consultorios";

export const TableComponent2 = () => {
  
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Nombre</TableColumn>
        <TableColumn>Telefono</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Direccion</TableColumn>
        <TableColumn>Localidad</TableColumn>
        <TableColumn>Provincia</TableColumn>
      </TableHeader>
      <TableBody>
        {
          consultorios.map(consultorio => {
            return (
              <TableRow key={consultorio.id}>
                <TableCell>{consultorio.nombre}</TableCell>
                <TableCell>{consultorio.telefono}</TableCell>
                <TableCell>{consultorio.email}</TableCell>
                <TableCell>{consultorio.direccion}</TableCell>
                <TableCell>{consultorio.localidad}</TableCell>
                <TableCell>{consultorio.provincia}</TableCell>
              </TableRow>
              );
            })
          }
      </TableBody>
    </Table>
  );
}