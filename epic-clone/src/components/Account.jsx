import styled from "styled-components"

export const Account = () => {
    return (
        <Main>
            <Container1>
                <div>
                    GENERAL
                </div>
                <div>
                    TRANSACTIONS
                </div>
            </Container1>
            <Container>
                <h2>GENERAL SETTINGS</h2>
                <p>Manage the account details you've shared with Epic Games including your name, contact info and more</p>
                <h2>ACCOUNT INFO</h2>
                <p>ID: <span></span></p>

                <Detail placeholder="Display Name">
                </Detail>
                <Detail placeholder="Email Address">
                </Detail>
                <h2>PERSONAL DETAILS</h2>
                <p>Manage your name and contact info. These personal details are private and will not be displayed to other users. View our Privacy Policy </p>
                <Detail placeholder="First Name">
                </Detail>
                <Detail placeholder="Last Name">
                </Detail>
                <select className="selection">
                    <option value="">Preferred Communication Language</option>
                    <option value="English">English</option>
                    <option value="Korean">Korean</option>
                    <option value="Japanese">Japanese</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Russian">Russian</option>
                </select>
                <h2>ADDRESS</h2>
                <Detail placeholder="Address Line 1">
                </Detail>
                <Detail placeholder="Address Line 2">
                </Detail>
                <Detail placeholder="City">
                </Detail>
                <Region placeholder="Region"></Region>
                <Region placeholder="Postal Code"></Region>
                <h3>Country / Region</h3>
                <select className="selection">
                    <option value="">Country/Region</option>
                    <option value="INDIA">INDIA</option>
                    <option value="UNITED KINGDOM">UNITED KINGDOM</option>
                    <option value="JAPAN">JAPAN</option>
                    <option value="CHINA">CHINA</option>
                    <option value="GREECE">GREECE</option>
                    <option value="MALI">MALI</option>
                    <option value="INDONESIA">INDONESIA</option>
                    <option value="ICELAND">ICELAND</option>
                    <option value="PORTUGAL">PORTUGAL</option>
                    <option value="SRI LANKA">SRILANKA</option>
                </select>
                <Btn>DISCARD CHANGES</Btn>
                <Btn2>SAVE CHANGES</Btn2>
            </Container>
        </Main >
    )
}

const Container = styled.div`
width:60%;
// border:1px solid red;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

.selection{
    width:500px;
    border:none;
    padding:10px;
    margin-top:10px;
    background:none;
    border-radius:4px;
    border:1px solid black;
    margin-left:10px;
}
`
const Detail = styled.input`
width:250px;
padding:10px;
border-radius:4px;
border:1px solid black;
outline:none;
margin:8px;
`
const Region = styled(Detail)`
width:105px;
`
const Btn = styled.button`
width:200px;
padding:10px;
border-radius:4px;
border:1px solid black;
outline:none;
margin:8px;
`
const Btn2 = styled(Btn)`
background:blue;
`
const Container1 = styled.div`
width:30%;
// border:1px solid red;
top:0;

div{
    font-size:15px;
    padding:10px;
    align-items:center;
    background:whitesmoke;
}
div:hover{
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
border-left:4px solid blue;
}
`
const Main = styled.div`
display:flex;
// align-items:center;
width:100%;
justify-content:center;
gap:10px;
overflow-x: hidden;
box-sizing:border-box;
`