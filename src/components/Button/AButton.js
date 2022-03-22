import { AuthProvider, useAuth } from "@/providers/authProvider.js";
export default function AButton() {
  var { user, login } = useAuth();
  console.log(user, login);

  return (
    <>
      <div>
        <div
          onClick={async () => {
            console.log(11);
            await login({ a: 1 });
          }}
        >
          button {user}{" "}
        </div>
      </div>
    </>
  );
}
