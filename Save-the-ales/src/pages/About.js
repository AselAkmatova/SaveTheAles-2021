import image1 from "../images/about-2.jpg";
import image2 from "../images/about-3.jpg";
import image3 from "../images/about-4.jpg";
import image5 from "../images/about-5.jpg";
import image4 from "../images/about-6.jpg";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function About() {
  return (
    <main className="about">
      <h2 className="about__title">О нас</h2>
      <p className="about__text">
        Save the Ales — микропивоварня и тапрум в Бишкеке, столице Киргизии. Бар
        находится примерно в 15 минутах ходьбы от главной городской площади. По
        ней маршируют солдаты, поднимающие и опускающие государственный флаг в
        течение дня. <br />
        <br /> Крафтовые пивоварни вообще не обычны для Бишкека, а предприятие,
        основанное девушками, — исключительный случай. Аида Мусулманкулова
        запустила Save the Ales в 2016 году с намерением проложить женщинам
        дорогу в киргизскую пивную индустрию. Аида разрабатывает новые сорта,
        основываясь на традиционных европейских рецептах, используя пшеницу,
        импортированную из Германии, по этим рецептам затем работают Ника и
        Адинай.
        <br />
      </p>
      <section className="about__about-photos about-photos">
        <Gallery>
          <Item original={image1} thumbnail={image1} width="1280" height="853">
            {({ ref, open }) => (
              <img
                className="about-photos__img"
                ref={ref}
                onClick={open}
                src={image1}
                alt="bar ambiance"
              />
            )}
          </Item>
          <Item original={image2} thumbnail={image2} width="1280" height="853">
            {({ ref, open }) => (
              <img
                className="about-photos__img"
                ref={ref}
                onClick={open}
                src={image2}
                alt="bar guests"
              />
            )}
          </Item>
          <Item original={image3} thumbnail={image3} width="1280" height="853">
            {({ ref, open }) => (
              <img
                className="about-photos__img"
                ref={ref}
                onClick={open}
                src={image3}
                alt="bar beer"
              />
            )}
          </Item>
          <Item original={image4} thumbnail={image4} width="1280" height="853">
            {({ ref, open }) => (
              <img
                className="about-photos__img"
                ref={ref}
                onClick={open}
                src={image4}
                alt="bar food"
              />
            )}
          </Item>
          <Item original={image5} thumbnail={image5} width="1280" height="853">
            {({ ref, open }) => (
              <img
                className="about-photos__img"
                ref={ref}
                onClick={open}
                src={image5}
                alt="bar outside"
              />
            )}
          </Item>
        </Gallery>
      </section>
      <q className="about__quote">
        Здесь все чувствуют себя хорошо. Бар — одно из самых безопасных мест в
        Бишкеке для самых разных людей. Главная идея Save the Ales в равенстве
      </q>
    </main>
  );
}
