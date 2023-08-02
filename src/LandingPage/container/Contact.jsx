import React from 'react';

import { ReactComponent as ACOSICOn } from '../icon/ACoS-03.svg';
import '../style/landingpage/contact.css'

const Contact = () => {
    return (
        <div className="contact-area">
            <div className='container'>
                <div className="d-flex justify-content-center">

                    <ACOSICOn style={{ height: 50 }} />

                </div>
            
                <div className="d-flex justify-content-center">

                    <h2>Contact us</h2>
                    <br />

                </div>
                <div className="d-flex justify-content-center">

                    <p>Send your questions, suggestions, or feedback.</p>

                </div>

                <form>

                    <div class="form-group">

                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <div class="form-group">

                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    </div>

                    <div class="form-group">

                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Message' rows="5"></textarea>
                    </div>
                    <div className="d-flex justify-content-center">

                        <button type="submit" class="btn btn-primary send-btn">Send message</button>

                    </div>



                </form>

            </div>
        </div>
    );
};

export default Contact;