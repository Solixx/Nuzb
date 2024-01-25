"use client";

import MusicBox from "./musicBox";
import BgTitle from "./bgTitle";

export default function Music() {
    return (
        <>
            <BgTitle title="Latest Releases" direction={-1400} />
            <div className="container musicList">
                <MusicBox title="Anywhere You Go" artist="NUZB, Merow" imageSrc="/images/anywhere.jpg" isFirst={true} />
                <MusicBox title="Dancin" artist="NUZB, KEYTON" imageSrc="/images/dancin.jpg" isFirst={false} />
            </div>
            <div className="container musicList">
                <MusicBox title="Say Less" artist="NUZB" imageSrc="/images/sayless.jpg" isFirst={true} />
                <MusicBox title="Complicated" artist="NUZB, DigEx, David Shane" imageSrc="/images/complicated.jpg" isFirst={false} />
            </div>
        </>
    );
  }