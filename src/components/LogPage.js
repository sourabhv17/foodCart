import userContext from "../utils/userContext";
import { useContext } from "react";

const LogPage = () => {
  const { setUser } = useContext(userContext);
  const handleNameChange = (e) => setUser(e.target.value);

  return (
    <div>
      <span>User Name: </span>
      <input
        type="text"
        maxLength={35}
        size={35}
        onChange={handleNameChange}
      ></input>
    </div>
  );
};

export default LogPage;
