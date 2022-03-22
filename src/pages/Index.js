import { AuthProvider, useAuth } from "@/providers/authProvider.js";
import Abutton from "@/components/Button/AButton";

export default function Index() {
  var a = useAuth();
  console.log("a.count");
  console.log(a.count);

  return (
    <>
      <div>index.. {a.count2} </div>
      <Abutton></Abutton>
    </>
  );
}
