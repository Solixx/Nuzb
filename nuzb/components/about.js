import Image from "next/image";

export default function About() {
    return (
        <>
                <div className="container aboutGalery">
                    <div className="col2"></div>
                    <div className="col8">
                        <div className="container about">
                            <div className="col8">
                                <div className="aboutImg aboutImg1">
                                    <Image src={"/images/nuzb.jpg"} width={1440} height={1440} />
                                </div>
                                <div className="aboutImg aboutImg2">
                                    <Image src={"/images/brasil.jpeg"} width={5760} height={3240} />
                                </div>
                                <div className="aboutImg aboutImg3">
                                    <Image src={"/images/withMartin.jpg"} width={1440} height={1800} />
                                </div>
                                <div className="aboutImg aboutImg4">
                                    <Image src={"/images/nuzb2.jpg"} width={1440} height={1080} />
                                </div>
                                <div className="aboutImg aboutImg5">
                                    <Image src={"/images/tml.jpg"} width={1440} height={1796} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col2"></div>
                </div>
        </>
    );
  }