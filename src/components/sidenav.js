import React from 'react';
import { Link } from "react-router-dom";


class SideNav extends React.Component {
    render() { 
        return ( 
            <div className="sidenav">
                <div class="navItem">
                <Link to='/' class="navlink">Dashboard</Link>
                </div>
                <div class="navItem">
                <Link to='/Addproduct' class="navlink">Add Product</Link>
                </div>
                <div class="navItem">
                <Link to='/AllProducts' class="navlink">All Products</Link>
                </div>
            </div>
         );
    }
}
 
export default SideNav;