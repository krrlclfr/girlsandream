import { Box, Container, Typography, List, ListItem, ListItemText} from '@mui/material'
import UserLayout from '../../components/layout/user-layout/UserLayout'

const ShippingPolicyPage = () => {
    return (
        <> 
        <UserLayout>
            <Container maxWidth='sm' sx={{ my: 20 }}>
                <Box sx={{ textAlign: 'center', color: 'text.secondary'}}>
                    <Typography variant='h4' component="div" fontWeight={100}> Shipping Policy </Typography>
                </Box>
                <Box sx={{ mt: 3, color: 'text.secondary' }}>
                    <Typography variant="body2" component="div" fontWeight={600}> What are your couriers? </Typography>
                    <Box sx={{ my: 3, color: 'text.secondary' }}>
                        <Typography variant="body2" component="div" fontWeight={200}> For both Metro Manila and provincial areas, we normally use Entrego or J&T Express. </Typography>
                    </Box>
                </Box>
                <Box sx={{ mt: 1, color: 'text.secondary' }}>
                    <Typography variant="body2" component="div" fontWeight={600}> What are your shipping rates? </Typography>
                    <Box sx={{ ml: 4}}>
                        {/* <Typography variant="body2" component="div" fontWeight={200}> For both Metro Manila and provincial areas, we normally use Entrego or J&T Express. </Typography> */}
                        <List
                            sx={{
                                listStyleType: 'disc',
                                pl: 1,
                                '& .MuiListItem-root': {
                                display: 'list-item',
                                },
                            }}
                            >
                            <ListItem>
                                <ListItemText primary="P100 Metro Manila" primaryTypographyProps={{ variant: 'body2'}}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="P200 provincial" primaryTypographyProps={{ variant: 'body2'}}/>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box sx={{ mt: 1, color: 'text.secondary' }}>
                    <Typography variant="body2" component="div" fontWeight={600}> What’s your standard delivery time? </Typography>
                    <Box sx={{ ml: 4}}>
                        {/* <Typography variant="body2" component="div" fontWeight={200}> For both Metro Manila and provincial areas, we normally use Entrego or J&T Express. </Typography> */}
                        <List
                            sx={{
                                listStyleType: 'disc',
                                pl: 1,
                                '& .MuiListItem-root': {
                                display: 'list-item',
                                },
                            }}
                            >
                            <ListItem>
                                <ListItemText primary="3 to 7 working days within Metro Manila" primaryTypographyProps={{ variant: 'body2'}} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="5 to 14 working days for provincial areas" primaryTypographyProps={{ variant: 'body2'}} />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box sx={{ mt: 3, color: 'text.secondary' }}>
                    <Box sx={{ my: 3, color: 'text.secondary' }}>
                        <Typography variant="body2" component="div" fontWeight={200}> Kindly take note that delivery time indicated begins upon preparation of orders. </Typography>
                    </Box>
                </Box>
                <Box sx={{ mt: 3, color: 'text.secondary' }}>
                    <Box sx={{ my: 3, color: 'text.secondary' }}>
                        <Typography variant="body2" component="div" fontWeight={200}> Please bear with us as there may be some delays due to the COVID pandemic. </Typography>
                    </Box>
                </Box>
                <Box sx={{ mt: 3, color: 'text.secondary' }}>
                    <Typography variant="body2" component="div" fontWeight={600}> How can I track my order? </Typography>
                    <Box sx={{ my: 3, color: 'text.secondary' }}>
                        <Typography variant="body2" component="div" fontWeight={200}> We will send you a tracking number as soon as it’s available. You may check in on your account or email once in a while to view your order details. </Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: 1, color: 'text.secondary' }}>
                    <Typography variant="body2" component="div" fontWeight={600}>Once you receive your tracking number, you may also monitor your orders through: </Typography>
                    <Box sx={{ ml: 4}}>
                        {/* <Typography variant="body2" component="div" fontWeight={200}> For both Metro Manila and provincial areas, we normally use Entrego or J&T Express. </Typography> */}
                        <List
                            sx={{
                                listStyleType: 'disc',
                                pl: 1,
                                '& .MuiListItem-root': {
                                display: 'list-item',
                                },
                            }}
                            >
                            <ListItem>
                                <ListItemText primary="J&T Express: https://www.jtexpress.ph/" primaryTypographyProps={{ variant: 'body2'}} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Entrego: https://entrego.com.ph/tracking" primaryTypographyProps={{ variant: 'body2'}} />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Container>
        </UserLayout>
        </>
    )
}

export default ShippingPolicyPage