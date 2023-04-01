import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import DateCard from "./DateCard";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import image from "../files/images/ramadan-2023.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TodayModel from "./TodayModel";
import { timeTable } from "../files/TimeTableData";
import Footer from "./Footer";

const Home = () => {
  const ramdanDetails = timeTable;
  const date = new Date().toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
  });
  console.log(date);
  const todayRoza = ramdanDetails.filter((roza) => roza.date === date);
  console.log("todayRoza", todayRoza);
  const [selectedRoza, setSelectedRoza] = useState(todayRoza[0]);

  const [modalShow, setModalShow] = useState(true);
  const handleClick = (roza) => {
    setModalShow(true);
    setSelectedRoza(ramdanDetails[roza - 1]);
  };

  return (
    <>
      <TodayModel
        show={modalShow}
        onHide={() => setModalShow(false)}
        date={selectedRoza.date}
        day={selectedRoza.day}
        ramadan={selectedRoza.ramadan}
        sehri={selectedRoza.sehri}
        iftar={selectedRoza.iftar}
        dua={selectedRoza.dua}
        currentRoza={selectedRoza}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 0.25,
            width: 700,
            height: 695,
          },
          backgroundColor: "#363945",
        }}
      >
        <Paper
          style={{ padding: "15px", backgroundColor: "#fce9e9" }}
          elevation={2}
        >
          <h1 style={{ fontFamily: "Fredericka the Great" }}>
            Ramadan 2023 || 1444 Hijri
          </h1>
          <Card
            sx={{
              maxWidth: 500,
              margin: "5px auto",
              border: "3px solid green",
              borderRadius: "5px",
              elevation: 18,
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="120"
              image={image}
              elevation={24}
            />

            <Table style={{ textAlign: "center" }}>
              <thead>
                <tr style={{ backgroundColor: "#363945", color: "#fce9e9" }}>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sun</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Click See </td>
                  <td>On time </td>
                  <td>Date Table</td>
                  <td>To Duas </td>
                  {ramdanDetails.slice(0, 3).map((roza) => (
                    <td key={roza.ramadan}>
                      <DateCard
                        date={roza.date}
                        ramdan={roza.ramadan}
                        onClick={handleClick}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  {ramdanDetails.slice(3, 10).map((roza) => (
                    <td key={roza.ramadan}>
                      <DateCard
                        date={roza.date}
                        ramdan={roza.ramadan}
                        onClick={handleClick}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  {ramdanDetails.slice(10, 17).map((roza) => (
                    <td key={roza.ramadan}>
                      <DateCard
                        date={roza.date}
                        ramdan={roza.ramadan}
                        onClick={handleClick}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  {ramdanDetails.slice(17, 24).map((roza) => (
                    <td key={roza.ramadan}>
                      <DateCard
                        date={roza.date}
                        ramdan={roza.ramadan}
                        onClick={handleClick}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  {ramdanDetails.slice(24).map((roza) => (
                    <td key={roza.ramadan}>
                      <DateCard
                        date={roza.date}
                        ramdan={roza.ramadan}
                        onClick={handleClick}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </Card>

          <Footer />
        </Paper>
      </Box>
    </>
  );
};

export default Home;
