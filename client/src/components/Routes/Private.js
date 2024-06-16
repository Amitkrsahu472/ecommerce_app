import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`);
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setOk(false);
        // Optionally navigate to login page or display an error
        navigate("/login");
      }
    };

    if (auth?.token) authCheck();
    // eslint-disable-next-line 
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> : <Spinner />;
}
