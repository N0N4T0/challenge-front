import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    :root{
        --white: #FFFFFF;
        --white-50: #F9F9F9;
        --white-100: #F0F0F0;

        --gray-400: #9B9B9B;
        
        --green-200: #3CC946;
        
        --black: #000000;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(---white);
        color: var(--gray-400);
    }

    body, input, button {
        font: 400 1rem 'Montserrat', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    
    @media(max-width: 1080px){
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }    
`;