import { AuthProvider, useAuth } from "@/providers/authProvider.js";
import Abutton from "@/components/Button/AButton";

const style = {
  h1Style: "text-3xl underline",
};

export default function Index() {
  //var a = useAuth();

  return (
    <>
      <div className=" group bg-[red] w-64 px-2.5">
        <span className="group-hover:bg-[yellow] ">111</span>
      </div>
    </>
  );
}
