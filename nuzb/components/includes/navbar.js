"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 1);
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    return (
        <div class="navBG">
            <div className="container nav">
                <div className="col7 colL7 colM4"></div>
                <div className="navOptions col5 colL5 colM4">
                    <p>
                        <a style={{ color: isScrolled ? "#EDEDED" : "#111111" }} href="/">Home</a>
                    </p>
                    <p>
                        <a style={{ color: isScrolled ? "#EDEDED" : "#111111" }} href="/music">Music</a>
                    </p>
                    <p>
                        <a style={{ color: isScrolled ? "#EDEDED" : "#111111" }} href="/about">Shows</a>
                    </p>
                    <p>
                        <a style={{ color: isScrolled ? "#EDEDED" : "#111111" }} href="/contact">Contact</a>
                    </p>
                </div>
            </div>
        </div>
        
    );
  }