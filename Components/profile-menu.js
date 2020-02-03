import Head from 'next/head'
import { Dropdown, Menu, Avatar } from 'antd';

export default (props) => {

  const menu = () => (
    <Menu>
      <Menu.Item key="1">User Profile</Menu.Item>
      <Menu.Item key="2">Company Profile</Menu.Item>
      <Menu.Item key="3">Settings</Menu.Item>
      <Menu.Item key="4">Log out</Menu.Item>
    </Menu>
  )

  return (
    <div>
      <span>seondizon</span>
      <Dropdown overlay={menu} >
        <Avatar size="medium" icon="user" shape="circle" />
        {/* <img src="/images/profile.png" /> */}
      </Dropdown>
    </div>
  )

}