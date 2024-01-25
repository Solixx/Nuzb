"use client";

export default function Contact() {
    return (
        <>
            <div className=" contact">
                <div className="container">
                    <div className="col3"></div>
                    <div className="col6">
                        <div className="contact-title">
                            <h1>Contact</h1>
                        </div>
                        <div className="contact-form">
                            <form>
                                <div className="form-group">
            
                                    <input type="text" id="name" name="name" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="email" name="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <textarea id="message" name="message" placeholder="Content"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col3"></div>
                    </div>
                </div>
            </div>
        </>
    );
  }