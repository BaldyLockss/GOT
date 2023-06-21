import styles from "./Beratheon.module.css";

import { useNavigate } from "react-router-dom";

export const Beratheon = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <h1>House Baratheon</h1>
      </div>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
export default Beratheon;
