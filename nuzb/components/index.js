"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

import Navbar from "@/components/includes/navbar";
import Image from "next/image";
import Socials from "@/components/includes/socials";

export default function Index() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navbar = useRef(null);
  const socials = useRef(null);
  const nuzb = useRef(null);
  const nuzbText = useRef(null);

  const controls = useAnimation();
  const controlsNuzb = useAnimation();
  const controlsNuzbText = useAnimation();
  const controlsNavbar = useAnimation();
  const controlsSocials = useAnimation();

  useEffect(() => {
    controlsNuzb.start(
      {
        zIndex: "97",
      },
      { duration: 0.3 }
    );
    controlsNuzbText.start(
      {
        fontSize: "256px",
        color: "#EDEDED",
        textShadow:
          "-2px -2px 0 #111111, 2px -2px 0 #111111, -2px 2px 0 #111111, 2px 2px 0 #111111",
      },
      { duration: 0.3 }
    );
    controls.start({ width: "900px" }, { duration: 0.3 });

    navbar.current && controlsNavbar.start({ opacity: 1 }, { duration: 0.3 });
    socials.current && controlsSocials.start({ opacity: 1 }, { duration: 0.3 });

    if (!animationPlayed) {
      setAnimationPlayed(true);
    }
  }, [animationPlayed, controls]);

  return (
    <>
      <section className="indexSection">
        <motion.div
          ref={navbar}
          animate={controlsNavbar}
          style={{ opacity: 0 }}
        >
          <Navbar />
        </motion.div>
        <motion.div
          ref={nuzb}
          animate={controlsNuzb}
          style={{ zIndex: "99" }}
          className="nuzb-title"
        >
          <motion.h1
            ref={nuzbText}
            animate={controlsNuzbText}
            style={{ fontSize: "200px", color: "#111111", textShadow: "none" }}
          >
            NUZB
          </motion.h1>
        </motion.div>
        <div className="nuzb-image">
          <motion.img
            animate={controls}
            initial={{ width: "1280px" }}
            src={"/images/nuzb.png"}
            width={1280}
            height={1280}
          />
        </div>
        <motion.div
          ref={socials}
          animate={controlsSocials}
          style={{ opacity: 0 }}
        >
          <Socials />
        </motion.div>
      </section>
    </>
  );
}
