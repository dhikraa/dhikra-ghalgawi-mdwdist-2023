import React, { useState } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');
  const inputs = document.querySelectorAll(".inputlog");


  function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  
  function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value === ""){
      parent.classList.remove("focus");
    }
  }
  
  
  inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });

  const register = (e) => {

    
    e.preventDefault();
    Axios.post('http://localhost:4000/register', {
      email: email,
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus('Compte créer avec succés');
      }
    });
  };

  return (
    
    <div className='log'>
    < head className='log'>
    
      <link rel="stylesheet" type="text/css" href="../navigation/log.css" /> 
      <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/a81368914c.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        
    </head>
    
<body className='log'>
<img class="wave" src="../images/wave.png" alt='wave' /> 
	<div  className="containerlog">
		<div  className="imglog">
			<img src="../images/bg.svg" alt='bg' />
		</div>
		<div className="login-contentlog">
			<form className='log'>
				<img src="../images/avatar.svg"  alt='avatar'/> 
				<h2  className="titlelog">S'inscrire ici</h2>
        <div  className="input-divlog onelog">
           		   <div  className="ilog"> 
                  <FontAwesomeIcon icon={faEnvelope} className='FontAwesomeIcon' style={{ marginRight: '8px' }}/>

           		   		
           		   </div>
           		   <div  className="divlog">
           		   		<h5>Adresse Email* </h5>
                      <input type="text" className="inputlog" required 
                      onChange={(e) => { setEmail(e.target.value);}} />

          </div>
          </div>
          


          <div  className="input-divlog onelog">
           		   <div  className="ilog">
                  <FontAwesomeIcon icon={faUser} className='FontAwesomeIcon' style={{ marginRight: '8px' }}/>

           		   		
           		   </div>
           		   <div  className="divlog">
           		   		<h5>Nom d'utilisateur* </h5>
                      <input type="text" className="inputlog" required 
                      onChange={(e) => {setUsername(e.target.value);}}/>

          </div>
          </div>
          

          <div class="input-divlog passlog">
           		   <div className="ilog"> 
                  <FontAwesomeIcon icon={faLock} className='FontAwesomeIcon' style={{ marginRight: '8px' }} />
           		    	<i className="fas fa-locklog"></i>
           		   </div>
           		   <div className="divlog">
           		    	<h5>Mot de passe</h5>
           		    	<input type="password" className="inputlog"  
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
       
          required/>
            	   </div>
            	</div>

              <input type="submit" className="btnlog" value="S'inscrire" onClick={register}/>
                <p>{registerStatus}</p>
            </form>

            </div>
    </div>
      </body>
    </div>

   
  );
}

export default Register;
