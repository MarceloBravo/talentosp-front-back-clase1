import { useNavigate } from 'react-router'
import { useHttp } from '../../hooks/useHttp';

export const PostItemHook = ({post, setRefresh}) => {
    const { loading, error, request } = useHttp();
    const navigate = useNavigate();

    const handleDarLikeClick = async () => {
            // Lógica para dar like al post
            try{
                await request(`/api/posts/${post.id}/likes`, 'POST');
                setRefresh(true);
            }catch(error){
                console.log(error)
            }
        }
    
        const handleDarUnlikeClick = async () => {
            // Lógica para quitar like al post
            try{
                await request(`/api/posts/${post.id}/likes`, 'DELETE');
                setRefresh(true);
            }catch(error){
                console.log(error)
            }
        }
    
        const handleComentarClick = () => {
            // Lógica para comentar el post
            navigate(`/${post.id}/comentarios`);
        }
    

  return {
    error,
    loading,
    handleDarLikeClick,
    handleDarUnlikeClick,
    handleComentarClick
  }
}