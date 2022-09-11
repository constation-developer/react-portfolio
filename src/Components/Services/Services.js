import React, { useContext } from "react";
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Cv from './kadir-demirel-cv.pdf'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

function Services() {
    const transition = {duration : 3, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id="Services">

            {/* left side */}
            <motion.div
            initial={{marginLeft: '-56px'}}
            whileInView= {{marginLeft: '0px'}}
            transition={transition}
            style={{marginLeft: '-56px'}}
            className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Size Sunacagım</span>
                <span>Hizmetler</span>
                <span>
                    Sizin icin sıfırdan anahtar teslim web sitesi yapabilirim.
                    <br />
                    Sizin isteginiz dogrultusunda Web siteniz icin tasarım yapabilirim.
                </span>
                <a href={Cv} download>
                    <button className="button s-button">CV İndir</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </motion.div>

            {/* right side */}
            <div className="cards">
                <motion.div 
                initial={{left: '50rem'}}
                whileInView={{left: '36rem'}}
                transition={transition}
                style={{ left: '42rem' }}
                className="cards_card"
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Adobe Photoshop, Adobe Ai, Adobe Xd"}
                    />
                </motion.div>
                {/* second card */}
                <motion.div 
                initial={{left: '10rem'}}
                whileInView={{left: '8rem'}}
                transition={transition}
                style={{ top: "12rem", left: '4rem' }}
                className="cards_card"
                >
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, Css, Javascript, Bootstrap, Tailwind Css, React.js"}
                    />
                </motion.div>
                {/* third card */}
                <motion.div 
                initial={{left: '40rem'}}
                whileInView={{left: '31rem'}}
                transition={transition}
                style={{ top: "21rem", left: '37rem' }}
                className="cards_card"
                >
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Figma, Adobe Photoshop, Adobe İllustrator, Adobe XDesign"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>
            </div>


        </div>
    )
}

export default Services