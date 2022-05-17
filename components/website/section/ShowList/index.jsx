// import NextPrev from "../NextPrev";
import TextTitle from "../../common/TextTitle";
import Previous from "./Previous";

function ShowList() {
    return (
        <div className="PreviousShow">
            <div className="container flexSB">
                <TextTitle small_text="Watch it again" big_text="Previous shows" />
                {/* <NextPrev /> */}
            </div>
            <Previous />
            <style jsx global>{`
                @media (max-width: 500px) {
                    .PreviousShow {
                        .TextTitle {
                            text-align: center;
                            margin: 0 auto;
                        }
                    }
                }
            `}</style>
        </div>
    );
}

export default ShowList;
