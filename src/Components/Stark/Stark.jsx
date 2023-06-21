import styles from "./Stark.module.css";
import { useNavigate } from "react-router-dom";
import { Starks } from "../../Data/GoTData";

export const Stark = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>House Stark</h1>
      <div className={styles.images}>
        {Starks.map((item, i) => {
          return (
            <div className={styles.img}>
              <img src={require(`../../Images/${item.img}`)} alt={item.alt} />
            </div>
          );
        })}
      </div>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
export default Stark;
