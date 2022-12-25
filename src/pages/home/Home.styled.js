import styled from "styled-components";

export const CtHome = styled.div`
    min-width: 900px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: var(--main-color);
    height: 85vh;
    position: relative;
    overflow: hidden;
    @media (max-width: 564px) {
        min-width: 0px;
    }
`;

export const CtImg = styled.img`
    height: 80%;
    z-index: 1;
    @media (max-width: 564px) {
        display: none;
    }
`;

export const CtTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 85vh;
    width: 30vw;
    padding-left: 5vw;
    @media (max-width: 564px) {
        width: 90vw;
    }
`;

export const TitleHome = styled.h2`
    font-size: 3rem;
    font-size: 400;
    color: var(--light-color);
`;

export const TxtHome = styled.p`
    font-size: 1.2rem;
    font-size: 300;
    color: var(--light-color);
`;

export const BtHome = styled.button`
    width: 110px;
    height: 40px;
    border: none;
    border-radius: 10px;
    color:var(--light-color);
    background-color: var(--button-color);
    margin-top: 1.7rem;
    cursor: pointer;
`;

export const CircleOne = styled.div`
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    background-color: var(--circle2-color);
    position: absolute;
    bottom: -27%;
    right: -28%;
    @media (max-width: 564px) {
        bottom: -10%;
        right: -20%;
    }
`;

export const CircleTwo = styled.div`
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background-color: ${props => props.colorone ? 'var(--circle1-color)': 'var(--circle2-color)'};
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    @media (max-width: 564px) {
        top: ${props => props.topM};;
    }
`;