export function validateUserCreateInput(input) {
    if(!input.name) return 'name is required'
    if(!input.job) return 'job is required'
    return null
}