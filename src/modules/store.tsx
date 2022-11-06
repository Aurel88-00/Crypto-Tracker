import { configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { coinApi } from './coin/api';

export const store = configureStore({ reducer : {
    [coinApi.reducerPath] : coinApi.reducer
}, middleware: (getMiddleware) => {
    return getMiddleware().concat(coinApi.middleware);
}})

setupListeners(store.dispatch)