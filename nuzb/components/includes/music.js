import Image from "next/image";

export default function Music() {
    return (
        <>
            <div className="latest-realeses-title">
                <h1>Latest Releases</h1>
            </div>
            <div className="container musicList">
                <div className="musicBox musicBoxFirst col6">
                    <div className="musicInfo">
                        <h1>Anywhere You Go</h1>
                        <p>NUZB, Merow</p>
                    </div>
                    <div className="musicImage">
                        <Image src={"/images/anywhere.jpg"} width={1280} height={720} />
                    </div>
                </div>
                <div className="musicBox col6">
                    <div className="musicInfo">
                        <h1>Dancin</h1>
                        <p>NUZB, KEYTON</p>
                    </div>
                    <div className="musicImage">
                        <Image src={"/images/dancin.jpg"} width={1280} height={720} />
                    </div>
                </div>
            </div>
            <div className="container musicList">
                <div className="musicBox musicBoxFirst col6">
                    <div className="musicInfo">
                        <h1>Say Less</h1>
                        <p>NUZB</p>
                    </div>
                    <div className="musicImage">
                        <Image src={"/images/sayless.jpg"} width={1280} height={720} />
                    </div>
                </div>
                <div className="musicBox col6">
                    <div className="musicInfo">
                        <h1>Complicated</h1>
                        <p>NUZB, DigEx, David Shane</p>
                    </div>
                    <div className="musicImage">
                        <Image src={"/images/complicated.jpg"} width={1280} height={720} />
                    </div>
                </div>
            </div>
        </>
    );
  }