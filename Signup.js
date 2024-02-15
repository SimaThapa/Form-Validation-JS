import React from 'react';
// import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Signup.css";
import SignUp from '../assets/images/signup.avif'
import botImg from "../assets/images/bot-image.webp";

function Signup() {


  function signUpValidadtion(){
    var name=document.signUp.f_name.value;
    //  var Email=document.signUp.email.value;
    var password=document.signUp.password.value;
    var confirmPassword=document.signUp.conPassword.value;
   
    // var EmailValidation=/^[a-zA-Z0-9]@[a-z].[a-z].[a-z]$/;

    if(name===null || name===""){
      alert("name cant be empty");
      return
    }
    else if(password.length<6){
      alert("Password must be at leat 6");
      return
    }else if(password!==confirmPassword){
       alert("password not match");
       return;
    }else{
    // else if(Email.value.match(EmailValidation)) {
    //    return
    // } else if({
    //     Email:alert("Invalid email")

    // } )
      alert("Successfully Sign Up!");
      
    }

  }
  // const[email, setEmail]=useState('');
  // const [password, setPassword]=useState('');
  // const [name, setName]=useState('');

  //image upload stage
  // const [image, setImage]=useState(null);
  // const [uploadingImg, setUploadingImg]=useState(false);
  // const [imagePreview, setImagePreview]=useState(null);

  // function validateImg(e) {
  //   const file=e.target.files(0);
  //   if(file.size >= 1048576){
  //     return alert("Max file size is 1MB");
  //   }
  //   else{
  //     setImage(file);
  //     setImagePreview(URL.createObjectURL(file));
  //   }
  // }

  // async function uploadImage(){
  //     const data = new FormData();
  //     data.append('file',image);
  //     data.append('upload_preset','ac7qwbtg');
  //     try{
  //       setUploadingImg(true);
  //       let res=await fetch('https://api.cloudinary.com/v1_1/dilfeu7jz/image/upload',{
  //         method:'post',
  //         body: data,
  //       });
  //       const urlData=await res.json();
  //       setUploadingImg(false);
  //       return urlData.url;
  //     } catch (error) {
  //       setUploadingImg(false);
  //       console.log(error);
  //     }
  // }

  // async function handleSignup(e) {
  //   e.preventDefault();
  //   if(!image) return alert("Please upload your profile picture");
  //   const url=await uploadImage(image);
  //   console.log(url);
  //   //signup the user
  // }

  return (
    <div className='signUp_main'>
      <div className='SignUp'>
         <h2>Create Account</h2>
         {/* <img src={botImg} height="90px" width="90px"  alt='profile' style={{
          marginLeft:"300px",
          marginTop:"50px",
          borderRadius:"60px"

         }}/> */}
       <div className="signup-profile-pic_container">
         <img src={ botImg } className="signup-profile-pic" height="90px" width="90px"  style={{
          marginLeft:"250px",
          marginTop:"50px",
          borderRadius:"60px"

         }} alt='img'/>
          
              <i className='fas fa-plus-circle add-picture-icon' ></i>
              
              {/* <input type="file" id="image-upload" hidden accept='image/png' onChange={validateImg}></input> */}
       </div>

         <form name='signUp'>
           
            <label >Full Name</label>
            <input type="text" name="f_name"  />
            <label>Email</label>
            <input type="email" name="email"  placeholder='example@gmail.com'/>
            <label>password</label>
            <input type="password" name="password" />
            <label> Confirm password</label>
            <input type="password" name="conPassword" />

            
            <input type='submit' className='signUp_btn' value="SignUp" onClick={()=>{signUpValidadtion()}}/>
          
          
            <p style={{ 
                
                textAlign:"center",
                fontSize:"25px",
                paddingTop:"50px"
                
                }}>
                    Already have an Account? <Link to="/login">Login</Link>
              </p>  
         </form>
         
      </div>
 
          
             
          <div className='image_section'>
                  <img src={SignUp} alt='signUp'/>
            </div>    
           
          
   </div>
  

 );
}

export default Signup;