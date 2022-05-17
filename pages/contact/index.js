import MasterPageBasic from '@/components/website/master/MasterPageBasic';
import ContactPage from '@/components/website/pages/ContactPage';

export default function Contact(props) {
     return (
         <MasterPageBasic hidePrevButton pageName="Contact">
             <ContactPage/>
         </MasterPageBasic>
     );
}