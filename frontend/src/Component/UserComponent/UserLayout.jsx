import React from 'react'
import { Outlet } from "react-router-dom"
import UserNavabar from './UserNavabar'
import UserFooter from './UserFooter'
function UserLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <UserNavabar />

            {/* Main Content */}
            <main className="grow">
                <Outlet />
            </main>

            <UserFooter />
        </div>
    )
}

export default UserLayout