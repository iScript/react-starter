import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div>
        <div>header11 </div>
        <Outlet />
      </div>
    </>
  );
}
