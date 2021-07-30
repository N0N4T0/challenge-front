import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 1420px;
    margin: 0 auto;

    height: 5rem;
    box-shadow: 0 1.3em 0.5em -1em #E4E4E4;

    position: relative;

    &::after{
        content: '';
        
        width: 0; 
        height: 0; 
        border-left: 18px solid transparent;
        border-right: 18px solid transparent;
        border-bottom: 18px solid var(--white-100);
        
        position: absolute;
        bottom: 0px;
        right: 68px;
    }
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
            margin: 0 1rem;
            height: 5rem;
            line-height: 5rem;
            font-size: 0.9rem; 
        }
    }

    nav + nav {
        display: inline-block;
        margin-left: 7.6rem;
        
        a {
            margin: 0 1.5rem;
        }

        span {
            height: 5rem;
            line-height: 5rem;
            font-size: 2rem;

        }
    }
`;