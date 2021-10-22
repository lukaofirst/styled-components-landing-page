import React from 'react';
import SocialIcons from './SocialIcons';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src='./images/logo_white.svg' alt='' />

                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Optio dolor culpa labore molestiae earum
                            voluptates est temporibus maiores fugiat illum.
                        </li>
                        <li>(99) 99999-9999</li>
                        <li>email@gmail.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>

                <p>&copy; 2021. All right reserved</p>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
