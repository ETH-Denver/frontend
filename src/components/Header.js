// Header.js
import React from 'react';
import { Button } from "@mui/material";

const ethers = require("ethers")


export const signMessage = () => {

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();

    console.log("signer", signer);
    try {
        signer.signMessage("Hey hey").then((result) => {
            console.log(result);
        });
    } catch (error) {
        // handle error
        console.log(error);
    }
};
//
// // A Web3Provider wraps a standard Web3 provider, which is
// // what MetaMask injects as window.ethereum into each page
// const provider = new ethers.providers.Web3Provider(window.ethereum)
//
// // MetaMask requires requesting permission to connect users accounts
// await provider.send("eth_requestAccounts", []);
//
// // The MetaMask plugin also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, you need the account signer...
// const signer = provider.getSigner()

const Header = () => {
    return (
        <header>
            <Button variant="contained" onClick={signMessage}>Sign Message</Button>
        </header>
    );
};

export default Header;