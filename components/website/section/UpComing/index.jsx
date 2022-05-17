import TextTitle from "@/website/common/TextTitle";
import GridCard from "@/website/section/UpComing/GridCard";
import ListCard from "@/website/section/UpComing/ListCard";

function Upcoming({ isList = true, haveTitle = true, pTop = 100 }) {
    return (
        <>
            <div className="Upcoming">
                <div className="container">{haveTitle && <TextTitle small_text="Discover" big_text="Upcoming shows" />}</div>
                {isList ? <ListCard /> : <GridCard />}
            </div>
            <style jsx global>{`
                .Upcoming {
                    position: relative;
                    padding-top: ${pTop}px;
                    .container {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                    }
                }

                @media (max-width: 500px) {
                    .Upcoming {
                        .container {
                            .TextTitle {
                                text-align: center;
                                margin: 0 auto;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default Upcoming;
