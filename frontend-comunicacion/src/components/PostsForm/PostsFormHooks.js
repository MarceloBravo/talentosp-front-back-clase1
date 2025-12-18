import { useState, useEffect } from 'react'
import { createPost, getPosts } from '../../api/PostApi'

export const PostsFormHooks = () => {
    const [posts, setPosts] = useState([]);
    const [ refresh, setRefresh ] = useState(false);
    const [ loading, setLoading ] = useState(false);
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

    useEffect(() => {
        setLoading(true)
        getPosts().then(fetchedPosts => {
            setPosts(fetchedPosts)
        }).catch(error => {
            alert('Error obteniendo los posts');
            console.error('Error obteniendo los posts:', error);
        })
        .finally(() => {
            setLoading(false)
        });
    }, [])

    useEffect(() => {
        if(refresh){
            setNewPost({
                titulo: '',
                contenido: '',
                autor: '',
            });
            setRefresh(false);
            setLoading(true)
            getPosts().then(fetchedPosts => {
                setPosts(fetchedPosts)
            }).catch(error => {
                alert('Error obteniendo los posts');
                console.error('Error obteniendo los posts:', error);
            })
            .finally(() => {
                setLoading(false)
            });
        }
    }, [refresh]);
    
    const handleNewPostChange = (e) => {
        if(e.target.value.length === 0){
            setErrorNewPost({ ...errorNewPost, [e.target.name]: `El campo ${e.target.name} no puede estar vacío` });
        }else{
            setErrorNewPost({ ...errorNewPost, [e.target.name]: '' });
        }
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    }

    const handleCrearPostClick = (e) => {
        e.preventDefault();
        if(newPost.titulo || newPost.contenido || newPost.autor){
            alert('Completa todos los campos del formulario.');
            return;
        }
        createPost(newPost).then(createdPost => {
            setRefresh(true);
            alert('Post creado exitosamente');
        }).catch(error => {
            alert('Error creando el post');
            console.error('Error creando el post:', error);
        })
    }

    return {
        posts,
        newPost,
        errorNewPost,
        loading,
        handleNewPostChange,
        handleCrearPostClick,
        setRefresh
    }
}