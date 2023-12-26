import Navbar from "./component/navBar";
import Sidebar from "./component/sideBar";
const Home = () => {
  return (
    <div className="flex ">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
