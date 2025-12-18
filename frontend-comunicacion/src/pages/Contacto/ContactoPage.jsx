import React, { useState } from 'react'
import styles from './Contacto.module.css'
import { sendEmail } from '../../api/ContactoApi'

export const ContactoPage = () => {
    const [ loading, setLoading ] = useState(false)
    const [ data, setData ] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })
    const [ errors, setErrors ] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(value.trim() === ''){
            setErrors({
                ...errors,
                [name]: `El campo ${name} es requerido`
            })
            return;
        }
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSendEmailButtonClick = () => {
        if(errors.nombre || errors.email || errors.mensaje){
            alert('Por favor, completa todos los campos requeridos')
            return;
        }
        setLoading(true);
        sendEmail(data).then(response => {
            alert('Email enviado correctamente');
            setData({
                nombre: '',
                email: '',
                mensaje: ''
            })
        })
        .catch(error => {
            alert('Error al enviar el email');
            console.error('Error enviando email:', error);
        }).finally(() => {
            setLoading(false);
        })
        // Lógica para enviar el email
    }



  return (
    <>
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