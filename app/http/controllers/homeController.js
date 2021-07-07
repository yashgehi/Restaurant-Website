const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {
            const dishes = await Menu.find()
            return res.render('home', { dishes: dishes })
        }
    }
}

module.exports = homeController