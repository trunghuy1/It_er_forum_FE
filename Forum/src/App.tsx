
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Login from './Pages/Login/Login';
import Home from './Pages/Login/Home';
import ReportedPost from './Pages/Dashboard/ReportedPost/ReportedPost';
import Comment from "./Pages/Dashboard/Comment/Comment";
import UserList from './Pages/Dashboard/User/UserList';
import Logout from './Pages/Login/Logout';
import Statistic from './Pages/Dashboard/Statistic/Statistic';
import PostDetail from './Pages/Dashboard/Post/PostDetail';
import Post from './Pages/Dashboard/Post/Post';
import ReportDetail from './Pages/Dashboard/ReportedPost/ReportedDetail';

// import Profile from './Pages/Dashboard/Profile/Profile'




export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/reportedpost" element={<ReportedPost />} />
        <Route path="/report-detail/:reported_id" element={<ReportDetail />} />
        <Route path="/commentreport" element={<Comment />} />
       
        <Route path="/userlist" element={<UserList />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/postdetail/:id" element={<PostDetail />} />
       
        {/* <Route path="/register" element={<RegisterForm />} /> 
         <Route path="/profile" element={<Profile />} />
        */}

      </Routes>
    </Router>


    
  );
  
};

export default  App;

