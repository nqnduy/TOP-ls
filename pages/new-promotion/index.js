import MasterPageBasic from "@/website/master/MasterPageBasic";
import NewPromotionPage from "@/website/pages/NewsPromotionPage";
export default function NewsPromotion() {
  return (
          <MasterPageBasic pageName={"News - Promotion"}>
              <NewPromotionPage/>
          </MasterPageBasic>
  );
}
