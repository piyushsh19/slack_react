import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon  from "@material-ui/icons/FiberManualRecord";
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                <h2>Piyush Sharma</h2>
                <h3>
                    <FiberManualRecordIcon />
                    @piyush19
                </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon = {InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon = {InboxIcon} title="Mention"/>
            <SidebarOption Icon = {DraftsIcon} title="Saved"/>
            <SidebarOption Icon = {BookmarkBorderIcon} title="Thred"/>
            <SidebarOption Icon = {PeopleAltIcon} title="People"/>
            <SidebarOption Icon = {AppsIcon} title="Apps"/>
            <SidebarOption Icon = {FileCopyIcon} title="Files"/>
            <SidebarOption Icon = {ExpandLessIcon} title="Thred"/>


            
            
        </div>
    )
}

export default Sidebar;
