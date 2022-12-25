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
`;

export const CtTitle = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 25%;
`;

export const TitleJoin = styled.h2`
    color: ${props => props.color ? 'var(--light-color)' : 'var(--accentext-color)'};
    font-size: 3rem;
    font-weight: 700;
    margin-left: 3%;
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
    background-color: ${props => props.colorone ? 'var(--circle1-color)': 'var(--circle2-color)'};
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    z-index: ${props => props.z};
`;