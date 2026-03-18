import React, { useEffect, useState } from "react";
import "@/App.css";
import axios from "axios";
import { Phone, Mail, MapPin, Send, Menu, X } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product_category: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: "loading", message: "Sending..." });
    
    try {
      await axios.post(`${API}/inquiry`, formData);
      setFormStatus({ type: "success", message: "Thank you! We'll contact you soon." });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        product_category: "",
        message: ""
      });
      setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      setFormStatus({ type: "error", message: "Failed to send. Please try again." });
    }
  };

  const categoryNames = {
    cover_blocks: "Concrete Cover Blocks",
    foundation_blocks: "Foundation Blocks",
    decorative: "Decorative Products"
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50" data-testid="main-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_web-build-26/artifacts/i1cwgx1w_BUCA%20LOGO.jpeg" 
                alt="BUCA ENTERPRISE Logo" 
                className="h-10"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="hover:text-orange-500 transition" data-testid="nav-home">Home</button>
              <button onClick={() => scrollToSection("about")} className="hover:text-orange-500 transition" data-testid="nav-about">About</button>
              <button onClick={() => scrollToSection("products")} className="hover:text-orange-500 transition" data-testid="nav-products">Products</button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-orange-500 transition" data-testid="nav-contact">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection("home")} className="block w-full text-left px-3 py-2 hover:bg-gray-700">Home</button>
              <button onClick={() => scrollToSection("about")} className="block w-full text-left px-3 py-2 hover:bg-gray-700">About</button>
              <button onClick={() => scrollToSection("products")} className="block w-full text-left px-3 py-2 hover:bg-gray-700">Products</button>
              <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-3 py-2 hover:bg-gray-700">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1771678041131-2fec770e72c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwY29uY3JldGV8ZW58MHx8fHwxNzczODEyMDUwfDA&ixlib=rb-4.1.0&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" data-testid="hero-title">BUCA ENTERPRISE</h1>
          <p className="text-xl md:text-2xl mb-2">Premium Concrete Products Manufacturer</p>
          <p className="text-lg mb-8">Quality • Durability • Precision | Made in India</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection("products")} 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              data-testid="hero-products-btn"
            >
              View Products
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold transition"
              data-testid="hero-contact-btn"
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About BUCA ENTERPRISE</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h3>
              <p className="text-gray-700 mb-4">
                BUCA ENTERPRISE is a trusted manufacturer and supplier of high-quality concrete products used in modern construction projects. Our products are designed to ensure durability, accuracy, and strong structural support for RCC work.
              </p>
              <p className="text-gray-700 mb-4">
                We deliver reliable concrete products that help maintain proper reinforcement cover and improve the strength and life of buildings and infrastructure projects.
              </p>
              <div className="flex items-center gap-2 text-orange-500 font-semibold">
                <span className="text-2xl">🇮🇳</span>
                <span>Made in India</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To deliver top-quality concrete products that meet the highest standards of strength, durability, and accuracy, while building long-term relationships with builders, contractors, and infrastructure companies across India.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Quality checked concrete products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Consistent manufacturing standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Reliable supply for construction sites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Affordable and competitive pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Trusted by builders and contractors</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Founder & MD Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Leadership</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-orange-500 mb-2">Bharatbhai Dumaniya</h4>
                <p className="text-gray-600 font-semibold mb-4">Founder</p>
                <p className="text-gray-700 mb-3">
                  A highly experienced professional with over 28 years of deep expertise in concrete technology. Known for delivering practical and effective solutions for concrete challenges including cracking, honeycombing, improper cover, durability issues, and structural defects.
                </p>
                <p className="text-gray-700 mb-3">
                  His knowledge spans mix design optimization, quality control, site execution, and advanced construction techniques. As the founder of BUCA ENTERPRISE, he has transformed technical expertise into innovative, high-quality construction products.
                </p>
                <p className="text-gray-700">
                  His problem-solving approach identifies root causes of concrete defects and provides long-term corrective and preventive measures, making him a respected expert in the construction industry.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-orange-500 mb-2">Usha Dumaniya</h4>
                <p className="text-gray-600 font-semibold mb-4">Managing Director</p>
                <p className="text-gray-700 mb-4">
                  As Managing Director, Usha Dumaniya plays a pivotal role in the strategic direction and operations of BUCA ENTERPRISE. Her leadership ensures the company maintains its commitment to quality, innovation, and customer satisfaction.
                </p>
                <p className="text-gray-700">
                  Under her guidance alongside the founder, BUCA ENTERPRISE continues to grow as a reliable brand in the concrete products industry, serving builders, contractors, and infrastructure companies across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-100" data-testid="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Products</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From construction essentials to decorative items, we offer a comprehensive range of premium concrete products.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="category-filter">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === "all" 
                  ? "bg-orange-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              data-testid="filter-all"
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory("cover_blocks")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === "cover_blocks" 
                  ? "bg-orange-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              data-testid="filter-cover-blocks"
            >
              Cover Blocks
            </button>
            <button
              onClick={() => setSelectedCategory("foundation_blocks")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === "foundation_blocks" 
                  ? "bg-orange-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              data-testid="filter-foundation-blocks"
            >
              Foundation Blocks
            </button>
            <button
              onClick={() => setSelectedCategory("decorative")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === "decorative" 
                  ? "bg-orange-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              data-testid="filter-decorative"
            >
              Decorative Products
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="products-grid">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                data-testid={`product-card-${product.id}`}
              >
                <div className={`h-48 overflow-hidden ${
                  product.name.includes("50mm Cover Block with Tying Hole") || 
                  product.name.includes("75mm Cover Block with Tying Hole") ||
                  product.name.includes("50mm Pile Cover Block") ||
                  product.name.includes("75mm Pile Cover Block") ||
                  product.name.includes("M25 Grade Foundation Blocks") ||
                  product.name.includes("Concrete Decorative Tray Set")
                    ? "bg-gray-50 flex items-center justify-center" 
                    : ""
                }`}>
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className={`w-full h-full hover:scale-110 transition duration-300 ${
                      product.name.includes("50mm Cover Block with Tying Hole") || 
                      product.name.includes("75mm Cover Block with Tying Hole") ||
                      product.name.includes("50mm Pile Cover Block") ||
                      product.name.includes("75mm Pile Cover Block") ||
                      product.name.includes("M25 Grade Foundation Blocks") ||
                      product.name.includes("Concrete Decorative Tray Set")
                        ? "object-contain p-4" 
                        : "object-cover"
                    }`}
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-orange-500 mb-2 uppercase">
                    {categoryNames[product.category]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  {product.specifications && (
                    <div className="text-sm text-gray-500 mb-3">
                      <strong>Specifications:</strong> {product.specifications}
                    </div>
                  )}
                  {product.features && product.features.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="h-5 w-5 text-orange-500 mr-2" />
                    Phone Numbers
                  </h4>
                  <div className="ml-7 space-y-2 text-gray-700">
                    <p><strong>Bharatbhai Dumaniya:</strong></p>
                    <p>+91-9909896740</p>
                    <p>+91-9099981808</p>
                    <p className="mt-3"><strong>Chirag Dumaniya:</strong></p>
                    <p>+91-9106862480</p>
                    <p className="mt-3"><strong>Nidhi Dumaniya (Gifting Products):</strong></p>
                    <p>+91-8200824596</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <Mail className="h-5 w-5 text-orange-500 mr-2" />
                    Email
                  </h4>
                  <p className="ml-7 text-gray-700">cdadv1301@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                    Address
                  </h4>
                  <p className="ml-7 text-gray-700">
                    (W) Laxmipura Rabari Vas, Opp. Khodiyar estate,<br />
                    Bapa Sitaram Madhi to Khodiyar Mata Temple Road,<br />
                    B/H Keshav Chips, End of Gota Bridge,<br />
                    Gota, Ahmedabad - 382481<br />
                    Gujarat, India
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-orange-500 mr-2 text-xl">📋</span>
                    GSTN
                  </h4>
                  <p className="ml-7 text-gray-700">24AODPD4157J1Z5</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    data-testid="contact-name-input"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    data-testid="contact-email-input"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    data-testid="contact-phone-input"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    data-testid="contact-company-input"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Product Category</label>
                  <select
                    name="product_category"
                    value={formData.product_category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    data-testid="contact-category-select"
                  >
                    <option value="">Select a category</option>
                    <option value="cover_blocks">Concrete Cover Blocks</option>
                    <option value="foundation_blocks">Foundation Blocks</option>
                    <option value="decorative">Decorative Products</option>
                    <option value="custom">Custom Order</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    data-testid="contact-message-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center"
                  data-testid="contact-submit-btn"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Inquiry
                </button>

                {formStatus.message && (
                  <div className={`p-4 rounded-lg ${
                    formStatus.type === "success" ? "bg-green-100 text-green-800" : 
                    formStatus.type === "error" ? "bg-red-100 text-red-800" : 
                    "bg-blue-100 text-blue-800"
                  }`} data-testid="contact-form-status">
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_web-build-26/artifacts/i1cwgx1w_BUCA%20LOGO.jpeg" 
                  alt="BUCA ENTERPRISE Logo" 
                  className="h-10"
                />
              </div>
              <p className="text-gray-400">
                Trusted manufacturer of premium concrete products for modern construction.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("home")} className="block hover:text-orange-500 transition">Home</button>
                <button onClick={() => scrollToSection("about")} className="block hover:text-orange-500 transition">About Us</button>
                <button onClick={() => scrollToSection("products")} className="block hover:text-orange-500 transition">Products</button>
                <button onClick={() => scrollToSection("contact")} className="block hover:text-orange-500 transition">Contact</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>+91-9909896740</p>
                <p>cdadv1301@gmail.com</p>
                <p>Gota, Ahmedabad - 382481</p>
                <p className="text-orange-500 font-semibold">Made in India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2014 BUCA ENTERPRISE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
