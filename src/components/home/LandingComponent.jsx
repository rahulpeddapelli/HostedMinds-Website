import heroPoster from '../../assets/heroPoster.png'
import RotatingText from './RotatingText'

export default function LandingComponent() {
    return (
        <section className="text-gray-800 py-10 min-h-[calc(100vh-4rem)]">
            
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between border border-gray-600">

                {/* Text Content */}
                <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Empowering Minds, <br /> <span className="text-[#69c]">Hosting Ideas</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Build your digital journey with our smart web solutions, skill-based training, and innovation-driven tools.
                    </p>

                    <div className='w-1/2'>
                        <RotatingText
                        texts={['React', 'Bits', 'Is', 'Cool!']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    </div>


                    <div className="mt-6">
                        <a href="#services" className="inline-block bg-[#69c] text-white px-6 py-3 rounded-lg shadow hover:bg-[#589ac7] transition">
                            Get Started
                        </a>
                    </div>
                </div>

                {/* Image or Animation */}
                <div className="lg:w-1/2">
                    <img
                        src={heroPoster}
                        alt="HostedMinds Hero"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>

    )
}
