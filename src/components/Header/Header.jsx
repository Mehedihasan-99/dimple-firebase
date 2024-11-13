import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div style={{ 'display': 'flex', 'gap': '20px', 'justifyContent': 'center', 'alignItems': 'center' }}>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/login" >login</NavLink>
        </div>
    );
};

export default Header;