import Head from 'next/head'
import { Dropdown, Menu, Avatar } from 'antd';
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'

export default (props) => {

  const router = useRouter()
  
  const handleLogout = () => {
    destroyCookie({}, 'authToken');
    router.push('/login')
  }

  const menu = () => (
    <Menu>
      <Menu.Item key="1">User Profile</Menu.Item>
      <Menu.Item key="2">Company Profile</Menu.Item>
      <Menu.Item key="3">Settings</Menu.Item>
      <Menu.Item key="4" onClick={ handleLogout } >Log out</Menu.Item>
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