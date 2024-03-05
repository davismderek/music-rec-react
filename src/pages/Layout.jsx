import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const primaryNav = [
    // { title: "Home", url: "/" },
    { title: "My Playlists", url: "/playlists" },
    { title: "Search Lyrics", url: "/lyrics" },
    { title: "My Songs", url: "/songs" },
    // { title: "Login", url: "/account" },
];

const Layout = () => {
    return (
        <>
            <Navigation navItems={primaryNav} />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
