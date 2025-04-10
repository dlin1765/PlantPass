import React from "react";
import { AppBar, Tabs, Tab, Typography, Box, Container } from "@mui/material";
import Calculator from "./components/Calculator";
import Tracker from "./components/Tracker";

var API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwTQKcDIahNMJUUL7Wfp7q-sd8Sutk1jmGPumrxq61LcrPvPSlgtKSfTXnJRGUFEMHelA/exec"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var backgound = "#F6E7FF";
  var text = "#4AA870";

  return (
    <Container>
      <AppBar
        position="static"
        sx={{
          backgroundColor: backgound,
          color: text,
          borderRadius: "15px",
          marginTop: "15px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold" }}
          align="center"
          component="div"
        >
          PlantPass
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: 100 }}
          align="center"
          component="div"
        >
          Spring Plant Fair 2025
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          <Tab label="Calculator" />
          <Tab label="Tracker" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Calculator api={API_ENDPOINT} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tracker api={API_ENDPOINT} />
      </TabPanel>
    </Container>
  );
}
