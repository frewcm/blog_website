import { useAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tokenAtom } from "../pages/Login";

function ProtectedRoute({ Element }) {
  const [token] = useAtom(tokenAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/login");
  }, []);
  if (token) return <Element />;
  return <></>;
}

export default ProtectedRoute;
