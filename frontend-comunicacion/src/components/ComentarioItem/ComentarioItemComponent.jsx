import { formatDate } from "../../utils/fechaUtils"
import styles from './ComentarioItemComponent.module.css'

export const ComentarioItemComponent = ({comentario}) => {

  return (
    <div key={comentario.id} className={styles.comentarioItem}>
        <div className={styles.comentarioColumnContent}>
            <p>{comentario.contenido}</p>
        </div>
        <div className={styles.comentarioInfo}>
            <div>Autor: {comentario.autor}</div>
            <div>email: {comentario.email}</div>
            <div>Fecha de creación: {formatDate(comentario.fecha_creacion)}</div>
        </div>
    </div>
  )
}