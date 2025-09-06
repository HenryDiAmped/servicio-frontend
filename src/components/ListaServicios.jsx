import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import servicioService from '../services/servicioService';
import '../App.css'

const ListaServicios = () => {
  const [servicios, setServicios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listarServicios();
  },[]);

  const listarServicios = () => {
    servicioService.getAllServicios()
      .then(response => setServicios(response.data))
      .catch(error => console.error(error));
  }

  const editServicio = (id) => {
    navigate(`/formServicios/${id}`);
  }

  const deleteServicio = (id) => {
    if(window.confirm("¿Seguro que quieres eliminar este servicio?")) {
      servicioService.deleteServicio(id)
        .then(() => listarServicios())
        .catch(error => console.error(error));
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Lista de Servicios</h2>
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-bordered table-hover align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Creado en</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {servicios.length > 0 ? (
              servicios.map(servicio => (
                <tr key={servicio.id}>
                  <td>{servicio.id}</td>
                  <td>{servicio.nombre}</td>
                  <td>{servicio.descripcion}</td>
                  <td>${servicio.precio}</td>
                  <td>
                    <span className={`badge ${servicio.estado === "activo" ? "bg-success" : "bg-secondary"}`}>
                      {servicio.estado}
                    </span>
                  </td>
                  <td>{servicio.creado_en}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => editServicio(servicio.id)}>
                      Modificar
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteServicio(servicio.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-muted">No hay servicios registrados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListaServicios
