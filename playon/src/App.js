import React, { useEffect, useState, useRef } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import axios from "axios";
import "./App.css";
import Table from "./table";

function App() {
  const dateA = useRef(null);
  const dateB = useRef(null);

  const [data, setData] = useState([]);
  const [dropdown, setDropdown] = useState("GHSA");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await axios.get(
      "https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=18bad24aaa&card=true&size=50&start=0"
    );
    setData(response.data.items);
  };

  const handleChange = async (event) => {
    console.log(event.target.value);
    let key = event.target.value === "GHSA" ? "18bad24aaa" : "542bc38f95";

    let response = await axios.get(
      `https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=${key}&card=true&size=50&start=0`
    );
    setData(response.data.items);
    setDropdown(event.target.value);
  };

  const handleDate = async () => {
    let date1 = document.getElementById("date1").value;
    let date2 = document.getElementById("date2").value;

    if (date2 !== "" && dateA !== "") {
      let filterdData = await axios.get(
        `https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=542bc38f95&card=true&size=50&start=0from=${
          date1 + ":00.000Z"
        }&to=${date2 + ":00.000Z"}`
      );
      setData(filterdData.data.items);
    }
  };
  return (
    <div className="app">
      <FormControl>
        <Select
          variant="outlined"
          value={dropdown}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value="GHSA">GHSA</MenuItem>

          <MenuItem value="UIL">UIL</MenuItem>
        </Select>
      </FormControl>

      <form className="timeform">
        <TextField
          id="date1"
          label="Start-date"
          type="datetime-local"
          defaultValue=""
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDate}
        />

        <TextField
          id="date2"
          label="End-date"
          type="datetime-local"
          defaultValue=""
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDate}
        />
      </form>
      <div className='tbl'>
        <Table tableData={data} />
      </div>
    </div>
  );
}

export default App;
