import React from 'react';

const Avatar = () =>{
    return (
        <div className="AvatarClass">
            {/* Avatar */}
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <img src="/static/img/myavatar.jpg" className="img-fluid rounded-circle" alt="Nilutpal Boruah" />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row">
                <div className="col-md-12 heit-5"></div>	
            </div>
            {/* Name */}
            <div className="row">
                <div className="col-md-12">
                    <span className="myname">Nilutpal Boruah</span>
                </div>
            </div>
            {/* Social Media Links */}
            <div className="row">
                <div className="col-md-12">
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
            </div>
        </div>
      );
};

export default Avatar;