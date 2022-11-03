import Introduction from "./Introduction";

function ServiceCard({title, subtitle, url}){
    // switch (variant) {
    //     case 'product':
    //      return(
    //         <div className="w-small">
    //             <div className="w-12 h-12"><img src="/product.png" alt="product"/></div>
    //             {/* <Introduction title='Product design' subtitle='Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.' variant='bgblack'/> */}
    //             <h1 className="font-MontBold leading-medium text-white text-small pt-6 ">Product design</h1>
    //             <p>Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.</p>
                

    //         </div>
    //      );
    //     case 'dev':
    //         return(
    //             <div className="w-small">
    //                 <div className="w-12 h-12"><img src="/dev.png" alt="dev"/></div>
    //                 <Introduction title='Development' subtitle='By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until its a fully-fledged digital solution.' variant='bgblack'/>
    //             </div>
    //          );
    //     case 'quality':
    //         return(
    //             <div className="w-small">
    //                 <div className="w-12 h-12"><img src="/quality.png" alt="quality"/></div>
    //                 <Introduction title='Quality assurance' subtitle='Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing.' variant='bgblack'/>
    //             </div>
    //          );
    //     case 'marketing':
    //         return(
    //             <div className="w-small">
    //                 <div className="w-12 h-12"><img src="/marketing.png" alt="marketing"/></div>
    //                 <Introduction title='Marketing & growth' subtitle='By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people.' variant='bgblack'/>
    //             </div>
    //          );

       
    // }
    return (
        <div className="w-[256px]">
            <div className="w-12 h-12"><img src={url} alt="logo"/></div>
            <h2 className="font-MontBold leading-medium text-white text-small md:text-[24px] pt-6 pb-[18px]">{title}</h2>
            <p className="font-sans leading-middle  text-smallx text-lightgray">{subtitle}</p>

        </div>
    );


}
export default ServiceCard