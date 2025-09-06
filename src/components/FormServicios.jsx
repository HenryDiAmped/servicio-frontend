import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import servicioService from '../services/servicioService'

const FormServicios = () => {
  const [servicio, setServicio] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    estado: 'activo'
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      servicioService.getServicioById(id)
        .then(response => {
          setServicio(response.data);
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleChange = (e) => {
    setServicio({ ...servicio, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      servicioService.updateServicio(id, servicio)
        .then(() => navigate('/listarServicios'))
        .catch(error => console.error(error));
    } else {
      servicioService.createServicios(servicio)
        .then(() => navigate('/listarServicios'))
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Servicio" : "Agregar Servicio"}</h2>
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={servicio.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Descripción</label>
          <textarea
            className="form-control"
            name="descripcion"
            value={servicio.descripcion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Precio</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="precio"
            value={servicio.precio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Estado</label>
          <select
            className="form-select"
            name="estado"
            value={servicio.estado}
            onChange={handleChange}
          >
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
            <option value="pendiente">Pendiente</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          {id ? "Actualizar" : "Guardar"}
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate('/listarServicios')}
        >
          Cancelar
        </button>
      </form>
    </div>
  )
}

export default FormServicios
