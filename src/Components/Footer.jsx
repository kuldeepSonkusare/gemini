
import logo from '../Assets/images/logo.png';
import '../Assets/css/Footer.css';
function Footer(props) {
    return (
        <div className="container-fluid bg-color">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} alt='img' />
                    <p className="text-align">
                        AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.


                    </p>
                </div>

                <div className="col-md-3">


                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4 footer-font">COMPANY</h5>
                    <ul class="list-unstyled m-20">
                        <li>
                            Home
                        </li>
                        <li>
                            Placements
                        </li>
                        <li>
                            Corporate Training
                        </li>
                        <li>Blog</li>
                    </ul>

                </div>

                <div className="col-md-3">
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4 footer-font">TRENDING COURSES</h5>
                    <ul class="list-unstyled m-20">
                        <li>
                            UI Development Course

                        </li>
                        <li>
                            Angular JS Course
                        </li>
                        <li>
                            React JS Course
                        </li>
                        <li>Python Course</li>
                    </ul>
                </div>

                <div className="col-md-3">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4 footer-font">CONTACT INFO</h5>
                    <ul class="list-unstyled m-20">
                        <li>
                        #1, 4th Main Rd, Extension, Ayyappa Layout, Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037

                        </li>
                        <li>
                        +91 8151000080 / 8431040457
                        </li>
                        <li>
                        info@achieversit.com
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Footer;