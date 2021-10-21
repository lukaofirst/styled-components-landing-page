import React, { Fragment } from 'react';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';

function App() {
    return (
        <Fragment>
            <Header />
            <Container>
                <h1>Hello World from React</h1>
            </Container>
        </Fragment>
    );
}

export default App;
