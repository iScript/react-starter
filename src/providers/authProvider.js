import React from "react";
import storage from "@/libs/storage";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, login } from "@/libs/api";
const AuthContext = React.createContext(null);
const key = "auth-user";

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    console.log("loadUser", data);
    return data;
  }
  console.log("loadUser", null);
  return null;
}

async function loginFn(data) {
  console.log(data);

  const user = await login(data);
  storage.setToken(user.token);
  return data;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin);
}

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();

  const {
    data: user, // 对象解构，并将data赋值给user
    error,
    status,
    isLoading,
  } = useQuery({
    queryKey: key,
    queryFn: loadUser,
  });

  const setUser = React.useCallback(
    (data) => queryClient.setQueryData(key, data),
    [queryClient]
  );

  const loginMutation = useMutation({
    mutationFn: loginFn,
    onSuccess: (user) => {
      console.log("loginMutation success");
      setUser(user);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logoutFn,
    onSuccess: () => {
      queryClient.clear();
    },
  });

  const value = React.useMemo(() => {
    return {
      user,
      error,
      login: loginMutation.mutate, //mutateAsync相当于mutate ，本来需要这样调用mutation.mutate
      logout: logoutMutation.mutate,
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error(`get context error`);
  }
  return context;
}

// export const { AuthProvider, useAuth } = (function () {
//   return { AuthProvider: "11", useAuth: 22 };
// })();
