import Carousel from 'react-bootstrap/Carousel';
import jumbotronImg from '../assets/img/jumbotronImg'

export const Caroussel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={jumbotronImg.img1}
                    alt="First slide"
                    height={800}
                />
                <Carousel.Caption className='badge bg-dark text-wrap'>
                    <h2>Kinesiología</h2>
                    <h6>Para aliviar el dolor, optimizar la recuperación y mejorar el rendimiento.</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={jumbotronImg.img2}
                    alt="Second slide"
                    height={800}
                />
                <Carousel.Caption className='badge bg-dark text-wrap'>
                    <h2>Fisioterapia</h2>
                    <h6>Tecnología de punta al servicio de tu recuperación.</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={jumbotronImg.img3}
                    alt="Third slide"
                    height={800}
                />
                <Carousel.Caption className='badge bg-dark text-wrap'>
                    <h2>Osteopatía</h2>
                    <h6>El cuerpo dispone de todos los mecanismos para la curación, sólo hay que ayudarle a restablecer la función normal.</h6>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
