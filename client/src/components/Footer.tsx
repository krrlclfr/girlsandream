import { Container, Typography, Grid, Stack, IconButton, Box } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import { CustomerSupportTypes } from '../types/footer/footer';

const customerSupportItems: CustomerSupportTypes[] = [
    { name: 'Size Guide', route: '/size-guide' },
    { name: 'Returns and Funds', route: '/return-policy' },
    { name: 'Shipping Policy', route: '/shipping-policy' },
    { name: 'Terms of Service', route: '/' },
    { name: 'Privacy Policy', route: '/' },
]

const FooterPage = () => {
    const navigation = useNavigate()

    return (
        <>
            <Container maxWidth={false} disableGutters sx={{ bgcolor: blueGrey[900], width: '100%'}}> 
                <Grid container spacing={2} sx={{ height: '100%', color: '#fff'}} >
                    <Grid size={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h2" component="div" fontWeight={500}> GND </Typography>
                    </Grid> 
                    <Grid size={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', my: 15}}>
                        <Stack spacing={2} sx={{ textAlign: 'start' }}>
                            <Typography variant="body1" component="div" fontWeight={600}> Customer Support </Typography>
                            {customerSupportItems.map((data) => {
                                return(
                                    <Typography 
                                        onClick={()=> navigation(data.route)} 
                                        variant="body2" 
                                        component="div" 
                                        fontWeight={400}
                                        sx={{ cursor: 'pointer' }}
                                    > 
                                    {data.name} 
                                    </Typography>
                                )
                            })}
                        </Stack>
                    </Grid> 
                    <Grid size={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', mt: 15}}>
                        <Stack spacing={2} sx={{ textAlign: 'start'}}>
                            <Typography variant="body1" component="div" fontWeight={600}> Follow Us </Typography>
                            <Box sx={{ color: "#fff", textAlign: 'start'}}> 
                                <FacebookIcon fontSize='medium' sx={{ mr: 2}}/> <InstagramIcon fontSize='medium'/>
                            </Box>
                            <Typography variant="body2" component="div" fontWeight={500}> @2026 GND </Typography>
                        </Stack>
                    </Grid> 
                </Grid>
            </Container>
        </>
    )
}

export default FooterPage