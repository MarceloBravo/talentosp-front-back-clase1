import { PostItemComponent } from '../PostItem/PostItemComponent';
import { PostsFormHooks } from './PostsFormHooks';
import { SpinnerComponent } from '../Spinner/SpinnerComponent';
import styles from './PostsFormComponent.module.css';

export const PostsFormComponent = () => {
    const {
        posts,
        newPost,
        errorNewPost,
        loading,
        handleNewPostChange,
        handleCrearPostClick,
        setRefresh
    } = PostsFormHooks();


  return (
    <>
        {loading && <SpinnerComponent />}
        <div className={styles.postsComponent}>
            <h2>Formulario de posts</h2>
            <div className={styles.postForm}>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="input-titulo">Título:</label>
                        <div className={styles.inputContainer}>
                            <input 
                                className="input-field"
                                type="text" 
                                id="input-titulo" 
                                name="titulo" 
                                placeholder="Título" 
                                maxLength="255"
                                value={newPost.titulo} 
                                onChange={(e) => handleNewPostChange(e)}
                            />
                            <label className="label-error">{errorNewPost.titulo}</label>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="input-contenido">Contenido:</label>
                        <div className={styles.inputContainer}>
                            <textarea 
                                className="input-field"
                                id="input-contenido" 
                                name="contenido" 
                                placeholder="Contenido del post"
                                value={newPost.contenido} 
                                onChange={(e) => handleNewPostChange(e)}
                            ></textarea>
                            <label className="label-error">{errorNewPost.contenido}</label>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="input-autor">Autor:</label>
                        <div className={styles.inputContainer}>
                            <input 
                                className="input-field"
                                type="text" 
                                id="input-autor" 
                                name="autor" 
                                placeholder="Autor" 
                                maxLength="100"
                                value={newPost.autor} 
                                onChange={(e) => handleNewPostChange(e)}
                            />
                            <label className="label-error">{errorNewPost.autor}</label>
                        </div>
                    </div>
                    <button type="button" className="btn-success" onClick={e => handleCrearPostClick(e)}>Crear Post</button>
                </form>
            </div>
            <div className={styles.postsList}>
                {posts && posts.length > 0 && posts.map(post => 
                    <PostItemComponent key={post.id} post={post} setRefresh={setRefresh}/>
                )}
            </div>
        </div>
    </>
  )
}
