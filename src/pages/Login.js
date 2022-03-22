import { useAuth } from "@/providers/authProvider";

export default function Login() {
  const { login } = useAuth();

  return (
    <>
      <div>
        <button
          onClick={() => {
            login({ aa: "bb" });
          }}
        >
          login
        </button>
      </div>
    </>
  );
}
