import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ navItems }) => {
    return (
        <nav>
            <div className="flex flex-row">
                <div className="basis-1/4 text-xl">
                    <Link to="/">
                        ADD SONG<span className="title">+</span>
                    </Link>
                </div>
                <ul className="flex flex-row justify-around basis-1/2">
                    {navItems.map((link, index) => {
                        return (
                            <li key={`${link.title} - ${index}`}>
                                <Link to={link.url}>{link.title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="basis-1/4">
                    <Link to="/account">Login/Create Account</Link>
                </div>
            </div>
        </nav>
    );
};

Navigation.propTypes = {
    navItems: PropTypes.array,
};

export default Navigation;
