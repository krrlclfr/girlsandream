
import { useEffect, useState } from "react"
import { Paper, Button, Grid, Box, Typography } from "@mui/material"
import aO1 from '../assets/image/pants/a01.jpg'
import aO2 from '../assets/image/pants/a02.jpg'
import aO3 from '../assets/image/pants/a03.jpg'
import aO4 from '../assets/image/pants/a04.jpg'
import { JorstItems, ProductType } from '../types/jorts/jorts'
import { useNavigate  } from "react-router-dom"
import { blueGrey, teal } from "@mui/material/colors"
import { SizesType } from '../types/jorts/jorts';
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"

const jortsItems: ProductType[] = [
    { productCode: 'aO1', productName: 'aO1 - Acid Black', productColor: 'Acid Black', productPrice: 629, productImage: aO1, availableSizes: { xs: false, s: true, m: true, l: true, xl: true}, soldOut: false},
    { productCode: 'aO2', productName: 'aO2 - Blue Green', productColor: 'Blue Green', productPrice: 629, productImage: aO2, availableSizes: { xs: false, s: false, m: false, l: false, xl: false}, soldOut: true},
    { productCode: 'aO3', productName: 'aO3 - Acid Blue', productColor: 'Acid Blue', productPrice: 629, productImage: aO3, availableSizes: { xs: true, s: false , m: true, l: true, xl: true}, soldOut: false},
    { productCode: 'aO4', productName: 'aO4 - Pure Grey', productColor: 'Pure Grey', productPrice: 629, productImage: aO4, availableSizes: { xs: true, s: true, m: true, l: true, xl: true}, soldOut: false}
]

const sizes: SizesType[] = [
    { value: 'x-small', sizeType: "XS", available: true},
    { value: 'small', sizeType: "SM", available: false},
    { value: 'medium', sizeType: "M", available: true},
    { value: 'large', sizeType: "L", available: true},
    { value: 'x-large', sizeType: "XL", available: true},
]

interface ProductTypess {
    productCode: string,
    productName: string,
    productColor: string,
    productPrice: number,
    productImage: string,
    availableSizes: {
        xs: boolean,
        s: boolean,
        m: boolean,
        l: boolean,
        xl: boolean
    },
    soldOut: boolean
    
}

const JortsPage = () => {
    const navigate = useNavigate()
    const shortsItemss = useAppSelector<ProductTypess[]>((state) => state.products.productItems.data)
    console.log(shortsItemss)
    const redirectProduct = (value: any) => {
        navigate(`/product/${value.productCode}`, { state: value})
    }

    return (
        <> 
            <Grid container spacing={{ xl: 4 }} sx={{ mx: 4, my: 8}}>
                {shortsItemss.map((data, key) => {
                    return (
                        <Grid size={3} key={key}>
                            <Paper sx={{ overflow: 'hidden', position: 'relative', borderRadius: 0}}> 
                                <Box
                                    component="img"
                                    src={aO1}
                                    alt="image"
                                    sx={{
                                        width: '100%',
                                        height: '90%',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                        transform: 'scale(1.3)',
                                        transition: 'transform 0.4s ease', // smooth zoom
                                        '&:hover': {
                                            transform: 'scale(1.4)', // zoom level
                                        }
                                    }}

                                    onClick={() => redirectProduct(data)}
                                />
                                {data.soldOut ? (
                                    <Box sx={{  width: '100%', position: 'absolute', top: 0, left: 0}}>
                                        <Box sx={{ m: 2, color: '#b80000' }}>
                                            <Typography variant="body1" component="div" fontWeight={500}> 
                                                Sold Out 
                                            </Typography>     
                                        </Box>
                                    </Box>
                                ) : null}
                                <Box sx={{  width: '100%', position: 'absolute', bottom: 0, left: 0}}>
                                    <Box sx={{ bgcolor: blueGrey[900], px: 3, py: 1, color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Box>
                                            <Typography variant="body2" component="div" fontWeight={400} sx={{ mt: 1 }}> { data.productCode } </Typography>
                                            <Typography variant="body2" component="div" fontWeight={400} sx={{ mt: 1 }}> { data.productColor } </Typography>
                                        </Box>
                                        <Box>
                                            <Box sx={{ mt: 1, display: 'flex', gap: 2 }}>
                                            {Object.entries(data.availableSizes).map(([sizeType, available]) => (
                                                <Box
                                                key={sizeType}
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                    border: '1px solid #fff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    position: 'relative',
                                                    opacity: available ? 1 : 0.5,

                                                    // Draw X if not available
                                                    '&::before, &::after': !available
                                                    ? {
                                                        content: '""',
                                                        position: 'absolute',
                                                        width: '100%',
                                                        height: '1px',
                                                        bgcolor: blueGrey[900],
                                                        top: '50%',
                                                        left: '50%',
                                                        }
                                                    : {},

                                                    '&::before': !available
                                                    ? { transform: 'translate(-50%, -50%) rotate(45deg)' }
                                                    : {},

                                                    '&::after': !available
                                                    ? { transform: 'translate(-50%, -50%) rotate(-45deg)' }
                                                    : {},
                                                }}
                                                >
                                                <Typography variant="body2" sx={{ fontSize: 10, lineHeight: 1 }}>
                                                    {sizeType.toUpperCase()}
                                                </Typography>
                                                </Box>
                                            ))}
                                            </Box>
                                            <Box sx={{ mt: 1, textAlign: 'end' }}>
                                                <Typography variant="body2" component="div" fontWeight={500}> ₱ { data.productPrice } </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    )
                })}

                <Grid size={12} sx={{ textAlign: 'center', mt: 4}}>
                    <Button 
                        onClick={() => navigate('/product')} 
                        variant="contained" 
                        size='large' 
                        sx={{ 
                            bgcolor: blueGrey[900],
                            borderRadius: 0,
                            '&:hover': {
                                        bgcolor: teal[600],
                                    }
                        }}> 
                            VIEW ALL 
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default JortsPage