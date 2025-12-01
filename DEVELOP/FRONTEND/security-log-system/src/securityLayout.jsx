import MyAppNav from "./nav";
import { Outlet } from "react-router-dom";

export default function SecurityLayout() {
  return (
    <>
      <MyAppNav />
      <Outlet /> 
    </>
  );
}
