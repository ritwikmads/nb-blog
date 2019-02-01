import React from 'react';
import Avatar from './components/avatar';
import Navlinks from './components/navlinks';
import Copyright from './components/copyright';

const Navbar = () =>{
    return (                  
        <div class="col-md-4 d-none d-md-block jus-content bgcol-blue">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12 heit-50"></div>
                        </div>
                        <Avatar />
                        <Navlinks />
                        <Copyright />
                    </div>
                </div>					
            </div>
        </div>        
      );
};

export default Navbar;
