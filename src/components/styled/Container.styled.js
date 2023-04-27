import styled from "styled-components";

export const Container = styled.div`
   //Primary:
    --Purple: hsl(259, 100%, 65%);
    --Light-red: hsl(0, 100%, 67%);
   //Neutral:
    --White: hsl(0, 0%, 100%);
    --Off-white: hsl(0, 0%, 94%);
    --Light-grey: hsl(0, 0%, 86%);
    --Smokey-grey: hsl(0, 1%, 44%);
    --Off-black: hsl(0, 0%, 8%);
    *{
        margin:0;
    }
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    --iRegular: 400;
    --bold: 700;
    --iExtrabold: 800;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--Off-white);
    label{
        font-size: .5em;
        color: var(--Smokey-grey);
        text-transform: uppercase;
        margin:0 0 5px 0;
    }
    .errornotif{
        @media screen and (max-width:600px){
            font-size: .3em;
            margin:0;
        }
    }
`