import { formatDate } from '../../utils/fechaUtils'
import { PostItemHook } from './PostItemHook'
import { SpinnerComponent } from '../Spinner/SpinnerComponent'
import styles from './PostItemComponent.module.css'
import { MessageComponent } from '../Message/MessageComponent'

export const PostItemComponent = ({post, setRefresh}) => {
    const {
        error,
        loading,
        handleDarLikeClick,
        handleDarUnlikeClick,
        handleComentarClick
    } = PostItemHook({post, setRefresh})
    
    
    
  return (
    <>
        {loading && <SpinnerComponent />}

        {error && <MessageComponent type="error" message={error} />}

        <div key={post.id} className={styles.postItem}>
            <div className={styles.postInfo}>
                <div>
                    <div><b>Autor:</b> </div>
                    <div>{post.autor}</div>
                </div>
                <div>
                    <div><b>Fecha de creación:</b> </div>
                    <div>{formatDate(post.fecha_creacion)}</div>
                </div>
                <div>
                    <div><b>Estado:</b> </div>
                    <div>{post.estado}</div>
                </div>
                <div>👍: {post.likes}</div>
            </div>
            <div className={styles.postColumnContent}>
                <h3 className={styles.postTitle}>{post.titulo}</h3>
                <p>{post.contenido}</p>
            </div>
            <div className={styles.postColumnActions}>
                <div className={styles.likeButtons}>
                    <button className="btn-success" onClick={handleDarLikeClick}>👍</button>
                    <button className={`btn-success ${styles.btnUnlike}`} onClick={handleDarUnlikeClick}>👎</button>
                </div>
                <button className={`btn-success ${styles.btnComment}`} onClick={handleComentarClick}>Comentarios</button>                        
            </div>
        </div>
    </>
  )
}