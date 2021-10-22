import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios'
import Home from './Home'
function SignIn() {
  
   const history = useHistory();
   const[user,setUser] = useState({
   email:"",
   password:""

   })

   const handleInputs=  e => {
    
      console.log(e);

     const{name,value}=e.target
   
     setUser({
         ...user, [name]: value
     })

   }


   

   const login =  e => {
      
      axios.post("http://localhost:9000/signIn",user)
       .then((res) => {
       
           alert(res.data.message)
         
         // setLoginUser(res.data.user);
         
         
         
       })

       
       
       
    
    
     
   }



    return (
        <Container>
            {console.log(user)}
            <Content >
<Heading >
Sign In
</Heading>

<First>
<PeopleAltIcon/>
<input className="i1" type="text" name="email" value={user.email}  onChange={handleInputs} placeholder="email" autocomplete="off"/>
</First>

<Second>
<LockIcon/>
<input className="i5" type="password" name="password"  value={user.password} onChange={handleInputs} placeholder="Password" autocomplete="off"/>
</Second>

<Register onClick={login} >
    Log in
</Register>

            </Content>
        </Container>
    )
}

export default SignIn


const Container=styled.div `

background-color:#fafafa;
height:99vh;
display:grid;
place-items:center;
@media(max-width:900px){
    display:grid;
    place-items:start;
}


`



const Content=styled.div `
background-color:white;

height:57vh;
width:35vw;
padding:60px;
@media(max-width:900px){
    width:85vw;
   
    margin:60px auto;
}

`

const Heading=styled.div `
font-weight:700;
font-size:24px;
margin-left:50px;
margin-top:10px;

`

const First=styled.div `
margin-top:50px;
display:flex;
align-items:center;
margin-left:50px;
width:23vw;
border-bottom:2px solid #f9f7f6;

@media(max-width:1000px){
    width:53vw;
    margin-left:-20px;
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
margin-top:60px;
@media(max-width:1000px){
    width:53vw;
    margin-left:-20px;
}
.i5{
    outline:none;
    border:none;
    font-weight:700;
    margin-left:20px;
    width:25vw
  
    
 }

`

const Register=styled.div `
margin-top:60px;
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

:hover{
    --tw-bg-opacity: 1;
background-color: rgba(37, 99, 235, var(--tw-bg-opacity));
}

`