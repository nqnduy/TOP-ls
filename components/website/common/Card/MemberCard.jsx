import ImageWrap from "../ImageWrap";

function MemberCard({ data }) {
    const { image, name, role } = data;
    return (
        <>
            <div className="MemberCard">
                <ImageWrap src={image} gif="/images/gif/258x370.gif" />
                <div style={{ textAlign: "center", marginTop: 20 }}>
                    <p className="headline" style={{ marginBottom: 14 }}>{name}</p>
                    <p className="headlineSmall">{role}</p>
                </div>
            </div>
            <style jsx>{`
                .MemberCard {
                    .headline {
                        font-size: 21px;
                        line-height: 32px;

                        /*  Responsive   */
                        @media (max-width: 1220px) {
                            font-size: 19px;
                            line-height: 28px;
                        }
                        @media (max-width: 1024px) {
                            font-size: 17px;
                            line-height: 26px;
                        }
                        @media (max-width: 830px) {
                            font-size: 16px;
                            line-height: 26px;
                        }
                    }
                    .headlineSmall{
                        color: #fff;
                    }
                }
            `}</style>
        </>
    );
}

export default MemberCard;
