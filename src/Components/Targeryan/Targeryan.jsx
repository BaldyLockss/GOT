import styles from "./Targeryan.module.css";
import { useNavigate } from "react-router-dom";

export const Targeryan = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div>
        <h1>House Targeryon</h1>
      </div>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
export default Targeryan;
