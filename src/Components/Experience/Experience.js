import React from "react";
import './Experience.css';
import { motion } from "framer-motion";

function Experience() {
    const transition = {duration : 3, type : 'spring'}
    return (
        <motion.div
            initial={{ marginTop: '-56px' }}
            whileInView={{ marginTop: '0px' }}
            transition={transition}
            style={{ marginTop: '-56px' }}
            className="experience" id="Experience">
            <div className="achievement">
                <div className="circle">1.5+</div>
                <span>Yıllık </span>
                <span>Deneyim</span>
            </div>
            <div className="achievement">
                <div className="circle">2+</div>
                <span>Tamamlanan </span>
                <span>Projeler</span>
            </div>
            <div className="achievement">
                <div className="circle">3+</div>
                <span>Sirket </span>
                <span>Projeleri</span>
            </div>
        </motion.div>
    )
}

export default Experience