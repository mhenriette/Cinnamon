import Link from "next/link";
import Button from "../ui/Button";
function Footer(){
    return (
        <footer className="bg-black bg-opacity-90 bg-bgnoise">
            <div className="px-6 max-w-[1120px]">
                <div className="pt-14 ">
                    <div>
                        <div className="w-40 h-5"><img src="logowhite.svg" alt="logo"/></div>
                        <div className="w-[182px] mt-10 "><p className="text-[24px] leading-[36px] text-white font-MontBold">All software, zero bullshit.</p></div>
                        <nav className="grid mt-11 mb-16 gap-6 grid-cols-2 text-lightgray text-smallx">
                            <Link href='/'>Home</Link>
                            <Link href='/Projects'>Projects</Link>
                            <Link href='/Services'>Services</Link>
                            <Link href='/About'>About Us</Link>
                            <Link href='/Careers'>Careers</Link>
                            <Link href='/Blog'>Blog</Link>
                        </nav>
                    </div>
                    <div>
                        {/* grid container */}
                        <div className="grid grid-cols-2 gap-6 mb-16">
                            {/* container 1 */}
                            <div className="address">
                                <p className="address__country">Zagreb</p>
                                <p className="address__location">Slavonska avenija 6,</p>
                                <p className="address__location">10000, Zagreb, Croatia</p>
                                <p className="address__location">+385 99 347 3103</p>

                            </div>
                            {/* container 2 */}
                            <div className="address">
                                <p className="address__country">New York</p>
                                <p className="address__location">500 7th Ave, New York,</p>
                                <p className="address__location">NY 10018, United States</p>
                            

                            </div>
                            {/* container 3 */}
                            <div className="address">
                                <p className="address__country">Belgrade</p>
                                <p className="address__location">Bulevar vojvode Mišića</p>
                                <p className="address__location">37</p>
                                <p className="address__location">11000, Belgrade, Serbia</p>
                            

                            </div>
                        </div>
                        {/* flex container */}
                        <div>
                            {/* form container */}
                            <div className="mb-16">
                                <p className="text-white font-MontBold leading-middle text-smallx">Our News Letter</p>
                                <div className="mt-2 ">
                                    <form>
                                        <div className="pt-3 mt-5 w-full relative">
                                            <input className="w-full  bg-transparent h-4 mt-2 box-content border-b border-b-lightgray focus:outline-none peer focus:border-b-[#5135ff] focus:border-b-2 transition-all duration-700 text-white text-smallx font-sans"  id="email"></input>
                                            <label className="absolute left-0 top-1 cursor-text text-smallx font-sans text-lightgray peer-focus:text-xs  peer-focus:-top-4 transition-all peer-focus:text-[#5135ff] duration-700 " for='email'>Your Email</label>

                                        </div>
                                        <div className="my-5">
                                        <Button title='Subscribe'/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* image div */}
                          
                            <div>
                                <div className=" mx-auto my-8 w-[216px]"><img src="pangea.svg" alt="logo" className="max-w-full h-16"/></div>
                                <div className="w-[216px] mx-auto my-8"><img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclutch-badge.cc332fa4.png&w=640&q=100" alt="review"/></div>
                            </div>
                            <nav className="text-center pt-10">
                                <p className="text-lightgray font-smallx font-sans leading-middle underline">hello@cinnamon.agency</p>
                            </nav>
                          
                        </div>
                    </div>

                </div>
                {/* section 2 footer */}
                <div className="flex flex-col-reverse py-9 items-center">
                    {/* copy right */}
                    <div className="flex  pt-4 justify-between text-white opacity-60">
                        <p className=" font-sans text-smallx">© 2022 Cinnamon</p>
                        <div className="ml-6 underline font-sans text-smallx"><Link href='https://cinnamon.agency/privacy-and-policy?fromFooter=true'/>Privacy Policy</div>
                    </div>

                    <div className="border-y border-y-gray-500 w-full flex justify-center">
                        <Link href='https://www.linkedin.com/company/cinnamon-llc' ><img src="/in.svg" className="media"/></Link>
                        <Link href='https://dribbble.com/cinnamon_agency'><img src="/dribble.svg" className="media"/></Link>
                        <Link href='https://www.behance.net/cinnamon_design'><img src="/behance.svg" className="media" /></Link>
                        <Link href='https://www.instagram.com/cinnamon.agency/'><img src="/insta.svg" className="media" /></Link>
                        <Link href='https://www.facebook.com/cinnamonagency'><img src="/fb.svg" className="media" /></Link>
                        <Link href='https://cinnamon.agency/rss'><img src="/rs.svg" className="media"/></Link>
                    </div>
                </div>

            </div>
        </footer>
    );

}
export default Footer