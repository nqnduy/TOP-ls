import MasterPageBasic from "@/website/master/MasterPageBasic";
import NewDetail from "@/website/section/WhatNew/NewDetail";
import { useRouter } from 'next/router';


export default function NewPromotionDetail() {
  const router = useRouter();
  return (
      <MasterPageBasic pageName={router.query.slug}>
          <NewDetail />
      </MasterPageBasic>
  );
}
