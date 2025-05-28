import Product from '../models/products.js';

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, image } = req.body;
    
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      image
    });

    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};