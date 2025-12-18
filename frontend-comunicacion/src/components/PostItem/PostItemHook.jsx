import { useNavigate } from 'react-router'
import { darLikePost, darUnlikePost } from '../../api/PostApi'
import { useState } from 'react';

export const PostItemHook = ({post, setRefresh}) => {
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate();

    const handleDarLikeClick = () => {
            // Lógica para dar like al post
            setLoading(true);
            darLikePost(post.id).then(updatedPost => {
                setRefresh(true);
            }).catch(error => {
                alert('Error al dar like al post');
                console.error('Error dando like al post:', error);
            }).finally(() => {
                setLoading(false);
            })
        }
    
        const handleDarUnlikeClick = () => {
            // Lógica para quitar like al post
            setLoading(true);
            darUnlikePost(post.id).then(updatedPost => {
                setRefresh(true);
            }).catch(error => {
                alert('Error al dar unlike al post');
                console.error('Error quitando like al post:', error);
            }).finally(() => {
                setLoading(false);
            })
        }
    
        const handleComentarClick = () => {
            // Lógica para comentar el post
            navigate(`/${post.id}/comentarios`);
        }
    

  return {
    loading,
    handleDarLikeClick,
    handleDarUnlikeClick,
    handleComentarClick
  }
}