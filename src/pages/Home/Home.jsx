import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://shopease-backend-ipy9.onrender.com/api/products"
        );

        if (!response.ok) {
          throw new Error("Failed to load products.");
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

  const dealProducts = products.slice(0, 4);
  const recommendedProducts = products.slice(0, 8);

  return (
    <>
      <Hero />

      {/* Deals */}
      <section className="sale-section">
        <div className="sale-left">
          <h2>Deals and Offers</h2>
          <p>Featured products</p>

          <div className="countdown">
            <div>
              <strong>04</strong>
              <span>Days</span>
            </div>

            <div>
              <strong>13</strong>
              <span>Hour</span>
            </div>

            <div>
              <strong>34</strong>
              <span>Min</span>
            </div>

            <div>
              <strong>56</strong>
              <span>Sec</span>
            </div>
          </div>
        </div>

        <div className="sale-products">
          {loading && <p>Loading featured products...</p>}

          {error && <p>{error}</p>}

          {!loading &&
            !error &&
            dealProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
        </div>
      </section>

      {/* Category 1 */}
      <section className="category-block">
        <div className="category-banner home-banner">
          <h2>Home and outdoor</h2>
          <button>Source now</button>
        </div>

        <div className="category-grid">
          {[
            "Soft chairs",
            "Sofa & chair",
            "Kitchen dishes",
            "Smart watches",
            "Kitchen mixer",
            "Blenders",
            "Home appliance",
            "Coffee maker",
          ].map((item, index) => (
            <div className="category-item" key={index}>
              <h4>{item}</h4>
              <p>From USD 19</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category 2 */}
      <section className="category-block">
        <div className="category-banner tech-banner">
          <h2>Consumer electronics and gadgets</h2>
          <button>Source now</button>
        </div>

        <div className="category-grid">
          {[
            "Smart watches",
            "Cameras",
            "Headphones",
            "Smart watches",
            "Gaming set",
            "Laptops & PC",
            "Smartphones",
            "Electric kettle",
          ].map((item, index) => (
            <div className="category-item" key={index}>
              <h4>{item}</h4>
              <p>From USD 19</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry */}
      <section className="inquiry-section">
        <div>
          <h2>
            An easy way to send requests to all suppliers
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
        </div>

        <form className="inquiry-form">
          <h3>Send quote to suppliers</h3>

          <input
            type="text"
            placeholder="What item you need?"
          />

          <textarea placeholder="Type more details"></textarea>

          <div className="form-row">
            <input type="text" placeholder="Quantity" />

            <select>
              <option>Pcs</option>
            </select>
          </div>

          <button type="button">Send inquiry</button>
        </form>
      </section>

      {/* Recommended */}
      <section className="recommended-section">
        <h2>Recommended items</h2>

        {loading && <p>Loading recommended products...</p>}

        {error && <p>{error}</p>}

        <div className="recommended-grid">
          {!loading &&
            !error &&
            recommendedProducts.map((product) => (
              <div
                className="recommended-card"
                key={product._id}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <h4>${product.price}</h4>
                <p>{product.name}</p>

                <Link to={`/details/${product._id}`}>
                  <button className="details-btn">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2>Our Extra Services</h2>

        <div className="services-grid">
          {[
            {
              icon: "🏭",
              title: "Source from Industry Hubs",
            },
            {
              icon: "🎨",
              title: "Customize Your Products",
            },
            {
              icon: "🚚",
              title: "Fast Shipping",
            },
            {
              icon: "📦",
              title: "Product Inspection",
            },
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <div
                style={{
                  fontSize: "50px",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              >
                {service.icon}
              </div>

              <h4>{service.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Suppliers */}
      <section className="country-section">
        <h2>Suppliers by region</h2>

        <div className="country-grid">
          {[
            "Arabic Emirates",
            "Australia",
            "United States",
            "Russia",
            "Italy",
            "Denmark",
            "France",
            "China",
          ].map((country, index) => (
            <div className="country-item" key={index}>
              <strong>{country}</strong>
              <p>shopname.com</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <h2>Subscribe on our newsletter</h2>

        <p>
          Get daily news on upcoming offers from many
          suppliers all over the world
        </p>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>Subscribe</button>
        </div>
      </section>
    </>
  );
}

export default Home;