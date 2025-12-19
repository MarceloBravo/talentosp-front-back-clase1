import { useState, useEffect } from 'react'
import { useHttp } from '../../hooks/useHttp';

export const PostsFormHooks = () => {
    const { loading, error, data: posts, request } = useHttp();
    const [ refresh, setRefresh ] = useState(false);
    const [newPost, setNewPost] = useState({
        titulo: '',
        contenido: '',
        autor: '',
    });
    const [errorNewPost, setErrorNewPost] = useState({
        titulo: '',
        contenido: '',
        autor: '',
    });

    // Cargar posts al montar
    useEffect(() => {
        const loadPosts = async () => {
            try {
                await request('/api/posts');  // Llama a request genérico
            } catch (err) {
                console.log('Error obteniendo los posts');
            }
        };
        loadPosts();
        // eslint-disable-next-line
    }, [])

    // Refrescar posts
    useEffect(() => {
        if (refresh) {
            setNewPost({ titulo: '', contenido: '', autor: '' });
            setRefresh(false);
            const reloadPosts = async () => {
                try {
                    await request('/api/posts');
                } catch (err) {
                    console.log('Error obteniendo los posts');
                }
            };
            reloadPosts();
        }
        // eslint-disable-next-line
    }, [refresh]);


    const handleNewPostChange = (e) => {
        if(e.target.value.length === 0){
            setErrorNewPost({ ...errorNewPost, [e.target.name]: `El campo ${e.target.name} no puede estar vacío` });
        }else{
            setErrorNewPost({ ...errorNewPost, [e.target.name]: '' });
        }
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    }

    // Crear post
    const handleCrearPostClick = async (e) => {
        e.preventDefault();
        try {
            await request('/api/posts', 'POST', newPost);  // Petición POST
            setRefresh(true);  // Refresca la lista
        } catch (err) {
            console.log('Error creando el post');
        }
    }

    return {
        posts,  // data del hook
        error,  // error del hook
        newPost,
        errorNewPost,
        loading,
        handleNewPostChange,
        handleCrearPostClick,
        setRefresh
    }
}