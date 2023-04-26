/**
 * Type or results of a query
 */
export const QUERY = {
    ERROR: Symbol('Query Error'),
    SUCCESS: Symbol('Query Success')
}

/**
 * Type of search list for results
 */
export const LIST_TYPE = {
    SAVED_MUNICIPALITIES: Symbol('Saved Municipalities List'),
    SEARCH_RESULT: Symbol('Saved Municipalities Result')
}
