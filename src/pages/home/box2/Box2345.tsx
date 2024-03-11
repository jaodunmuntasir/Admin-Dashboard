import "./box2345.scss";
import { chartBoxUser } from "../../../data";
import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const Box2345 = () => {
    return (
        <div className="box2345">
        <div className="boxInfo">
            <div className="title">
                <img src={chartBoxUser.icon} alt="" />
                <span>Total Users</span>
            </div>
            <h1>{chartBoxUser.number}</h1>
            <Link to="/"> View All</Link>
        </div>
        <div className="chartInfo">
            <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={chartBoxUser.chartData}>
                    <Tooltip contentStyle={{background:"transparent", border:"none"}} />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            <div className="texts">
                <span className="percentage">45%</span>
                <span className="duration">This Month</span>
            </div>
        </div>

        </div>
    );
}

export default Box2345;