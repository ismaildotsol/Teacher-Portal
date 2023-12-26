import Navbar from "./component/navBar";
import Sidebar from "./component/sideBar";
import Card from "./component/card";
const Home = () => {
  return (
    <div className="flex ">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1">
        <Navbar />
           <Card/>
      </div>
    </div>
  );
};

export default Home;
