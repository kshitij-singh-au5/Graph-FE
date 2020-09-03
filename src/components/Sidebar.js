import React from 'react';
import './styles.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
export default function Sidebar1() {

    return (

        <div style={{ backgroundColor: "green", height: "100vh", width: "270px" }}>
            <div style={{height:"50px",display:"flex",alignItems:"center",justifyContent:"center",color:"white"}}>
                Grid Manager
            </div>
            < ProSidebar >
                <Menu iconShape="square">
                    <MenuItem >Dashboard</MenuItem>
                    <SubMenu title="E3 Apps" >
                        <MenuItem>Peak Shaving and Alerts</MenuItem>
                        <MenuItem>Ventilation</MenuItem>
                        <MenuItem>Cooling</MenuItem>
                    </SubMenu>
                    <SubMenu title="Demand Response" >

                    </SubMenu>
                    <SubMenu title="InSights" >

                    </SubMenu>
                    <MenuItem >Version History</MenuItem>
                </Menu>
            </ProSidebar >;
        </div>
    )
}