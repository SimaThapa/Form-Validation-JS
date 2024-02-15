import React from 'react';
// import React from 'react';
// import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';


function Login() {

  
 
//  writing the javascript form validation

  function handleLogin(){
   
    var FullName=document.form.f_name.value;
    var Password=document.form.password.value;
    
    if(FullName===null||FullName===""){
      alert("Name can't be blank");
      return
    }else if(Password.length<6){
      alert("password must be at least 6 letter");
      return 
    }  
  
  }
  
 
return(
 
<div className='Login_main'>
   <div className='photo_section'></div>

   <div className='Loginform_section'>
         <h2>Sign In an Account</h2>
       
   <form  name="form"  >
           
            <label >Full Name</label>
            <input type="text" name="f_name"  />
            <label>Password</label>
            <input type="password" name="password" />
            <input type='button' className='sub_btn' value="Login"  onClick={()=>{handleLogin()}}/>
              
           </form>
           <div className='py-4'>
              <p style={{ 
                
                textAlign:"center",
                fontSize:"25px"
                }}>
                    Don't have an Account? <Link to="/signup">Signup</Link>
              </p>
           </div>
   </div>
  


</div>

  );
}

export default Login;
