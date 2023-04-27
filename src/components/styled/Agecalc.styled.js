import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
    p{
        font-size: .45em;
        color:var(--Light-red);
        margin:5px;
    }
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
//Styled for age calculator:
export const StyledAgecalc = styled.div`
    position:relative;
    width: 60%;
    height: 90vh;
    border-radius:30px 30px 220px 30px;
    background-color: var(--White);
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    @media screen and (max-width:1025px) {
        width: auto;
        height: 600px;
    }
    /* @media screen and (max-height:737px),(max-height:668px) {
        width: auto;
        height: 90vh;
        border-radius:30px 30px 120px 30px;
        margin:0 5%;
    } */
    @media screen and (max-height:601px){
        width: auto;
        height: 110vh;
        margin:5%;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height: 65vh;
        border-radius:30px 30px 120px 30px;
        margin:0 5%;
    }
    @media screen and (max-height:541px){
        width: auto;
        height: 120vh;
    }
    @media screen and (max-height:415px){
        width: auto;
        height: 150vh;
        margin:5%;
    }
    @media screen and (max-height:391px),(max-height:386px){
        width: auto;
        height: 160vh;
        margin:5%;
    }
    @media screen and (max-height:361px){
        width: auto;
        height: 170vh;
        margin:5%;
    }
    @media screen and (max-height:281px){
        width: auto;
        height: 220vh;
        margin:5%;
    }
`
//Styled for form:
export const Styledform = styled.form`
    display:flex;
    flex-direction: row;
    width: 70%;
    height: auto;
    padding: 6% 5% 0 0;
    margin:0 7% 0;
    @media screen and (max-width:1025px) {
        width: auto;
    }
    @media screen and (max-width:600px) {
        width: auto;
        gap:15%;
        margin:5% 7% 3%;
    }
`
export const Inputbox = styled.input`
    display:flex;
    width: 55%;
    height: auto;
    padding:8% 12%;
    border-radius: 8px;
    border: 1px solid var(--Light-grey);
    font-size: .95em;
    font-weight: var(--bold);
    color:var(--Dark-Blue);
    cursor: pointer;
    :hover{
        border: 1px solid var(--Purple);
    }
    @media screen and (max-width:1025px) {
        width: 80%;
        margin: 10px auto;
    }
    @media screen and (max-width:600px){
        width: 100%;
        height:auto;
        font-size: .65em;
        letter-spacing: -.05em;
        font-weight: var(--iExtrabold);
        padding:15% 10%;
    }
    @media screen and (max-height:415px),(max-height:386px){
        width: 60%;
        height:auto;
        margin:0;
    }
`
export const InputDate = styled(Inputbox).attrs({
    id:'day',
    name:'day',
    type:'number',
    placeholder:'DD',
})`
    color:var(--Blue);
`
export const InputMonth = styled(Inputbox).attrs({
    id:'month',
    name:'month',
    type:'number',
    placeholder:'MM',
})`
    color:var(--Blue);
`
export const InputYear = styled(Inputbox).attrs({
    id:'year',
    name:'year',
    type:'number',
    placeholder:'YYYY',
})`
    color:var(--Blue);
`
export const Separator = styled(Hstackflexi)`
    position: absolute;
    left:7%;
    top:25%;
    width:auto;
    @media screen and (max-height:1369px){
        top:31%;
    }
    @media screen and (max-height:1181px){
        top:30%;
    }
    @media screen and (max-width:600px){
        top:42%;
    }
    @media screen and (max-width:541px){
        top:47%;
    }
    @media screen and (max-width:415px),(max-width:386px){
        top:43%;
    }
    @media screen and (max-height:376px){
        top:30%;
    }
    @media screen and (max-width:376px){
        top:43%;
    }
`
export const Line = styled.div`
    width: 600px;
    height:2px;
    background-color: var(--Light-grey);
    @media screen and (max-height:1369px){
        width:700px;
    }
    @media screen and (max-height:1181px){
        width:600px;
    }
    @media screen and (max-width:600px){
        width:280px;
    }
    @media screen and (max-height:541px){
        width:500px;
    }
    @media screen and (max-height:541px){
        width:500px;
    }
    @media screen and (max-height:415px){
        width:520px;
    }
    @media screen and (max-height:391px){
        width:580px;
    }
    @media screen and (max-height:386px){
        width:600px;
    }
    @media screen and (max-height:376px){
        width:450px;
    }
    @media screen and (max-height:361px){
        width:500px;
    }
    @media screen and (max-width:281px){
        width:200px;
    }
    @media screen and (max-height:281px){
        width:420px;
    }
`
export const Buttonarrow = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-style: none;
    cursor: pointer;
    background-color: var(--Purple);
    margin:0;
    &:hover{
        background-color:var(--Off-black);
    }
    &:active{
        transform: scale(.98);
    }
    @media screen and (max-width:1025px) {
        width:80px;
        height:80px;
    }
    @media screen and (max-width:600px){
        width:60px;
        height:60px;
        margin:-11% 0 0 0;
    }
`
export const Ageresult = styled(Vstack)`
    position: absolute;
    left:6%;
    top:39%;
    width:600px;
    line-height: 3.4em;
    p{
        font-size: 3.2em;
        font-weight: var(--iExtrabold);
        color: var(--Off-black);
        margin:0;
    }
    span{
        font-size: 3.1em;
        font-weight: var(--iExtrabold);
        color: var(--Purple);
        margin:0 2%;
    }
    @media screen and (max-height:821px){
        top:45%;
    }
    @media screen and (max-height:769px){
        top:41%;
    }
    @media screen and (max-width:600px){
        width: 100%;
        top:50%;
        line-height: 2.3em;
        margin: 0;
        p{
            font-size: 1.6em;
        }
        span{
            width:auto;
            font-size: 1.5em;
        }
    }
    @media screen and (max-height:376px){
        p{
            font-size: 2.7em;
        }
        span{
            width:auto;
            font-size: 2.6em;
        }
    }
    @media screen and (max-width:281px){
        p{
            font-size: 1.2em;
        }
        span{
            width:auto;
            font-size: 1.1em;
        }
    }
    @media screen and (max-height:281px){
        p{
            font-size: 2.4em;
        }
        span{
            width:auto;
            font-size: 2.3em;
        }
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: flex-end;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    p{
        font-size: .7rem;
        color: var(--Light-red);
    }
    a {
        color: var(--Purple);
    }
`