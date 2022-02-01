import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className="home">
        <div className="home-container">
          <h1 className="home-container__title">
            Крафтовое пиво и душевная кухня
          </h1>
          <p className="home-container__subtitle">Закажи себе настроение</p>
          <Link className="home-container__btn" to={`/dishes`}>
            Cделать заказ
          </Link>
        </div>
        <Carousel
          className="home-carousel"
          nextLabel=""
          prevLabel=""
          prevIcon=""
          nextIcon=""
          controls={false}
          fade={true}
        >
          <Carousel.Item>
            <div className="home-carousel__slide home-carousel__slide_one"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home-carousel__slide home-carousel__slide_two"></div>
          </Carousel.Item>
        </Carousel>
      </main>
    </>
  );
}
