import { useState } from 'react'
import { sendEmail } from '../../api/ContactoApi'

export const ContactoHook = () => {
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
            }else{
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
            setData({
                ...data,
                [name]: value
            })
        }
    
        const handleSendEmailButtonClick = () => {
            if(data.nombre.trim() === '' || data.email.trim() === ''  || data.mensaje.trim() === '' ){
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
                window.open(response, '_blank', "noopener,noreferrer");
            })
            .catch(error => {
                alert('Error al enviar el email');
                console.error('Error enviando email:', error);
            }).finally(() => {
                setLoading(false);
            })
        }

  return {
    loading,
    data,
    errors,
    handleInputChange,
    handleSendEmailButtonClick
  }
}