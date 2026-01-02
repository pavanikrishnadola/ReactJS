import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Overview from "./Dashboard/Overview";
import Settings from "./Dashboard/Settings";
function Dashboard(){
    return(
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="overview" element={<Overview/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Routes>
        </div>
    )
}
export default Dashboard;
