import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
return (
    <footer>
        <p>Made with <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> by Team 4</p>
    </footer>
);
};

  export default Footer;