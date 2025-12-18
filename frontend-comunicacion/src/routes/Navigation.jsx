import { Routes, Route } from 'react-router'
import { HomePage } from '../pages/Home/HomePage'
import { ComentariosPage } from '../pages/Comentarios/ComentariosPage'

const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:postId/comentarios' element={<ComentariosPage />} />
    </Routes>
  )

}

export default Navigation