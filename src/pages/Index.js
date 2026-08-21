import { AuthProvider, useAuth } from "@/providers/authProvider.js";
import Abutton from "@/components/Button/AButton";
import { Button,DatePicker } from 'antd';
import {
  Link,
} from "react-router-dom";
const style = {
  h1Style: "text-3xl underline",
};

export default function Index() {
  //var a = useAuth();

  return (
    <>
      <div className=" group bg-[red] w-64 px-2.5">
        <span className="group-hover:bg-[yellow] ">111</span>
        <Link to="login">login</Link>

      </div>
      <Button type="primary" className="" >Primary Button</Button>
      <DatePicker />
    </>
  );
}
