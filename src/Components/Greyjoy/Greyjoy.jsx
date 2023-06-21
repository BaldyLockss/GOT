import styles from "./Greyjoy.module.css";
import { Greyjoys } from "../../Data/GoTData";
import { useNavigate } from "react-router-dom";

export const Greyjoy = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Greyjoys</h1>
      <div className={styles.images}>
        {Greyjoys.map((item, i) => {
          return (
            <div
              className={styles.img}
              style={{
                transform: `translateX(${i * 100}%)`,
                width: `${100 / Greyjoys.length}%`,
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
export default Greyjoy;
