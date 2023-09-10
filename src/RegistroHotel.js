import React, { useState } from 'react';
import './RegistroHotel.css';

const RegistroHotel = () => {
  // Definir el estado para los campos del formulario
  const [formData, setFormData] = useState({
    identificacion: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    habitacion: '',
    rh: 'O+',
    fechaIngreso: '',
    fechaSalida: '',
  });

  const [registroExitoso, setRegistroExitoso] = useState(false);

  

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    

    const camposRequeridos = [
        'identificacion',
        'nombres',
        'apellidos',
        'telefono',
        'habitacion',
        'fechaIngreso',
        'fechaSalida',
      ];


      const camposIncompletos = camposRequeridos.filter((campo) => !formData[campo]);

      if (camposIncompletos.length === 0) {
        // Todos los campos están llenos, puedes realizar el registro aquí
        // En este ejemplo, simplemente establecemos registroExitoso en true
        window.alert('REGISTRO EXITOSO');
        setRegistroExitoso(true);
      } else {
        // Algunos campos están vacíos, puedes mostrar un mensaje de error
        alert('Por favor, complete todos los campos.');
      }
    };
  
 // Manejar el clic en el botón de cancelar
 const handleCancelarClick = () => {
  // Mostrar una alerta con el mensaje de "Registro cancelado"
  alert('Registro cancelado');
  // Puedes hacer cualquier otra acción aquí, como restablecer el formulario, si es necesario.
};



// Manejar el clic en el botón de cancelar
const handleFlechaDerechaClick = () => {
  // Mostrar una alerta con el mensaje de "Registro cancelado"
  alert('Siguiente Pagina');
  // Puedes hacer cualquier otra acción aquí, como restablecer el formulario, si es necesario.
};

// Manejar el clic en el botón de cancelar
const handleFlechaIzqClick = () => {
  // Mostrar una alerta con el mensaje de "Registro cancelado"
  alert('Pagina Anterior');
  // Puedes hacer cualquier otra acción aquí, como restablecer el formulario, si es necesario.
};
  

  return (
    <div className="container">
  
      <h2 style={{ color: 'blue' ,marginLeft: '15px'}}>Registro Hotel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="identificacion">Identificación:</label>
          <input
            type="text"
            id="identificacion"
            name="identificacion"
            value={formData.identificacion}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="habitacion">Habitación:</label>
          <input
            type="text"
            id="habitacion"
            name="habitacion"
            value={formData.habitacion}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rh">Grupo Sanguíneo:</label>
          <select
            id="rh"
            name="rh"
            value={formData.rh}
            onChange={handleInputChange}
          >
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div>
          <label htmlFor="fechaIngreso">Fecha de Ingreso:</label>
          <input
            type="date"
            id="fechaIngreso"
            name="fechaIngreso"
            value={formData.fechaIngreso}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="fechaSalida">Fecha de Salida:</label>
          <input
            type="date"
            id="fechaSalida"
            name="fechaSalida"
            value={formData.fechaSalida}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '80px' }}>
          {/* Botón con una flecha hacia la derecha */}
          <button type="button" style={{ marginLeft: '30px' }}onClick={handleFlechaDerechaClick}>
            <span>&rarr;</span> {/* Unicode para la flecha hacia la derecha */}
          </button>

          {/* Botón con una flecha hacia la izquierda */}
          <button type="button" style={{ marginLeft: '30px' }}onClick={handleFlechaIzqClick}>
            <span>&larr;</span> {/* Unicode para la flecha hacia la izquierda */}
          </button>
        </div>
        
        
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '80px' }}>


        

          
          <button type="submit" style={{ color: 'rgb(0, 54, 128)' }}>Registrar</button>
          
          <button type="button" style={{ color: 'rgb(73, 128, 0)' ,marginLeft: '20px' }}onClick={handleCancelarClick}>Cancelar</button>
          
           
          
        </div>


       
      </form>
     
      </div>
  );
};

export default RegistroHotel;