import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "blue", 
                   textAlign: "center", 
                   marginTop: "-80px" }}>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Acerca de Nosotros</Heading>
            <FooterLink href="#">Visión</FooterLink>
            <FooterLink href="#">Misión</FooterLink>
          </Column>
          <Column>
            <Heading>Servicios</Heading>
            <FooterLink href="#">Ventas</FooterLink>
            <FooterLink href="#">Mantenimiento</FooterLink>
            <FooterLink href="#">Asesorías</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
