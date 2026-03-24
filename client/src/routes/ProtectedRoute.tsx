import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../app/store";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = useSelector((state: RootState) => state.auth.token);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
