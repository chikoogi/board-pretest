import { Outlet } from "react-router-dom";
import DefaultGNB from "@components/organisms/GNB";

const DefaultTemplate = () => {
  return (
    <div>
      <DefaultGNB />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultTemplate;
