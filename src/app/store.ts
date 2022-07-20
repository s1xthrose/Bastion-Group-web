import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import typesProductReducer from '../features/typesProduct/typesProductSlice'
import productsReducer from '../features/products/productsSlice'
import filtersSlice from '../features/main/filters/filtersSlice'
import orderSlice from '../features/cart/orderSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    typesProduct: typesProductReducer,
    products: productsReducer,
    filters: filtersSlice,
    order: orderSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
