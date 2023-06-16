import { Role, fakeUsers } from './fakeData.js'
import { validateUserCreateInput } from './validation.js';

export const createUser = async (req, res) => {
    const error = validateUserCreateInput(req.body)

    if (error) {
        res.status(400)
        return res.send(error)
    }

    const { name, job, role: inputRole } = req.body;

    const nameIsTaken = await fakeUsers.findByName(name)

    if (nameIsTaken) {
        // We need users to have unique names...
        res.status(409)
        res.send(`name "${name}" is already in use`)
    }

    const role = req.user.role === 'Admin' ? inputRole : Role.Member // Only admins can choose roles

    const newUser = await fakeUsers.createUser({ name, job, role })

    res.send(newUser);
};