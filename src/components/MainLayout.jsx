import React from 'react';
import { Outlet } from 'react-router-dom';
import Grandpa from './grandpa/Grandpa';
import Header from './Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet> 
            <Grandpa></Grandpa>          
        </div>
    );
};

export default MainLayout;