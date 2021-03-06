import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
//Desktop Landscape(Paisagem)
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {
        @media only screen and (max-width: 1280px){
        zoom: 67%;
        overflow-y: hidden;
        }
            @media only screen and (max-width: 1366px){
            zoom: 67%;
            overflow-y: hidden; 
        }
                zoom: 85%;
                overflow-y: hidden;
    }

    a {
        text-decoration: none;
    }

    img {
        margin-right: 40px;
    }

    .topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1000px;
    }

    .log-topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1050px;
    }

    .logo {
      width: 120px;
      height: 60px;
      margin-top: -110px;
    }

    .backgroundcover {
        @media only screen and (max-width: 1280px){
        background: #eee;
        min-height: 100vh;
        }
            background: #eee;
            min-height: 110vh;
    }

    .bgpng {
        @media only screen and (max-width: 1280px){
        position: absolute;
        width: 100%;
        height: 100%;    
        }
            position: absolute;
            width: 100%;
            height: 100%;
        
    }

    .dashboard {
        @media only screen and (max-width: 1366px){
        margin-top: 320px;
        margin-left: -20px;
        }
            margin-top: 40px;
            margin-left: -10px;        
    }

    .colaborador {
        margin-left: 150px;
        margin-top: -100px;
    }

    .controle {
        margin-left: 200px;
    }

    .login {
        margin-left: 150px;
    }

    .menu {
        margin-left: 320px;
        margin-top: -100px;
    }

    .totalvacinados {
        font-family: "Oswald", sans-serif;
        position: absolute;
        width: 1050px;
        height: 150px;
        background: #f1b52c;
        background-image: linear-gradient(to bottom, #f1b52c, #ce6d28);
        border: 1px solid #ce6d28;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        margin-top: -850px;
        margin-left: 800px;
    }

    .totalvacinados .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-left: 730px;
        margin-top: -110px;
    }

    .elegiveis {
        font-family: "Oswald", sans-serif;
        position: absolute;
        width: 350px;
        height: 250px;
        background: #82bc00;
        background-image: linear-gradient(to bottom, #82bc00, #006432);
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -680px;
        margin-left: 800px;
    }

    .elegiveis .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        margin-left: 85px;
    }

    .dose-um {
        font-family: "Oswald", sans-serif;
        position: absolute;
        width: 350px;
        height: 250px;
        background: #ba257d;
        background-image: linear-gradient(to bottom, #ba257d, #7f1e5e);
        border: 1px solid #7f1e5e;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -680px;
        margin-left: 1180px;
    }

    .dose-um .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        margin-left: 85px;
    }

    .dose-dois {
        font-family: "Oswald", sans-serif;
        position: absolute;
        width: 350px;
        height: 250px;
        background: #ba257d;
        background-image: linear-gradient(to bottom, #ba257d, #7f1e5e);
        border: 1px solid #7f1e5e;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -400px;
        margin-left: 1180px;
    }

    .dose-dois .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        left: 25%;
    }

    .unica {
        font-family: "Oswald", sans-serif;
        position: absolute;
        width: 350px;
        height: 250px;
        background: #82bc00;
        background-image: linear-gradient(to bottom, #82bc00, #006432);
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -400px;
        margin-left: 800px;
    }

    .unica .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        margin-left: 105px;
    }

    .alimentos {
        font-family: "Oswald", sans-serif;
        position: absolute;
        width: 300px;
        height: 250px;
        background: #009add;
        background-image: linear-gradient(to bottom, #009add, #005486);
        border: 1px solid #005486;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -680px;
        margin-left: 1550px;
    }

    .alimentos .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        left: 20%;
    }

    .porcento {
        font-family: "Oswald", sans-serif;
        position: absolute;
        width: 300px;
        height: 250px;
        background: #009add;
        background-image: linear-gradient(to bottom, #009add, #005486);
        border: 1px solid #005486;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -400px;
        margin-left: 1550px;
    }

    .porcento .number {
        font-family: "Play", sans-serif;
        font-size: 85px;
        position: absolute;
        text-align: center;
        color: #fff;
        margin-top: 10px;
        left: 25%;
    }
   

    .menu-title {
        @media only screen and (max-width: 1280px){
        position: absolute;
        top: 40%;
        left: 40%;
        font-size: 25px;
        }
            position: absolute;
            top: 35%;
            left: 45%;
            font-size: 25px;
    }

    .menu-title.login {
        @media only screen and (max-width: 1280px){
        position: absolute;
        top: 32%;
        left: 32%;
        font-size: 25px;
        }
            position: absolute;
            top: 35%;
            left: 37.5%;
            font-size: 25px;
    }

    .menu-title.menu {
        @media only screen and (max-width: 1280px){
        position: absolute;
        top: 40%;
        left: 30%;
        font-size: 25px;
        }
            position: absolute;
            top: 35%;
            left: 27%;
            font-size: 25px;
    }

    .menu-title.cadastro {
        @media only screen and (max-width: 1280px){
        position: absolute;
        top: 17%;
        left: 50%;
        font-size: 25px;
        }
            position: absolute;
            top: 15%;
            left: 55%;
            font-size: 25px;
    }

    .menu-title.controle {
        @media only screen and (max-width: 1280px){
        position: absolute;
        top: 25%;
        left: 47%;
        font-size: 25px;
        z-index: 9999;
        }
            position: absolute;
            top: 25%;
            left: 46.9%;
            font-size: 25px;            
            z-index: 9999;
    }

    .option-col {
        @media only screen and (max-width: 1280px){
        position: absolute;
        width: 350px;
        height: 250px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        top: 40%;
        left: 48%; 
        }
            position: absolute;
            width: 350px;
            height: 250px;
            background: #fff;
            border: 1px solid #006432;
            box-sizing: border-box;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            top: 40%;
            left: 45%;
    }

    .option-vac {
        @media only screen and (max-width: 1280px){
        position: absolute;
        width: 350px;
        height: 250px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        top: 40%;
        left: 68%;
        }
            position: absolute;
            width: 350px;
            height: 250px;
            background: #fff;
            border: 1px solid #006432;
            box-sizing: border-box;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            top: 40%;
            left: 65%;
    }

    .menu-button {
        position: absolute;
        border: 1px solid #006432;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        align-items: center;
        background: #82bc00;
        padding: 5px 40px;
        font-size: 35px;
        color: #fff;
        border-radius: 20px;
        margin-top: 30px;
        margin-left: 80px;
    }

    .form-controle{
        @media only screen and (max-width: 1280px){
        position: absolute;
        display: grid;
        grid-template-columns: repeat(6, 150px);
        width: 900px;
        height: 600px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        top: 25%;
        left: 43.3%; 
        }
            position: absolute;
            display: grid;
            grid-template-columns: repeat(6, 150px);
            width: 900px;
            height: 600px;
            background: #fff;
            border: 1px solid #006432;
            box-sizing: border-box;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            top: 19%;
            left: 43.3%;       
    }

    .form-controle-colab{
        @media only screen and (max-width: 1280px){
        position: absolute;
        overflow-y: auto;
        overflow-x: hidden;
        width: 41%;
        height: 140vh;
        background: rgba(255,255,255, 0.9);
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: -4px 0 0 rgba(0, 0, 0, 0.25);
        top: 5%;
        left: 59%;
        }
            position: absolute;
            overflow-y: auto;
            overflow-x: hidden;
            width: 41%;
            height: 100%;
            background: rgba(255,255,255, 0.8);
            border: 1px solid #006432;
            box-sizing: border-box;
            box-shadow: -4px 0 0 rgba(0, 0, 0, 0.25);
            top: 6.8%;
            left: 59%; 
    }

    .form-box{
        @media only screen and (max-width: 1280px){
            position: absolute;
            top: 10%;
            left: 2%; 
        }
                position: absolute;
                top: 6%;
                left: 2%;
    }
    
    .form-label{
        @media only screen and (max-width: 1280px){
            display: inline-flex;
            justify-content: left;
            align-items: left;
            width: 350px;
            height: 10px;
            font-size: 25px;
            margin-left: 20px;
            margin-top: 5%;
    
        }
                display: inline-flex;
                justify-content: left;
                align-items: left;
                width: 350px;
                height: 10px;
                font-size: 25px;
                margin-left: 20px;
                margin-top: 4%;


    }

    .form-input{
        @media only screen and (max-width: 1280px){
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 450px;
        border-radius: 10px;
        background: #f0f0f0;
        border: none;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        padding: 10px;
        margin-left: 20px;
        margin-right: auto;
        margin-top: 30px;
        }
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 450px;
            border-radius: 10px;
            background: #f0f0f0;
            border: none;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            padding: 10px;
            margin-left: 20px;
            margin-right: auto;
            margin-top: 10px;
    }

    .form-checkbox{
        @media only screen and (max-width: 1280px){
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            width: 100px;
            border: none;
            margin-left: 20px;
            margin-right: auto; 
        }
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    border: none;
    margin-left: 20px;
    margin-right: auto;    
    }

    .form-button{
        @media only screen and (max-width: 1280px){
            display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 20px;
        height: 50px;
        width: 700px;
        border-radius: 10px;
        background: #82bc00;
        border: #006432;
        cursor: pointer;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        margin-left: 10px;
        margin-right: auto;
        margin-top: 0px;
        margin-bottom: 20px;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 20px;
        height: 50px;
        width: 700px;
        border-radius: 10px;
        background: #82bc00;
        border: #006432;
        cursor: pointer;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        margin-left: 10px;
        margin-right: auto;
        margin-top: 100px;
        margin-bottom: 20px;

    }

    .form-button:hover {
        background: #006432;
    }

    .image-top {
        position: absolute;
        margin-top: -100px;
        margin-left: 920px;
        width: 100px;
        height: 100px;
    }

    .cadastro-colaborador{
        @media only screen and (max-width: 1280px){
        position: absolute;
        display: grid;
        grid-template-columns: repeat(4, 4fr);
        width: 400px;
        height: 500px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin-top: -730px;
        margin-left: 1030px;
        }
            position: absolute;
            display: grid;
            grid-template-columns: repeat(4, 4fr);
            width: 400px;
            height: 500px;
            background: #fff;
            border: 1px solid #006432;
            box-sizing: border-box;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            top: 115%;
            left: -5%;
    }

    .cadastro-colaborador.login{
        @media only screen and (max-width: 1366px){
            position: absolute;
            display: grid;
            grid-template-columns: repeat(4, 4fr);
            width: 400px;
            height: 500px;
            background: #fff;
            border: 1px solid #006432;
            box-sizing: border-box;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            top: 105%;
            left: -5%;  
        }
                position: absolute;
                display: grid;
                grid-template-columns: repeat(4, 4fr);
                width: 400px;
                height: 500px;
                background: #fff;
                border: 1px solid #006432;
                box-sizing: border-box;
                box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 25px;
                top: 28%;
                left: 46%;
    }

    .setError {
        position: absolute;
        margin-top: 50px;
        margin-left: 125px;
        font-weight: 500;
        font-size: 20px;
        color: #ff0000;
    }

    .setSuccess {
        position: absolute;
        margin-top: 420px;
        margin-left: 370px;
        font-weight: 500;
        font-size: 20px;
        color: #0010c4;
    }

    .setError2 {
        position: absolute;
        margin-top: 420px;
        margin-left: 370px;
        font-weight: 500;
        font-size: 20px;
        color: #ff0000;
    }

    .login-label {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        margin-left: 130px;
        margin-right: 100px;
        margin-top: 20px;
    }

    .login-input {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 280px;
        padding: 10px;
        border-radius: 10px;
        background: #f0f0f0;
        border: none;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        margin-left: 65px;
        margin-right: auto;
        margin-top: 20px;
    }

    .login-button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 20px;
        height: 50px;
        width: 150px;
        border-radius: 10px;
        background: #82bc00;
        border: #006432;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        margin-left: 125px;
        margin-right: auto;
        margin-top: 60px;
    }

    .login-button:hover {
        background: #006432;
    }

    .cad-colaborador{
        @media only screen and (max-width: 1280px){
        position: absolute;
        display: grid;
        grid-template-columns: repeat(6, 150px);
        width: 900px;
        height: 500px;
        background: #fff;
        border: 1px solid #006432;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        top: 28%;
        left: 43%;
        }
            position: absolute;
            display: grid;
            grid-template-columns: repeat(6, 150px);
            width: 900px;
            height: 500px;
            background: #fff;
            border: 1px solid #006432;
            box-sizing: border-box;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            top: 28%;
            left: 45%;
    }

    .cad-label {
        display: inline-flex;
        justify-content: left;
        align-items: left;
        font-size: 25px;
        margin-left: 10px;
        margin-right: 100px;
        margin-top: 20px;
    }

    .cad-input {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 280px;
        border-radius: 10px;
        background: #f0f0f0;
        border: none;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        padding: 10px;
        margin-left: -140px;
        margin-right: auto;
        margin-top: 80px;
        margin-bottom: -150px;
    }

    .cad-button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 20px;
        height: 50px;
        width: 250px;
        border-radius: 10px;
        background: #82bc00;
        border: #006432;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        margin-left: 30px;
        margin-right: auto;
        margin-top: 80px;
    }

    .cad-button:hover {
        background: #006432;
    }

    .menu-button:hover {
        background: #006432;
    }

    input[type="date"]::-webkit-datetime-edit, input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-clear-button {
        color: #fff;
        position: relative;
        left: 10px;
      }
      
      input[type="date"]::-webkit-datetime-edit-year-field{
        position: absolute !important;
        border-left:1px solid #8c8c8c;
        padding: 2px;
        color:#000;
        left: 56px;
      }
      
      input[type="date"]::-webkit-datetime-edit-month-field{
        position: absolute !important;
        border-left:1px solid #8c8c8c;
        padding: 2px;
        color:#000;
        left: 26px;
      }      
      
      input[type="date"]::-webkit-datetime-edit-day-field{
        position: absolute !important;
        color:#000;
        padding: 2px;
        left: 4px;        
      }

      .sucesso-control{
        @media only screen and (max-width: 1280px){
        position: absolute;
        top: 80%;
        left: 650px;
        font-weight: 500;
        font-size: 20px;
        color: #0010c4; 
           }
            position: absolute;
            top: 79%;
            margin-left: 650px;
            font-weight: 500;
            font-size: 20px;
            color: #0010c4;           
      }

      .error-control{
        @media only screen and (max-width: 1280px){
        position: absolute;
        top: 80%;
        left: 650px;
        font-weight: 500;
        font-size: 20px;
        color: #ff0000;
           }
            position: absolute;
            top: 79%;
            margin-left: 650px;
            font-weight: 500;
            font-size: 20px;
            color: #ff0000;
      
//}

`;
