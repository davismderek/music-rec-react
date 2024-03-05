import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="flex flex-row justify-around">
                <Link to="/contact">Contact</Link>
                <p>|</p>
                <Link to="/careers">Careers</Link>
                <p>|</p>
                <Link to="/aboutAddSong">
                    About ADD SONG<span className="title">+</span>
                </Link>
            </footer>
        </>
    );
};

export default Footer;
