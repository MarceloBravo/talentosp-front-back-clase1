import { useEffect, useState } from 'react'
import { getPostsById } from '../../api/PostApi'
import { addComentarioByPostId } from '../../api/ComentariosApi'
import { useNavigate } from 'react-router';

export const ComentarioFormHook = (postId) => {
    const [ comentarios, setComentarios ] = useState([]);
    const [ post, setPost ] = useState(null);
    const [ refresh, setRefresh ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ nuevoComentario, setNuevoComentario ] = useState({
        autor: '',
        contenido: '',
        email: ''
    });
    const [ errorNuevoComentario, setErrorNuevoComentario ] = useState({
        autor: '',
        contenido: '',
        email: ''
    });
    const navigate = useNavigate();

    const cargarComentarios = () => {
        // Lógica para cargar el post
        setLoading(true);
        getPostsById(postId).then(post => {
            setPost(post);
            console.log(post);
        }).catch(error => {
            alert('Error al cargar el post');
            console.error('Error cargando post:', error);
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        if(postId){
            cargarComentarios()
        }
        // eslint-disable-next-line
    },[postId]);


    useEffect(() => {
        setComentarios(post ? post.comments : []);
    },[post]);

    useEffect(() => {
        if(refresh){
            cargarComentarios()
        }
        // eslint-disable-next-line
    },[refresh]);


    const handleNuevoComentarioChange = (e) => {
        if(e.target.value.length === 0){
            setErrorNuevoComentario({ ...errorNuevoComentario, [e.target.name]: `El campo ${e.target.name} no puede estar vacío` });
        }else{
            setErrorNuevoComentario({ ...errorNuevoComentario, [e.target.name]: '' });
        }
        setNuevoComentario({ ...nuevoComentario, [e.target.name]: e.target.value });
    }

    const handleNuevoComentarioClick = (e) => {
        e.preventDefault();
        addComentarioByPostId(postId, nuevoComentario);
        setNuevoComentario({
            autor: '',
            contenido: '',
            email: ''
        });
        setRefresh(!refresh);
        // Lógica para crear el comentario
    }


    const handleBackClick = (e) => {
        navigate('/');
    }


  return {
    loading,
    comentarios,
    post,
    nuevoComentario,
    errorNuevoComentario,
    handleNuevoComentarioChange,
    handleNuevoComentarioClick,
    handleBackClick
  }
}