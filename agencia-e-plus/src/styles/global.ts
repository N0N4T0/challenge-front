import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    :root{
        --white: #FFFFFF;
        --white-50: #F9F9F9;
        --white-100: #F0F0F0;

        --gray: #8D8D8D;
        --gray-100: #E8E8E8;
        --gray-400: #9B9B9B;
        
        --green-200: #3CC946;
        --green-400: #00BC0E;
        
        --black: #000000;
        --black-800: #303030;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(---white);
        color: var(--black-800);
    }

    body, input, button {
        font: 500 1rem 'Montserrat', sans-serif;
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