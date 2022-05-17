import MasterPageBasic from "@/website/master/MasterPageBasic"
import GalleryPage from "@/website/pages/GalleryPage"
export default function Gallery() {
  return (
      <>
          <MasterPageBasic pageName={"Gallery"}>
              <GalleryPage/>
        </MasterPageBasic>
      </>
  )
}
