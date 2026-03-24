import { Box, Container, Typography, List, ListItem, ListItemText} from '@mui/material'
import { returnPolicyItems } from './ReturnPolicyItems'
import UserLayout from '../../../components/layout/user-layout/UserLayout'

const ShippingPolicyPage = () => {
    return (
        <> 
            <UserLayout>
                <Container maxWidth='sm' sx={{ my: 20 }}>
                    <Box sx={{ textAlign: 'center', color: 'text.secondary'}}>
                        <Typography variant='h4' component="div" fontWeight={100}> Return Policy </Typography>
                    </Box>

                    {returnPolicyItems.map((data) => {
                        return (
                            <Box sx={{ mt: 3, color: 'text.secondary' }}>
                                <Typography variant="body2" component="div" fontWeight={600}> {data.description}  </Typography>
                                <Box sx={{ ml: 4}}>
                                    <List
                                        sx={{
                                            listStyleType: 'disc',
                                            pl: 1,
                                            '& .MuiListItem-root': {
                                            display: 'list-item',
                                            },
                                        }}
                                        >
                                        {data.descriptionItems.map((el) => {
                                            return (
                                                <ListItem>
                                                    <ListItemText primary={el} primaryTypographyProps={{ variant: 'body2'}}/>
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                </Box>
                            </Box>
                        )
                    })}
                </Container>
            </UserLayout>
        </>
    )
}

export default ShippingPolicyPage