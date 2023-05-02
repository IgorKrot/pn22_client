import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {setEmail, setPassword, getUserData} from '../../../redux/reduxSlices/userSlice'
import {useEffect, useState} from 'react';
import {validateRegInputs} from "../../../utils/validate/validateRegInputs"

function FormReg () {
   let navigate = useNavigate();
   const dispatch = useDispatch();
   const [errorEmail, setErrorEmail] = useState("");
   const [errorPassword, setErrorPassword] = useState("");

   const {password, email, isLogin, isReg} = useSelector((state) => state.userdata);
console.log(errorEmail)
   const onSubmit = (e) => {
      setErrorEmail("")
      setErrorPassword("")
      if (validateRegInputs(email, password, setErrorEmail, setErrorPassword)) {
      dispatch(getUserData({email, password, isReg}));
      e.preventDefault();
      console.log("validateRegInputs")
      }
   }

   useEffect(() => {
      if (isLogin) {navigate("/");}
   }, [isLogin]);

   return ( 
      <div className="formLogin" data-testid="page registration">
         <div className="formLogin_container">
            <div className="formLogin_title">
               <div className="formLogin_title_text">Registration</div>
            </div>
            <div className="formLogin_body">
               <div className="formLogin_body_input">
                  <input type="text" placeholder="enter email" className="formLogin_body_input_email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))}></input>
               </div>
               {errorEmail ? <div>{errorEmail}</div> : null}
               <div className="formLogin_body_input">
                  <input type="text" placeholder="enter password" className="formLogin_body_input_password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))}></input>
               </div>
               {errorPassword ? <div>{errorPassword}</div> : null}
            </div>
            <div className="formLogin_setting_element">
                  <input type="checkbox" value="check3" className="formLogin_setting_check1"></input>
                  <label htmlFor="formLogin_setting_check1">remember me pleace</label>
            </div>
            <div className="formLogin_button">
               <div className="formLogin_button_text" onClick={onSubmit}>Go Reg</div>
            </div>
         </div>
      </div>
   );
}

export default FormReg ;