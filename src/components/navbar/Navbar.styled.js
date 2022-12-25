import styled from "styled-components";

export const CtNavbar = styled.div`
    min-width: 900px;
    background-color: var(--main-color);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 15vh;
`;

export const CtLogo = styled.div`
    display: flex;
    margin: 1rem;
`;

export const Logo = styled.img`
    width: 100%;
`;

export const LogoTxt = styled.h2`
    color: var(--light-color);
    font-size: 1.2rem;
    font-weight: 300;
    margin: 1rem;
`;

export const CtNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavTxt = styled.p`
    color: var(--light-color);
    font-size: 1rem;
    font-weight: 300;
    margin: 1rem;
`;