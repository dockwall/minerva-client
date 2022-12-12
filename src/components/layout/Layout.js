import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

// Outlet - "Placeholder" for our nested routes
// All the rest JSX is always visible
// <></> - React JSX Fragment

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;
