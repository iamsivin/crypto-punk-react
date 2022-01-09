import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setselectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div key={punk.token_id} onClick={() => setselectedPunk(punk.token_id)}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
