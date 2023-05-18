import React from 'react';
import { styled } from '@mui/system';
import { List, ListItem, ListItemText, Avatar, Typography } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import Header from '../../components/Header/Header';

const RootContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: `linear-gradient(to bottom, #000000, #000000 50%, #faa342 50%, #faa342)`,
});

const Container = styled('div')({
    width: '400px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '16px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
});

const HeaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
});

const HeaderIcon = styled(Avatar)({
    marginRight: '8px',
    backgroundColor: '#faa342',
    color: '#ffffff',
});

const ListItemContainer = styled(ListItem)({
    marginBottom: '8px',
    '&:hover': {
        backgroundColor: '#f5f5f5',
    },
});

const ListItemIconContainer = styled(Avatar)({
    color: '#faa342',
});

const ContactName = styled(Typography)({
    fontWeight: 'bold',
});

const ContactListPage: React.FC = () => {
    return (
        <>
            <Header></Header>
            <RootContainer sx={{ height: '80vh' }}>
                <Container>
                    <HeaderContainer>
                        <HeaderIcon>
                            <Phone />
                        </HeaderIcon>
                        <Typography variant="h6">Список контактов</Typography>
                    </HeaderContainer>
                    <List>
                        <ListItemContainer>
                            <ListItemIconContainer>
                                <Email />
                            </ListItemIconContainer>
                            <ListItemText primary={<ContactName>Иван Иванов</ContactName>} secondary="ivan@example.com" />
                        </ListItemContainer>
                        <ListItemContainer>
                            <ListItemIconContainer>
                                <Email />
                            </ListItemIconContainer>
                            <ListItemText primary={<ContactName>Петр Петров</ContactName>} secondary="peter@example.com" />
                        </ListItemContainer>
                        {/* Add other contacts */}
                    </List>
                </Container>
            </RootContainer>
        </>
    );
};

export default ContactListPage;
