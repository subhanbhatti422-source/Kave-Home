import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Search, User, Bookmark, ShoppingBag, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <section className='navbar'>

    

      <section className="header">
        <button
          className="icon-btn menu-toggle"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} />
        </button>

        <div className="logo">
          <Link to="/">Kave Home</Link>
        </div>

        <nav className="main-nav">
           <div className="promo-links">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/stores">Stores</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact us</Link>
          
          
        </div>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <button className="icon-btn"><User size={20} /></button>
          <button className="icon-btn"><Bookmark size={20} /></button>
          <button className="icon-btn"><ShoppingBag size={20} /></button>
        </div>
      </section>
      </section>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu__header">
          <span className="logo-text"> <Link to="/"></Link> Kave Home</span>
          <button className="icon-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <nav className="mobile-menu__nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link to="/stores" onClick={() => setMenuOpen(false)}>Stores</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        </nav>
        <div className="mobile-menu__actions">
          <button className="icon-btn"><User size={20} /> Account</button>
          <button className="icon-btn"><Bookmark size={20} /> Wishlist</button>
        </div>
      </div>
      {menuOpen && <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}

export default Navbar