import { ThemeProvider } from 'styled-components';
import React, { Fragment } from 'react';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Header />
                <Container>
                    <h1>Hello World from React</h1>
                </Container>
            </Fragment>
        </ThemeProvider>
    );
}

export default App;
