import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomTable({ data }) {
  const navigate = useNavigate();

  const handleDeleteSubmit = (id) => {
    axios.delete("http://localhost:3000/Users/" + id)
      .then((res) => {
        alert("user is permanently deleted");
        window.location.reload(); 
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
         <StyledTableRow key={row.id}>
         <StyledTableCell component="th" scope="row">
           {row.id}
         </StyledTableCell>
         <StyledTableCell component="th" scope="row">
           {row.name}
         </StyledTableCell>
         <StyledTableCell>{row.email}</StyledTableCell>
         <StyledTableCell>{row.username}</StyledTableCell>
         <StyledTableCell>{row.phone}</StyledTableCell>
         <StyledTableCell>
           <DeleteIcon
             onClick={() => handleDeleteSubmit(row.id)}
             sx={{ paddingRight: 3, color: "red", cursor: "pointer" }}
           />
           <EditIcon
             onClick={() => navigate(`/edit/${row.id}`)}
             sx={{ color: "blue", cursor: "pointer" }}
           />
         </StyledTableCell>
       </StyledTableRow>
       
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

