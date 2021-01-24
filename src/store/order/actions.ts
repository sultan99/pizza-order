import {createAction} from '../reducer-fns'

export const [ORDER_PLACED, placeOrder] = createAction(`ORDER/PLACED`)

export const [ORDER_REMOVED, removeOrder] = createAction(`ORDER/REMOVED`)
