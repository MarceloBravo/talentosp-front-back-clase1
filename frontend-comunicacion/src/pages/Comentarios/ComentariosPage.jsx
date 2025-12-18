import { useParams } from 'react-router';
import { ComentarioFormComponent } from '../../components/ComentarioForm/ComentarioFormComponent'

export const ComentariosPage = () => {
    const postId = useParams().postId;

  return (
    <>
    <div>Post / Comentarios</div>
    <ComentarioFormComponent postId={postId} />
    </>
  )
}