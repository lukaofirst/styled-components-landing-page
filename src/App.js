import { ThemeProvider } from 'styled-components';
import React, { Fragment } from 'react';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
    mobile: '768px',
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <GlobalStyles />
                <Header />
                <Container>
                    <h1>Hello World from React</h1>
                </Container>
            </Fragment>
        </ThemeProvider>
    );
}

export default App;
