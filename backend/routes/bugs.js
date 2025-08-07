const express = require('express'); // Importa o módulo express
const router = express.Router(); // Cria um novo roteador do express
const controller = require('../controllers/bugsController'); // Importa o controlador de bugs

router.get('/', controller.getBugs); // Define rota GET para listar bugs
router.post('/', controller.createBug); // Define rota POST para criar um novo bug
router.put('/:id', controller.updateBug);// Define rota PUT para atualizar um bug existente
router.delete('/:id', controller.deleteBug); // Define rota DELETE para remover um bug

module.exports = router; // Exporta o roteador para uso em outros arquivos