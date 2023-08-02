import React from 'react';
import { ReactComponent as ACOSICOn } from '../icon/ACoS-03.svg';
import { ReactComponent as Message } from '../icon/icon-02.svg';
import '../style/landingpage/contact.css'

const Contact = () => {
    return (
        <div className="contact-area">
            <div className='container'>
                <div className="d-flex justify-content-center">
                    <ACOSICOn style={{ height: 50 }} />
                </div>
                <div className="d-flex justify-content-center mt-4 pt-4 mb-4 pb-4">
                    <h2>Contact us</h2>
                    <br />
                </div>
                <div className="d-flex justify-content-center mb-2 pb-2">
                    <p>Send your questions, suggestions, or feedback.</p>
                </div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="message" placeholder='Message' rows="5"></textarea>
                    </div>
                    <div className="d-flex justify-content-center mt-2 pt-3">
                        <button type="submit" className="btn btn-primary send-btn">Send message</button>
                    </div>

                </form>
                <div className="d-flex justify-content-center mt-2 pt-3">
                    <p className='email-name'><Message style={{ height: 20,marginRight:12 }} />info@acos.app</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;