import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Footer from "./Footer";

export default function TodayModel(props) {
  const todaysRoza = props.currentRoza;
  console.log(todaysRoza);
  return (
    <Modal
      {...props}
      size="medium"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{
          backgroundColor: "azure",
          color: "#363945",
          fontFamily: "Baloo Thambi 2",
        }}
        closeButton
      >
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>
            {props.date}
            {""} {props.day} <br/> Ramadan {props.ramadan}
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1px",
        }}
      >
        <Card
          border="success"
          style={{ width: "18rem", margin: "10px", marginBottom: "0px" }}
        >
          <Card.Header
            style={{
              backgroundColor: "#363945",
              textAlign: "center",
              color: "azure",
              fontWeight: "bold",
            }}
          >
            Sehri سحري
          </Card.Header>
          <Card.Body
            style={{ fontFamily: "Baloo Thambi 2", textAlign: "center" }}
          >
            <Card.Text>
              <h6>
                Khatm Sehri <br /> ختم سحري
              </h6>
              <h1 style={{ fontFamily: "Orbitron" }}>{props.sehri} AM</h1>
              <p>(Nagpur and around)</p>
              <hr />
              <h6>Niyat-e-Roza نيت روزا </h6>
              <p>
                "Nawaitu An Asuma Gadan 'Lillahi Ta'aala Min Farzy
                Ramzan-e-Haza"
              </p>
            </Card.Text>
          </Card.Body>
        </Card>{" "}
        <Card
          border="success"
          style={{ width: "18rem", margin: "10px", marginBottom: "0px" }}
        >
          <Card.Header
            style={{
              backgroundColor: "#363945",
              textAlign: "center",
              color: "azure",
              fontWeight: "bold",
            }}
          >
            Iftar إفطار
          </Card.Header>
          <Card.Body
            style={{ fontFamily: "Baloo Thambi 2", textAlign: "center" }}
          >
            <Card.Text>
              <h6>
                Waqt-e-Iftar <br /> وقت إفطار
              </h6>
              <h1 style={{ fontFamily: "Orbitron" }}>{props.iftar} PM</h1>
              <p>(Nagpur and around)</p>
              <hr />
              <h6>Due-e-Iftar دعا إفطار</h6>
              <p>
                "Allahumma laka sumtu wa bika aamantu wa 'alayka tawakkaltu wa
                'ala rizq-ika aftarthu"
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Card
        border="dark"
        style={{ width: "18rem", textAlign: "center", margin: "5px auto" }}
      >
        <Card.Header style={{ backgroundColor: "#363945", color: "azure" }}>
          Dua دعا
        </Card.Header>
        <Card.Body style={{ fontFamily: "Baloo Thambi 2" }}>
          <Card.Text>{props.dua}</Card.Text>
        </Card.Body>
      </Card>
      <div style={{ margin: "10px", marginBottom: "2px", padding: "15px" }}>
        <h6> Isaal-E-Sawab </h6>
        <p style={{ fontFamily: "Baloo Thambi 2" }}>
          Marhum Bashir Khan,Begum Bee.
          <br />
          Marhum Rashid Khan, Riyaz Khan, Saleem Khan.
          <br />
          Marhum Sattar Khan, Aamna Bee.
          <br />
          Qul Muslemeen w Muslemat.
        </p>
      </div>
      <Footer />
    </Modal>
  );
}
