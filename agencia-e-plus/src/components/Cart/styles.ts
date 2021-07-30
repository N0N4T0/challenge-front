import styled from "styled-components";

export const CartContainer = styled.div`
    visibility: visible;
    opacity: 1;

    height: 500px;
    width: 350px;
    background-color: var(--white-100);

    position: absolute;
    right: 6rem;

    overflow-y: auto;
    height: 23.43rem;  
`;

export const CartContent = styled.div`
    display: flex;
    height: auto;
    max-width: 350px;
    padding: 30px 35px 0 20px ;
    align-items: center;

    border-bottom: 3px solid #E8E8E8;

    &:last-child{
        margin-bottom: 2.5rem;
    }

    img {
        width: 110px;
        height: 90px;
        margin-right: 15px;
    }

    div {
        display: inline-block;

        h4 {
            font-weight: 400;
            font-size: 0.7rem;
            text-align: left;
        }

        div {
            display: grid;
            grid-template-columns: 57px 100px;
            padding-top: 10px;

            p {
                font-size: 0.9rem;
            }

            p + p {
                color: var(--green-400);
                font-weight: 600;
                justify-self: end;
            }
        }
    }   
`

export const CartOrder = styled.div`
    visibility: visible;
    opacity: 1;

    width: 350px;

    position: absolute;
    bottom: 11rem;
    right: 6rem;

    h3 {
        background-color: #E6E6E6;
        height: 4rem;
        line-height: 4rem;
        text-align: center;
        font-weight: 400;
        font-size: 1.1rem;

        strong {
            font-weight: 600;
        }
    }

    button {
        width: 100%;
        height: 4rem;
        border: unset;
        border-color: inherit;
        border-width: none;

        color: var(--white);
        font-weight: 600;
        background-color: var(--green-400);

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;