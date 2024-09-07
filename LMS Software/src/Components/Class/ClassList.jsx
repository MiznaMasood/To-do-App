import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'; 
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'; 
import { database } from '../../Config/firebase';

// Custom TableCell with updated styling
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2', // Use primary color for header background
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '16px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.black,
  },
}));

// Custom TableRow styling
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f5f5f5', // Light gray for odd rows
  },
  '&:hover': {
    backgroundColor: '#e3f2fd', // Hover effect for rows
  },
}));

const TableWrapper = styled('div')(({ theme }) => ({
  marginLeft: '250px', // Add left margin for sidebar
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0', // Adjust for smaller screens
  },
}));

const ClassList = () => {
  const [classList, setClassList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const getClassList = async () => {
    try {
      const arr = [];
      const classes = await getDocs(collection(database, 'Class'));
      classes.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setClassList(arr);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(database, 'Class', id));
      alert('Class Deleted Successfully');
      setRefresh(!refresh);
    } catch (err) {
      alert('Failed to delete class. Please try again.');
    }
  };

  useEffect(() => {
    getClassList();
  }, [refresh]);

  return (
    <TableWrapper>
      <Button
        variant="contained"
        sx={{ float: 'right', marginBottom: '20px', marginRight: '20px' }}
        onClick={() => navigate('/form')}
      >
        Add Class
      </Button>
      <TableContainer component={Paper} mt={5} sx={{ boxShadow: 4 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone Number</StyledTableCell>
              <StyledTableCell align="center">Date of Birth</StyledTableCell>
              <StyledTableCell align="center">Qualification</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classList.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.firstName}</StyledTableCell>
                <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.phoneNumber}</StyledTableCell>
                <StyledTableCell align="center">{row.dob}</StyledTableCell>
                <StyledTableCell align="center">{row.qualification}</StyledTableCell>
                <StyledTableCell align="center">{row.gender}</StyledTableCell>
                <StyledTableCell align="center">
                  <ModeEditOutlineIcon 
                    sx={{ cursor: 'pointer', marginRight: '10px', color: '#1976d2' }}
                    onClick={() => navigate(`/editClass/${row.id}`)} 
                  />
                  <DeleteIcon 
                    sx={{ cursor: 'pointer', color: '#d32f2f' }} 
                    onClick={() => handleDelete(row.id)} 
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default ClassList;

