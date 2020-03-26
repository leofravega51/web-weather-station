import React from "react";
import FbLogin from 'react-facebook-login';
import { useHistory } from 'react-router';
import axios from 'axios';


export default function FacebookLogin() {

    
    const history = useHistory();

    
    const responseFacebook = async (response) => {
        if (response.status === 'unknown') {
            console.log('User cancelled login or did not fully authorize.');
        } else {
            console.log('Welcome!  Fetching your information.... ');
            console.log('Good to see you, ' + response.name + '.');
            console.log(response);
            
            localStorage.setItem("isLogged", true);
            localStorage.setItem("currentUser", JSON.stringify(response));     
            localStorage.setItem("name", response.name);
            localStorage.setItem("social", "Facebook");
      

            const dataToSubmit = {
                name: response.name,
                email: response.email
            }

            axios.post("http://localhost:8080/api/sendEmail", dataToSubmit);
            history.push('/dashboard')
            
           
        }

        
    }

    return(
        
        <FbLogin
            size='small'
            appId='812982595806301'
            autoLoad={false}
            fields='name,email,picture'
            callback={responseFacebook}
            textButton="Login with Facebook"
            cssClass='btnFacebook'
            icon={<i className='fab fa-facebook-f' style={{ marginRight: '10px', fontSize: '15px' }}></i>}
        />
        

)}