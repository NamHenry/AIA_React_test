import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../../dataModels'
import { productsData } from '../../../data'

const initialState: Product[] = productsData;

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export default productsSlice.reducer