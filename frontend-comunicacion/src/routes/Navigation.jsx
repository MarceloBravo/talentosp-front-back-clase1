import { Routes, Route } from 'react-router'
import { HomePage } from '../pages/Home/HomePage'
import { ComentariosPage } from '../pages/Comentarios/ComentariosPage'
import { ContactoPage } from '../pages/Contacto/ContactoPage'

const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:postId/comentarios' element={<ComentariosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
    </Routes>
  )

}

export default Navigation