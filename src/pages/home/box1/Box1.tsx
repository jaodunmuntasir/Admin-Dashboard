import "./box1.scss";
import { topDealUsers } from "../../../data";

const Box1 = () => {
    return (
        <div className="box1">
        <h1>Top Deals</h1>
        <div className="list">
            {topDealUsers.map((user => (
                <div key={user.id} className="listItem">
                    <div className="user">
                        <img src={user.img} alt="{user.username}" />
                        <div className="userTexts">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.email}</span>
                        </div>
                    </div>
                    <span className="amount">${user.amount}</span>
                </div>
            ))
            )}
        </div>
        </div>
    );
}

export default Box1;