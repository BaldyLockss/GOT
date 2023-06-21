import styles from "./Arryn.module.css";
import { useNavigate } from "react-router-dom";
import { Arryns } from "../../Data/GoTData";

export const Arryn = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>House Arryn</h1>
      <div className={styles.images}>
        {Arryns.map((item, i) => {
          return (
            <div
              className={styles.img}
              style={{
                transform: `translateX(${i * 100}%)`,
                width: `${100 / Arryns.length}%`,
              }}
            >
              <img
                src={require(`../../Images/${item.img}`)}
                alt={item.alt}
                key={item.id}
              />
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
export default Arryn;
