import styled from "styled-components";

export const CtFooter = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--dark-color);
    width: 100vw;
    height: 7vh;
`;

export const CtFooterLinks = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`; 

export const CtFooterSocialMedia = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 564px) {
        flex-direction: column;
    }
`;

export const TxtFooter = styled.p`
    color: var(--light-color);
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem;
    @media (max-width: 564px) {
        margin: 0rem 1rem 0rem 1rem;
    }
`;

export const ImgSocialMedial = styled.img`
    width: 100%;
    @media (max-width: 564px) {
        width: 20%;
    }
`;