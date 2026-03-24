import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormData } from '../../../types/registration/registration'

interface RegistrationState extends FormData {
  registered: boolean
}

const initialState: RegistrationState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  registered: false
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registration: (state, action: PayloadAction<Omit<RegistrationState, 'registered'>> ) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state.password = action.payload.password
            state.registered = true
            console.log('User registered:', action.payload)
        }
    }
})

export const { registration } = registrationSlice.actions
export default registrationSlice.reducer