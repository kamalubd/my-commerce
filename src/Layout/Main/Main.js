import React from 'react';
import MyHeader from '../../Components/Header/MyHeader';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <MyHeader>
            </MyHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;