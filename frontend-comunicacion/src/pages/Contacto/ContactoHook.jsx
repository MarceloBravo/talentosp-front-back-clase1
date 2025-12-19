import { useState } from 'react'
import { useHttp } from '../../hooks/useHttp'

export const ContactoHook = () => {
    const { loading, error, data: response, request } = useHttp()
    const [ errorValidate, setErrorValidate ] = useState(null)
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
            setErrors({...errors, [name]: `El campo ${name} es requerido`})
        }else{
            setErrors({...errors, [name]: ''})
        }
        setData({...data,[name]: value})
    }

    const handleSendEmailButtonClick = async () => {        
        if(data.nombre.trim() === '' || data.email.trim() === ''  || data.mensaje.trim() === '' ){
            setErrorValidate('Por favor, completa todos los campos requeridos')
            return;
        }else{
            setErrorValidate(null)
        }
        try{
            await request(`/api/contacto`, 'POST', data)
            setData({nombre: '', email: '',  mensaje: ''})
            window.open(response, '_blank', "noopener,noreferrer");
        }catch(error){
            console.error('Error enviando email:', error);
        }
    }

  return {
    errorValidate,
    error,
    loading,
    data,
    errors,
    handleInputChange,
    handleSendEmailButtonClick
  }
}