import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-main">    
      <div className="social-media">
        <h4>Follow us.</h4> 
            <a href="https://github.com/Engineer-collo/Toyota_cars" target="" rel="">github</a> 
            <a href="#" target="_blank" rel="noreferrer">Facebook</a> 
            <a href="#" target="_blank" rel="noreferrer">Twitter</a>  
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
      </div>
 
      <div className="footer-admin">
        <h4>Our Team</h4>
        <p>app deveveloped and maintained by: </p>
        <p><strong>Collins. Kelvin. Khadar. Julius. Rayjon</strong></p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <Link to='/' onClick={scrollToTop}>Home</Link>
        <Link to='/About' onClick={scrollToTop}>About</Link>
        <Link to='/Admin' onClick={scrollToTop}>Admin</Link>
        <Link to='/Contact' onClick={scrollToTop}>Reach Us</Link>
      </div>
      </div> 
      <hr />
      <p className="footer-text">&copy; 2025, All Rights Reserved. <br/></p>

    </footer>

  );
}

export default Footer;