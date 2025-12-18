import { SpinnerComponent } from '../../components/Spinner/SpinnerComponent'
import { ContactoHook } from './ContactoHook'
import styles from './Contacto.module.css'

export const ContactoPage = () => {
    const {
    loading,
    data,
    errors,
    handleInputChange,
    handleSendEmailButtonClick
  } = ContactoHook()

  return (
    <>
        {loading && <SpinnerComponent />}
        <div>Contacto</div>
        <div className={styles.formContainer}>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor="input-nombre">Nombre:</label>
                    <div className={styles.inputContainer}>
                    <input 
                        className="input-field" 
                        type="text" 
                        id="input-nombre" 
                        name="nombre" 
                        placeholder="Ingresa tu nombre" 
                        maxLength="255" 
                        value={data.nombre}
                        onChange={e => handleInputChange(e)}
                    />
                    <label className="label-error">{errors.nombre}</label>
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
                            maxLength="255" 
                            value={data.email}
                            onChange={e => handleInputChange(e)}
                        />
                        <label className="label-error">{errors.email}</label>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="input-mensaje">Mensaje:</label>
                    <div className={styles.inputContainer}>
                        <textarea 
                            className="input-field" 
                            id="input-mensaje" 
                            name="mensaje" 
                            placeholder="Ingresa aquí tu mensaje"
                            value={data.mensaje}
                            onChange={e => handleInputChange(e)}
                        ></textarea>
                        <label className="label-error">{errors.mensaje}</label>
                    </div>
                </div>
                <button type="button" className="btn-success" onClick={handleSendEmailButtonClick}>Enviar</button>    
            </form>
        </div>
    </>
  )
}