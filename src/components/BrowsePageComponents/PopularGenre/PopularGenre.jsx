import TopCategorySlider from "../../TopCategorySlider";
import styles from "./popular-genre.module.css";

const Card = ({ title, img }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={img} alt={title} />
      <p className={styles.card_text}>{title}</p>
    </div>
  );
};

const PopularGenre = () => {
  return (
    <div className={styles.container}>
      <TopCategorySlider text="Popular Genre" />
      <div className={styles.cards}>
        <Card
          title="Action Games"
          img="https://i1.sndcdn.com/artworks-000323457648-gdlmvy-t500x500.jpg"
        />
        <Card
          title="Casual Games"
          img="https://i1.sndcdn.com/artworks-000323457648-gdlmvy-t500x500.jpg"
        />
        <Card
          title="Indie"
          img="https://i1.sndcdn.com/artworks-000323457648-gdlmvy-t500x500.jpg"
        />
        <Card
          title="Multiplayer"
          img="https://i1.sndcdn.com/artworks-000323457648-gdlmvy-t500x500.jpg"
        />
        <Card
          title="Strategy"
          img="https://i1.sndcdn.com/artworks-000323457648-gdlmvy-t500x500.jpg"
        />
      </div>
    </div>
  );
};
export default PopularGenre;
