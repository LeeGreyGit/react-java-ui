import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { getUserList } from "../../api/callApi";
import { useStyles } from "../../styles/userStyles";
import { DataUser } from "./interface";

const UserList = () => {
  const location = useLocation();
  const { userId, userName } = location.state;
  const [data, setData] = useState<DataUser[]>([]);
  const classes = useStyles();
  const fetchData = async () => {
    const response = await getUserList();
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={classes.root}>
      <h1>User List</h1>
      <h3>Login user: {userName}</h3>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead className={classes.header}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">USER NAME</TableCell>
              <TableCell align="center">LOGIN NAME</TableCell>
              <TableCell align="center">PASSWORD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow
                key={user.userId}
                className={
                  user.userId === userId ? classes.myData : classes.otherUser
                }
              >
                <TableCell align="center">{user.userId}</TableCell>
                <TableCell align="left">{user.userName}</TableCell>
                <TableCell align="left">{user.loginName}</TableCell>
                <TableCell align="left">{user.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
