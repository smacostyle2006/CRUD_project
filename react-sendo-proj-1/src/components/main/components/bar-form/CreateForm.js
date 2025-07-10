import React, { useState } from "react";
import "./CreateForm.css";
import { FormFields } from "../../../front/components/form-edit";

const API_URL = window.location.hostname.includes("csb.app")
  ? "https://wwrz99-8080.csb.app" // URL backend Codesandbox
  : "http://localhost:8080"; // Local/Codespace

// Component for general messages (success and error)
const GeneralMessages = ({
  successMessage,
  generalError,
  showDuplicateConfirm,
  setShowDuplicateConfirm,
  /*setPendingProduct,*/
  setFormData,
  setErrors,
  setSuccessMessage,
  setGeneralError,
  formData,
  errors,
  handleSubmit,
  validateGeneralCriteria,
}) => {
  /* const handleDuplicateConfirm = async (pendingProduct) => {
        try {
            const res = await fetch("http://localhost:8080/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pendingProduct),
            });

            if (!res.ok) {
                throw new Error('Failed to create product');
            }

            // Clear form and show success message
            setFormData({
                name: '',
                desc: '',
                price: '',
                image: ''
            });
            setErrors({
                name: '',
                desc: '',
                price: '',
                image: ''
            });
            setSuccessMessage('Product has been successfully added to the database!');

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } catch (error) {
            setGeneralError('Failed to create product. Please try again.');
            setTimeout(() => {
                setGeneralError('');
            }, 3000);
        } finally {
            setShowDuplicateConfirm(false);
            setPendingProduct(null);
        }
    };

    const handleDuplicateCancel = () => {
        setShowDuplicateConfirm(false);
        setPendingProduct(null);
    };
*/
  return (
    <>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {generalError && <div className="error-message">{generalError}</div>}
      {/*showDuplicateConfirm && (
                <div className="duplicate-confirm">
                    <p>A product with this name already exists. Do you want to add it anyway?</p>
                    <div className="confirm-buttons">
                        <button onClick={() => handleDuplicateConfirm(pendingProduct)}>Yes, Add Anyway</button>
                        <button onClick={handleDuplicateCancel}>No, Cancel</button>
                    </div>
                </div>
            )*/}
      <FormFields
        formData={formData}
        errors={errors}
        setErrors={setErrors}
        setGeneralError={setGeneralError}
        setFormData={setFormData}
        setSuccessMessage={setSuccessMessage}
        setShowDuplicateConfirm={setShowDuplicateConfirm}
        /* setPendingProduct={setPendingProduct}*/
        validateGeneralCriteria={validateGeneralCriteria}
        handleSubmit={handleSubmit}
      ></FormFields>
    </>
  );
};

// Component for form fields with error handling
/*const FormFields = ({
  formData,
  errors,
  setErrors,
  setGeneralError,
  setFormData,
  setSuccessMessage,
  setShowDuplicateConfirm,
  // setPendingProduct,
  validateGeneralCriteria,
  handleSubmit,
}) => {
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

  return (
    <form
      onSubmit={(e) => handleSubmit(e, validateFormFields)}
      /*{(e) => {
            e.preventDefault();
        //}}
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
}; */

// Main CreateForm component
function CreateForm() {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    desc: "",
    price: "",
    image: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [generalError, setGeneralError] = useState("");
  // const [showDuplicateConfirm, setShowDuplicateConfirm] = useState(false);
  /* const [pendingProduct, setPendingProduct] = useState(null);*/

  const handlePush = async (newProduct) => {
    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const result = await res.json();
    if (!res.ok) {
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

  // Validate forms (in criteria general)
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

            // Set success message
            setSuccessMessage(
              "Product has been successfully added to the database!"
            );

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

  // Handle reset
  const handleReset = () => {
    // Check if form has any data
    const hasData =
      formData.name.trim() ||
      formData.desc.trim() ||
      formData.price ||
      formData.image.trim();

    if (!hasData) {
      setGeneralError("There is nothing to reset - form is already empty");
      setTimeout(() => {
        setGeneralError("");
      }, 3000);
      return;
    }

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
    setSuccessMessage(""); // Clear success message on reset
    setGeneralError(""); // Clear general error on reset
  };

  return (
    <div className="create">
      <div className="createForm">
        <h2>Create New Product</h2>

        <GeneralMessages
          successMessage={successMessage}
          generalError={generalError}
          //showDuplicateConfirm={showDuplicateConfirm}
          //setShowDuplicateConfirm={setShowDuplicateConfirm}
          /*   setPendingProduct={setPendingProduct}*/
          setFormData={setFormData}
          setErrors={setErrors}
          setSuccessMessage={setSuccessMessage}
          setGeneralError={setGeneralError}
          formData={formData}
          errors={errors}
          handleSubmit={handleSubmit}
          validateGeneralCriteria={validateGeneralCriteria}
        />
      </div>
    </div>
  );
}
export default CreateForm;
