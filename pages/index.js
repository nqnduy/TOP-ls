import MasterPageBasic from '@/components/website/master/MasterPageBasic';
import Homepage from "@/components/website/pages/Homepage";

export default function Home(props) {
	return (
		<MasterPageBasic hidePrevButton pageName="Homepage">
			<Homepage/>
		</MasterPageBasic>
	);
}
