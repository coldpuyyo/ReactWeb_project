import styled from "styled-components";

export const MypageContainer = styled.div`
    display: grid;
    grid-row: 3;
    grid-column: 3/5;
`

export const MyBox = styled.div`
    background-color: rgb(255, 248, 248);
    height: 200px;
    width: 500px;
    border-radius: 10px;
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.1);
`

export const MyInfoButton = styled.button`
    margin-left: 25px;
    margin-top: 25px;
    border: solid 1px;
    border-color: lightgrey;
    background-color: white;
    border-radius: 10px;
    width: auto;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
    background-color: rgb(230, 230, 230);
    }
    &:active {
        background-color: rgb(255, 255, 255);
    }
`

export const Wrapper = styled.div`
    display: flex;
`

export const MyOrder = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    margin-left: 25px;
    width: 200px;
    height: 70px;
    background-color: white;
    border: solid 2px;
    border-color: lightgrey;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:active {
        background-color: rgb(230, 230, 230);
    }
`

export const MyCart = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    margin-left: 10px;
    width: 200px;
    height: 70px;
    background-color: white;
    border: solid 2px;
    border-color: lightgrey;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:active {
        background-color: rgb(230, 230, 230);
    }
`

export const CartLink = styled.link`
    text-decoration: none;
`;

export const Myshoping = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: rgba(223, 223, 223, 0.1);
    border-radius: 10px;
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.1);
`

export const EventList = styled.div`
    align-content: center;
    display: grid;
    grid-row: 4;
    grid-column: 3/5;
    width: 440px;
    padding: 30px;
    background-color: rgba(223, 223, 223, 0.1);
    border-radius: 10px;
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.1);
`
export const CustomerService = styled.div`
    width: 440px;
    padding: 30px;
    align-items: start;
    display: grid;
    grid-row: 5;
    grid-column: 3/5;
    background-color: rgba(223, 223, 223, 0.1);
    border-radius: 10px;
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.1);
`

export const Div1 = styled.div`
    display: grid;
    grid-row: 2;
    grid-column: 3/5;
    height: 120px;
`
export const Div2 = styled.div`
    display: grid;
    grid-row: 6;
    grid-column: 3/5;
    height: 120px;
`