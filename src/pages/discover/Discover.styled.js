import styled from "styled-components";

export const CtDiscover = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 78vh;
    background-color: var(--main-color);
    @media (max-width: 564px) {
        flex-direction: column;
    }
`;

export const CtDiscoverTxt = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 40%;
    @media (max-width: 564px) {
        width: 90vw;
    }
`; 

export const TitleDiscover = styled.h2`
    font-size: 3rem;
    font-weight: 400;
    color: var(--light-color);
    margin: 0% 0% 2% 0%;
`;

export const CtSections = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const CtSection = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-color);
    color: var(--light-color);
    width: 100px;
    height: 85px;
    padding: 1%;
    margin: 2%;
`;

export const ImgSection = styled.img`
    width: 50%;
`;

export const TxtDiscover = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: var(--light-color);
    margin-top: 5%;
`;

export const ImgCovers = styled.img`
    width: 20%;
    @media (max-width: 564px) {
        width: 60%;
        margin-top: 7%;
    }
`;