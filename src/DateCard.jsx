import Card from "react-bootstrap/Card";
import React from "react";
import TodayModel from "./TodayModel";

const DateCard = (props) => {
  function onClick(e) {
    console.log("onClcik", e.target.tabIndex);
    props.onClick(e.target.tabIndex)

  }

  return (
    <>
    <TodayModel/>
      <Card
        border="dark"
        style={{
          textAlign: "center",
          width: "3.1rem",
          height: "3.5rem",
          backgroundColor: "azure",
          cursor: "pointer",
        }}
        color="white"
        onClick={onClick}
      >
       
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".58rem",
              backgroundColor: "black",
              color: "white",
              marginBottom: "0",
            }}
            tabIndex={props.ramdan}
            
          >
            {" "}
            {props.date}
          </p>
          <p
            style={{ fontWeight: "bolder", fontSize: ".75rem", marginTop: "2.5px" }}
            tabIndex={props.ramdan}
          >
            {" "}
            <span tabIndex={props.ramdan} style={{ fontWeight: "bolder" }}>{props.ramdan}</span>
            <br /> رمضان
          </p>
    
      </Card>
    </>
  );
};

export default DateCard;