const UserService = require('../services/UserService');

module.exports = {
    create: async (req, res) => {
        try {
            const user = await UserService.create(req.body);
            res.status(201).send({user});
        } catch (error) {
            res.status(409).send({error});
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await UserService.getUsers();
            res.status(200).send({users});
        } catch (error) {
            res.status(409).send({error});
        }
    }
}