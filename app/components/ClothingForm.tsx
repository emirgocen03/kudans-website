'use client';

import { useState } from 'react';

const ClothingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentId: '',
    item: '',
    size: '',
    color: '',
    quantity: 1,
    notes: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, submitting: false, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        studentId: '',
        item: '',
        size: '',
        color: '',
        quantity: 1,
        notes: '',
      });
    }, 1500);
  };
  
  if (formStatus.submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold mb-2">Order Placed!</h3>
        <p className="mb-4">
          Thank you for your order. We'll email you with pickup details once your item is ready.
        </p>
        <button
          onClick={() => setFormStatus({ submitted: false, submitting: false, error: false })}
          className="btn-primary"
        >
          Place Another Order
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        
        <div>
          <label htmlFor="studentId" className="block text-sm font-medium mb-1">
            Student ID
          </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="item" className="block text-sm font-medium mb-1">
          Item <span className="text-red-500">*</span>
        </label>
        <select
          id="item"
          name="item"
          required
          value={formData.item}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        >
          <option value="">Select an item</option>
          <option value="hoodie">KUDANS Hoodie (₺250)</option>
          <option value="tshirt">KUDANS T-Shirt (₺150)</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="size" className="block text-sm font-medium mb-1">
            Size <span className="text-red-500">*</span>
          </label>
          <select
            id="size"
            name="size"
            required
            value={formData.size}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          >
            <option value="">Select a size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="color" className="block text-sm font-medium mb-1">
            Color <span className="text-red-500">*</span>
          </label>
          <select
            id="color"
            name="color"
            required
            value={formData.color}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          >
            <option value="">Select a color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium mb-1">
          Quantity <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
          required
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
        <p className="text-xs text-gray-500 mt-1">Maximum 5 items per order</p>
      </div>
      
      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-1">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={formStatus.submitting}
        className={`w-full py-3 bg-black text-white font-medium rounded-md ${
          formStatus.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
        } transition-colors`}
      >
        {formStatus.submitting ? 'Processing...' : 'Place Order'}
      </button>
      
      <p className="text-sm text-gray-500 mt-2">
        * Orders can be picked up and paid for at the KUDANS office in Student Center
      </p>
    </form>
  );
};

export default ClothingForm; 