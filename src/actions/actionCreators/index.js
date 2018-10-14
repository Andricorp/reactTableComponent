import {actionPending} from './actionPending'
import {actionResolved} from './actionResolved'
import {actionRejected} from './actionRejected'

import {actionAuthenticated} from './actionAuthenticated'
import {actionAuthenticatedError} from './actionAuthenticatedError'

export const actionTable = {
    actionPending,
    actionResolved,
    actionRejected
}

export const actionAuth = {
    actionAuthenticated,
    actionAuthenticatedError
}