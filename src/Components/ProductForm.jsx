import React, { useState } from "react";

function ProductForm({ setProducts, products }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function addProduct(e) {
    e.preventDefault();

    const capitalizedData = {
      ...formData,
      name: formData.name.charAt(0).toUpperCase() + formData.name.slice(1),
      description:
        formData.description.charAt(0).toUpperCase() +
        formData.description.slice(1),
    };

    if (formData.name && formData.description && formData.price) {
      setProducts([
        ...products,
        { id: Date.now(), ...capitalizedData, price: Number(formData.price) },
      ]);
    }

    setFormData({
      name: "",
      price: "",
      category: "",
      description: "",
    });
  }

  return (
    <form
      onSubmit={addProduct}
      className="flex flex-col gap-4 p-8 bg-white rounded-xl shadow-lg border-2 border-blue-200 max-w-md mx-auto mt-12"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Добавить товар
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Название товара
        </label>
        <input
          type="text"
          name="name"
          placeholder="Введите название"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Описание
        </label>
        <input
          name="description"
          placeholder="Описание товара"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Цена (₽)
        </label>
        <input
          type="text"
          name="price"
          placeholder="0.00"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
      >
        Добавить товар
      </button>
    </form>
  );
}

export default ProductForm;
