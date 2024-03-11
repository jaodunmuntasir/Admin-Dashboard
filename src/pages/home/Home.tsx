import Box1 from "./box1/Box1";
import Box2345 from "./box2/Box2345";
import "./home.scss";
  
const Home = () => {
    return (
        <div className="home">
        <div className="box box1"><Box1 /></div>
        <div className="box box2"><Box2345 /></div>
        <div className="box box3"><Box2345 /></div>
        <div className="box box4">Box4</div>
        <div className="box box5"><Box2345 /></div>
        <div className="box box6"><Box2345 /></div>
        <div className="box box7">Box7</div>
        <div className="box box8">Box8</div>
        <div className="box box9">Box9</div>
        </div>
    );
}

export default Home;