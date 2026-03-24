import React from 'react';
import MenuAppBar from '../MenuAppBar';
import FooterPage from '../../Footer';

interface FormLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <>
        <MenuAppBar />
        {children}
        <FooterPage />
    </>
  );
};

export default UserLayout;