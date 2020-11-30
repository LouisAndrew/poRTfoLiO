import React from 'react'
// import styling libs
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from 'pure-react-carousel'
import { Box } from 'rebass'
import Img from 'gatsby-image'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

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
        <Box
            pb={[24, 24, 4]}
            sx={{
                position: 'relative',
                '.carousel-dot': { 'button.carousel__dot': { bg: 'primary' } },
                '.carousel-button': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-70%)',
                    bg: 'transHeader',
                    svg: {
                        height: 24,
                        width: 24,
                        fill: 'primary',
                    },
                    '&.back': { left: 0 },
                    '&.next': { right: 0 },
                },
            }}
        >
            <CarouselProvider
                naturalSlideWidth={1920}
                naturalSlideHeight={1280}
                totalSlides={screenshots.length}
            >
                <Slider className="carousel-slide">
                    {screenshots.map((s, i) => (
                        <Slide index={i} innerClassName="slide">
                            <Box
                                height={[
                                    '70vh',
                                    '100vh',
                                    'calc(0.66 * 85vw)',
                                    'calc(0.66 * 85vw)',
                                    683,
                                    683,
                                ]}
                                width="100%"
                                bg="accent"
                            >
                                <Img
                                    style={{ height: '100%', width: '100%' }}
                                    imgStyle={{ objectPosition: 'center' }}
                                    fluid={s.sources}
                                />
                            </Box>
                        </Slide>
                    ))}
                </Slider>
                <ButtonBack className="carousel-button back">
                    <AiOutlineLeft />
                </ButtonBack>
                <ButtonNext className="carousel-button next">
                    <AiOutlineRight />
                </ButtonNext>
                <DotGroup className="carousel-dot" />
            </CarouselProvider>
        </Box>
    )
}

export { ProjectImgs }
