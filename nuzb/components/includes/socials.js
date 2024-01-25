"use client";

import Link from "next/link";
import { FaSpotify, FaTiktok, FaApple, FaInstagram } from "react-icons/fa";

export default function Socials() {
    return (
        <div class="container socialsList">
            <div className="col9"></div>
            <div className="socials col3">
                <a href="#"><FaSpotify className="customIcon" /></a>
                <a href="#"><FaTiktok className="customIcon" /></a>
                <a href="#"><FaApple className="customIcon" /></a>
                <a href="#"><FaInstagram className="customIcon" /></a>
            </div>
        </div>
    );
  }