import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 1420px;
    margin: 0 auto;

    height: 5rem;
    box-shadow: 0 1.3em 0.5em -1em #E4E4E4;

    position: relative;
`;

export const HeaderContent = styled.div`
    max-width: 1420px;
    height: 5rem;
    padding: 0 2.5rem;

    display: flex;
    align-items: center;

    img {
        width: 262px;
        height: 50px;
    }

    nav {
        margin-left: 4rem;
        height: 5rem;

        a {
            display: inline-block;
            position: relative;
            padding: 0 0.8rem;
            height: 5rem;
            line-height: 5rem;
            font-size: 0.9rem; 
        }
    }

    nav + nav {
        display: inline-block;
        margin-left: 9.6rem;
        
        a {
            padding: 0 1.5rem;
        }

        span {
            height: 5rem;
            line-height: 5rem;
            font-size: 2rem;

        }
    }
`;