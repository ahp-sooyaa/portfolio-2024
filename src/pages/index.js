import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"

const IndexPage = () => {
    return (
        <>
            <section
                className="bg-hero-pattern bg-contain relative grid place-content-center min-h-screen bg-[#04020A] text-white">
                <div className="absolute top-[40px] left-[40px] w-[100px] h-[40px]">
                    <StaticImage alt="x icon image" src="../images/logo.png" className="w-full h-full"/>
                </div>
                <div className="text-center mb-[46px] xl:mb-[76px]">
                    <div className="font-SourceCodePro text-base xl:text-[32px] mb-[12px]">Hi....I'm AungHtetPaing</div>
                    <div className="font-Inter font-black text-5xl xl:text-8xl">Web Developer</div>
                </div>
                <div className="flex gap-x-[15px] xl:gap-x-[20px] items-center justify-center">
                    <div className="flex gap-x-[15px] xl:gap-x-[20px] h-[15px] xl:h-[20px] border-r-[1px] pr-[24px]">
                        <a href="https://www.twitter.com/aunghte2371311" target="_blank" rel="noopener noreferrer">
                            <StaticImage alt="x icon image" src="../images/x-icon.png" className="w-[15px] xl:w-[20px] h-full"/>
                        </a>
                        <a href="https://github.com/ahp-sooyaa" target="_blank" rel="noopener noreferrer">
                            <StaticImage alt="github icon image" src="../images/github-icon.png"
                                         className="w-[19px] xl:w-[24px] h-full"/>
                        </a>
                        <a href="https://www.linkedin.com/in/aung-htet-paing-852380191/" target="_blank"
                           rel="noopener noreferrer">
                            <StaticImage alt="linkedin icon image" src="../images/linkedin-icon.png"
                                         className="w-[15px] xl:w-[20px] h-full"/>
                        </a>
                    </div>
                    <a href="mailto:apaing894@gmail.com" target="_blank" rel="noopener noreferrer"
                       className="font-SourceCodePro text-sm xl:text-base">apaing894@gmail.com</a>
                </div>
            </section>

            <section className="bg-[#04020A] flex justify-center xl:pb-[80px] p-3 xl:p-0">
                <div className="border border-[#4D4D4D] rounded-[20px] bg-[#0B0A10] grid grid-cols-1 xl:grid-cols-[229px_auto_325px] grid-rows-[auto_auto_auto_auto] xl:grid-rows-2 gap-[20px] w-full xl:w-[981px] xl:h-[558px] p-[12px]">
                    <div className="rounded-[15px] h-auto xl:h-[255px] overflow-hidden">
                        <StaticImage alt="x icon image" src="../images/profile.jpg" className="w-full h-full"/>
                    </div>
                    <div className="xl:col-span-2 bg-[#141414] rounded-[20px] text-white p-[20px] xl:p-[28px]">
                        <div className="flex items-center gap-x-[13px] mb-[22px]">
                            <span
                                className="inline-block w-[8px] h-[8px] rounded-[2px] bg-white shadow-[0_0_4px_5px_rgba(255,255,255,0.25)] rotate-45"></span>
                            <h2 className="font-SourceCodePro text-sm">About</h2>
                        </div>
                        <p className="font-Inter text-[16px] font-normal leading-7">
                            I'm a web developer with three years of experience in JavaScript, Laravel, and WordPress. Currently, I'm focused on building websites using WordPress and Drupal, as well as designing EDMs with Stripo and Mailchimp. When I'm not coding, I enjoy watching Laracasts to learn from other developers and actively contribute to community forums. I'm passionate about expanding my skills and am eager to dive deeper into the MERN stack to grow as a full-stack web developer.
                        </p>
                    </div>
                    <div className="xl:col-span-2 bg-[#141414] rounded-[20px] text-white p-[20px] xl:p-[28px]">
                        <div className="flex items-center gap-x-[13px] mb-[22px]">
                            <span
                                className="inline-block w-[8px] h-[8px] rounded-[2px] bg-white shadow-[0_0_4px_5px_rgba(255,255,255,0.25)] rotate-45"></span>
                            <h2 className="font-SourceCodePro text-sm">Experiences</h2>
                        </div>
                        <div>
                            <div className="mb-[22px]">
                                <div className="flex items-center gap-x-[13px] mb-[8px]">
                                    <StaticImage alt="clickr logo" src="../images/clickr-logo.png"
                                                 className="w-[30px] h-[30px] rounded-[5px]"/>
                                    <h3 className="font-Inter font-normal text-base">Clickr</h3>
                                </div>
                                <div className="relative ml-3">
                                    <span
                                        className="inline-block absolute -top-2 left-[3px] w-[1px] h-full bg-[#D9D9D9] z-0"></span>
                                    <div
                                        className="flex items-center justify-between mb-[12px] font-Inter font-normal text-sm text-[#A9A9A9]">
                                        <div className="flex items-center gap-x-[13px]">
                                        <span
                                            className="inline-block relative z-10 w-[7px] h-[7px] bg-[#D9D9D9] rounded-full border-2 border-[#141414]"></span>
                                            <p>Web Developer</p>
                                        </div>
                                        <p>2024-present</p>
                                    </div>
                                    <div
                                        className="flex items-center justify-between font-Inter font-normal text-sm text-[#A9A9A9]">
                                        <div className="flex items-center gap-x-[13px]">
                                            <span
                                                className="inline-block relative z-10 w-[7px] h-[7px] bg-[#D9D9D9] rounded-full border-2 border-[#141414]"></span>
                                            <p>Junior Web Developer</p>
                                        </div>
                                        <p>2023-2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[22px]">
                            <div className="flex items-center gap-x-[13px] mb-[8px]">
                                    <StaticImage alt="u-book educations logo" src="../images/ubookeducations-logo.png"
                                                 className="w-[30px] h-[30px] bg-white rounded-[5px]"/>
                                    <h3 className="font-Inter font-normal text-base">U-Book Educations</h3>
                                </div>
                                <div className="relative ml-3">
                                    <span className="inline-block absolute -top-2 left-[3px] w-[1px] h-full bg-[#D9D9D9] z-0"></span>
                                    <div
                                        className="flex items-center justify-between font-Inter font-normal text-sm text-[#A9A9A9]">
                                        <div className="flex items-center gap-x-[13px]">
                                        <span
                                            className="inline-block relative z-10 w-[7px] h-[7px] bg-[#D9D9D9] rounded-full border-2 border-[#141414]"></span>
                                            <p>Junior Web Developer</p>
                                        </div>
                                        <p>2022-2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#141414] rounded-[20px] text-white p-[20px] xl:p-[28px]">
                        <div className="flex items-center gap-x-[13px] mb-[22px]">
                            <span
                                className="inline-block w-[8px] h-[8px] rounded-[2px] bg-white shadow-[0_0_4px_5px_rgba(255,255,255,0.25)] rotate-45"></span>
                            <h2 className="font-SourceCodePro text-sm">Stack</h2>
                        </div>
                        <div className="grid grid-cols-4 grid-rows-2 gap-y-4">
                            <StaticImage alt="u-book educations logo" src="../images/javascript.png"
                                         className="w-[45px] h-[45px] rounded-[8px]"/>
                            <StaticImage alt="u-book educations logo" src="../images/reactjs.png"
                                         className="w-[45px] h-[45px] rounded-[8px]"/>
                            <StaticImage alt="u-book educations logo" src="../images/vuejs.png"
                                         className="w-[45px] h-[45px] rounded-[8px]"/>
                            <StaticImage alt="u-book educations logo" src="../images/alpinejs.png"
                                         className="w-[45px] h-[45px] rounded-[8px]"/>
                            <StaticImage alt="u-book educations logo" src="../images/laravel.png"
                                         className="w-[45px] h-[45px] rounded-[8px]"/>
                            <StaticImage alt="u-book educations logo" src="../images/livewire.png"
                                         className="w-[45px] h-[45px] rounded-[8px] bg-[#F2F0EA]"/>
                            <StaticImage alt="u-book educations logo" src="../images/wordpress.png"
                                         className="w-[45px] h-[45px] rounded-[8px]"/>
                            <StaticImage alt="u-book educations logo" src="../images/tailwind.png"
                                         className="w-[45px] h-[45px] rounded-[8px]"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-3 bg-[#04020A] flex justify-center py-[80px]">
                <div className="w-[981px]">
                    <div className="flex items-center gap-x-[13px] mb-[22px] ml-1">
                        <span
                            className="inline-block w-[8px] h-[8px] rounded-[2px] bg-white shadow-[0_0_4px_5px_rgba(255,255,255,0.25)] rotate-45"></span>
                        <h2 className="font-SourceCodePro font-semibold text-xl xl:text-2xl text-white">Projects</h2>
                    </div>
                    <div>
                        <div className="bg-[#0B0A10] p-[12px] rounded-[20px]">
                            <div className="flex flex-col bg-project-thumbnail bg-cover bg-no-repeat border border-[#4D4D4D] rounded-2xl p-[20px] xl:py-[34px] xl:px-[29px]">
                                <h3 className="font-Inter font-bold text-xl xl:text-2xl mb-[10px] text-white">Parkway Cancer Center</h3>
                                <p className="font-Inter font-medium text-base xl:text-lg mb-[41px] text-[#A4A4A5]">Parkway cancer center website clone built with nextjs.</p>
                                <StaticImage alt="u-book educations logo" src="../images/project-1-thumbnail.png"
                                             className="w-full h-[200px] xl:w-[841px] xl:h-[333px] rounded-[10px] mx-auto object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#04020A] border-t border-[#303030] flex flex-col items-center">
                <p  className="font-inter font-medium xl:font-bold text-[24px] xl:text-[32px] text-[#4D4D4D] mb-[53px] mt-[35px]">Thank for visiting</p>
                <div className="w-[100px] xl:w-[140px] mb-[22px]">
                    <StaticImage alt="x icon image" src="../images/logo.png" className="w-full h-full"/>
                </div>
                <p className="font-SourceCodePro font-normal text-sm text-[#4D4D4D] text-center w-2/3 xl:w-full mb-5">
                    © 2024 All Rights Reserved. Built with Gatsby & Sanity.
                </p>
            </footer>
        </>
    )
}

export default IndexPage

export const Head = () => <title>Aung Htet Paing</title>
