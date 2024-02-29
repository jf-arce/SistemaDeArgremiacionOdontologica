"use client";
import { useState, useEffect } from 'react';
import { getPronvincias, getLocalidades } from "@/lib/api_localidades";

export const ProvinciasLocalidades = ({setFormData,formData}) => {
    const [provincias, setProvincias] = useState([]);
    const [localidades, setLocalidades] = useState([]);
    const [selectedProvincia, setSelectedProvincia] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const provinciasData = await getPronvincias();
            setProvincias(provinciasData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchLocalidades = async () => {
            if (selectedProvincia) {
                const localidadesData = await getLocalidades(selectedProvincia);
                setLocalidades(localidadesData);
            } else {
                setLocalidades([]);
            }
        };

        fetchLocalidades();
    }, [selectedProvincia]);

    const handleProvinciaChange = (event) => {
        setSelectedProvincia(event.target.value);
        console.log(event.target.value);
        setFormData({ ...formData, provincia: event.target.value });
    };

    const handleLocalidadChange = (event) => {
        console.log(event.target.value);
        setFormData({ ...formData, localidad: event.target.value });
    };

    if (!provincias) {
        return <p>Cargando provincias...</p>;
    }
    return (
        <>
            <label>Provincias</label>
            <select onChange={handleProvinciaChange}>
                <option value="">Elegir una provincia</option>
                {provincias.map(provincia => (
                    <option value={provincia.nombre} key={provincia.id}>
                        {provincia.nombre}
                    </option>
                ))}
            </select>
            <label>Localidades</label>
            <select onChange={handleLocalidadChange}>
                <option value="">Elegir una localidad</option>
                {localidades.map(localidad => (
                    <option value={localidad.nombre} key={localidad.id}>
                        {localidad.nombre}
                    </option>
                ))}
            </select>
        </>
    );
    
};
