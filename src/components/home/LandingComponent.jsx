import heroPoster from '../../assets/landing_image.svg';
import RotatingText from './RotatingText';
import { Link } from "react-router-dom";

export default function LandingComponent() {

    return (
        <section className="text-gray-800 py-10 min-h-[calc(100vh-4rem)]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">

                {/* Text Content */}
                <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Empowering Minds, 
                        <br /> 
                        <span className="text-[#69c]">Hosting Ideas By</span>
                    </h1>
                    <h1 className='text-4xl md:text-5xl font-extrabold leading-tight w-full flex lg:justify-start justify-center'>
                            <RotatingText
                            texts={['Educate', 'Innovate', 'Elevate']}
                            mainClassName = ""  
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        Build your digital journey with our smart web solutions, skill-based training, and innovation-driven tools.
                    </p>



                    <div className="mt-6 flex gap-6 justify-center lg:justify-start">
                        <Link to="/services" className="inline-block w-2/3 sm:w-1/3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none  font-medium rounded-lg text-lg px-5 py-3 text-center me-2 mb-2">
                           Explore our services
                        </Link>
                    </div>
                </div>

                {/* Image*/}
                <div className="lg:w-1/2">
                    <img
                        src={heroPoster}
                        alt="HostedMinds Hero Poster"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}
