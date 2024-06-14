/*
This admin file is here (non-protected) just for
tests and easier development! In the future, this
page will be authenticated only for the admin users.
These are hidden user datas inside the database.
*/

import React from "react";
import SidebarMenu from "../components/misc/sidebar";

const AdminPage: React.FC = () => {

    const menuItems = [
        {
            href: '/admin-management',
            title: 'Admin Management'
        },
        {
            href: '/category-management',
            title: 'Category Management'
        },
        {
            href: '/db-query',
            title: 'Database Query'
        }
    ];

    return (
        <div className="flex min-h-full flex-1">
            <SidebarMenu props={menuItems}/>
            <div>
                
            </div>
        </div>
    );
};

export default AdminPage;