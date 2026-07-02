import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "From USD $19",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 2,
    name: "Laptop",
    price: "From USD $340",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 3,
    name: "Headphones",
    price: "From USD $25",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 4,
    name: "Camera",
    price: "From USD $89",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
];

function Home() {
  return (
    <>
      <Hero />

      {/* Deals */}
      <section className="sale-section">
        <div className="sale-left">
          <h2>Deals and Offers</h2>
          <p>Hygiene equipments</p>

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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
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
          <h2>An easy way to send requests to all suppliers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <form className="inquiry-form">
          <h3>Send quote to suppliers</h3>

          <input type="text" placeholder="What item you need?" />

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

        <div className="recommended-grid">
          {[
            "T-shirts with multiple colors",
            "Jeans shorts",
            "Winter coat",
            "Travel bag",
            "Leather wallet",
            "Canon Camera",
            "Gaming Headset",
            "Smart Watch",
          ].map((item, index) => (
            <div className="recommended-card" key={index}>
              <div className="product-placeholder"></div>
              <h4>$10.30</h4>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2>Our extra services</h2>

        <div className="services-grid">
          {[
            "Source from Industry Hubs",
            "Customize Your Products",
            "Fast shipping",
            "Product inspection",
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-img"></div>
              <h4>{service}</h4>
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
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>

        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email" />

          <button>Subscribe</button>
        </div>
      </section>
    </>
  );
}

export default Home;