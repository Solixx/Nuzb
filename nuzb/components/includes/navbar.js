"use client";

export default function Navbar() {
    return (
        <div class="navBG">
            <div className="container nav">
                <div className="col7 colL7 colM4"></div>
                <div className="navOptions col5 colL5 colM4">
                    <p>
                        <a href="/">Home</a>
                    </p>
                    <p>
                        <a href="/music">Music</a>
                    </p>
                    <p>
                        <a href="/about">Shows</a>
                    </p>
                    <p>
                        <a href="/contact">Contact</a>
                    </p>
                </div>
            </div>
        </div>
        
    );
  }