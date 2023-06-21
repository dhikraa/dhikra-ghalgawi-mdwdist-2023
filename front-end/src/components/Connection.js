import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { login } from '../Crud-services/OperationServices';

const Connection = () => {
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
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire

        const data = {
            username: username,
            password: password
        };

        login(data, (res) => {
            if (res.status === 200) {
                const user = res.data;
                const roleId = user.role_id;

                if (roleId === 1) {
                    navigate("/home");
                } else if (roleId === 3) {
                    navigate("/commercant");
                } else if (roleId === 2) {
                    navigate("/admin-accueil");
                } else {
                    console.error("inconnu role_id:", roleId);
                }
            } else {
                console.error("erreur de connection:", res.data);
            }
        });
    };

    return (
        <div className='log'>
            <head className='log'>
                <link rel="stylesheet" type="text/css" href="../navigation/log.css" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/a81368914c.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className='log'>
                <img class="wave" src="../images/wave.png" alt='wave' />
                <div className="containerlog">
                    <div className="imglog">
                        <img src="../images/bg.svg" alt='bg' />
                    </div>
                    <div className="login-contentlog">
                        <form onSubmit={handleLogin} className='log'> 
                            <img src="../images/avatar.svg" alt='avatar' />
                            <h2 className="titlelog">Bienvenu</h2>
                            <div className="input-divlog onelog">
                                <div className="ilog">
                                    <FontAwesomeIcon icon={faUser} className='FontAwesomeIcon' style={{ marginRight: '8px' }} />
                                    <i className="fas fa-userlog"></i>
                                </div>
                                <div className="divlog">
                                    <h5>Non d'utilisateur</h5>
                                    <input type="text" className="inputlog" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>

                            <div className="input-divlog passlog">
                                <div className="ilog">
                                    <FontAwesomeIcon icon={faLock} className='FontAwesomeIcon' style={{ marginRight: '8px' }} />
                                    <i className="fas fa-locklog"></i>
                                </div>
                                <div className="divlog">
                                    <h5>Mot de passe</h5>
                                    <input type="password" className="inputlog" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <input type="submit"className="btnlog" onClick={handleLogin} value="connection" />
                            <div>
                                <p>
                                    Vous n'avez pas de compte ?{' '}
                                    <Link to="/register">S'inscrire</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Connection;

