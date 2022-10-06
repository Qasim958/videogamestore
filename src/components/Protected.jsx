import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoginCredentialsFromLocalStorage } from "../custom/utils/localStorage";
const Protected = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = async () => {
      const token = await getLoginCredentialsFromLocalStorage();

      if (!token) {
        return navigate("/signin", { replace: true });
      }
      return children;
    };
    checkToken();
  }, []);
};
export default Protected;
