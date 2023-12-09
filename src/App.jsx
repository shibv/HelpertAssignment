import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Button } from "@mui/material";
import avt from "./assets/avt.png";
import Container from "@mui/material/Container";
import nav from "./assets/nav.png";


import Lowercard from "./components/Lowercard";









export default function App() {
  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <Toolbar>
            <Box sx={{ width: "100px" }}>
              <img src={nav} alt="" height={40} width={170} />
            </Box>

            <Box
              sx={{ flexGrow: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#F6F9FB",
                  width: "325px",
                  borderRadius: "16px",
                  padding: "6px",
                }}
              >
                <div style={{ marginLeft: "-40px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-narrow-left"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l4 4" />
                    <path d="M5 12l4 -4" />
                  </svg>
                </div>

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                  marginLeft="40px"
                  style={{ fontWeight: "bold" }}
                >
                  Become a specilaist
                </Typography>
              </div>

            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                {/* <AccountCircle /> */}

                <Avatar src={avt} />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  marginLeft="5px"
                  marginRight="30px"
                  style={{ fontWeight: "bold" }}
                >
                  Shiv
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge
                  color="error"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F6F9FB",
                    height: "36px",
                    width: "36px",
                    borderRadius: "16px",
                  }}
                >
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge
                  color="error"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F6F9FB",
                    height: "36px",
                    width: "36px",
                    borderRadius: "16px",
                  }}
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "white",
          color: "black",
          marginTop: "30px",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            marginLeft="40px"
            style={{ fontWeight: "bold", marginTop: "20px" }}
          >
            Become a specilaist
          </Typography>
          <p style={{ color: "gray", fontSize:"12px", fontWeight:"semi-bold", marginTop:"4px" }} >
            Select the day and time when you can accept appointemnets{" "}
          </p>
          <div>
            <Button sx={{ color: "black", fontWeight:"bold" }}>Availabiity</Button>
            <Button sx={{ color: "gray", fontWeight:"bold" }}>Unavailabiity</Button>
          </div>
          <div style={{
            background: "linear-gradient(90deg, #89CFF0 50%, #F6F9FB 50%)",
            width:"60%",
            height:"5px"
          }}>

          </div>

          <Lowercard />

          <Button
            style={{
              width: "60%",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1F75FE",
              border: "none",
              borderRadius: "10px",
              marginBottom: "6px",
              cursor: "pointer",
              marginTop: "40px",
            }}
          >
            {" "}
            <div
              style={{
                marginLeft: "16px",
                fontWeight: "bold",
                color: "white",
                fontSize: "10px",
              }}
            >
              Next
            </div>
          </Button>
        </Box>
      </Container>
    </>
  );
}
