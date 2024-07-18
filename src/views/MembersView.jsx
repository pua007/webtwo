import React from 'react';
import styled from 'styled-components';
import Members from '../components/members/Members';
import { Outlet } from 'react-router-dom';
import MemberMenu from '../components/members/MemberMenu';

const MembersView = () => {
    return (
        <div style={{ display: 'flex' }}>
            <MemberMenu />
            <Outlet />
        </div>
    );
};

export default MembersView;
