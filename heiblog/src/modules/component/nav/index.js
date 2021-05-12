import { Link  } from "react-router-dom";
// import React, { useState } from 'react';
import { Menu } from 'antd';
import { connect } from "react-redux";
const nav = (props)=>{
    const {select,navDispatch} = props
    // const [Selected, setSelected] = useState(1);
    const handclick = (e)=>{
        console.log(e.keyPath)
        navDispatch.setSelected(e.keyPath)
    }
    return(
      <Menu 
       theme="dark"
       mode="horizontal"
       defaultSelectedKeys={select} 
       style={{}}
       selectedKeys={select}
       onClick={handclick}>
        <Menu.Item  style={{ marginLeft:'60vw' }}  key="1"><Link to="./">首页</Link></Menu.Item>
        <Menu.Item   key="2"><Link to="./speak">杂谈</Link></Menu.Item>
        <Menu.Item   key="3"><Link to="./about">关于我的</Link></Menu.Item>
      </Menu>
    )
}
const mapState = (state) => ({
    select: state.common.select,
  });
  
  const mapDispatch = (dispatch) => ({
    navDispatch: dispatch.common
  });
  
  const Nav = connect(mapState, mapDispatch)(nav);


export default Nav;