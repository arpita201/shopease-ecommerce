import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://shopease-backend-ipy9.onrender.com/api/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.info("Please login to add products to your cart.");

      navigate("/login", {
        state: { from: "/products" },
      });

      return;
    }

    addToCart(product);

    toast.success(`${product.name} added to cart!`);
  };

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <main className="listing-page">
        <section className="listing-content">
          <h2>Loading products...</h2>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="listing-page">
        <section className="listing-content">
          <h2>Unable to load products</h2>
          <p>{error}</p>
        </section>
      </main>
    );
  }

  return (
    <main className="listing-page">
      <aside className="filter-sidebar">
        <h3>Category</h3>

        {categories.map((category) => (
          <p
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              cursor: "pointer",
              fontWeight:
                selectedCategory === category ? "bold" : "normal",
              color:
                selectedCategory === category ? "#127fff" : "#606060",
            }}
          >
            {category}
          </p>
        ))}
      </aside>

      <section className="listing-content">
        <div className="search-filter-box">
          <input
            type="text"
            placeholder="Search products by name..."
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
          />

          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <h2>{filteredProducts.length} Products Found</h2>

        <div className="listing-products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="listing-card"
                key={product._id}
              >
                <div className="listing-img">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div>
                  <h3>{product.name}</h3>
                  <h2>${product.price}</h2>

                  <p>
                    <strong>Category:</strong>{" "}
                    {product.category}
                  </p>

                  <p>{product.description}</p>

                  <p>
                    <strong>Status:</strong>{" "}
                    {product.stock
                      ? "In Stock"
                      : "Out of Stock"}
                  </p>

                  <Link to={`/details/${product._id}`}>
                    <button type="button">
                      View Details
                    </button>
                  </Link>

                  <button
                    type="button"
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      handleAddToCart(product)
                    }
                    disabled={!product.stock}
                  >
                    {product.stock
                      ? "Add to Cart"
                      : "Out of Stock"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Products;