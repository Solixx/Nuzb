"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

import Image from 'next/image';

const BgTitle = ({ title, direction }) => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['end start', 'start end']
    });

    const xTransform = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [0, 0, 0.4, direction]);

    return (
        <div className="latest-realeses-title">
            <motion.h1 ref={container} style={{translateX: xTransform}}>{title}</motion.h1>
        </div>
    );
};

export default BgTitle;