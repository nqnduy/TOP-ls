import ImageWrap from "../ImageWrap";

function MemberCard({ image, name, role }) {
    return (
        <div className="MemberCard">
            <ImageWrap src={image} gif="/images/gif/258x370.gif" />
            <div style={{ textAlign: "center", marginTop: 20 }}>
                <p className="txMain bold fz-21" style={{ marginBottom: 14 }}>
                    {name}
                </p>
                <p className="txMain upc thin">{role}</p>
            </div>
        </div>
    );
}

export default MemberCard;
