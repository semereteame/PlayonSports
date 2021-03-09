import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./table.css";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 12,
    textAlign: "center",
  },
  body: {
    fontSize: 11,
    textAlign: "center",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Tables({ tableData }) {
  const classes = useStyles();
  console.log(tableData);
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <table className="table">
      <tr>
        <th>key</th>
        <th>Headline</th>
        <th>SubHeadline</th>
        <th>Time</th>
      </tr>
      {tableData.map((item) => (
        <tr>
          <td align="right">{item.key}</td>
          <td align="right">{item.headline}</td>
          <td align="right">{item.subheadline}</td>
          <td align="right">
            <Moment parse="YYYY-MM-DD HH:mm" date={item.date} />
          </td>
        </tr>
      ))}
    </table>
  );
}
