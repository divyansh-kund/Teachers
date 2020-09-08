import React from 'react';

const Footer1 =()=>{
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p className="text-justify"> <i>Made with love</i> By Divyansh kund and Aryan Nigam</p>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Categories</h6>
                    <ul className="footer-links">
                    <li><a href="#SchoolT">School Teachers</a></li>
                    <li><a href="#CodeT">Code teachers</a></li>
                    <li><a href="#OnlineT">Online Teachers</a></li>
                    <li><a href="#Header">Header</a></li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                    <li><a href="https://twitter.com/codediv16">Twitter</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="https://github.com/divyansh-kund">Github</a></li>
                    </ul>
                </div>
                </div>
                <hr/>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
                <a href="#"> Divyansh and Aryan</a>.
                    </p>
                </div>
                </div>
            </div>
    </footer>   
);
}

export default Footer1