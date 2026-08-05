import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
      signup: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});
      setSuccessMessage("");

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName.trim(),
            email: formData.email.trim(),
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Account creation failed."
        );
      }

      // JWT token and user information save
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );
      localStorage.setItem("isLoggedIn", "true");

      setSuccessMessage("Account created successfully!");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    } catch (error) {
      setErrors({
        signup:
          error.message || "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="signup-page">
      <section className="signup-card">
        <div className="signup-heading">
          <h1>Create Account</h1>
          <p>Sign up to start shopping with ShopEase.</p>
        </div>

        {successMessage && (
          <div className="signup-success-message">
            {successMessage}
          </div>
        )}

        {errors.signup && (
          <div className="signup-error-message">
            {errors.signup}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="signup-form-group">
            <label htmlFor="fullName">
              Full Name
            </label>

            <input
              className={
                errors.fullName ? "input-error" : ""
              }
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
            />

            {errors.fullName && (
              <p className="signup-error-message">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="signup-form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              className={
                errors.email ? "input-error" : ""
              }
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
            />

            {errors.email && (
              <p className="signup-error-message">
                {errors.email}
              </p>
            )}
          </div>

          <div className="signup-form-group">
            <label htmlFor="password">
              Password
            </label>

            <div
              className={`signup-password-wrapper ${
                errors.password ? "password-error" : ""
              }`}
            >
              <input
                type={
                  showPassword ? "text" : "password"
                }
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 8 characters"
                autoComplete="new-password"
              />

              <button
                type="button"
                className="signup-password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="signup-error-message">
                {errors.password}
              </p>
            )}
          </div>

          <div className="signup-form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <div
              className={`signup-password-wrapper ${
                errors.confirmPassword
                  ? "password-error"
                  : ""
              }`}
            >
              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                autoComplete="new-password"
              />

              <button
                type="button"
                className="signup-password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword
                  ? "Hide"
                  : "Show"}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="signup-error-message">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="signup-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        <p className="signup-bottom-text">
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </p>
      </section>
    </main>
  );
}

export default Signup;