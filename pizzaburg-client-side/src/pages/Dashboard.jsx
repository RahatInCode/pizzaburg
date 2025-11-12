import { useEffect } from "react";
import useTabTitleChanger from "../components/useTabTitleChanger";

const Dashboard = () => {
     useTabTitleChanger();
  useEffect(() => {
    document.title = "Dashboard | Pizzaburg 🍕";
  }, []);
  return (
    <div className="p-10 text-3xl font-bold text-center">
      Welcome to your Dashboard!
    </div>
  );
};

export default Dashboard;
