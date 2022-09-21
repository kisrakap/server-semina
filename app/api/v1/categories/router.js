const express = require('express')
const router = express()
const { create, index, find, update, destroy } = require('./controller')

// router.get('/categories', (req, res) => {
//     const data = [{
//         id: 1,
//         name: 'Seminar'
//       },{
//         id: 2,
//         name: 'Seminar 2'
//       }, ]
//       res.status(200).json({
//         // message: "Welcome to api semina",
//         data
//       });
// })
router.get('/categories', index)
router.get('/categories/:id', find)
router.post('/categories', create)
router.put('/categories/:id', update)
router.delete('/categories/:id', destroy)

module.exports = router