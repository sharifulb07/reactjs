import React, { useState } from "react";

const RegistrationForm = () => {
  // form state

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // validation errors
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };


  // validation function 01929525874

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    } else if (formData.username.length < 3 || formData.username.length > 20) {
      newErrors.username = "Username must be between 3 and 20 characters";
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
      newErrors.username = "Username must be written with letters and numbers";
      isValid = false;
    }

    // email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (/^[^\s@]+@[^\s@]+.[\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // password validation

    if (!formData.password) {
      newErrors.password = "password is required";
      isValid = false;
    } else if (formData.password.length < 3) {
      newErrors.password = "password length must be at least 3";
      isValid = false;
    } else if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password =
        "password must be contained at least one letter and one character";
      isValid = false;
    }

    // password match

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password do not matched";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  //   Mock registerapi
  const mockRegisterAPI = () => {
    return new Promise((resolve) =>
      setTimeout(resolve({ success: true }), 1500)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await mockRegisterAPI();
        if (response.success) {
          setIsSuccess(true);
        }
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.log("Submitting err", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="Registration-form">
      <h2>User Registration Form </h2>

      {isSuccess ? (
        <div className="success-message">
          <p>Registration is successful! Welcome {formData.username} </p>
          <button onClick={() => setIsSubmitting(false)}>
            Try Another User{" "}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="username">Username </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? "errors" : ""}
            />
            {errors.username && (
              <span className="error-message">{errors.username} </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "errors" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email} </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "errors" : ""}
            />
            {errors.password && (
              <span className="error-message">{errors.password} </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword"> Confirm Password </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "errors" : ""}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword} </span>
            )}
          </div>
          <button
          type="submit"
          disabled={isSubmitting}
          className={isSubmitting? 'submitting':''}
          >
            {
                isSubmitting? 'Registering...':'Register'
            }
          </button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
