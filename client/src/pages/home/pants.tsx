import { Box, Typography } from '@mui/material'
import PantsImage from '../../assets/image/pants/pants.jpg'

const Pants = () => {
    return (
        <>
            <Box sx={{ display: 'flex', height: '100vh', my: 4 }}>
                <Box
                    component="img"
                    src={PantsImage}
                    alt="image"
                    loading="lazy"
                    sx={{
                        flex: 1,                 // take 50% of the screen
                        objectFit: 'cover',      // cover the whole area
                        width: '50%',
                        height: '100%',
                    }}
                /> 
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'start', alignItems: 'center', width: '50%' }}>
                    <Box sx={{ gap: 2, ml: 4}}>
                        <Typography variant='h3' component="h1" sx={{ mb: 2}}>Pants Outfit </Typography>
                        <Typography variant='body1' component="h1" sx={{ mt: 2}}>Where confidence meets comfort. </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Pants