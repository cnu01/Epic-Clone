import styled from "styled-components"

export const Transaction = () => {
    return (

        <Container>
            <h2>PURCHASE HISTORY</h2>
            <p>View your account payment details and transactions. Read Epic Games Refund Policy </p>
            <select className="selection">
                <option value="">Purchase History</option>
                <option value="Code Redemption History">Code Redemption History</option>
                <option value="Purchase History">Purchase History</option>
                <option value="V-Bucks Card Redemption History">V-Bucks Card Redemption History</option>
                <option value="Subscription History">Subscription History</option>


            </select>
            <p>No charges have been made to your account yet</p>
        </Container>

    )
}

const Container = styled.div`
width:60%;
// border:1px solid red;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
margin-left:35.5%;

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

// const Main = styled.div`
// display:flex;
// // align-items:center;
// width:100%;
// // border:1px solid red
// // justify-content:center;
// gap:10px;
// margin-left:35.5%;
// // padding:35.5%
// ;
// `