const express = require('express');
const wholesalerRout = require('src/routes/wholesaler.route')

const router = express.Router();

const allRoutes = [
    {
        path: '/wholesaler',
        route: wholesalerRout,
    }
]

allRoutes.forEach(value => {
    router.use(value.path, value.route)
})

module.exports = router;