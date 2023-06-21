import styles from "./Tully.module.css";
import { useNavigate } from "react-router-dom";

export const Tully = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div>
        <h1>House Tully</h1>
      </div>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
export default Tully;
