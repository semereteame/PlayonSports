import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Moment from 'react-moment'
import useMediaQuery from '@material-ui/core/useMediaQuery';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize:12,
    textAlign:"center",
    
    
  },
  body: {
    fontSize: 11,
   textAlign:"center",
   
    
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
  console.log(tableData)
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <TableContainer className='tbl' component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Key</StyledTableCell>
            <StyledTableCell align="right">Headline</StyledTableCell>
            <StyledTableCell align="right">Sub-headline</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <StyledTableRow>
              <StyledTableCell align="right">{item.key}</StyledTableCell>
              <StyledTableCell align="right">{item.headline}</StyledTableCell>
              <StyledTableCell align="right">
                {item.subheadline}
              </StyledTableCell>
              <StyledTableCell align="right"> <Moment parse='YYYY-MM-DD HH:mm' date={item.date}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
