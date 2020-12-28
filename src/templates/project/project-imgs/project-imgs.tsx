import React, { useEffect } from 'react'
// import styling libs
import { TweenLite } from 'gsap'
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
    gifs: {
        gif: string
        gifMobile: string
    }
}

/**
 * Component to render the snapshot / screenshot of the project to be shown..
 */
const ProjectImgs: React.FC<Props> = ({ screenshots, gifs }) => {
    const imgRef = React.createRef<HTMLDivElement>()

    useEffect(() => {
        const imgEl = imgRef.current
        if (imgEl) {
            TweenLite.from(imgEl, 1, {
                opacity: 0,
            })
        }
    }, [])

    return (
        <Box
            pb={[48, 48, 4]}
            width={['100vw', '100vw', '100vw', '100vw', '100%', '100%']}
            height={[
                'calc(0.66 * 100vw)',
                'calc(0.66 * 100vw)',
                'calc(0.66 * 100vw)',
                'calc(0.66 * 100vw)',
                683,
                1094,
            ]}
            sx={{
                position: 'relative',
                left: ['-7.5vw', '-7.5vw', '-7.5vw', '-7.5vw', 0],
                '.carousel-dot': {
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    'button.carousel__dot': {
                        bg: 'primary',
                        '&:after': { color: 'primary' },
                    },
                },
                '.carousel-button': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bg: 'transHeader',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: [2],
                    svg: {
                        height: [12, 12, 16, 16, 16, 32],
                        width: [12, 12, 16, 16, 16, 32],
                        fill: 'primary',
                    },
                    borderRadius: [4, 4, 4, 4, 4, 8],
                    '&.back': { left: ['8px', '8px', 16] },
                    '&.next': { right: ['8px', '8px', 16] },
                },
                '& > video': {
                    height: [
                        'calc(0.66 * 85vw)',
                        'calc(0.66 * 85vw)',
                        'calc(0.66 * 85vw)',
                        'calc(0.66 * 85vw)',
                        1024,
                    ],
                    width: ['85vw', '85vw', '85vw', '85vw', 683],
                },
            }}
            ref={imgRef}
        >
            <CarouselProvider
                naturalSlideWidth={1024}
                naturalSlideHeight={683}
                totalSlides={screenshots.length + 1}
                infinite={true}
            >
                <Slider className="carousel-slide">
                    {screenshots.map((s, i) => (
                        <Slide index={i} innerClassName="slide">
                            <Box height="100%" width="100%" bg="accent">
                                <Img
                                    style={{ height: '100%', width: '100%' }}
                                    imgStyle={{ objectPosition: 'center' }}
                                    fluid={s.sources}
                                    alt={s.screenshotLabel}
                                />
                            </Box>
                        </Slide>
                    ))}
                    <Slide index={screenshots.length} innerClassName="slide">
                        <Box
                            height="100%"
                            width="100%"
                            bg="accent"
                            sx={{ video: { height: '100%', width: '100%' } }}
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="desktop-gif"
                            >
                                <source src={gifs.gif} type="video/mp4" />
                            </video>
                        </Box>
                    </Slide>
                </Slider>
                {screenshots.length > 1 && (
                    <ButtonBack className="carousel-button back">
                        <AiOutlineLeft />
                    </ButtonBack>
                )}
                {screenshots.length > 1 && (
                    <ButtonNext className="carousel-button next">
                        <AiOutlineRight />
                    </ButtonNext>
                )}

                <DotGroup className="carousel-dot" />
            </CarouselProvider>
        </Box>
    )
}

export { ProjectImgs }
