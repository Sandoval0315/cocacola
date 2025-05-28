import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import './emplooyes.css';

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    photo: '',
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees((prev) => [...prev, formData]);
    setFormData({ name: '', position: '', photo: '' });
    toggleModal();
  };

  return (
    <div className="employees-page">
      <div className="employees-header">
        <h2>Gestión de Empleados</h2>
        <button className="add-button" onClick={toggleModal}>
          <FaPlus /> Agregar Empleado
        </button>
      </div>

      <div className="employees-list">
        {employees.map((employee, index) => (
          <div className="employee-card" key={index}>
            <img src={employee.photo} alt={employee.name} />
            <h3>{employee.name}</h3>
            <p>{employee.position}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>
              <FaTimes />
            </button>
            <h3>Nuevo Empleado</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Puesto"
                value={formData.position}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="photo"
                placeholder="URL de la foto"
                value={formData.photo}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-button">
                Guardar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
