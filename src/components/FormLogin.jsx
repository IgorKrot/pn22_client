function FormLogin () {
   return ( 
      <div className="formLogin">
         <div className="formLogin_container">
            <div className="formLogin_title">
               <div className="formLogin_title_text">Login</div>
            </div>
            <div className="formLogin_body">
               <div className="formLogin_body_input">
                  <input type="text" placeholder="enter email" className="formLogin_body_input_email"></input>
               </div>
               <div className="formLogin_body_input">
                  <input type="text" placeholder="enter password" className="formLogin_body_input_password"></input>
               </div>
            </div>
            <div className="formLogin_setting_element">
                  <input type="checkbox" value="check3" className="formLogin_setting_check1"></input>
                  <label htmlFor="formLogin_setting_check1">sdsds sdsds dsd s ds</label>
            </div>
            <div className="formLogin_button">
               <div className="formLogin_button_text">Send</div>
            </div>
         </div>
      </div>
   );
}

export default FormLogin ;