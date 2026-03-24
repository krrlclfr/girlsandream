import React from 'react';
import { Typography, Box, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom'

interface FormLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  route: string,
  handleSubmitButton: (e: React.FormEvent<HTMLFormElement>) => void
}

const FormLayout: React.FC<FormLayoutProps> = ({ title, subtitle, children, sx, route, handleSubmitButton }) => {
  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Box
                sx={{
                    maxWidth: 450,
                    mx: 'auto',
                    mt: 8,
                    p: 4,
                    ...sx
                }}
                component="form"
                onSubmit={handleSubmitButton}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <Box>
                        <Typography variant="h4" component="h1" sx={{ my: 6, textAlign: 'center' }}>
                            {title}
                        </Typography>
                        { children }
                        <Link to={route}>
                            <Typography variant="body1" component="div" sx={{ my: 4,  textAlign: 'center' }}> { subtitle }</Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  );
};

export default FormLayout;
