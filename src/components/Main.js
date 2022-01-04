import React, { useState, useEffect } from "react";
import instgramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="punkDetailsContainer">
          <div className="punkDetails" style={{ color: "#fff" }}>
            <div className="title">{activePunk.name}</div>
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div className="ownerAddress">{activePunk.owner.address}</div>
                <div className="ownerName">@sivinvarghese</div>
              </div>
              <div className="ownerLink">
                <img src={instgramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
