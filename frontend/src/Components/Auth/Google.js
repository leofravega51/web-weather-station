import React from "react";
import GoogleLgn from 'react-google-login'; 
import { useHistory } from 'react-router';
import axios from 'axios';


export default function GoogleLogin() {

    const history = useHistory();

    const responseGoogle = (response) => {
        if(response.error === 'popup_closed_by_user'){
            console.log('User cancelled login or did not fully authorize.');
        } else {
            console.log('Usuario inicio sesion con Google');

            localStorage.setItem("currentUser", JSON.stringify(response));
            localStorage.setItem("name", response.Rt.Ad);
            localStorage.setItem("isLogged", true);
            localStorage.setItem("social", "Google");
            
            const dataToSubmit = {
                name: response.Rt.Ad,
                email: response.Rt.Au
            }

            axios.post("http://localhost:8080/api/sendEmail", dataToSubmit);

            history.push('/dashboard');

        }
    }

    return(
        <GoogleLgn
            clientId="691661381343-mbm8ftekd6knr11q11f6da0csrbqe4ug.apps.googleusercontent.com"  //CLIENTID NOT CREATED YET
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cssClass="btnGoogle"
        />

)}