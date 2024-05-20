import React from "react";
import styles from "./exhortation.module.css";

const Exhortation = () => {
  const paragraph = [
    {
      id: 1,
      para: "(The couple and the congregation stand)",
    },
    {
      id: 2,
      para: "Dearly beloved, we are assembled here in the presence of God and before this congregation to join this man and this woman in holy matrimony. Marriage is a holy estate instituted by God and commended in the scripture as honorable to all who enter it lawfully and in true love.",
    },
    {
      id: 3,
      para: "It was confirmed by Christ's solemn words and hallowed by His gracious presence at the marriage feast in Cana of Galilee and was declared by the great Apostle Paul as signifying the mystical union between Christ and His church Therefore, it ought not to be entered lightly, unadvisedly or wantonly; but thoughtfully, reverently, discreetly, soberly and in fear of God duly consider in the causes for which it was ordained.",
    },
    {
      id: 4,
      para: "Firstly, marriage was ordained for companionship, mutual society, help and comfort, which husband and wife ought to have for each other in all circumstances. For this cause shall a man leave his father and mother and shall cleave to his wife and the two shall become one flesh.",
    },
    {
      id: 5,
      para: "Secondly, it was ordained in order that the natural instinct and affection implanted by God in His creatures should be hallowed and directed aright, that those who are called of God to this holy estate should continue therein in pureness of living.",
    },
    {
      id: 6,
      para: "Thirdly, it was ordained for procreation of children to be brought up in the knowledge, fear and admonition of the Lord and to the praise of His holy name. Into this holy estate of marriage, these two persons, Sharon Oluwafisayo and David Chibueze come now to be joined. Therefore, if anyone can show any just cause why they may not lawfully be joined together in marriage, let him/her speak now or else hereafter forever hold his/her peace.",
    },
  ];
  return (
    <div className={styles.contain}>
      <div className={styles.inner_contain}>
        <h1 className={styles.order}>EXHORTATION</h1>

        <div>
          {paragraph.map((item) => (
            <p key={item.id}>{item.para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exhortation;
