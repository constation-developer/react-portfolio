import React, { useContext } from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import GlassesImoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Intro() {

    const transition = { duration: 3, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <motion.div
                initial={{ marginLeft: '-56px' }}
                whileInView={{ marginLeft: '0px' }}
                transition={transition}
                style={{ marginLeft: '-56px' }}
                className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Selam! Ben</span>
                    <span>Kadir Demirel</span>
                    <span>Web tasarımı ve kodlama konusunda deneyime sahip Frontend Developer.</span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button i-button">İletisim</button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/constation-developer" target="_blank">
                        <img src={Github} alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/kadir-demirel-b2b0bb1bb/" target="_blank">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://www.instagram.com/kadir.demirel7/?__coig_restricted=1" target="_blank">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </motion.div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                    initial={{ left: '-36%', marginLeft: '-40px' }}
                    whileInView={{ left: '-24%', marginLeft: '0px' }}
                    transition={transition}
                    style={{ marginLeft: '-40px' }}
                    src={GlassesImoji} />
                <motion.div
                    initial={{ top: '-4%', left: '74%', marginLeft: '80px' }}
                    whileInView={{ left: '68%', marginLeft: '20px' }}
                    transition={transition}
                    style={{ top: '-4%', left: '78%', marginLeft: '50px' }}
                    className='floating-div'
                >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ top: '18rem', marginLeft: '-40px' }}
                    whileInView={{ left: '0rem', marginLeft: '0px' }}
                    transition={transition}
                    style={{ top: '18rem', left: '-4rem', marginLeft: '-40px' }}
                    className='floating-div'
                >
                    <FloatingDiv image={Thumbup} txt1='UI/UX' txt2='Tasarım' />
                </motion.div>
                {/* Blur Divs */}
                <div className="blur" style={{ background: 'rgba(238, 210, 255)' }}></div>
                <div className="blur"
                    style={{
                        background: '#C1F5FF',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem;'
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Intro