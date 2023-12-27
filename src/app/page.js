import Navbar from "./dashboard/component/navBar";
import Sidebar from "./dashboard/component/sideBar";
import Card from "./dashboard/component/card";
const Home = () => {
  return (
    <main className="flex ">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1">
        <Navbar />
           <Card/>
      </div>
    </main>
  );
};

export default Home;
