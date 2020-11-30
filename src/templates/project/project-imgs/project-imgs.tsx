import React from 'react'
// import styling libs
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel'
import { Box } from 'rebass'
// import local components
import { Screenshot } from '..'

import 'pure-react-carousel/dist/react-carousel.es.css'
import './index.scss'

type Props = {
    /**
     * Screenshots of the project (contains mobile img and label)
     */
    screenshots: Screenshot[]
}

/**
 * Component to render the snapshot / screenshot of the project to be shown..
 */
const ProjectImgs: React.FC<Props> = ({ screenshots }) => {
    return (
        <Box>
            <CarouselProvider
                naturalSlideWidth={1920}
                naturalSlideHeight={1280}
                totalSlides={screenshots.length}
            >
                <Slider className="carousel-slide">
                    {screenshots.map((s, i) => (
                        <Slide index={i} innerClassName="slide">
                            <Box
                                height={['60vh', '100vh']}
                                width="80vw"
                                bg="accent"
                            />
                        </Slide>
                    ))}
                </Slider>
            </CarouselProvider>
        </Box>
    )
}

export { ProjectImgs }
