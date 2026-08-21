import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "@/libs/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HashRouter as Router } from "react-router-dom";
import { AuthProvider } from "@/providers/authProvider.js";

const ErrorFallback = () => {
  return (
    <div className="">
      <h2 className="">Ooops, something went wrong :( </h2>
      <span
        className=""
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </span>
    </div>
  );
};

export const AppProvider = ({ children }) => {
  return (
    //fallback声明加载完成前做的事
    <React.Suspense fallback={<div className="">loading...</div>}>
      {/* 错误处理 */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* 配置react-query */}
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV == "development" && <ReactQueryDevtools initialIsOpen={false} />}
          <AuthProvider>
            <Router>{children}</Router>
          </AuthProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
