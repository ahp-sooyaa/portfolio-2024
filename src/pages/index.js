import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"

const IndexPage = () => {
    return (
    <section className="bg-hero-pattern bg-contain relative grid place-content-center min-h-screen bg-[#04020A] text-white">
        <div className="absolute top-[40px] left-[40px] w-[100px] h-[40px]" >
            <StaticImage alt="x icon image" src="../images/logo.png" className="w-full h-full" />
        </div>
        <div className="text-center mb-[76px]">
            <div className="font-SourceCodePro text-[32px] mb-[12px]">Hi....I'm AungHtetPaing</div>
            <div className="font-Inter font-black text-8xl">Web Developer</div>
        </div>
        <div className="flex gap-x-[20px] items-center justify-center">
            <div className="flex gap-x-[20px] h-[20px] border-r-[1px] pr-[24px]">
                <a href="https://www.twitter.com/aunghte2371311" target="_blank" rel="noopener noreferrer">
                    <StaticImage alt="x icon image" src="../images/x-icon.png" className="w-[20px] h-full"/>
                </a>
                <a href="https://github.com/ahp-sooyaa" target="_blank" rel="noopener noreferrer">
                    <StaticImage alt="github icon image" src="../images/github-icon.png" className="w-[24px] h-full"/>
                </a>
                <a href="https://www.linkedin.com/in/aung-htet-paing-852380191/" target="_blank" rel="noopener noreferrer">
                    <StaticImage alt="linkedin icon image" src="../images/linkedin-icon.png" className="w-[20px] h-full"/>
                </a>
            </div>
            <a href="mailto:apaing894@gmail.com" target="_blank" rel="noopener noreferrer" className="font-SourceCodePro">apaing894@gmail.com</a>
        </div>
    </section>
    )
}

export default IndexPage

export const Head = () => <title>Aung Htet Paing</title>
