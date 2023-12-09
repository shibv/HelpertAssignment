import React from "react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import { useState } from "react";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Lowercard = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px", backgroundColor: "#F6F9FB",  height: "200px", }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          width: "340px",
          height: "100px",
        }}
      >
        <div
          style={{
            height: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            border: "none",
            borderRadius: "16px",
            marginBottom: "6px",
            cursor: "pointer",
            marginTop: "100px",
            width: "90%",
            padding: "15px",
            marginTop:"230px"
            
          }}
        >
          <div
            style={{
              marginLeft: "16px",
              fontWeight: "bold",
            }}
            onClick={() => toggleDropdown("dropdown1")}
          >
            Monday
          </div>
          <div>
            <Switch {...label} defaultChecked />
          </div>
        </div>

        {activeDropdown === "dropdown1" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "white",
              width: "90%",
              borderRadius: "16px",
              padding: "6px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width:"100%"
                }}
              >
                <input
                  type="time"
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F6F9FB",
                    border: "none",
                    borderRadius: "16px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "bold",
                    marginRight: "15px",
                    padding:"0px 8px"
                  }}
                />{" "}
                to{" "}
                <input
                  type="time"
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F6F9FB",
                    border: "none",
                    borderRadius: "16px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "bold",
                    marginLeft: "15px",
                    padding:"0px 8px"
                  }}
                />
              </div>

              <div  style={{
                marginLeft:"5px"
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
              </div>
            </div>

            <div>
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F0F8FF",
                  border: "none",
                  borderRadius: "16px",
                  marginBottom: "6px",
                  cursor: "pointer",
                  color: "#1F75FE",
                  fontWeight: "bold",
                  
                }}
              >
                +Add Hours
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            height: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            border: "none",
            borderRadius: "16px",
            marginBottom: "6px",
            cursor: "pointer",
            marginTop: "4px",
            width: "90%",
            padding: "15px",
          }}
        >
          <div
            style={{
              marginLeft: "16px",
              fontWeight: "bold",
            }}
            onClick={() => toggleDropdown("dropdown2")}
          >
            Tuesday
          </div>
          <div>
            <Switch {...label} defaultChecked />
          </div>
        </div>

        {activeDropdown === "dropdown2" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "white",
              width: "90%",
              borderRadius: "16px",
              padding: "6px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width:"100%"
                }}
              >
                <input
                  type="time"
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F6F9FB",
                    border: "none",
                    borderRadius: "16px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "bold",
                    marginRight: "15px",
                    padding:"0px 8px"
                  }}
                />{" "}
                to{" "}
                <input
                  type="time"
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F6F9FB",
                    border: "none",
                    borderRadius: "16px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "bold",
                    marginLeft: "15px",padding:"0px 8px"
                  }}
                />
              </div>

              <div  style={{
                marginLeft:"5px"
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
              </div>
            </div>

            <div>
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F0F8FF",
                  border: "none",
                  borderRadius: "16px",
                  marginBottom: "6px",
                  cursor: "pointer",
                  color: "#1F75FE",
                  fontWeight: "bold",
                 
                }}
              >
                +Add Hours
              </div>
            </div>
          </div>
        )}


<div
          style={{
            height: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            border: "none",
            borderRadius: "16px",
            marginBottom: "6px",
            cursor: "pointer",
            marginTop: "4px",
            width: "90%",
            padding: "15px",
          }}
        >
          <div
            style={{
              marginLeft: "16px",
              fontWeight: "bold",
              
            }}
            onClick={() => toggleDropdown("dropdown3")}
          >
            Wednesday
          </div>
          <div>
            <Switch {...label} defaultChecked />
          </div>
        </div>

        {activeDropdown === "dropdown3" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "white",
              width: "90%",
              borderRadius: "16px",
              padding: "6px",
              
              
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width:"100%"
                }}
              >
                <input
                  type="time"
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F6F9FB",
                    border: "none",
                    borderRadius: "16px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "bold",
                    marginRight: "15px",
                    padding:"0px 8px"
                  }}
                />{" "}
                to{" "}
                <input
                  type="time"
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F6F9FB",
                    border: "none",
                    borderRadius: "16px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "bold",
                    marginLeft: "10px",
                    
                    padding:"0px 8px"
                  }}
                />
              </div>

              <div style={{
                marginLeft:"5px"
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
              </div>
            </div>

            <div>
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F0F8FF",
                  border: "none",
                  borderRadius: "16px",
                  marginBottom: "6px",
                  cursor: "pointer",
                  color: "#1F75FE",
                  fontWeight: "bold",
                  
                  
                }}
              >
                +Add Hours
              </div>
            </div>
          </div>
        )}
        {/* Add more buttons and corresponding content if needed */}
      </div>
    </Box>
  );
};

export default Lowercard;
