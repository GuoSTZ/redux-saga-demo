import React from 'react'
import { Menu } from 'antd'

const MenuItem = Menu.Item

export default class HtMenu extends React.Component{
    state = {
        current: ''
    }
    handleClick = e => {
        this.setState({
          current: e.key,
        });
    }
    render(){
        return(
            <Menu 
                onClick={this.handleClick} 
                selectedKeys={this.state.current || this.props.option.selectedKeys} 
                mode={this.props.option.mode}
            >
                {this.props.option.menuData.map( item =>{
                    return(                    
                        <MenuItem key={item.key} title={item.title} disabled={item.disabled}>
                            {item.content}
                        </MenuItem>
                    )
                })}
            </Menu>
        )
    }
}