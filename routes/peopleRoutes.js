const express = require('express');
const {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
} = require('../controllers/peopleCont')
const router = express.Router();

router.get('/',getPeople)


router.post('/',createPeople)

router.put('/:id',updatePeople)

router.delete('/:id',deletePeople)

module.exports = router