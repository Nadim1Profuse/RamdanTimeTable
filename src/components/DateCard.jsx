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
          width: "2.25rem",
          height: "2.75rem",
          backgroundColor: "azure",
          cursor: "pointer",
          paddingBottom:"3px"
        }}
        color="white"
        // onClick={onClick}
      >
       
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".38rem",
              backgroundColor: "black",
              color: "white",
              marginBottom: "0",
            }}
            tabIndex={props.ramdan}
            onClick={onClick}
          >
            {" "}
            {props.date}
          </p>
          <p
            style={{ fontWeight: "bolder", fontSize: ".70rem", marginTop: "2.0px",marginBottom:"0px" }}
            tabIndex={props.ramdan}
            onClick={onClick}
          >
            {" "}
            <span onClick={onClick} tabIndex={props.ramdan} style={{ fontWeight: "bolder",marginBottom:"0" }}>{props.ramdan}</span>
             <p onClick={onClick} tabIndex={props.ramdan} style={{marginBottom:"2px",marginTop:"0px",fontWeight:"bolder"}}>رمضان</p>
          </p>
    
      </Card>
    </>
  );
};

export default DateCard;
