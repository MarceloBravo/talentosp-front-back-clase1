import { useState } from 'react';
import instance from '../api/axiosInstance';  // Asegúrate de que la ruta sea correcta

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = async (url, method = 'GET', body = null, config = {}) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await instance({
        url,
        method,
        data: body,
        ...config,  // Para headers adicionales, etc.
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error desconocido');
      throw err;  // Re-lanza para manejo adicional si es necesario
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, request };
};