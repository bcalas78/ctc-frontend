import "./footer.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




function Footer() {
  
  return (
    <div className="footer">
        <div className="footer-links">
            <a href="#"><InstagramIcon /></a>
            <a href="#"><FacebookIcon /></a>
            <a href="#"><XIcon /></a>
            <a href="#"><LinkedInIcon /></a>
        </div>
        <div className="footer-copyright">
            This footer is made with <FavoriteIcon className="favorite" /> by <CopyrightIcon className="copyright" /> CTC
        </div>
    </div>
  );
}

export default Footer;