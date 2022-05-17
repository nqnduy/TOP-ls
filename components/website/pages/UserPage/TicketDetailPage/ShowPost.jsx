import SocialGroup from "@/common/SocialGroup";
import React from "react";

export default function ShowPost() {
    return (
        <>
            <div className="TicketDetail__post">
                <div className="TicketDetail__post-title txMain bold fz-36">France Rock Music Conference March 2022</div>
                <div className="TicketDetail__post-img">
                    <img src="/images/ticket-post.png" alt="" />
                </div>
                <div className="TicketDetail__post-content txMain purple normal fz-16">
                    Donec urna felis, ultricies sit amet tristique at, elementum sit amet dui. Fusce efficitur euismod dui ac elementum. Aliquam dictum
                    vestibulum velit, id dignissim tortor viverra ut. Cras tristique sapien vel metus imperdiet efficitur. Proin molestie vel augue sed dictum.
                    Nulla facilisi. Vestibulum sed scelerisque neque. Nullam lorem libero, iaculis in nisl eu, imperdiet consectetur ipsum. Duis fermentum risus
                    ac mollis vehicula. Aliquam vitae metus convallis, pharetra mauris ac, finibus enim. Phasellus ex quam, viverra efficitur placerat nec,
                    dignissim a libero. Donec consequat aliquam efficitur. Praesent ut condimentum leo, non tincidunt justo. Maecenas interdum elit nec odio
                    eleifend, quis maximus erat gravida. Donec id porttitor felis. Duis sodales lectus dui, vitae aliquet nisi laoreet eu. Phasellus et velit
                    eget lorem feugiat feugiat eget vitae orci. Morbi pellentesque rutrum rhoncus. Aenean sodales iaculis erat, venenatis rutrum sapien
                    hendrerit eget. Nam eu lacus ut nisl eleifend volutpat id eu est. Suspendisse ut turpis ligula. Etiam urna urna, fermentum ut diam ac,
                    commodo tempus mauris. Proin ac gravida nisi. Vivamus vitae placerat lacus, nec convallis orci. Aenean pulvinar ut tortor id ullamcorper.
                    Donec egestas mi purus, bibendum ornare massa feugiat ac.
                    <br /> <br />
                    <p className="txMain bold blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <br />
                    <ul className="list-style-auto" style={{ marginLeft: 15 }}>
                        <li>Dolor, nulla pellentesque felis ultricies.</li>
                        <li>Amet, massa elementum ornare gravida nunc nec.</li>
                        <li>Adipiscing ipsum sit fermentum sapien at dictumst.</li>
                        <li>Nibh ut nunc, est arcu mollis blandit egestas eget ante.</li>
                        <li>Venenatis ultrices integer risus quis aliquam sagittis consectetur.</li>
                    </ul>
                </div>
            </div>
            <div className="flex" style={{ gap: 38 }}>
                <p className="txMain purple">Share on</p>
                <SocialGroup />
            </div>
            <style jsx>{`
                .TicketDetail__post {
                    padding-bottom: 40px;
                    margin-bottom: 20px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
                    &-title {
                        margin-bottom: 30px;
                    }
                    &-img {
                        overflow: hidden;
                        position: relative;
                        margin-bottom: 30px;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            `}</style>
        </>
    );
}
