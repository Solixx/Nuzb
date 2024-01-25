"use client";

import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';

import Image from 'next/image';

const MusicBox = ({ title, artist, imageSrc, isFirst }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end 0.7"]
    });

    return (
        <motion.div ref={container} style={{opacity: scrollYProgress}} className={`musicBox col6 ${isFirst ? ' musicBoxFirst' : ''}`}>
        <div className="musicInfo">
            <h1>{title}</h1>
            <p>{artist}</p>
        </div>
        <div className="musicImage">
            <Image src={imageSrc} width={1280} height={720} />
        </div>
        </motion.div>
    );
};

export default MusicBox;