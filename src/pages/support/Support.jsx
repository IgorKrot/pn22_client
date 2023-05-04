import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import HelmetComponent from "../../commonComponents/helmet/HelmetComponent"
import {validateSupportInputs} from "../../utils/validate/validateSupportInputs"

import {useNavigate} from "react-router-dom";
import {useState} from 'react';

function Support () {
   let navigate = useNavigate();
   const [supportEmail, setSupportEmail] = useState("");
   const [supportMessage, setSupportMessage] = useState("");
   const [errorEmail, setErrorEmail] = useState("");
   const [errorMessage, setErrorMessage] = useState("");
   
   const sendForm = () => {
      if (validateSupportInputs(supportEmail, setErrorEmail, supportMessage, setErrorMessage)) {
      }
   }
   return ( 
      <>
         <HelmetComponent title="Support" />
         <div className="support" data-testid="page support">
            <div className="support_container">
                  <div className="support_description">
                     <div className="support_description_title">If you want to help</div>
                     <div className="support_description_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam modi illo aspernatur quis pariatur tempore dolorem, corrupti saepe alias voluptatem ratione blanditiis atque nesciunt enim, vero illum! Vero, accusamus consequatur?</div>
                  </div>
                  <div className="support_title">
                     <div className="support_title_text">contacts</div>
                  </div>
                  <div className="support_body">
                     <div className="support_sections_text">
                        <div className="support_description_section1">email: test@gmail.com</div>
                        <div className="support_description_section2">telegram: @sdssdsd</div>
                     </div>
                  </div>
                  <div className="support_form">
                     <div className="support_form_title">
                        <div className="support_form_title_text">Send me a massage</div>
                     </div>
                     <div className="contact_form_body">
                        <input type="text" className="contact_form_input_email" placeholder="entry your email" value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)}></input>
                        {errorEmail ? <div className='contact_form_error'>{errorEmail}</div> : null}
                        <textarea type="text" className="contact_form_input_text" placeholder="entry your massage" value={supportMessage} onChange={(e) => setSupportMessage(e.target.value)}></textarea>
                        {errorMessage ? <div className='contact_form_error'>{errorMessage}</div> : null}
                        <div className="contact_form_button">
                           <div className="contact_form_button_text" onClick={sendForm}>send</div>
                        </div>
                     </div>
                  </div>
            </div>
            <KeyboardReturnIcon sx={{ position: 'fixed', bottom: "70px", right: "25px", backgroundColor: "#209CEE", borderRadius: "5px", fontSize: "40px", color: "white", cursor: "pointer" }}
            onClick={() => navigate(-1)} />
         </div>
      </>
   );
}

export default Support ;