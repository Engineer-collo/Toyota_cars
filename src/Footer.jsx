import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
        
      <div className="social-media">
        <h3>Follow us.</h3> 
            <a href="#" target="_blank" rel="noreferrer"><img src="https://i.pinimg.com/236x/4a/4c/22/4a4c224a0c6667178bebdfa3b6bdb92b.jpg" alt="Facebook icon" className="iconImg"/>Facebook</a> <br/>
            <a href="#" target="_blank" rel="noreferrer"><img src="https://i.pinimg.com/236x/2f/b9/09/2fb909b74a854f0715e64dda5825990d.jpg" alt="Facebook icon" className="iconImg"/>Twitter</a>  <br/>
            <a href="#" target="_blank"><img src="https://i.pinimg.com/236x/0c/78/d0/0c78d03cbfa19d5f3d7ad1b6e49f957b.jpg" alt=" icon" className="iconImg"/>LinkedIn</a> <br/>
            <a href="#" target="_blank"><img src="https://i.pinimg.com/236x/19/42/d5/1942d5deb0f788e6228054cd92767ff6.jpg" alt="instagram icon" className="iconImg"/> Instagram</a>

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