import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try{
        const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/admin-auth`);
        if (res.data.ok) {
            setOk(true);
          } else {
            setOk(false);
            navigate("/");
          }
        } catch (error) {
          console.error("Authentication check failed:", error);
          setOk(false);
          navigate("/");
        }
    };

    if (auth?.token) authCheck();
    // eslint-disable-next-line 
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> : <Spinner path=""/>;
}
