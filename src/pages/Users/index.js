import "./styles.css";
import { useEffect } from "react";

const Users = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return "";
};

export default Users;
