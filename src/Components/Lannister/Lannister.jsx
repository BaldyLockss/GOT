import styles from "./Lannister.module.css";

import { useNavigate } from "react-router-dom";

export const Lannister = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <h1>House Lannister</h1>
      </div>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Lannister;
