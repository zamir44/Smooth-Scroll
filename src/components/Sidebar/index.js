import React from 'react'
import styled from 'styled-components'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, 
    SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

function Sidebar () {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper />
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Signup
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;