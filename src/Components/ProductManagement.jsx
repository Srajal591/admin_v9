
"use client"

import { useState } from "react"
// import "./ProductManagement.css"

function ProductManagement() {
  const [showForm, setShowForm] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(null)
  const [categories, setCategories] = useState([
    { id: 1, name: "Necklaces", count: 12 },
    { id: 2, name: "Rings", count: 15 },
    { id: 3, name: "Earrings", count: 10 },
    { id: 4, name: "Bracelets", count: 8 },
    { id: 5, name: "Anklets", count: 5 },
    { id: 6, name: "Pendants", count: 4 },
  ])

  const toggleForm = (category = null) => {
    setCurrentCategory(category)
    setShowForm(!showForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowForm(false)
  }

  const goBack = () => {
    setCurrentCategory(null)
  }

  if (currentCategory) {
    return (
      <div className="container">
        <button className="back-button" onClick={goBack}>
          ← Back to Categories
        </button>

        <div className="section-header">
          <h1 className="header">{currentCategory.name} Items</h1>
          <button className="add-button" onClick={() => toggleForm(currentCategory)}>
            + Add Item
          </button>
        </div>

        <div className="category-detail-section">
          <p style={{ color: "#6c757d", marginBottom: "20px" }}>{currentCategory.count} items in this category</p>

          <div className="items-grid">
            {[...Array(currentCategory.count)].map((_, i) => (
              <div key={i} className="item-card">
                <div className="item-image">Product Image {i + 1}</div>
                <h3 className="item-title">Item {i + 1}</h3>
                <p className="item-description">Description of item {i + 1}</p>
                <div className="item-actions">
                  <button className="icon-btn edit" style={{ color: "#d4af37" }}>
                    ✏️
                  </button>
                  <button className="icon-btn delete" style={{ color: "#dc3545" }}>
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showForm && (
          <div className="form-overlay">
            <div className="category-form">
              <div className="form-header">
                <h2 className="form-title">Add New Item to {currentCategory.name}</h2>
                <button className="close-btn" onClick={() => toggleForm()}>
                  ×
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Product Name</label>
                    <input type="text" placeholder="Enter product name" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea placeholder="Enter product description" className="form-textarea"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select className="form-select">
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Price</label>
                    <input type="number" placeholder="Enter price" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Image 1</label>
                    <input type="file" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Image 2</label>
                    <input type="file" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Status</label>
                    <select className="form-select">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Featured</label>
                    <select className="form-select">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={() => toggleForm()}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Save Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="header">Product Management</h1>

      <div className="main-section">
        <div className="section-header">
          <h2 className="section-title">Category Management</h2>
          <button className="add-button" onClick={() => toggleForm()}>
            + Add Category
          </button>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card" onClick={() => setCurrentCategory(category)}>
              <h3 className="category-title">{category.name}</h3>
              <p className="category-count">{category.count} products</p>
              <div className="category-actions">
                <button
                  className="edit-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Edit logic here
                  }}
                >
                  ✏️
                </button>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Delete logic here
                  }}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="category-form">
            <div className="form-header">
              <h2 className="form-title">Add New Category</h2>
              <button className="close-btn" onClick={() => toggleForm()}>
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Category Name</label>
                  <input type="text" placeholder="Enter category name" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea placeholder="Enter category description" className="form-textarea"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Display Order</label>
                  <input type="number" placeholder="Enter display order" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => toggleForm()}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductManagement
