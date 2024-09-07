import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Outlet } from 'react-router-dom';

import style from './Dashboard.module.css'; // Ensure this file has appropriate styling

// Import your components here
import StdRegistration from '../Students/StdRegistration';
import TeacherRegis from '../Teachers/TeacherRegis';
import SubAdd from '../Subjects/SubAdd';
import SyllabusAdd from '../Syllabus/SyllabusAdd';
import AdmissionForm from '../Class/Form';
import StdRegis from '../School/StdRegis';
import TeachRegis from '../School/TeachRegis';
import FeeSubmissionForm from '../Fees/FeeSub';
import StudentList from '../Students/StdList';
import FeeStructure from '../Fees/FeeStructure';
import FeeVoucher from '../Fees/FeeVoucher';
import ExamSchedule from '../Exam/Examschedule';
import SyllabusList from '../Syllabus/SyllabusList';
import TeacherList from '../Teachers/TeachList';
import SubList from '../Subjects/SubList';
import ClassList from '../Class/ClassList';

const Dashboard = () => {
  const [openSection, setOpenSection] = useState({
    students: false,
    teachers: false,
    subjects: false,
    syllabus: false,
    school: false,
    class: false,
    fees: false,
    admission: false,
    exam: false
  });
  const [selectedView, setSelectedView] = useState('');

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleMenuClick = (view) => {
    setSelectedView(view);
  };

  return (
    <div className={style.dashboardContainer}>


    


      {/* Sidebar Component */}
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#1e2a38',
            color: 'white',
            width: 240,
            position: 'fixed',
            height: '100vh',
            top: 64, // Adjust based on the height of your navbar
          },
        }}
        variant="permanent"
      >
        <List>
          <ListItem button onClick={() => handleMenuClick('dashboard')}>
            <ListItemIcon><DashboardIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button onClick={() => toggleSection('students')}>
            <ListItemIcon><PeopleIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Students" />
            {openSection.students ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openSection.students} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleMenuClick('studentRegistration')} sx={{ pl: 4 }}>
                <ListItemText primary="Students Registration" />
              </ListItem>
              <ListItem button onClick={() => handleMenuClick('studentsList')} sx={{ pl: 4 }}>
                <ListItemText primary="Students List" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleSection('teachers')}>
            <ListItemIcon><PeopleIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Teachers" />
            {openSection.teachers ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openSection.teachers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleMenuClick('teacherRegistration')} sx={{ pl: 4 }}>
                <ListItemText primary="Teachers Registration" />
              </ListItem>
              <ListItem button onClick={() => handleMenuClick('teachersList')} sx={{ pl: 4 }}>
                <ListItemText primary="Teachers List" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleSection('subjects')}>
            <ListItemIcon><BookIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Subjects" />
            {openSection.subjects ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openSection.subjects} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleMenuClick('addSubject')} sx={{ pl: 4 }}>
                <ListItemText primary="Add Subject" />
              </ListItem>
              <ListItem button onClick={() => handleMenuClick('subjectsList')} sx={{ pl: 4 }}>
                <ListItemText primary="Subjects List" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleSection('syllabus')}>
            <ListItemIcon><BookIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Syllabus" />
            {openSection.syllabus ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openSection.syllabus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleMenuClick('syllabusForm')} sx={{ pl: 4 }}>
                <ListItemText primary="Syllabus Form" />
              </ListItem>
              <ListItem button onClick={() => handleMenuClick('syllabusList')} sx={{ pl: 4 }}>
                <ListItemText primary="Syllabus List" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleSection('school')}>
            <ListItemIcon><SchoolIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="School" />
            {openSection.school ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openSection.school} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleMenuClick('stdRegis')} sx={{ pl: 4 }}>
                <ListItemText primary="School Registration" />
              </ListItem>
              <ListItem button onClick={() => handleMenuClick('techRegis')} sx={{ pl: 4 }}>
                <ListItemText primary="Teacher Registration" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleSection('class')}>
            <ListItemIcon><ClassIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Class" />
            {openSection.class ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openSection.class} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleMenuClick('classForm')} sx={{ pl: 4 }}>
                <ListItemText primary="Class Form" />
              </ListItem>
              <ListItem button onClick={() => handleMenuClick('classList')} sx={{ pl: 4 }}>
                <ListItemText primary="Class List" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleSection('fees')}>
            <ListItemIcon><AttachMoneyIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Fees" />
            {openSection.fees ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openSection.fees} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleMenuClick('feesStructure')} sx={{ pl: 4 }}>
                <ListItemText primary="Fees Structure" />
              </ListItem>
              <ListItem button onClick={() => handleMenuClick('feesVoucher')} sx={{ pl: 4 }}>
                <ListItemText primary="Fees Voucher" />
              </ListItem>
              <ListItem button onClick={() => handleMenuClick('feeSubmission')} sx={{ pl: 4 }}>
                <ListItemText primary="Fees Submission" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleSection('admission')}>
            <ListItemIcon><AttachMoneyIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Admission" />
            {openSection.admission ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openSection.admission} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleMenuClick('admissionForm')} sx={{ pl: 4 }}>
                <ListItemText primary="Admission Form" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleSection('exam')}>
            <ListItemIcon><AttachMoneyIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Exam" />
            {openSection.exam ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openSection.exam} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleMenuClick('examSchedule')} sx={{ pl: 4 }}>
                <ListItemText primary="Exam Schedule" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>

      <main className={style.mainContent}>
      <h1 className={style.heading}>Learning Management System</h1>
        <Outlet />
        {/* Render content based on the selected view */}
        {selectedView === 'studentRegistration' && <StdRegistration />}
        {selectedView === 'studentsList' && <StudentList />}
        {selectedView === 'teacherRegistration' && <TeacherRegis />}
        {selectedView === 'teachersList' && <TeacherList />}
        {selectedView === 'addSubject' && <SubAdd />}
        {selectedView === 'subjectsList' && <SubList />}
        {selectedView === 'syllabusForm' && <SyllabusAdd />}
        {selectedView === 'syllabusList' && <SyllabusList />}
        {selectedView === 'stdRegis' && <StdRegis />}
        {selectedView === 'techRegis' && <TeachRegis />}
        {selectedView === 'classForm' && <ClassList />}
        {selectedView === 'classList' && <ClassList />}
        {selectedView === 'feesStructure' && <FeeStructure />}
        {selectedView === 'feesVoucher' && <FeeVoucher />}
        {selectedView === 'feeSubmission' && <FeeSubmissionForm />}
        {selectedView === 'admissionForm' && <AdmissionForm />}
        {selectedView === 'examSchedule' && <ExamSchedule />}
      </main>
    </div>
  );
};

export default Dashboard;

