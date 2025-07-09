// App.js
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
/* import '../../../styles/App.css'; 
import AdminNav from '../../Admin/modules/AdminNav.js';
import CrudNav from '../../Admin/modules/CrudNav.js'; 
import CreateForm from "../../../components/main/components/bar-form/CreateForm"; */

// Component for form fields with error handling
export const FormFields = ({
  formData,
  errors,
  setErrors,
  setGeneralError,
  setFormData,
  setSuccessMessage,
  setShowDuplicateConfirm,
  /* setPendingProduct,*/
  validateGeneralCriteria,
  handleSubmit,
}) => {
  const handleReset = () => {
    // Check if form has any data
    if (
      !validateGeneralCriteria(setGeneralError, "There is nothing to reset")
    ) {
      // If form has data, proceed with reset
      setFormData({
        name: "",
        desc: "",
        price: "",
        image: "",
      });
      setErrors({
        name: "",
        desc: "",
        price: "",
        image: "",
      });
    }
    setSuccessMessage(""); // Clear success message on reset
  };

  // Change data to store for data and error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate forms (in criteria for each fields)
  const validateFormFields = () => {
    let isNotValid = false;
    const newErrors = {
      name: "",
      desc: "",
      price: "",
      image: "",
    };
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
      isNotValid = true;
    }

    // Description validation
    if (!formData.desc.trim()) {
      newErrors.desc = "Description is required";
      isNotValid = true;
    }

    // Price validation
    if (!formData.price) {
      newErrors.price = "Price is required";
      isNotValid = true;
    } else {
      const price = parseFloat(formData.price);
      if (isNaN(price)) {
        newErrors.price = "Price must be a valid number";
        isNotValid = true;
      } else if (price <= 0) {
        newErrors.price = "Price must be greater than 0";
        isNotValid = true;
      } else if (price > 1000000) {
        // Set a reasonable maximum price
        newErrors.price = "Price must be less than 1,000,000";
        isNotValid = true;
      } else if (price.toString().includes("e")) {
        newErrors.price = "Price cannot be in scientific notation";
        isNotValid = true;
      }
    }

    // Image URL validation
    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required";
      isNotValid = true;
    } else if (!isValidUrl(formData.image)) {
      newErrors.image = "Please enter a valid URL";
      isNotValid = true;
    }
    setErrors(newErrors);
    return isNotValid;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Change data to store for data and error
  return (
    <form
      onSubmit={(e) => handleSubmit(e, validateFormFields)}
      /*{(e) => {
            e.preventDefault();
        }}*/
      onReset={handleReset}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="desc"
          placeholder="Enter product description"
          value={formData.desc}
          onChange={handleChange}
        />
        {errors.desc && <span className="error">{errors.desc}</span>}
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
        />
        {errors.price && <span className="error">{errors.price}</span>}
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          placeholder="Enter image URL"
          value={formData.image}
          onChange={handleChange}
        />
        {errors.image && <span className="error">{errors.image}</span>}
      </div>
      <div className="UpdateButton">
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
};
