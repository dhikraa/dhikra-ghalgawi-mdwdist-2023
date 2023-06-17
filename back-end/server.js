
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 4000;
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const router = require('./routes');
const checkRole = require('./middleware').checkRole;
//const router = require('./router');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const path = require('path')
const multer = require("multer");
//use express static folder
app.use(express.static("public"))
const storage = multer.diskStorage({
  destination: (req , file , cb) => {
    cb(null, './public/images'); 
  },
  filename: (req, file , cb)=>{
  cb(null,file.fieldname + "_"+ Date.now()+ path.extname(file.originalname));
}})
const upload = multer({
  storage: storage
});


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ivsane'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.post("/upload", upload.single('image'), (req, res) => {
  const image = req.file.filename;
  const sql = "UPDATE Services SET image =?";
  db.query(sql, [image] , (err,result) =>{
   if (err) return res.json({Message : "Error"});
   return res.json({Status: "Success"});
  })
 });

 app.get('/', (req,res) =>{
  const sql ='select * from Services';
  db.query(sql,(err,result)=>{
    if(err) return res.json("Erreur");
    return res.json(result);
  })
});





app.get('/', (req, res) => {
  res.send('Hello server ...');
});
 
//afficher tous les services 
app.get('/Services', (req, res) => {
  db.query('SELECT * FROM Services', (err, results) => {
    if (err) {
      console.error('Error fetching services', err);
      res.status(500).send('Error fetching services');
      return;
    }
    res.send(results);
  });
});

    app.use(express.json())


    // Ajout d'un nouveau service 

  app.post('/add', (req, res) => {
      const newservs = req.body;
      db.query('INSERT INTO Services SET ?', newservs, (err, result) => {
        if (err) {
          console.error('Error adding new service', err);
          res.status(400).send('Error adding new service');
          return;
        }
        res.status(200).send({ message: `${newservs.nom} is successfully added` });
      });
    });
    
// mise a jour d'un commercant 

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const updatedService = req.body;
  db.query('UPDATE Services SET nom = ?, categorie = ?, adresse = ?, specialite = ? ,telephone= ?, description= ? WHERE code = ?',
   [updatedService.nom, updatedService.categorie, updatedService.adresse, updatedService.specialite,updatedService.telephone, updatedService.description,id], 
   (err, result) => {
    if (err) {
      console.error('Error updating service', err);
      res.status(400).send('Error updating service');
      return;
    }
    res.status(200).send({ message: `Service with code ${id} is successfully updated` });
  });
});

// Suppression d'un service bien déterminé !
/*app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Services WHERE code = ?', id, (err, result) => {
    if (err) {
      console.error('Error deleting service', err);
      res.status(400).send('Error deleting service');
      return;
    }
    res.status(200).send({ message: `Service with code ${id} is successfully deleted` });
  });
});*/

//fonction pour archiver un service ou commercant

app.put('/archive/:id', (req, res) => {
  const id = req.params.id;
  db.query('UPDATE services SET archived = 1 WHERE code = ?', id, (err, result) => {
    if (err) {
      console.error('Error archiving service', err);
      res.status(400).send('Error archiving service');
      return;
    }
    res.status(200).send({ message: `Service with code ${id} is successfully archived` });
  });
});



// Ajout d'un utilisateur id=1
app.post('/register', (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const role_id = req.body.role_id || 1; // Par défaut, le rôle visitor a l'ID 1
  let type;

  if (role_id === 1) {
    type = 'client';
  } else if (role_id === 3) {
    type = 'commercant';
  } else {
    // Définir un type par défaut si le rôle ne correspond à aucune condition
    type = 'admin';
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      res.status(500).send('Error hashing password');
    } else {
      db.query(
        "INSERT INTO users (email, username, password, role_id, type) VALUES (?, ?, ?, ?, ?)",
        [email, username, hash, role_id, type],
        (err, result) => {
          if (err) {
            console.error('Error adding new user:', err);
            res.status(500).send('Error adding new user');
          } else {
            console.log('New user added to database');
            res.status(200).send('New user added to database');
          }
        }
      );
    }
  });
});





// Obtenir la liste des utilisateurs
app.get('/users', (req, res) => {
  db.query("SELECT  email, username, type FROM users WHERE role_id = 1 OR role_id = 3", (err, result) => {
    if (err) {
      console.error('Error getting users:', err);
      res.status(500).send('Error getting users');
    } else {
      res.status(200).json(result);
    }
  });
});

// Modifier le rôle d'un utilisateur
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const roleId = req.body.role_id;

  db.query("UPDATE users SET role_id = ? WHERE id = ?", [roleId, id],
    (err, result) => {
      if (err) {
        console.error('Error updating user role:', err);
        res.status(500).send('Error updating user role');
      } else {
        console.log('User role updated');
        res.status(200).send('User role updated');
      }
    });
});

// Supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM users WHERE id = ?", [id],
    (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        res.status(500).send('Error deleting user');
      } else {
        console.log('User deleted from database');
        res.status(200).send('User deleted from database');
      }
    });
});





/*app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query("SELECT * FROM users WHERE username = ?", [username],
  (err, userResult) => {
    if (err) {
      console.error('Error getting user:', err);
      res.status(500).send('Error getting user');
    } else {
      if (userResult.length === 0) {
        res.status(401).send('Invalid username or password');
      } else {
        bcrypt.compare(password, userResult[0].password, (err, passwordResult) => {
          if (err) {
            console.error('Error comparing passwords:', err);
            res.status(500).send('Error comparing passwords');
          } else {
            if (passwordResult) {
              const token = jwt.sign({ username: userResult[0].username, role_id: userResult[0].role_id }, 'secret');
              res.status(200).json({ token: token });
            } else {
              res.status(401).send('Invalid username or password');
            }
          }
        });
      }
    }
  });
});
*/
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query("SELECT * FROM users WHERE username = ?", [username], (err, userResult) => {
    if (err) {
      console.error('Error getting user:', err);
      res.status(500).send('Error getting user');
    } else {
      if (userResult.length === 0) {
        res.status(401).send('Invalid username or password');
      } else {
        bcrypt.compare(password, userResult[0].password, (err, passwordResult) => {
          if (err) {
            console.error('Error comparing passwords:', err);
            res.status(500).send('Error comparing passwords');
          } else {
            if (passwordResult) {
              const token = jwt.sign({ username: userResult[0].username, role_id: userResult[0].role_id }, 'secret');
              const role_id = userResult[0].role_id;
              res.status(200).json({ token: token, role_id: role_id });
            } else {
              res.status(401).send('Invalid username or password');
            }
          }
        });
      }
    }
  });
});


app.get('/users/:username', (req, res) => {
  const username = req.params.username;

  db.query("SELECT role_id FROM users WHERE username = ?", [username], (err, result) => {
    if (err) {
      console.error('Error getting user role:', err);
      res.status(500).send('Error getting user role');
    } else {
      if (result.length === 0) {
        res.status(404).send('User not found');
      } else {
        const role_id = result[0].role_id;
        res.status(200).json({ role_id: role_id });
      }
    }
  });
});


// Ajout d'une actualité
app.post('/actualite', (req, res) => {
  const { titre, description, contenu, auteur, catégorie } = req.body;
  const date_publication = new Date().toISOString(); // Date actuelle
  
  const query = 'INSERT INTO actualite (titre, description, contenu, date_publication, auteur, catégorie) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [titre, description, contenu, date_publication, auteur, catégorie], (error, results) => {
    if (error) {
      console.error('Erreur lors de l\'ajout de l\'actualité :', error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'actualité' });
    } else {
      res.status(201).json({ message: 'Actualité ajoutée avec succès' });
    }
  });
});

// Récupération de toutes les actualités
app.get('/actualite', (req, res) => {
  const query = 'SELECT * FROM actualite';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des actualités :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des actualités' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Suppression d'une actualité
app.delete('/actualite/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM actualite WHERE id = ?';
  db.query(query, [id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la suppression de l\'actualité :', error);
      res.status(500).json({ error: 'Erreur lors de la suppression de l\'actualité' });
    } else {
      res.status(200).json({ message: 'Actualité supprimée avec succès' });
    }
  });
});

// Modification d'une actualité
app.put('/actualite/:id', (req, res) => {
  const id = req.params.id;
  const { titre, description, contenu, auteur, catégorie } = req.body;
  
  const query = 'UPDATE actualite SET titre = ?, description = ?, contenu = ?, auteur = ?, catégorie = ? WHERE id = ?';
  db.query(query, [titre, description, contenu, auteur, catégorie, id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la modification de l\'actualité :', error);
      res.status(500).json({ error: 'Erreur lors de la modification de l\'actualité' });
    } else {
      res.status(200).json({ message: 'Actualité modifiée avec succès' });
    }
  });
});


// Créer une table "menu"
db.query(`
  CREATE TABLE IF NOT EXISTS menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    nature VARCHAR(255) NOT NULL,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL
  )
`, (err, result) => {
  if (err) {
    console.error('Error creating "menu" table', err);
  } else {
    console.log('Table "menu" created');
  }
});
// Ajouter un menu
app.post('/menu', (req, res) => {
  const { nom, nature, description, prix } = req.body;
  const query = 'INSERT INTO menu (nom, nature, description, prix) VALUES (?, ?, ?, ?)';
  db.query(query, [nom, nature, description, prix], (error, result) => {
    if (error) {
      console.error('Error adding menu', error);
      res.status(500).send('Error adding menu');
    } else {
      res.status(200).send('Menu added successfully');
    }
  });
});
// Afficher tous les menus
app.get('/menu', (req, res) => {
  const query = 'SELECT * FROM menu';
  db.query(query, (error, result) => {
    if (error) {
      console.error('Error fetching menus', error);
      res.status(500).send('Error fetching menus');
    } else {
      res.status(200).json(result);
    }
  });
});
// Afficher un menu par son ID
app.get('/menu/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM menu WHERE id = ?';
  db.query(query, [id], (error, result) => {
    if (error) {
      console.error('Error fetching menu', error);
      res.status(500).send('Error fetching menu');
    } else {
      if (result.length === 0) {
        res.status(404).send('Menu not found');
      } else {
        res.status(200).json(result[0]);
      }
    }
  });
});
// Mettre à jour un menu par son ID
app.put('/menu/:id', (req, res) => {
  const id = req.params.id;
  const { nom, nature, description, prix } = req.body;
  const query = 'UPDATE menu SET nom = ?, nature = ?, description = ?, prix = ? WHERE id = ?';
  db.query(query, [nom, nature, description, prix, id], (error, result) => {
    if (error) {
      console.error('Error updating menu', error);
      res.status(500).send('Error updating menu');
    } else {
      res.status(200).send('Menu updated successfully');
    }
  });
});
// Supprimer un menu par son ID
app.delete('/menu/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM menu WHERE id = ?';
  db.query(query, [id], (error, result) => {
    if (error) {
      console.error('Error deleting menu', error);
      res.status(500).send('Error deleting menu');
    } else {
      if (result.affectedRows === 0) {
        res.status(404).send('Menu not found');
      } else {
        res.status(200).send('Menu deleted successfully');
      }
    }
  });
});


app.listen(port, () => {console.log(`Server is running on port ${port}`)})
