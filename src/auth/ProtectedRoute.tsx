import { ReactNode } from "react";
import React from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  data: unknown;
  isAllowed: boolean;
  redirectPath: string;
  children: ReactNode;
}
export default function ProtectedRoute({
  isAllowed,
  redirectPath,
  children,
}: IProps) {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;
  return children;
}
