import { useState, ChangeEvent, FormEvent } from 'react'
import { Container, Box, Typography, Button, TextField } from "@mui/material"
import { FormData } from '../../types/registration/registration'
import { useAppDispatch } from '../../hooks/reduxHooks'
// import { registration } from '../../app/features/registration/registrationSlice'
import { registerUser } from '../../app/features/auth/authSlice'
import FormLayout from '../../components/layout/FormLayout'
import UserLayout from '../../components/layout/user-layout/UserLayout'

const RegistrationPage = () => {
    const dispatch = useAppDispatch()

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<Partial<FormData>>({})

    // Handle input change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Simple validation
    const validate = () => {
        const newErrors: Partial<FormData> = {}
        if (!formData.firstName) newErrors.firstName = 'First name is required'
        if (!formData.lastName) newErrors.lastName = 'Last name is required'
        if (!formData.email) newErrors.email = 'Email is required'
        if (!formData.password) newErrors.password = 'Password is required'
        return newErrors
    }

    // Handle form submit
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        dispatch(registerUser(formData))
        // Call API here
    }

    return (
        <>
            <UserLayout>
                <Container maxWidth='lg' sx={{ mt: 4, height: '100vh'}}>
                    <FormLayout 
                        title="CREATE AN ACCOUNT" 
                        subtitle='Already have an account?' 
                        handleSubmitButton={handleSubmit} 
                        sx={{ border: '1px solid #ccc',borderRadius: 0, boxShadow: 2}}
                        route="/login"
                    > 
                            <TextField
                                fullWidth
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                                sx={{ mb: 2 }}
                            />

                            <TextField
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                                sx={{ mb: 2 }}
                            />

                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                sx={{ mb: 2 }}
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                                sx={{ mb: 3 }}
                            />

                            <Button type="submit" variant="contained" color="primary" fullWidth size="large" sx={{ borderRadius: 0 }}>
                                Register
                            </Button>
                    </FormLayout>
                </Container>
            </UserLayout>
        </>
    )
}

export default RegistrationPage