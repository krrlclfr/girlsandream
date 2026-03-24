import { Box, Typography, Container, Button } from "@mui/material"
import heroImage from '../../assets/image/hero_section.jpg'
import summerSale from './../../assets/image/summer_sale.jpg'
import CollectionPage from "./collection";
import WallpaperPage from "./wallpaper";
import Pants from './pants'
import JortsPage from "../../components/Jorts";
import { blueGrey  } from "@mui/material/colors";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../app/features/product/productSlice";

const Home = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <> 
            <UserLayout>
                <Box
                    component="img"
                    src={heroImage}
                    alt="image"
                    sx={{
                        width: '100%',
                        objectFit: 'contain',
                        borderRadius: 0
                    }}
                /> 
                <Container maxWidth='lg' sx={{ mt: 4}}>
                    <Typography variant="h4" component="div" sx={{ textAlign: 'center', my: 12 }}>
                        Welcome to GND 
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Box
                            component="img"
                            src={summerSale}
                            alt="image"
                            sx={{
                                width: '60%',
                                objectFit: 'contain',
                                borderRadius: 0
                            }}
                        /> 
                        <Box> 
                            <Typography variant="h6" component="div" sx={{ mt: 2, ml: 4 }} color="text.secondary">
                                Discover the latest trends in fashion and elevate your style with our curated collection of clothing, accessories, and more. Shop now and experience the best of fashion at GND!
                            </Typography>

                            <Button size="large" variant="contained" sx={{ mt: 4, ml: 4, borderRadius: 0, bgcolor: blueGrey[900] }}>
                                Shop Now
                            </Button>
                        </Box>
                    </Box>
                </Container>
                <JortsPage />
                <CollectionPage />
                <WallpaperPage />
                <Pants />
            </UserLayout>
        </>
    )
}

export default Home;