import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaPlus, FaTimes } from 'react-icons/fa';
import L from 'leaflet';
import './branches.css';

const branchIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

export default function Branches() {
  const [branches, setBranches] = useState([
    {
      name: 'Sucursal San Salvador',
      address: 'Av. Olímpica 123, San Salvador, El Salvador',
      position: [13.6929, -89.2182],
    },
    {
      name: 'Sucursal Ciudad de Guatemala',
      address: '9a Avenida 10-45, Guatemala City, Guatemala',
      position: [14.6349, -90.5069],
    },
    {
      name: 'Sucursal Tegucigalpa',
      address: 'Boulevard Morazán, Tegucigalpa, Honduras',
      position: [14.0723, -87.1921],
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    lat: '',
    lng: '',
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const latNum = parseFloat(formData.lat);
    const lngNum = parseFloat(formData.lng);
    if (
      !formData.name ||
      !formData.address ||
      isNaN(latNum) ||
      isNaN(lngNum)
    ) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }
    setBranches((prev) => [
      ...prev,
      {
        name: formData.name,
        address: formData.address,
        position: [latNum, lngNum],
      },
    ]);
    setFormData({ name: '', address: '', lat: '', lng: '' });
    toggleModal();
  };

  return (
    <div className="branches-page">
      <header className="branches-header">
        <h2>Sucursales Coca-Cola</h2>
        <button className="add-button" onClick={toggleModal}>
          <FaPlus /> Agregar Sucursal
        </button>
      </header>

      <div className="map-container">
        <MapContainer
          center={[14.0, -89.5]} // Centro en Centroamérica
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: '400px', borderRadius: '1rem' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {branches.map((branch, index) => (
            <Marker key={index} position={branch.position} icon={branchIcon}>
              <Popup>
                <strong>{branch.name}</strong> <br /> {branch.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="branches-list">
        {branches.map((branch, index) => (
          <div className="branch-card" key={index}>
            <h3>{branch.name}</h3>
            <p>{branch.address}</p>
            <p><em>Lat:</em> {branch.position[0].toFixed(4)}, <em>Lng:</em> {branch.position[1].toFixed(4)}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>
              <FaTimes />
            </button>
            <h3>Nueva Sucursal</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre de la sucursal"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Dirección"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                step="any"
                name="lat"
                placeholder="Latitud (ej: 13.6929)"
                value={formData.lat}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                step="any"
                name="lng"
                placeholder="Longitud (ej: -89.2182)"
                value={formData.lng}
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
