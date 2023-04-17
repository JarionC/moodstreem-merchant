import React, { Component } from "react";
import DataService from "../services";
import { Link } from "react-router-dom";
import "../styles/store.css";



export default class Store extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);

    this.state = {
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
  }

  searchTitle() {
    DataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return(
      <div className="store-container">
      <div className="contact-title">MoodStreem Store</div>

      <div className="store-text">
        <div className="store-pretext">
          Welcome to the MoodStreem Store! Proceeds and royalties from our store will go towards supporting the MoodStreem ecosystem as we continue development.
         
          We plan to have physical merchandise added to our store in the near future!
        </div>
        
        <div className="opensea-title">Opensea Assets</div>

        <div className="opensea-text">We have listed our first non-fungible assets on OpenSea! As these are our very first assets, they are Tier 1, meaning they will have the highest base voting power of any of our governance assets.</div>

        </div>
        <div className="cards-container">
          <div className="card-container">
          
            <nft-card
            tokenAddress="0x5caebd3b32e210e85ce3e9d51638b9c445481567"
            tokenId="2242579050293992223"
            network="mainnet"
            referrerAddress="YOUR_ADDRESS_HERE"
            width="100%"
            height="100%"
            >
            </nft-card>
          </div>
        </div>
      </div>
    );
}
}