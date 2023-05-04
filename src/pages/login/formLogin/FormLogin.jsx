import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {setEmail, setPassword, getUserData} from '../../../redux/reduxSlices/userSlice'
import {useEffect, useState} from 'react';
import {validateLoginInputs} from "../../../utils/validate/validateLoginInputs"

function FormLogin () {
   let navigate = useNavigate();
   const dispatch = useDispatch();
   const [errorEmail, setErrorEmail] = useState("");
   const [errorPassword, setErrorPassword] = useState("");
   
   const {password, email, isLogin, isReg} = useSelector((state) => state.userdata);

   const sendForm = (e) => {
      setErrorEmail("")
      setErrorPassword("")
      if (validateLoginInputs(email, password, setErrorEmail, setErrorPassword)) {
      dispatch(getUserData({email, password, isReg}));
      e.preventDefault();
      }
   }

   useEffect(() => {
      if (isLogin) {navigate("/");}
   }, [isLogin]);

   return ( 
      <div className="formLogin" data-testid="page login">
         <div className="formLogin_container">
            <div className="formLogin_title">
               <div className="formLogin_title_text">Login</div>
            </div>
            <div className="formLogin_body">
               <div className="formLogin_body_input">
                  <input type="text" placeholder="enter email" className="formLogin_body_input_email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))}></input>
                  {errorEmail ? <div>{errorEmail}</div> : null}
               </div>
               <div className="formLogin_body_input">
                  <input type="text" placeholder="enter password" className="formLogin_body_input_password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))}></input>
                  {errorPassword ? <div>{errorPassword}</div> : null}
               </div>
            </div>
            <div className="formLogin_setting_element">
                  <input type="checkbox" value="check3" className="formLogin_setting_check1"></input>
                  <label htmlFor="formLogin_setting_check1">remember me pleace</label>
            </div>
            <div className="formLogin_button">
               <div className="formLogin_button_text" onClick={sendForm}>Go Login</div>
            </div>
         </div>
      </div>
   );
}

export default FormLogin ;