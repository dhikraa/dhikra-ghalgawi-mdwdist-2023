const jwt = require('jsonwebtoken');

function checkRole(role) {
  return function(req, res, next) {
    // Récupérer le token JWT depuis le header Authorization
    const token = req.headers.authorization.split(' ')[1];

    // Décoder le token pour obtenir le rôle de l'utilisateur
    const decoded = jwt.verify(token, 'secret');
    const userRole = decoded.role_id;

    // Vérifier si le rôle de l'utilisateur correspond au rôle requis
    if (userRole === role) {
      // Autoriser l'accès
      next();
    } else {
      // Refuser l'accès
      res.status(403).send('Access forbidden');
    }
  }
}

module.exports = { checkRole };
