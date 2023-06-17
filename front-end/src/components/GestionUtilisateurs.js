import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { register, getAllUsers, deleteUser } from '../Crud-services/OperationServices';
function GestionUtilisateurs() {

  
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [deleteUserId, setDeleteUserId] = useState('');
    const [message, setMessage] = useState('');
    const [displayForm, setDisplayForm] = useState(false);
    const [displayList, setDisplayList] = useState(false);
    const [displaySupp, setDisplaySupp] = useState(false);
   
  
    useEffect(() => {
      getUsers();
    }, []);
  
    const getUsers = () => {
      getAllUsers((response) => {
        if (response.data) {
          setUsers(response.data);
        } else {
          console.error('Error getting users:', response);
        }
      });
    };
    
  
    const addUser = (e) => {
      e.preventDefault();
      register(
        {
          email: email,
          username: username,
          password: password,
        },
        (response) => {
          if (response.data) {
            setMessage(response.data);
            getUsers();
            setEmail('');
            setUsername('');
            setPassword('');
          } else {
            console.error('Error adding user:', response);
          }
        }
      );
    };
  
    const handleDeleteUser = (id) => {
      deleteUser(id, (response) => {
        if (response.data) {
          setMessage(response.data);
          getUsers();
        } else {
          console.error('Error deleting user:', response);
        }
      });
    };
  
    const toggleDisplayForm = () => {
      setDisplayForm((prevState) => !prevState);
      setDisplayList(false);
      setDisplaySupp(false);
    };
  
    const toggleDisplayList = () => {
      setDisplayList((prevState) => !prevState);
      setDisplayForm(false);
      setDisplaySupp(false);
    };

    const toggleDisplaySupp = () => {
      setDisplaySupp((prevState) => !prevState);
      setDisplayForm(false);
      setDisplayList(false);
    };
    return (
     <div style={{ marginBottom: '10px' }}>
  
       
 <button   style={{ marginBottom: '10px',width: '30px' }} class="btn btn-primary btn-lg" onClick={toggleDisplayForm}
 ><FontAwesomeIcon icon={faPlus} /></button>
      
     <button  style={{ marginBottom: '10px' }} class="btn btn-primary btn-lg" onClick={toggleDisplayList}>Liste des utilisateurs</button>
    
     
        {displayForm && (
           
             <div style={{ marginBottom: '10px' }}>
          <form  className='admin-accueil border-form'onSubmit={addUser}>
         
         
            <label htmlFor="email">Email :</label>
            <input className='admin-accueil'
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="username">Nom d'utilisateur :</label>
            <input className='admin-accueil'
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <label htmlFor="password">Mot de passe :</label>
            <input className='admin-accueil'
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit"  style={{marginTop: '10px' }} > <FontAwesomeIcon icon={faPlus} /> Ajouter </button>
          </form>
            {message && <p>{message}</p>}
          </div>

        )}
  
        {displayList && (
         
    <div style={{ marginBottom: '10px' }} >
         <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Nom d'utilisateur</th>
                  <th>Type</th>
              
                </tr>
              </thead>

               <tbody>
                 {users.map((user) => (
                   <tr key={user.id}>
                     <td>{user.email}</td>
                     <td>{user.username}</td>
                     <td>{user.type}</td>
                    
                    
                   </tr>
                 ))}
               </tbody>
             </table>
             </div>
      )
      }

    </div>
      );
  }
  
  export default GestionUtilisateurs;