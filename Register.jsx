import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
const Register = ()=>{
    const handleSubmit = (event)=>{
        event.preventDefault()
        alert("form")
    }
    const handleChange =(event)=>{
       
    }
    return(
       <>
        <FormContainer>
        <form onSubmit={handleSubmit}>
            <div className='brand'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfP2Ili9Wvyen_RVpOPThzgcOgmS_bIqJviA&usqp=CAU' alt='logo'/>
<h1>Shan</h1>
            </div>
            <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
            <input type='email' name='email' placeholder='Email' onChange={handleChange}/>
            <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
            <input type='text' name='confirmPassword' placeholder='Confirm Password' onChange={handleChange}/>
            <button type='submit'>Create User</button>
            <span>Already have a account ? <Link to='/login'>Login</Link></span>
        </form>
        </FormContainer>
       </>
    )
}
const FormContainer = styled.div`
height : 100vh;
width : 100rem;
display:flex;
justify-content : center;
gap:1rem;
align-items:center;
background-color:#131324;
.brand{
    
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
    img{
        height:5rem
    }
    h1{
        color:white;
        text-transform:uppercase;
    }
}
form{
    display:flex;
    flex-direction:column;
    gap:2rem;
    background-color:#00000076;
    border-radius:2rem;
    margin-right:15rem;
    padding:3rem 5rem;
    input{
        background-color:transparent;
        padding:1rem;
        border:0.1rem solid #4e0eff;
        border-radius:0.4rem;
        color:white;
        width:100%;
        font-size:1rem;
        &:focus{
            border:0.1rem solid #997af0;
            outline:none;
        }
    }
    button{
        background-color:#997af0;
        color:white;
        padding:1rem 2rem;
        border:none;
        font-weight:bold;
        cursor:pointer;
        border-radius: 0.4rem;
        font-size:1rem;
        text-transform:uppercase;
        transition:0.5s ease-in-out;
        &:hover{
            background-color:#4e0eff;
        }
    }
    span{
        color:white;
        text-transform:uppercase;
        a{
            text-decoration:none;
            font-weight:bold;
            color:#4e0eff;
        }
    }
    
}










`;
export default Register;