import React from 'react'
import { Layout, Menu, Dropdown } from 'antd';
import Profile from './profile-menu'

export default () => {


  const jobpostMenu = () => (
    <Menu>
      <Menu.Item key="1">Create Post</Menu.Item>
      <Menu.Item key="2">View Current Post</Menu.Item>
      <Menu.Item key="3">View Archived Post</Menu.Item>
    </Menu>
  )

  const candidatesMenu = () => (
    <Menu>
      <Menu.Item key="1">View Candidates</Menu.Item>
      <Menu.Item key="2">View Hires</Menu.Item>
    </Menu>
  )

  const schedulerMenu = () => (
    <Menu>
      <Menu.Item key="1">Jobpost</Menu.Item>
      <Menu.Item key="2">Candidates</Menu.Item>
      <Menu.Item key="3">Scheduler</Menu.Item>
    </Menu>
  )

  return (
    <Layout.Header>
      <div className="logo">
        <a href="/" >
          <img src="/images/logo.png" />
          <span className="logo-text">PasaJob</span>
        </a>
      </div>
      <div className="menu-wrapper">

      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['1']}
        // style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Dropdown overlay={jobpostMenu} ><a target="_blank" rel="noopener noreferrer" >Jobpost</a></Dropdown>
        </Menu.Item>
        <Menu.Item key="2">
          <Dropdown overlay={candidatesMenu} ><a target="_blank" rel="noopener noreferrer">Candidates</a></Dropdown>
        </Menu.Item>
        <Menu.Item key="3">
          Scheduler
          {/* <Dropdown overlay={schedulerMenu} ><a target="_blank" rel="noopener noreferrer" href="#scheduler">Scheduler</a></Dropdown> */}
        </Menu.Item>
      </Menu>

      </div>

      <div className="profile-icon-wrapper">
        <Profile />
      </div>

    </Layout.Header>
  )

}