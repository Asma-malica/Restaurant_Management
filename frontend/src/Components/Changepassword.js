import {Component} from 'react';
import './Changepassword.css'

class Otppage extends Component{
    render(){
        return(
            <div className = "login">
                <nav>
                    <a href="/" id="name"><img src={require("D:/clg_proj/restaurant-project/frontend/src/logo.png")} alt="Profile" className = "profile"></img></a>
                    <div>
                        <ul id="btns">
                            <li><a href="/">Home</a></li>
                            <li><a href="/booktable">Book a table</a></li>
                            <li><a href="/preorder">Pre-order Food</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                </nav>

                <div className = "container2">
                        <div className = "naming">
                            <h1>Fresh and Delicious</h1>
                            <h1>foods are ready</h1>
                            <p>Traditional Indian and Chinese food to delight the whole family.</p>

                            <div className = "home-buttons">
                                <button className = "buttons"><a href = "booktable">BOOK A TABLE</a></button>
                                <button className = "buttons"><a href = "preorder">PRE-ORDER</a></button>
                            </div>
                        </div>
                        <img src={require("D:/clg_proj/restaurant-project/frontend/src/Components/Sources/login.png")} alt="briyani" className = "booktable-image"></img>
                </div>

                <div className = "change-container">
                    <h1>Change Password</h1>

                    <form className = "change-form">
                        <div className = "change-input">
                            <input type = "password" placeholder="New Password"/>
                        </div><br/>

                        <div className = "change-input">
                            <input type = "Password" placeholder="Confirm new password"/>
                        </div><br/>

                        <div className = "login-bottom">
                            <div className = "login-show">
                                <input type = "checkbox"></input>
                                <label />Show password
                            </div>
                        </div>


                        <div className = "change-button">
                            <button type = "submit"><a href>Submit</a></button>
                        </div>
                    </form>
                </div>

                <div className = "footer-page">
                    <div className = "footer1">
                        <p>Turban Tudka</p>
                    </div>

                    <div>
                        <ul className = "footer2">
                        <li><a href="/">Home</a></li>
                            <li><a href="/booktable">Book a table</a></li>
                            <li><a href="/preorder">Pre-order Food</a></li>
                            <li><a href="/forget">forget</a></li>
                        </ul>
                    </div>

                    <div className = "footer3">
                        <p>+91 989898989 / +91 9696969696</p>
                        <p>mail@tubantudka.com</p>
                    </div>

                    <div className = "footer4">
                        <p>Copyrights &copy; TURBAN TUDKA</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Otppage
