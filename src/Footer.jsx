import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
        
      <div className="social-media">
        <h3>Follow us.</h3> 
            <a href="#" target="_blank" rel="noreferrer">Facebook</a> <br/>
            <a href="#" target="_blank" rel="noreferrer">Twitter</a>  <br/>
            <a href="#" target="_blank" rel="noreferrer">Instagram  </a>
          </div>
 

      <p className="footer-text">&copy; 2025, All Rights Reserved. <br/>
      This website was created for educational purposes by:  <br/>
      1. Julius  <br/>  
      2. Collins <br/> 
      3. Rayjon  <br/>
      4. Khadar  <br/>
      5. Kelvin  <br/>
      6. Hosea
    </p> 


     
    
  <ul>
    <li>
    <Link to="/comments">Comments</Link>
    </li>
  </ul>

    </footer>

  );
}

export default Footer;