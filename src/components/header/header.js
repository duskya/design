import {NavLink} from 'react-router-dom'
import {Input,Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import './index.css'
const onSearch = value => console.log(value);
const Header =  () =>{
    return(
        <div className="all">
            <div className="search">
                <Input className="input" ></Input>
                <NavLink to="/search">
                <Button className='button' icon={<SearchOutlined />}>
                    搜索
                </Button>
                </NavLink>
            </div>
            <div className="myfeatures">
                <span className="collection"> 
                    <NavLink to="collection">
                        收藏
                    </NavLink>
                </span>
                <span className="shoppingcart"> 
                    <NavLink to="shoppingcart">
                        购物车
                    </NavLink>
                </span>
                <sapn className="order"> 
                    <NavLink to="/order">
                        订单
                    </NavLink>
                </sapn>
                <span className="message"> 
                    <NavLink to="/message" >
                        消息
                    </NavLink>
                </span>
                <span className="my"> 
                    <NavLink to='/home'>
                        我的
                    </NavLink>
                </span>
                
            </div>
        </div>
    )
}
export default Header
