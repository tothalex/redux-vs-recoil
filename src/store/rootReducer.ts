import { combineReducers } from '@reduxjs/toolkit'
import app from './app'

const rootReducer = combineReducers({ app })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
