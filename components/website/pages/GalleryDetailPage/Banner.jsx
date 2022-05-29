import ButtonPlay from "@/website/common/Button/ButtonPlay";
import ImageWrap from "@/website/common/ImageWrap";
export default function Banner() {
    return (
        <>
            <div className="GalleryBanner">
                <div className="container">
                    <h3 className="headline" style={{ marginBottom: 40 }}>
                        Distract by the readable content of a page
                    </h3>
                    <div>
                        <ImageWrap src="/images/prv1.png" gif="/images/gif/1268x713.gif" />
                        <ButtonPlay position="center" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .GalleryBanner {
                    .container {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        flex-direction: column;

                        margin-bottom: 80px;
                        .headline {
                            margin-bottom: 40px;
                            text-align: center;
                        }
                        > div {
                            position: relative;
                            width: 100%;
                        }
                    }
                }
            `}</style>
        </>
    );
}
