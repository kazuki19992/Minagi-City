import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from './CarouselImg/1.png'
import img2 from './CarouselImg/2.png'
import img3 from './CarouselImg/3.png'

export default function Carousell (props) {

    return (
        <div style={{maxHeight: '300px'}}>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                stopOnHover={true}
                thumbWidth={40}
                showArrows={true}
            >
                <div>
                    <img src={img1} style={{maxHeight: 300, maxWidth: 400 }} />
                </div>
                <div>
                    <img src={img2} style={{maxHeight: 300, maxWidth: 400}} />
                </div>
                <div>
                    <img src={img3} style={{maxHeight: 300, maxWidth: 400}} />
                </div>
            </Carousel>
        </div>
    )
}