import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useHttp } from '../../hooks/useHttp';

export const ComentarioFormHook = (postId) => {
    // Instancia para comentarios
    const { loading: loadingComments, error: errorComments, data: comentarios, request: requestComments } = useHttp();
    // Instancia para el post
    const { loading: loadingPost, error: errorPost, data: post, request: requestPost } = useHttp();
    
    const [ refresh, setRefresh ] = useState(false);
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

    // Cargar post y comentarios al montar
    useEffect(() => {
        const loadData = async () => {
            try {
                await Promise.all([
                    requestPost(`/api/posts/${postId}`),  // Carga el post
                    requestComments(`/api/posts/${postId}/comments`)  // Carga comentarios
                ]);
            } catch (err) {
                alert('Error cargando datos');
            }
        };
        loadData();
        // eslint-disable-next-line
    }, []);


    // Refrescar comentarios (y recargar post si es necesario)
    useEffect(() => {
        if (refresh) {
            setRefresh(false);
            setNuevoComentario({ autor: '', contenido: '', email: '' });
            const reloadData = async () => {
                try {
                    await requestComments(`/api/posts/${postId}/comments`);
                    // Opcional: Recargar post si cambió
                    // await requestPost(`/api/posts/${postId}`);
                } catch (err) {
                    alert('Error recargando comentarios');
                }
            };
            reloadData();
        }
        // eslint-disable-next-line
    }, [refresh]);

    // Manejador de los inputs
    const handleNuevoComentarioChange = (e) => {
        if (e.target.value.length === 0) {
            setErrorNuevoComentario({ ...errorNuevoComentario, [e.target.name]: `El campo ${e.target.name} no puede estar vacío` });
        } else {
            setErrorNuevoComentario({ ...errorNuevoComentario, [e.target.name]: '' });
        }
        setNuevoComentario({ ...nuevoComentario, [e.target.name]: e.target.value });
    };

    // Crear comentario
    const handleNuevoComentarioClick = async (e) => {
        e.preventDefault();
        if (nuevoComentario.autor === '' || nuevoComentario.contenido === '' || nuevoComentario.email === '') {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }
        try {
            await requestComments(`/api/posts/${postId}/comments`, 'POST', nuevoComentario);
            setRefresh(true);
        } catch (err) {
            alert('Error creando comentario');
        }
    };

    const handleBackClick = (e) => {
        navigate('/');
    };

    return {
        loadingComments,
        errorComments,
        comentarios,
        loadingPost,
        errorPost,
        post,
        nuevoComentario,
        errorNuevoComentario,
        handleNuevoComentarioChange,
        handleNuevoComentarioClick,
        handleBackClick
    };
};