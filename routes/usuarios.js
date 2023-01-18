const { Router } = require('express');

const { ususariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPath } = require('../controllers/usuarios');

const router = Router();


router.get('/', ususariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPath);

module.exports = router;