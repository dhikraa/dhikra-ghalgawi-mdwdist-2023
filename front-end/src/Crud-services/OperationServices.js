import axios from 'axios';

const API_URL = 'http://localhost:4000';

// Récupérer tous les services
export const getAll = (callback) => {
  axios.get( `${API_URL}/Services`).then((res) => {
    callback(res);
  });
};
// Récupérer tous les images
export const get = (callback) => {
  axios.get( `${API_URL}/image`).then((res) => {
    callback(res);
  });
};
// Ajouter un service
export const add = (data, callback) => {
  axios.post(`${API_URL}/add`, data).then((res) => {
    callback(res);
  });
};
// Ajouter un service avec un logo
/*export const addService = (data, callback) => {
  const formData = new FormData();
  formData.append('code', data.code);
  formData.append('nom', data.nom);
  formData.append('categorie', data.categorie);
  formData.append('adresse', data.adresse);
  formData.append('specialite', data.specialite);
  formData.append('logo', data.logo);

  axios.post(`${API_URL}/addService`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => {
    callback(res);
  });
};*/

// Supprimer un service
export const remove = (id, callback) => {
  axios.delete(`${API_URL}/delete/${id}`).then((res) => {
    callback(res);
  });
};

export const archive = (id, callback) => {
  axios.put(`${API_URL}/archive/${id}`).then((res) => {
    callback(res);
  });
};


// Mettre à jour un service
export const update = (data, callback) => {
  axios.put(`${API_URL}/update/${data.code}`, data).then((res) => {
    callback(res);
  });
};

// Enregistrement d'un nouvel utilisateur
export const register = (data, callback) => {
  axios.post(`${API_URL}/register`, data).then((res) => {
    callback(res);
  }).catch((err) => {
    console.error("Error registering user:", err);
    callback(err);
  });
};

// Connexion d'un utilisateur existant
export const login = (data, callback) => {
  axios.post(`${API_URL}/login`, data).then((res) => {
    callback(res);
  }).catch((err) => {
    console.error("Error logging in user:", err);
    callback(err);
  });
};
// Récupérer tous les utilisateurs
export const getAllUsers = (callback) => {
  axios.get( `${API_URL}/users`).then((res) => {
    callback(res);
  });
};
export const deleteUser = (id, callback) => {
  axios
    .delete(`${API_URL}/users/${id}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.error("Error deleting user:", err);
      callback(err);
    });
};

// Récupérer tous les commerçants
export const getAllMerchants = (callback) => {
  axios.get(`${API_URL}/merchants`).then((res) => {
  callback(res.data);
  }).catch((err) => {
  console.error("Error getting all merchants:", err);
  callback([]);
  });
  };
  
  // Ajouter un commerçant
  export const addMerchant = (data, callback) => {
  axios.post(`${API_URL}/merchants`, data).then((res) => {
  callback(res.data);
  }).catch((err) => {
  console.error("Error adding merchant:", err);
  callback(null);
  });
  };
  
  // Supprimer un commerçant
  export const removeMerchant = (id, callback) => {
  axios.delete(`${API_URL}/merchants/${id}`).then((res) => {
  callback(res.data);
  }).catch((err) => {
  console.error("Error removing merchant:", err);
  callback(null);
  });
  };
  
  // Mettre à jour un commerçant
  export const updateMerchant = (id, data, callback) => {
  axios.put(`${API_URL}/merchants/${id}`, data).then((res) => {
  callback(res.data);
  }).catch((err) => {
  console.error("Error updating merchant:", err);
  callback(null);
  });
  };
  // Récupérer toutes les actualités
export const getAllActualites = (callback) => {
  axios.get(`${API_URL}/actualite`).then((res) => {
    callback(res);
  });
};

// Ajouter une actualité
export const addActualite = (data, callback) => {
  axios.post(`${API_URL}/actualite`, data).then((res) => {
    callback(res);
  });
};

// Supprimer une actualité
export const deleteActualite = (id, callback) => {
  axios.delete(`${API_URL}/actualite/${id}`).then((res) => {
    callback(res);
  });
};

// Modifier une actualité
export const updateActualiteService = (id, data, callback) => {
  axios.put(`${API_URL}/actualite/${id}`, data).then((res) => {
    callback(res);
  });
};
// Récupérer tous les menus
export const getAllMenus = (callback) => {
  axios.get(`${API_URL}/menu`).then((res) => {
    callback(res);
  });
};

// Ajouter un menu
export const addMenu = (data, callback) => {
  axios.post(`${API_URL}/menu`, data).then((res) => {
    callback(res);
  });
};

// Mettre à jour un menu
export const updateMenu = (id, data, callback) => {
  axios.put(`${API_URL}/menu/${id}`, data).then((res) => {
    callback(res);
  });
};

// Supprimer un menu
export const removeMenu = (id, callback) => {
  axios.delete(`${API_URL}/menu/${id}`).then((res) => {
    callback(res);
  });
};







