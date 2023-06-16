import { Role } from "./fakeData.js"

const ERR_PREFIX = 'validation failed: '

const ID_IS_REQUIRED = ERR_PREFIX + 'id is required'
const NAME_IS_REQUIRED = ERR_PREFIX + 'name is required'
const JOB_IS_REQUIRED = ERR_PREFIX + 'job is required'
const INVALID_ROLE = ERR_PREFIX + 'role is invalid'

export function validateUserCreateInput(input) {
    if (!input.name) return NAME_IS_REQUIRED
    if (!input.job) return JOB_IS_REQUIRED
    if (!input.role && !roleIsValid(input.role)) return INVALID_ROLE
}

export function validateDeleteUserInput(input) {
    if (!input.name) return NAME_IS_REQUIRED
}

export function validateUpdateUserInput(input) {
    if (!input.id) return ID_IS_REQUIRED
    if (!input.role && !roleIsValid(input.role)) return INVALID_ROLE
}

export function validateGetReadCountInput(input) {
    if (!input.name) return NAME_IS_REQUIRED
}

function roleIsValid(role) {
    return Object.values(Role).includes(role)
}