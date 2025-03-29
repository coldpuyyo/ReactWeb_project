import styled from "styled-components";

export const MyinfoContainer = styled.div`
    width: 350px;
    height: 400px;
    border: 1px solid rgb(192, 192, 192);
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.02);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    justify-items: start;
    display: grid;
    grid-column: 3 / 5;
    grid-row: 3 / 6;
`;

export const H2 = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: red;
    margin: 20px;
    margin-left: 80px;
`;
export const Info = styled.div`
    font-size: 16px;
    margin: 5px;
    margin-left: 80px;
`;
export const ModifyButton = styled.button`
    width: 45%;
    height: 35px;
    font-size: 16px;
    border: 1px solid;
    border-color: rgb(192, 192, 192);
    background-color: rgba(252, 232, 216, 0.6);
    border-radius: 10px;
    margin-left: 15px;
    margin-bottom: 10px;
    cursor: pointer;
`;
export const DelButton = styled.button`
    width: 17%;
    height: 25px;
    background-color:rgb(255, 0, 0);
    color: white;
    font-size: 14px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    align-self: end;
    margin-bottom: 10px;
    margin-left: 30px;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;
export const BottonWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-left: 80px;
`;