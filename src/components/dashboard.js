import React from 'react';
import SideNav from './sidenav';

class Dashboard extends React.Component {

    render() { 
        return (
            <div> 
            <SideNav></SideNav>
            <div>
            <h1 style={{marginTop: 0 + 'px'}}>This is dashboard page</h1>
            <hr></hr>
            <h2>Graph will be displayed here!!</h2>
            </div>
            </div>
         );
    }
}
 
export default Dashboard
