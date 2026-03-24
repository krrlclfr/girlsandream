import { Container, Grid, Box } from '@mui/material'
import SizeGuideImg from '../../assets/image/size_guide/size_guide.jpg'
import SizeGuideImg1 from '../../assets/image/size_guide/size_guide_1.jpg'
import UserLayout from '../../components/layout/user-layout/UserLayout'

const SizeGuidePage = () => {
    return(
        <>
            <UserLayout>
                <Container  maxWidth="xl" sx={{ my: 20 }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center', md: 'end', lg: 'end' }, alignContent: 'center' }}>
                            <Box
                                component="img"
                                src={SizeGuideImg}
                                alt="image"
                                sx={{
                                    width: { xs: '100%', lg: '50%' },
                                    objectFit: 'contain',
                                    borderRadius: 0
                                }}
                            /> 
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }, alignContent: 'center' }}>
                            <Box
                                component="img"
                                src={SizeGuideImg1}
                                alt="image"
                                sx={{
                                    width: { xs: '100%', lg: '50%' },
                                    objectFit: 'contain',
                                    borderRadius: 0
                                }}
                            /> 
                        </Grid>
                    </Grid>
                </Container>
            </UserLayout>
        </>
    )

}

export default SizeGuidePage