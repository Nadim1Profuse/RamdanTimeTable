import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import DateCard from "./DateCard";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import image from "./ramadan-2023.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TodayModel from "./TodayModel";
import { timeTable } from "./TimeTableData";

const Home = () => {
  const ramdanDetails = timeTable;
  const [modalShow, setModalShow] = useState(true);
  const handleClick = (index) => {
    setModalShow(true);
    console.log("index of ckicke=", index);
  };
  return (
    <>
      <TodayModel show={modalShow} onHide={() => setModalShow(false)} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 550,
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
              maxWidth: 525,
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
                  <td>Click time </td>
                  <td>On Table</td>
                  <td>Date And</td>
                  <td>To See Duas</td>
                  {ramdanDetails.slice(0, 3).map((roza) => (
                    <td>
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
                    <td>
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
                    <td>
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
                    <td>
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
                    <td>
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
          <hr style={{ margin: "0" }} />
          <div style={{ textAlign: "end", margin: "10px", marginTop: "2px" }}>
            Created
            <br />
            by...
            <br />
            Nadeem 9860206440
          </div>
        </Paper>
      </Box>
    </>
  );
};

export default Home;
