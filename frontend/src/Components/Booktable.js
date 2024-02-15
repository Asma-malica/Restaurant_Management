import {Component} from 'react';
import './Booktable.css';
import axios from 'axios';
class Booktable extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          phone: '',
          date:'',
          room:'',
          time: '',
          count: '',
        };
      }

      handleSubmit = async () => {
        const { name, phone, date, room, time, count } = this.state;
            try {
              await axios.post('http://localhost:3003/booking', { name, phone, date, room, time, count });
            } catch (error){}
        }

      handleNameChange = (event) => {
        this.setState({ name: event.target.value });
      };
      handlePhoneChange = (event) => {
        this.setState({ phone: event.target.value });
      };
      handleDateChange = (event) => {
        this.setState({ date: event.target.value });
      };
      handleRoomChange = (event) => {
        this.setState({ room: event.target.value });
      };
      handleTimeChange = (event) => {
        this.setState({ time: event.target.value });
      };
      handleCountChange = (event) => {
        this.setState({ count: event.target.value });
      };

    render(){
        return(
            <div>
                <div className = "booktable">
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
                        <img src={require("D:/clg_proj/restaurant-project/frontend/src/Components/Sources/booktable.png")} alt="briyani" className = "booktable-image"></img>
                    </div>
                </div>

                <div className = "booking-head">
                    <div className = "booking-container">
                        <h1>Book your table here</h1>

                        <form className = "booking-form">
                            <div className = "booking-input">
                                <input type = "text" placeholder="Full Name" value={this.state.name} onChange={this.handleNameChange} />
                            </div>
                        
                        <div className = "booking-input">
                            <input type = "text" placeholder="Phone Number" value={this.state.phone} onChange={this.handlePhoneChange}/>
                        </div>
                        
                        <div className = "booking-input">
                            <input type = "date" placeholder="Date" value={this.state.date} onChange={this.handleDateChange}/>
                        </div>

                        <div className = "booking-input">
                            <select name="ac" value={this.state.room} onChange={this.handleRoomChange}>
                                <option value="AC/Non Ac-select">Select AC/Non AC</option>
                                <option value="Non AC">AC</option>
                                <option value="AC">Non AC</option>
                            </select>
                        </div>

                        <div className = "boooking-input">
                            <input type = "time" placeholder="Timing" value={this.state.time} onChange={this.handleTimeChange}/>
                        </div><br></br>

                        <div className = "boooking-input">
                            <input type = "number" placeholder="How Many Persons?" min = "1" value={this.state.count} onChange={this.handleCountChange}/>
                        </div>
                        <div className = "booking-button">
                            <button type = "submit" value = "BOOK TABLE" onClick={this.handleSubmit}>Book Now</button>
                        </div>
                    </form>
                </div><br/><br/><br/><br/><br/><br/>

                <div className = "footer-page">
                    <div className = "footer1">
                        <p>Turban Tudka</p>
                    </div>

                    <div>
                        <ul className = "footer2">
                        <li><a href="/">Home</a></li>
                            <li><a href="/booktable">Book a table</a></li>
                            <li><a href="/preorder">Pre-order Food</a></li>
                            <li><a href="/login">Login</a></li>
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
            </div>
        )
    }
}

export default Booktable

