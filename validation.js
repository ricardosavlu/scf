const NAME_IS_REQUIRED = 'name is required'
const JOB_IS_REQUIRED = 'job is required'

export function validateUserCreateInput(input) {
    if(!input.name) return NAME_IS_REQUIRED
    if(!input.job) return JOB_IS_REQUIRED
    return null
}

export function validateDeleteUserInput(input) {
    if(!input.name) return NAME_IS_REQUIRED
}