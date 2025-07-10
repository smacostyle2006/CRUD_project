// App.js
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
/* import '../../../styles/App.css'; 
import AdminNav from '../../Admin/modules/AdminNav.js';
import CrudNav from '../../Admin/modules/CrudNav.js'; 
import CreateForm from "../../../components/main/components/bar-form/CreateForm"; */
import { FormFields } from "../../../../../components/front/components/form-edit";
import { put } from "../../../../../components/data-flow/components/import-data/fetching";

const API_URL = window.location.hostname.includes("csb.app")
  ? "https://wwrz99-8080.csb.app" // URL backend Codesandbox
  : "http://localhost:8080"; // Local/Codespace

function ProductId() {
  const { productId } = useParams();
  const location = useLocation();
  const product = location.state?.productState;

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    desc: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id || "",
        name: product.name || "",
        desc: product.desc || "",
        price: product.price || "",
        image: product.image || "",
      });
    }
  }, [product]);

  const [errors, setErrors] = useState({
    name: "",
    desc: "",
    price: "",
    image: "",
  });

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

  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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

  const validateGeneralCriteria = (setGeneralMessage, message) => {
    // Check if ALL fields are empty
    const allFieldsEmpty =
      !formData.name.trim() &&
      !formData.desc.trim() &&
      !formData.price &&
      !formData.image.trim();

    if (allFieldsEmpty) {
      setGeneralMessage(message);
      // Clear individual field errors
      setErrors({
        name: "",
        desc: "",
        price: "",
        image: "",
      });
      // Clear the message after 3 seconds
      setTimeout(() => {
        setGeneralMessage("");
      }, 3000);
      return true;
    }
    setGeneralMessage("");
    return false;
  };

  const handlePush = async (newProduct) => {
    const res = await put(`${API_URL}/products/${productId}`, newProduct);
    const result = await res;
    if (false) {
      // Handle duplicate name error
      if (result.error && result.error.includes("already exists")) {
        /*  setPendingProduct(newProduct);
        setShowDuplicateConfirm(true);*/
        setErrors({ name: "Error creating product: " + result.error });
      }
      return false;

      // Handle other specific error messages from backend
      /*     if (result.error) {
        setErrors(prev => ({
            ...prev,
            name: result.error.includes('name') ? result.error : '',
            desc: result.error.includes('description') ? result.error : '',
            price: result.error.includes('price') ? result.error : '',
            image: result.error.includes('image') ? result.error : ''
        }));
    }
    throw new Error(result.error || 'Failed to create product');*/
    }
    return true;
  };

  // Handle submit (comparing database and push)
  const handleSubmit = async (e, validateFormFields) => {
    e.preventDefault();

    const newProduct = {
      name: formData.name,
      desc: formData.desc,
      price: parseFloat(formData.price),
      image: formData.image,
    };

    try {
      if (
        !validateGeneralCriteria(
          setGeneralError,
          "Please fill in all required fields"
        )
      ) {
        if (!validateFormFields()) {
          if (await handlePush(newProduct)) {
            // Clear form on success
            setFormData(newProduct);
            setErrors({
              name: "",
              desc: "",
              price: "",
              image: "",
            });

            // Set success message
            setSuccessMessage("Product has been successfully updated!");

            // Clear success message after 5 seconds
            setTimeout(() => {
              setSuccessMessage("");
            }, 5000);
          }
        }
      }
    } catch (error) {
      console.error("Error creating product:", error);
      // Show error message to user
      setGeneralError(
        error.message || "Failed to create product. Please try again."
      );
      // Clear error message after 3 seconds
      setTimeout(() => {
        setGeneralError("");
      }, 3000);
    }
  };
  return (
    <>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {generalError && <div className="error-message">{generalError}</div>}
      <FormFields
        formData={formData}
        errors={errors}
        setErrors={setErrors}
        setGeneralError={setGeneralError}
        setFormData={setFormData}
        setSuccessMessage={setSuccessMessage}
        /*setShowDuplicateConfirm={setShowDuplicateConfirm}*/
        /* setPendingProduct={setPendingProduct}*/
        validateGeneralCriteria={validateGeneralCriteria}
        handleSubmit={handleSubmit}
      ></FormFields>
    </>
  );
  /*
    <>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Name"
          className="flex-1 min-w-[180px] px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Description"
          className="flex-1 min-w-[180px] px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Price"
          className="flex-1 min-w-[180px] px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Image URL"
          className="flex-1 min-w-[180px] px-3 py-2 rounded border border-gray-300"
        />
        <button className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
          Tìm
        </button>
      </div>
      <AutoFetchOnPage></AutoFetchOnPage>
    </> */
}

export default ProductId;
