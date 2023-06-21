import styles from "./HomePage.module.css";
import { GoTDataHomePage } from "../../Data/GoTData";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Game of thrones</h1>
      <div className={styles.images}>
        {GoTDataHomePage.map((item, i) => {
          return (
            <Link to={`/${item.href}`} key={item.id}>
              <div
                className={styles.img}
                style={{
                  transform: `translateX(${i * 100}%)`,
                  width: `${100 / GoTDataHomePage.length}%`,
                }}
              >
                <img src={require(`../../Images/${item.img}`)} alt={item.alt} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
