import heroPoster from '../../assets/heroPoster.png';
import RotatingText from './RotatingText';
import { Link } from "react-router-dom";

export default function LandingComponent() {

    return (
        <section className="text-gray-800 py-10 min-h-[calc(100vh-4.5rem)">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between ">

                {/* Text Content */}
                <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Empowering Minds, 
                        <br /> 
                        <span className="text-[#69c]">Hosting Ideas By</span>
                    </h1>
                    <h1 className='text-4xl md:text-5xl font-extrabold leading-tight w-full flex lg:justify-start justify-center'>
                            <RotatingText
                            texts={['EDUCATE', 'INNOVATE', 'ELEVATE']}
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
                        <Link to="/services" className="inline-block w-1/3 bg-[#69c] text-white text-lg font-bold px-2 sm:px-2 md:px-3 py-1 sm:py-2 md:py-2 rounded-lg shadow transition duration-300 hover:underline hover:underline-offset-4 transition text-center">
                            Get Started
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
