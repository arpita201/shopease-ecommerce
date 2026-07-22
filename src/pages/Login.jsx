import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
      login: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

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

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!savedUser) {
      setErrors({
        login: "No account found. Please create an account first.",
      });
      setSuccessMessage("");
      return;
    }

    const emailMatches =
      formData.email.trim().toLowerCase() ===
      savedUser.email.trim().toLowerCase();

    const passwordMatches =
      formData.password === savedUser.password;

    if (!emailMatches || !passwordMatches) {
      setErrors({
        login: "Incorrect email or password.",
      });
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setSuccessMessage("Login successful!");

    localStorage.setItem("isLoggedIn", "true");

    setTimeout(() => {
      navigate(redirectPath, { replace: true });
    }, 1000);
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-heading">
          <h1>Welcome Back</h1>
          <p>Login to continue shopping with ShopEase.</p>
        </div>

        {successMessage && (
          <div className="login-success-message">
            {successMessage}
          </div>
        )}

        {errors.login && (
          <div className="login-error-message">
            {errors.login}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="login-form-group">
            <label htmlFor="email">Email Address</label>

            <input
              className={errors.email ? "input-error" : ""}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            {errors.email && (
              <p className="login-error-message">
                {errors.email}
              </p>
            )}
          </div>

          <div className="login-form-group">
            <label htmlFor="password">Password</label>

            <div
              className={`login-password-wrapper ${
                errors.password ? "password-error" : ""
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="login-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="login-error-message">
                {errors.password}
              </p>
            )}
          </div>

          <button type="submit" className="login-submit-button">
            Login
          </button>
        </form>

        <p className="login-bottom-text">
          Don&apos;t have an account?{" "}
          <Link to="/signup">Create an account</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;