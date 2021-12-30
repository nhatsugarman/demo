import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';

import Discover from "../pages/Discover";
import Mymusic from "../pages/Mymusic";
import Zingchart from '../pages/Zingchart';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Discover />}/>
            <Route path="/mymusic" element={<Mymusic />}/>
            <Route path="/zing-chart" element={<Zingchart />}/>
        </Routes>
    )
}

export default Router
