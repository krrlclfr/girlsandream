
import { Box, Typography, Container, Button } from "@mui/material"
import wallpaperImage1 from '../../assets/image/gallery/img_1.jpg'
import wallpaperImage2 from '../../assets/image/gallery/img_2.jpg'
import wallpaperImage3 from '../../assets/image/gallery/img_3.jpg'
import wallpaperImage4 from '../../assets/image/gallery/img_4.jpg'

const WallpaperPage = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
                <Box sx={{ display: 'flex', width: '100%', height: '100%' }}> 
                    <Box
                        component="img"
                        src={wallpaperImage1}
                        alt="image"
                        sx={{
                            flex: 1,
                            height: '100%',
                            minWidth: 0,
                            objectFit: 'cover',
                            borderRadius: 0
                        }}
                    /> 
                    <Box
                        component="img"
                        src={wallpaperImage2}
                        alt="image"
                        sx={{
                            flex: 1,
                            height: '100%',
                            minWidth: 0,
                            objectFit: 'cover',
                            borderRadius: 0
                        }}
                    /> 
                    
                    <Box
                        component="img"
                        src={wallpaperImage3}
                        alt="image"
                        sx={{
                            flex: 1,
                            height: '100%',
                            objectFit: 'cover',
                            minWidth: 0,
                            borderRadius: 0
                        }}
                    /> 
                    
                    <Box
                        component="img"
                        src={wallpaperImage4}
                        alt="image"
                        sx={{
                            flex: 1,
                            height: '100%',
                            minWidth: 0,
                            objectFit: 'cover',
                            borderRadius: 0
                        }}
                    />  
                </Box>
            </Box>
        </>
    )
}

export default WallpaperPage