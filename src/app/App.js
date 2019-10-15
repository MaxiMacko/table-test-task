import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusAction,
  changeFilterValueAction,
  resetFilterAction,
} from "../reducer";
import { statusEnum } from "../constants/constants";
import filteredRecordsHelper, { counterForStatus } from "./filterRecordsHelper";

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  resetButton: {
    marginLeft: '30px',
  },
  statistics: {
    marginTop: '20px',
    display: 'flex',
    '& ul': {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      '& li + li': {
          marginLeft: '60px',
      },
    },
  }
});

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.get('filterValue'));
  const userData = useSelector(filteredRecordsHelper);
  const countsByStatus = counterForStatus(userData);

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.root}>
        <Grid
          container
          alignItems="center"
        >
          <TextField
            label="Filter free text"
            value={filterValue}
            onChange={e => dispatch(changeFilterValueAction(e.target.value))}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.resetButton}
            onClick={() => dispatch(resetFilterAction())}
          >
            Reset
          </Button>
        </Grid>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left">Connected date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map(row => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.role}</TableCell>
                <TableCell align="left">{row.connectedDate}</TableCell>
                <TableCell align="left">
                  <Select
                    value={row.status}
                    onChange={(e) => {
                      dispatch(changeStatusAction({ id: row.id, status: e.target.value }));
                    }}
                  >
                    {
                      Object.values(statusEnum).map((statusValue, index) =>
                        <MenuItem
                          key={`${statusValue}__${index}`}
                          value={statusValue}
                        >
                          {statusValue}
                        </MenuItem>
                      )
                    }
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div className={classes.statistics}>
        <h3>Statistics</h3>
        <ul>
          {
            Object.entries(countsByStatus)
              .map(([key, number], index) => <li key={`${key}_${index}`}>{`${key}: ${number}`}</li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default App;
