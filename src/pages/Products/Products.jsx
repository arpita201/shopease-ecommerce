import { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/products.json";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

function Products() {
  const [products] = useState(productsData);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { addToCart } = useCart();

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
            onChange={(e) => setSearchText(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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
              <div className="listing-card" key={product.id}>
                <div className="listing-img">
                  <img src={product.image} alt={product.name} />
                </div>

                <div>
                  <h3>{product.name}</h3>
                  <h2>${product.price}</h2>

                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>

                  <p>{product.description}</p>

                  <p>
                    <strong>Status:</strong>{" "}
                    {product.stock ? "In Stock" : "Out of Stock"}
                  </p>

                  <Link to={`/details/${product.id}`}>
  <button>View Details</button>
</Link>

<button
  style={{ marginLeft: "10px" }}
  onClick={() => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  }}
  disabled={!product.stock}
>
  {product.stock ? "Add to Cart" : "Out of Stock"}
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