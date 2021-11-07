import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvides";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;