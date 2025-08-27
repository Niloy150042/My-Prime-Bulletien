import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const AuthLayout = () => {
    return (
        <div className='bg-base-300 min-h-screen'>
            <header className='w-11/12 mx-atuo'>
                <Navbar></Navbar>
            </header>
             <main>
                <Outlet></Outlet>
             </main>
        </div>
    );
};

export default AuthLayout;