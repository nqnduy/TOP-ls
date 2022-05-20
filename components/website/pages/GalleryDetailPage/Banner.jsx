import ButtonPlay from "@/website/common/Button/ButtonPlay";
import ImageWrap from "@/website/common/ImageWrap";
export default function Banner() {
    return (
        <div className="container flexCOL flexSB" style={{ marginBottom: 80 }}>
            <h3 className="txMain bold fz-36 textALC" style={{ marginBottom: 40 }}>
                Distract by the readable content of a page
            </h3>
            <div style={{ width: "100%", position: "relative" }}>
                <ImageWrap src="/images/prv1.png" gif="/images/gif/1268x713.gif" />
                <ButtonPlay position="center" />
            </div>
        </div>
    );
}
