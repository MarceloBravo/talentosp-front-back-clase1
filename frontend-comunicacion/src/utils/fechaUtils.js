export const formatDate = (dateInput) => {
  const date = new Date(dateInput);

  // Verifica si la fecha creada es válida. Si el string no es un formato reconocido,
  // new Date() devuelve un objeto Date inválido.
  if (isNaN(date.getTime())) {
    return "Fecha inválida";
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son base 0
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

