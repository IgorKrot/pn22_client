import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import HelmetComponent from "../../commonComponents/helmet/HelmetComponent"
import {validateContactsInputs} from "../../utils/validate/validateContactsInputs"

import {useNavigate} from "react-router-dom";
import {useState} from 'react';

function Contacts () {
   let navigate = useNavigate();
   const [contactsEmail, setContactsEmail] = useState("");
   const [contactsMessage, setContactsMessage] = useState("");
   const [errorEmail, setErrorEmail] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const sendForm = () => {
      if (validateContactsInputs(contactsEmail, setErrorEmail, contactsMessage, setErrorMessage)) {
      }
   }
   return ( 
      <>
         <HelmetComponent title="Account" />
         <div className="contacts" data-testid="page contacts">
            <div className="contacts_container">
                  <div className="contacts_title">
                     <div className="contacts_title_text">Contacts</div>
                  </div>
                  <div className="contacts_body">
                     <div className="contacts_sections_text">
                        <div className="contacts_description_section1">email: test@gmail.com</div>
                        <div className="contacts_description_section2">telegram: @sdssdsd</div>
                     </div>
                  </div>
                  <form className="contacts_form" method="post">
                     <div className="contacts_form_title">
                        <div className="contacts_form_title_text">Send me a massage</div>
                     </div>
                     <div className="contact_form_body">
                        <input type="text" className="contact_form_input_email" placeholder="entry your email" value={contactsEmail} onChange={(e) => setContactsEmail(e.target.value)}></input>
                        {errorEmail ? <div className='contact_form_error'>{errorEmail}</div> : null}
                        <textarea type="text" className="contact_form_input_text" placeholder="entry your massage" value={contactsMessage} onChange={(e) => setContactsMessage(e.target.value)}></textarea>
                        {errorMessage ? <div className='contact_form_error'>{errorMessage}</div> : null}
                        <div className="contact_form_button">
                           <div className="contact_form_button_text" onClick={sendForm}>send</div>
                        </div>
                     </div>
                  </form>
                  <div className="contacts_social">
                  <a href="https://facebook.com/igor.krotov89" target="_blank" data-testid="facebook link">
                     <div className="contacts_social_img_fb"><FacebookIcon fontSize="inherit" color="inherit" /></div>
                  </a>
                  <a href="https://t.me/@kamrad911" target="_blank" data-testid="telegram link">
                     <div className="contacts_social_img_telegram"><TelegramIcon fontSize="inherit" color="inherit" /></div>
                  </a>
                  <a href="https://www.linkedin.com/in/igor-krotov-76b02a144/" target="_blank" data-testid="linkedin link">
                     <div className="contacts_social_img_linkedin"><LinkedInIcon fontSize="inherit" color="inherit" /></div>
                  </a>
                  </div>
            </div>
            <KeyboardReturnIcon sx={{ position: 'fixed', bottom: "70px", right: "25px", backgroundColor: "#209CEE", borderRadius: "5px", fontSize: "40px", color: "white", cursor: "pointer" }}
            onClick={() => navigate(-1)} />
         </div>
      </>
   );
}

export default Contacts ;