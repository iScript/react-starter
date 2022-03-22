import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div>
        <div>admin</div>
        <Outlet />
      </div>
    </>
  );
}
