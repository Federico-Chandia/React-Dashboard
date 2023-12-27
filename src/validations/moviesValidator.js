export const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Ingrese un titulo';
    } else if (values.title.length < 3) {
      errors.title = 'minimo 3 caracteres';
    }
    if (!values.rating) {
      errors.rating = 'La peor pelicula de todas?';
    }
    
    if (!values.awards) {
      errors.awards = 'Ningún premio?';
    } 
  
    if (!values.length) {
        errors.length = 'Ningún premio?';
      } 
    
    
    if (!values.release_date) {
        errors.release_date = 'Nunca existió? jaja';
      }
    if (!values.genre_id) {
        errors.genre_id = 'No tiene genero ??';
      }
  
    return errors;
  };