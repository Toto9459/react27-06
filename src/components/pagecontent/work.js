import React from 'react'
import styled from 'styled-components';
import AbThumbnail from '../../assets/img/ab-distribution.webp'
import MutezaThumbnail from '../../assets/img/muteza.webp'
import OukhtyThumbnail from '../../assets/img/oukhty.webp'
import FolioThumbnail from '../../assets/img/folio.webp'
import FlowerThumbnail from '../../assets/img/flower.webp'
import SvgProject from '../../icons/SvgProject.svg';
import Share from "../../icons/Share.svg";

import {secondColor, thirdColor, morgenWalsh, fourthColor, EmSpace, OldchildContent, secondLightColor, Title, Number, ContainerTitle, fourthLightColor, thirdLightColor} from '../common';


const WorkContainer = styled.section`
  height: 200vh;
  width: 100%;
  display: inline-flex;
  position: relative;
  @media (max-width: 1000px) {
    height: 140vh;
}
`


const WorkContent = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(28, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    @media (max-width: 850px) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
`

const Div1 = styled.div`
    grid-area: 1 / 1 / 9 / 7;
    @media (max-width: 1000px) {
        grid-area: 1 / 1 / 9 / 15;
    }
`

const AbDistribution = styled.div`
    height: 100%;
    width: 100%;
    grid-area: 3 / 9 / 9 / 14;
    @media (max-width: 1400px) {
        grid-area: 4 / 9 / 9 / 14;
    }
    @media (max-width: 850px) {
        grid-area: 12 / 2 / 24 / 6;
    }
`
const Muteza = styled.div`
    grid-area: 11 / 2 / 17 / 7;
    @media (max-width: 1400px) {
        grid-area: 9 / 2 / 14 / 7;
    }
    @media (max-width: 850px) {
        grid-area: 26 / 2 / 38 / 6;
    }
`
const HijabStore = styled.div`
    grid-area: 12 / 9 / 18 / 14;
    @media (max-width: 1400px) {
        grid-area: 40 / 9 / 62 / 14;
    }
    @media (max-width: 850px) {
        grid-area: 40 / 2 / 52 / 6;
    }
`
const Folio = styled.div`
    grid-area: 20 / 2 / 26 / 7;
    @media (max-width: 1400px) {
        grid-area: 18 / 2 / 23 / 7;
    }
    @media (max-width: 850px) {
        grid-area: 54 / 2 / 66 / 6;
    }
`
const FlowerShop = styled.div`
    grid-area: 21 / 9 / 27 / 14;
    @media (max-width: 1400px) {
        grid-area: 23 / 9 / 28 / 14;
    }
    @media (max-width: 850px) {
        grid-area: 68 / 2 / 80 / 6;
    }
`


const Content = styled.div`
    height: 20%;
    width: 100%;
    display: inline-flex;
`
const ContentProject = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DateProject = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Link = styled.a`
    font-size: max(1.8rem, 8px);
    text-align: right;
    color: ${props => props.isLight === true ? secondLightColor : secondColor};
    font-family: ${morgenWalsh};
    letter-spacing: .1rem;
    white-space: nowrap;
    transition: all .3s ease-out;
    &:hover {
        color: ${props => props.isLight === true ? thirdLightColor : thirdColor};
    }
`
const Date = styled.p`
    font-size: max(1.8rem, 8px);
    text-align: right;
    color: ${props => props.isLight === true ? fourthLightColor : fourthColor};
    font-family: ${morgenWalsh};
    letter-spacing: .1rem;
`

const SvgDate = styled.a`
    height: 2rem;
    width: 2rem;
    background-image: url(${Share});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding-left: 5rem;
    transition: all .3s ease-out;
`
const Vector = styled.div`
    height: 4rem;
    width: 4rem;
    padding-right: 8rem;
    background-image: url(${SvgProject});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
`


/* const Thumbnails = styled.div`
    height: 80%;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;

    &.AbDistribution {
        background-image: url(${AbThumbnail});
    }
    &.Muteza {
        background-image: url(${MutezaThumbnail});
    }
    &.HijabStore {
        background-image: url(${AssyahThumbnail});
    }
    &.Folio {
        background-image: url(${FolioThumbnail});
    }
    &.FlowerShop {
        background-image: url(${FlowerThumbnail});
    }
` */

const Thumbnails = styled.img`
    height: auto;
    width: 100%;
`



function Work({lightMode, setlightMode}) {
  return (
    <WorkContainer>

        <ContainerTitle>

            <div style={{height: 'auto', width: 100 + "%"}}>
                <div style={{height: 100 + "%", width: 100 + "%"}}>
                    <OldchildContent>
                        <EmSpace isLight={lightMode}></EmSpace>
                        <Number isLight={lightMode} className="oldchild2">002</Number>
                    </OldchildContent>
                    
                </div>
            </div>

            <div style={{height: 'auto', width: 100 + "%", paddingTop: 3 + "rem"}}>
                <div style={{height: 100 + "%", width: 100 + "%"}}>
                    <Title isLight={lightMode}>Work</Title>
                </div>
            </div>

        </ContainerTitle>

        <WorkContent>
            <Div1></Div1>

            <AbDistribution>
                <Thumbnails src={AbThumbnail}></Thumbnails>

                <Content>
                    <ContentProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Vector></Vector>
                            <Link isLight={lightMode} target="_blank" href='https://www.ab-distribution.re'>View Project</Link>
                        </div>
                    </ContentProject>
                    <DateProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <Date isLight={lightMode}>May. 2022</Date>
                            <SvgDate target="_blank" href='https://www.ab-distribution.re'></SvgDate>
                        </div>
                    </DateProject>
                </Content>
            </AbDistribution>

            <Muteza>
                <Thumbnails src={MutezaThumbnail} className='Muteza'></Thumbnails>

                <Content>
                    <ContentProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Vector></Vector>
                            <Link isLight={lightMode} target="_blank" href='https://tonii0.github.io/Muteza/'>View Project</Link>
                        </div>
                    </ContentProject>
                    <DateProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <Date isLight={lightMode}>Jun. 2021</Date>
                            <SvgDate target="_blank" href='https://tonii0.github.io/Muteza/'></SvgDate>
                        </div>
                    </DateProject>
                </Content>
            </Muteza>

            <HijabStore>
                <Thumbnails src={OukhtyThumbnail} className='HijabStore'></Thumbnails>

                <Content>
                    <ContentProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Vector></Vector>
                            <Link isLight={lightMode} target="_blank" href='#'>View Project</Link>
                        </div>
                    </ContentProject>
                    <DateProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <Date isLight={lightMode}>Feb. 2022</Date>
                            <SvgDate target="_blank" href='#'></SvgDate>
                        </div>
                    </DateProject>
                </Content>
            </HijabStore>

            <Folio>
                <Thumbnails src={FolioThumbnail} className='Folio'></Thumbnails>

                <Content>
                    <ContentProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Vector></Vector>
                            <Link isLight={lightMode} target="_blank" href='https://www.tonibusatta.fr'>View Project</Link>
                        </div>
                    </ContentProject>
                    <DateProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <Date isLight={lightMode}>May. 2021</Date>
                            <SvgDate target="_blank" href='https://www.tonibusatta.fr'></SvgDate>
                        </div>
                    </DateProject>
                </Content>
            </Folio>

            <FlowerShop>
                <Thumbnails src={FlowerThumbnail} className='FlowerShop'></Thumbnails>

                <Content>
                    <ContentProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Vector></Vector>
                            <Link isLight={lightMode} target="_blank" href='https://flytzwoo.github.io/Aliyahmarinabfleurs/'>View Project</Link>
                        </div>
                    </ContentProject>
                    <DateProject>
                        <div style={{height: 'auto', width: 100 + "%", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <Date isLight={lightMode}>Apr. 2021</Date>
                            <SvgDate target="_blank" href='https://flytzwoo.github.io/Aliyahmarinabfleurs/'></SvgDate>
                        </div>
                    </DateProject>
                </Content>
            </FlowerShop>

        </WorkContent>

    </WorkContainer>
  )
}

export default Work
