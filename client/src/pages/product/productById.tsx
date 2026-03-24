import { useState } from 'react'
import { Box, Container, Grid, Typography, Divider, Button, TextField } from '@mui/material'
import aO1 from '../../assets/image/pants/a01.jpg'
import { Stack } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { UserCartItem, SizesType } from '../../types/jorts/jorts';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addToCartUser } from '../../app/features/cart/usersCartSlice';
import { blueGrey } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';
import UserLayout from '../../components/layout/user-layout/UserLayout';

const sizes: SizesType[] = [
    { value: 'x-small', sizeType: "XS", available: true},
    { value: 'small', sizeType: "SM", available: true},
    { value: 'medium', sizeType: "M", available: true},
    { value: 'large', sizeType: "L", available: true},
    { value: 'x-large', sizeType: "XL", available: true},
]

const ProductPageById = () => {
    const { state } = useLocation()
    const dispatch = useAppDispatch()

    const [userCart, setUserCart] = useState<UserCartItem>({
        productCode: state.productCode,
        productColor: state.productColor,
        productName: state.productName,
        productImage: state.productImage,
        productPrice: state.productPrice,
        size: 'x-small',
        quantity: 1
    })

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setUserCart({ ...userCart, size: newAlignment});
    };

    return (
        <> 
            <UserLayout>
                <Container maxWidth='xl' sx={{ mt: 12, height: 'auto'}}>
                    <Grid container spacing={{ xl: 4 }} sx={{ mx: 4, my: 8}}>
                        <Grid size={6}> 
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Box
                                    component="img"
                                    height='600'
                                    src={state.productImage}
                                    alt="image"
                                    loading="lazy"
                                    sx={{
                                        flex: 1,                 
                                        objectFit: 'cover',  
                                        width: '50%',
                                        height: '100%',
                                    }}
                                /> 
                            </Box>
                        </Grid>
                        <Grid size={6}>
                            <Stack spacing={4} mt={8}>
                                <Typography variant='body1' component={'div'} color="text.secondary"> {userCart.productCode}</Typography>
                                <Typography variant='h4' component={'div'}> {userCart.productColor}</Typography>
                                <Typography variant='h5' component={'div'} color="text.secondary">₱{userCart.productPrice}</Typography>
                                <Divider /> 
                                <Typography variant='body1' component={'div'}> Size</Typography>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={userCart.size}
                                    exclusive
                                    onChange={handleChange}
                                    aria-label="Platform"
                                    sx={{
                                        gap: 3,
                                        '& .MuiToggleButtonGroup-grouped': {
                                            border: '1px solid',
                                            borderColor: 'grey.400',
                                            width: 50,
                                        },
                                    }}
                                >
                                    {sizes.map(data => {
                                        return (
                                            <ToggleButton 
                                                value={data.value} 
                                                sx={{ 
                                                    '&.Mui-selected': { 
                                                        bgcolor: blueGrey[900], color: '#fff', 
                                                        '&:hover': {
                                                        bgcolor: blueGrey[800]}
                                                    }, 
                                                    borderRadius: 0
                                                }}>
                                                    {data.sizeType}
                                            </ToggleButton>
                                        )
                                    })}
                                </ToggleButtonGroup>

                                <Typography variant='body1' component={'h1'}> Quantity</Typography>
                                <Grid container>
                                    <Grid size={6}>
                                        <TextField onChange={(e) => setUserCart({...userCart, quantity: Number(e.target.value)})} inputProps={{ min: 1 }} value={userCart.quantity} type="number"> </TextField>
                                    </Grid>
                                </Grid>
                                <Button onClick={() => dispatch(addToCartUser(userCart))} variant='contained' fullWidth size='large' sx={{ bgcolor: blueGrey[900], borderRadius: 0, boxShadow: 0}}> Add to cart </Button>
                                <Divider />   
                            </Stack>
                            <Box sx={{ my: 4 }}>
                                <Button fullWidth={false} variant='text' sx={{ borderRadius: 0, boxShadow: 0}} size='medium'>Size Guide </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </UserLayout>
        </>
    )
}

export default ProductPageById