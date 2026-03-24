import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, Divider, Box} from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import { removeItemCart } from '../app/features/cart/usersCartSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import { teal } from "@mui/material/colors"

export default function ResponsiveDialog() {
    const dispatch = useAppDispatch()
    const userCart = useAppSelector((state) => state.userCart)

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <>
        <IconButton onClick={handleClickOpen}>
            <Badge 
                badgeContent={userCart.cartItems.length} 
                sx={{
                    '& .MuiBadge-badge': {
                    bgcolor: teal[400],
                    color: 'white',
                    },
                }}
                >
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
        <Dialog
            fullScreen={false}
            open={open}
            onClose={handleClose}
                PaperProps={{
                sx: {
                position: 'fixed',
                right: 0,
                top: 0,
                m: 0,
                width: 500,
                height: '100vh',
                maxHeight: '100vh',
                borderRadius: 0,
                },
            }}
        >
            {/* Header */}
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" component='div'>Your Cart</Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <Divider />

            {/* Cart Items */}
            <DialogContent sx={{ flex: 1, overflowY: 'auto' }}>
                {userCart.cartItems.length >= 1 ? userCart.cartItems.map((item, key) => (
                    <Box
                        key={key}
                        sx={{
                        display: 'flex',
                        gap: 2,
                        mb: 3,
                        }}
                    >
                        <Box
                            component="img"
                            src={item.productImage}
                            sx={{ width: 90, height: 90, objectFit: 'cover' }}
                        />
                        
                        <Box sx={{ flex: 1 }}>
                            <Stack gap={1}>
                                <Typography fontWeight={600}>{item.productName}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Size: {item.size}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Qty: {item.quantity}
                                </Typography>
                                <Typography fontWeight={500}>₱ {item.productPrice}</Typography>
                            </Stack>
                        </Box>
                        <Box sx={{ flex: 1, display: 'center', justifyContent: 'end', alignItems: 'center' }}>
                            <IconButton>
                                <DeleteIcon onClick={() => dispatch(removeItemCart(key))}/>
                            </IconButton>
                        </Box>
                    </Box>
                )): <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}
                    > 
                        <Typography variant="h5" component='div' color="text.secondary">
                             Empty cart...
                        </Typography>
                    </Box> }
            </DialogContent>

            <Divider />

            {/* Footer */}
            {userCart.cartItems.length >= 1 && (
                <DialogActions sx={{ p: 2, flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography>Total</Typography>
                    <Typography fontWeight={600}>₱{userCart.grandTotal}</Typography>
                    </Box>
        
                    <Button variant="contained" fullWidth size="large" sx={{ borderRadius: 0 }}>
                        Checkout
                    </Button>
                </DialogActions>
            )}
        </Dialog>
    </>
  );
}
