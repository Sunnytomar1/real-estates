import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import {useHistory} from 'react-router-dom'
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import axios from 'axios';

//import { useHistory } from 'react-router-dom';


function SignUp() {
  //const history = useHistory();
 const[user,setUser] = useState({
name:"",
email:"",
phone:"",
work:"",
password:"",
cpassword:""

 })
   
const handleInputs = e =>{

    const{ name,value }=e.target
    //console.log(name,value);
    setUser({
        ...user, [name]: value
    })
}


const register= ()=>{
    const {name,email,phone,work,password,cpassword} =user
  //if(name && email && phone && work && password &&cpassword && (password === cpassword)){
  //alert("Registration successful")
   axios.post("http://localhost:9000/register", user)
  .then( res => {
      alert(res.data.message)
      //history.push("/SignIn")
  })
  

  //}else{
   //alert("invalid")
  //}

    
}
    
    
    
  


    return (
        <Container>
         {console.log("User",user)}   
          <Form  >


<Left>

<Heading>
    Sign up
</Heading>





<First>
<PeopleAltIcon/>
<input   className="i1" type="text"  name="name" value={user.name} onChange={handleInputs}
 placeholder="name" autocomplete="off"

/>
</First>

<Second>
<EmailIcon/>
<input     className="i2" type="text" name="email" value={user.email} onChange={handleInputs}
 placeholder="email" autocomplete="off"

/>
</Second>

<Third>
<PhoneIcon/>
<input  className="i3" type="number" name="phone" value={user.phone} onChange={handleInputs} placeholder="phone" autocomplete="off"

/>
</Third>

<Fourth>
<InstagramIcon/>
<input   className="i4" type="text"  name="work" value={user.work} onChange={handleInputs} placeholder="work" autocomplete="off"

/>
</Fourth>

<Fifth>
<LockIcon/>
<input    className="i5" type="password" name="password" value={user.password} onChange={handleInputs} placeholder="password" autocomplete="off"

/>
</Fifth>

<Sixth>
<LockOpenIcon/>
<input   className="i6" type="password"  name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" autocomplete="off"

/>
</Sixth>

<Register onClick={register} >
    Register
</Register>

</Left>

<Right>
    <img className="rs" src="/images/s.jpg"/>
</Right>


          </Form>
        </Container>
    )
}

export default SignUp

const Container=styled.div `
background-color:#fafafa;
height:99vh;
display:grid;
place-items:center;




`

const Form=styled.div `
background-color:white;

height:73vh;
width:55vw;
padding:30px;


display:flex;

@media(max-width:800px){
   width:90vw;
   height:75vh;
   margin-right:80px;
   margin-left:20px;

}

`

const Heading=styled.div `
font-weight:700;
font-size:24px;
margin-left:50px;
margin-top:10px;

@media(max-width:550px){
    width:20vw;
    display:flex;
   
    
}

`

const First=styled.div `
margin-top:50px;
display:flex;
align-items:center;
margin-left:50px;
width:23vw;
border-bottom:2px solid #f9f7f6;
@media(max-width:800px){
    

    margin-left:20px;
 
 }

.i1{
   outline:none;
   border:none;
   font-weight:700;
   margin-left:20px;
   width:25vw
 
   
}


`


const Second=styled.div `
display:flex;
align-items:center;
margin-left:50px;
width:23vw;
border-bottom:2px solid #f9f7f6;
margin-top:30px;
@media(max-width:800px){
    

    margin-left:20px;
 
 }
.i2{
    outline:none;
    border:none;
    font-weight:700;
    margin-left:20px;
    width:25vw
  
    
 }

`


const Third=styled.div `
display:flex;
align-items:center;
margin-left:50px;
width:23vw;
border-bottom:2px solid #f9f7f6;
margin-top:30px;
@media(max-width:800px){
    

    margin-left:20px;
 
 }

.i3{
    outline:none;
    border:none;
    font-weight:700;
    margin-left:20px;
    width:25vw
  
    
 }
`



const Fourth=styled.div `
display:flex;
align-items:center;
margin-left:50px;
width:23vw;
border-bottom:2px solid #f9f7f6;
margin-top:30px;
@media(max-width:800px){
    

    margin-left:20px;
 
 }
.i4{
    outline:none;
    border:none;
    font-weight:700;
    margin-left:20px;
    width:25vw
  
    
 }

`



const Fifth=styled.div `
display:flex;
align-items:center;
margin-left:50px;
width:23vw;
border-bottom:2px solid #f9f7f6;
margin-top:30px;
@media(max-width:800px){
    

    margin-left:20px;
 
 }
.i5{
    outline:none;
    border:none;
    font-weight:700;
    margin-left:20px;
    width:25vw
  
    
 }

`



const Sixth=styled.div `
display:flex;
align-items:center;
margin-left:50px;
width:23vw;
border-bottom:2px solid #f9f7f6;
margin-top:30px;
@media(max-width:800px){
    

    margin-left:20px;
 
 }

.i6{
    outline:none;
    border:none;
    font-weight:700;
    margin-left:20px;
    width:25vw
  
    
 }

`

const Register=styled.div `
margin-top:30px;
margin-left:90px;
height:40px;
width:110px;
--tw-bg-opacity: 1;
background-color: rgba(59, 130, 246, var(--tw-bg-opacity));

color:white;
font-weight:800;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
@media(max-width:800px){
    

    margin-left:20px;
 
 }

:hover{
    --tw-bg-opacity: 1;
background-color: rgba(37, 99, 235, var(--tw-bg-opacity));
}

`

const Left=styled.div `
@media(max-width:800px){
    margin-left:-30px;
}
`



const Right=styled.div `
@media(max-width:800px){
    margin-left:80px;

    
}
.rs{
    height:40vh;
    width:25vw;

    @media(max-width:900px){
        width:41vw;
    }
}

margin-top:80px;



`


