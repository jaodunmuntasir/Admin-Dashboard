import { Link } from "react-router-dom";
import "./menu.scss";
import {menu} from "../../data.ts";
  
const Menu = () => {
    return (
        <div className="menu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <span className="title">{item.title}</span>
                    {item.listItems.map((listItem) => (
                        <Link to={listItem.url} className="listItem" key={listItem.id}>
                            <img src={listItem.icon} alt={listItem.title} />
                            <span className="listItemTitle">{listItem.title}</span>
                        </Link>
                    ))}
                </div>
            ))}

            {/* <div className="item">
                <span className="title">LISTS</span>
                <Link to="/users" className="listItem">
                    <img src="/user.svg" alt="users" />
                    <span className="listItemTitle">Users</span>
                </Link>
                <Link to="/products" className="listItem">
                    <img src="/product.svg" alt="products" />
                    <span className="listItemTitle">Products</span>
                </Link>
                <Link to="/orders" className="listItem">
                    <img src="/order.svg" alt="orders" />
                    <span className="listItemTitle">Orders</span>
                </Link>
                <Link to="/posts" className="listItem">
                    <img src="/post2.svg" alt="posts" />
                    <span className="listItemTitle">Posts</span>
                </Link>
            </div> */}

        </div>
    );
}

export default Menu;