import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
return (
    <footer>
        <p>Made with <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> by team 4</p>
    </footer>
);
};

  export default Footer;