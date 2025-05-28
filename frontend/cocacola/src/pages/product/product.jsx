import React, { useState, useEffect } from 'react';
import { FaPlus, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import './product.css';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    image: ''
  });
  const [editingId, setEditingId] = useState(null);

  // Obtener productos al cargar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setFormData({
        name: '',
        description: '',
        price: 0,
        stock: 0,
        image: ''
      });
      setEditingId(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = editingId 
        ? `http://localhost:4000/api/products/${editingId}`
        : 'http://localhost:4000/api/products';
      
      const method = editingId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        fetchProducts();
        toggleModal();
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image: product.image || ''
    });
    setEditingId(product._id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        fetchProducts();
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="product-page">
      <div className="product-header">
        <h2>Gestión de Productos CocaCola</h2>
        <button className="add-button" onClick={toggleModal}>
          <FaPlus /> Agregar Producto
        </button>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            {product.image && <img src={product.image} alt={product.name} />}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <div className="product-actions">
              <button onClick={() => handleEdit(product)}>
                <FaEdit /> Editar
              </button>
              <button onClick={() => handleDelete(product._id)}>
                <FaTrash /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>
              <FaTimes />
            </button>
            <h3>{editingId ? 'Editar Producto' : 'Nuevo Producto'}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre del producto"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={formData.description}
                onChange={handleChange}
              />
              <input
                type="number"
                name="price"
                placeholder="Precio"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="URL de la imagen (opcional)"
                value={formData.image}
                onChange={handleChange}
              />
              <button type="submit" className="submit-button">
                {editingId ? 'Actualizar' : 'Guardar'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}