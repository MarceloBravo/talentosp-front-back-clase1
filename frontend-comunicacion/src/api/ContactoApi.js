import { useHttp } from '../hooks/useHttp';

export const useEmailApi = () => {
    const { request } = useHttp();

    const sendEmail = (data) => request(`/api/contacto`, 'POST', data);

    return {sendEmail}
}