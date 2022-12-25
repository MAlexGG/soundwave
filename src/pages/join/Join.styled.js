import styled from "styled-components";

export const CtAux = styled.div`
    position: relative;
`;

export const CtJoin = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 78vh;
    background-color: var(--main-color);
    position: relative;
    overflow: hidden;
    @media (max-width: 564px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export const CtTitle = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    @media (max-width: 564px) {
        flex-direction: column;
        width: 90vw;
        align-items: flex-start;
    }
`;

export const TitleJoin = styled.h2`
    color: ${props => props.txtColor ? 'var(--light-color)' : 'var(--accentext-color)'};
    font-size: 3rem;
    font-weight: 700;
    margin-left: 3%;
    @media (max-width: 564px) {
        margin: 0%;
    }
`;

export const CtForm = styled.form`
    width: 25%;
    height: 40%;
    background-color: var(--dark-color);
    border-radius: 20px;
    margin-left: 5%;
    padding: 2% 3% 2% 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 1;
    @media (max-width: 564px) {
         width: 70vw;
         height: 40vh;
         margin-left: 0%;
         padding: 5% 8% 5% 8%;
    }
`;

export const LabelJoin = styled.label`
    color: var(--light-color);
    font-size: 1rem;
    font-weight: 500;
`;

export const InputJoin = styled.input`
    border: 1px solid var(--main-color);
    width: 100%;
    height: 12%;
    background-color: transparent;
    color: var(--light-color);
`;

export const BtJoin = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    color:var(--light-color);
    background-color: var(--button-color);
    margin-top: 1rem;
`;

export const Circle = styled.div`
    width: ${props => props.w};
    height: ${props => props.h};
    border-radius: 50%;
    background-color: ${props => props.circleColor ? 'var(--circle1-color)' : 'var(--circle2-color)'};
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    z-index: ${props => props.z};
    @media (max-width: 564px) {
        top: ${props => props.topM};
    }
`;