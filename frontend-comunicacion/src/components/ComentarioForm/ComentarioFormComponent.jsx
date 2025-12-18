import { ComentarioItemComponent } from '../ComentarioItem/ComentarioItemComponent'
import { ComentarioFormHook } from './ComentarioFormHook'
import { SpinnerComponent } from '../Spinner/SpinnerComponent'
import styles from './ComentarioFormComponent.module.css'

export const ComentarioFormComponent = ({postId}) => {
    const {
        loading,
        comentarios,
        post,
        nuevoComentario,
        errorNuevoComentario,
        handleNuevoComentarioChange,
        handleNuevoComentarioClick,
        handleBackClick
  } = ComentarioFormHook(postId)
    
  return (
    <>
        {loading && <SpinnerComponent />}
        <div className={styles.commentsComponent}>
            <div className={styles.postForm}>
                <div className={styles.postItem}>
                    <div className={styles.postColumnContent}>
                        <h3 className={styles.postTitle}>{post ? post.post.titulo : ''}</h3>
                        <p>{post ? post.post.contenido : ''}</p>
                    </div>
                    <div className={styles.postInfo}>
                        <div>Autor: {post ? post.post.autor : ''}</div>
                        <div>Fecha de creación: {post ? post.post.fecha_creacion : ''}</div>
                        <div>Estado: {post ? post.post.estado : ''}</div>
                        <div>👍: {post ? post.post.likes : ''}</div>
                    </div>
                </div>

                <div className={styles.comentarioForm}>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="input-nombre">Nombre:</label>
                            <div className={styles.inputContainer}>
                                <input 
                                    className="input-field"
                                    type="text" 
                                    id="input-nombre" 
                                    name="autor" 
                                    placeholder="Ingresa tu nombre" 
                                    maxLength="255"
                                    value={nuevoComentario.autor} 
                                    onChange={(e) => handleNuevoComentarioChange(e)}
                                />
                                <label className="label-error">{errorNuevoComentario.autor}</label>
                            </div>
                        </div>
        
                        <div className={styles.formGroup}>
                            <label htmlFor="input-contenido">Contenido:</label>
                            <div className={styles.inputContainer}>
                                <textarea 
                                    className="input-field"
                                    id="input-contenido" 
                                    name="contenido" 
                                    placeholder="Ingresa aquí tu comentario"
                                    value={nuevoComentario.contenido} 
                                    onChange={(e) => handleNuevoComentarioChange(e)}
                                ></textarea>
                                <label className="label-error">{errorNuevoComentario.contenido}</label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="input-email">Email:</label>
                            <div className={styles.inputContainer}>
                                <input 
                                    className="input-field"
                                    type="text" 
                                    id="input-email" 
                                    name="email" 
                                    placeholder="email@ejemplo.com" 
                                    maxLength="100"
                                    value={nuevoComentario.email} 
                                    onChange={(e) => handleNuevoComentarioChange(e)}
                                />
                                <label className="label-error">{errorNuevoComentario.email}</label>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="button" className="btn-success" onClick={e => handleNuevoComentarioClick(e)}>Agregar Comentario</button>
                            <button type="button" className="btn-success" onClick={e => handleBackClick(e)}>Volver</button>
                        </div>
                    </form>
                </div>
            </div>
            <h2>Comentarios</h2>
            <div className={styles.comentariosList}>
                {comentarios && comentarios.length > 0 && comentarios.map(comment => 
                    <ComentarioItemComponent key={comment.id} comentario={comment}/>
                )}
            </div>
        </div>
    </>
  )
}