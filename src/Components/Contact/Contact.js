import React, { useContext, useRef, useState } from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

function Contact() {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x80ifeh', 'template_hu4ijro', form.current, 'so1QEimEcMj082Mbv')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="contact-form" id="Contact">
            <div className="w-left">
                <div className="span">
                    <span style={{ color: darkMode ? 'white' : '' }} >Mesaj Gönderip</span>
                    <span>Bana Ulasabilirsiniz</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="İsim" />
                    <input type="email" name="user_email" className="user" placeholder="E-mail" />
                    <textarea name="message" className="user" placeholder="Mesajınız.." />
                    <input type="submit" value="Gönder" className="button" />
                    <span className="contact-send-message" style={{ color: darkMode ? 'white' : '' }}>{done && "İletisime Gectiginiz icin Tesekkürler!"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>

        </div>
    )
}

export default Contact