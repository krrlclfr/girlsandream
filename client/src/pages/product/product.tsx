import JortsPage from "../../components/Jorts"
import { Container } from "@mui/material"
import UserLayout from "../../components/layout/user-layout/UserLayout"

const ProductPage = () => {

    return (
        <>
            <UserLayout>
                <Container maxWidth="xl" sx={{ mt: 20 }}>
                    <JortsPage />
                </Container>
            </UserLayout>
        </>
    )
}  

export default ProductPage