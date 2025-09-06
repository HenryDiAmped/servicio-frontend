import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListaServicios from './components/ListaServicios'
import FormServicios from './components/FormServicios'
import PanelOpciones from './pages/PanelOpciones'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PanelOpciones/>}>
          <Route index element={<ListaServicios/>} />
          <Route path='listarServicios' element={<ListaServicios/>} />
          <Route path='formServicios' element={<FormServicios/>} />
          <Route path='formServicios/:id' element={<FormServicios/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App