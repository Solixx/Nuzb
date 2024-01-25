"use client";

import Navbar from "@/components/includes/navbar";
import Image from "next/image";
import Socials from "@/components/includes/socials";

export default function Index() {
    return (
        <>
            <section className="indexSection">
                <Navbar />
                <div className="nuzb-title">
                    <h1>NUZB</h1>
                </div>
                <div className="nuzb-image">
                    <Image src={"/images/nuzb.png"} width={1280} height={1280} />
                </div>
                <Socials />
            </section>
        </>
    );
  }