import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../App.css'

const PanelOpciones = () => {
  return (
    <div className="panel-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Panel de Opciones</span>
          <ul className="navbar-nav me-auto d-flex flex-row">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/listarServicios">Listar Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formServicios">Agregar Servicios</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default PanelOpciones
