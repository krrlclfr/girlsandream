import { useState, ChangeEvent, FormEvent, use } from 'react'
import { Container, Button, TextField, Box, Typography } from "@mui/material"
import { LoginData } from '../../types/login/login'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { loginUser } from '../../app/features/auth/authSlice'
import FormLayout from '../../components/layout/FormLayout'
import HerSection1 from '../../assets/image/hero_section_1.jpg'
import UserLayout from '../../components/layout/user-layout/UserLayout'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHooks'

const RegistrationPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const btnLoading = useAppSelector((state) => state.auth.loading)
    const errorMessage = useAppSelector((state) => state.auth.error);

    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<Partial<LoginData>>({})

    // Handle input change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Simple validation
    const validate = () => {
        const newErrors: Partial<LoginData> = {}
        if (!formData.email) newErrors.email = 'Email is required'
        if (!formData.password) newErrors.password = 'Password is required'
        return newErrors
    }

    // Handle form submit
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        const { email, password } = formData

        const response = await dispatch(loginUser({ email, password }))
        if(loginUser.fulfilled.match(response)){
            navigate('/')
        } else {
            console.log("Error")
        }

        // dispatch(registration(formData))
        // Call API here
    }

    return (
        <>
            <UserLayout>
                <Container maxWidth={false} disableGutters sx={{ p: 0 }} >
                    <Box sx={{ display: 'flex', height: '100vh' }}> 
                        <Box
                            component="img"
                            src={HerSection1}
                            alt="image"
                            loading="lazy"
                            sx={{
                                flex: 1,                 // take 50% of the screen
                                objectFit: 'cover',      // cover the whole area
                                width: '50%',
                                height: '100%',
                            }}
                        /> 
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                            <FormLayout 
                                title="HELLO THERE!" 
                                subtitle="Don't have account?" 
                                handleSubmitButton={handleSubmit}
                                route="/registration"
                            >
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
                                    sx={{ mb: 2 }}
                                />

                                <Typography variant="body2" component="div" color="error" sx={{ textAlign: 'center' }}> {errorMessage} </Typography>

                                <Button loading={btnLoading} type="submit" variant="contained" color="primary" fullWidth size="large" sx={{ borderRadius: 0, mt: 2 }}>
                                    Login
                                </Button>
                            </FormLayout>
                        </Box>
                    </Box>
                </Container>
            </UserLayout>
        </>
    )
}

export default RegistrationPage