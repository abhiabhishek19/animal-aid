import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const elements = gsap.utils.toArray('.hello, .hello2, .hello3, .hello4');

        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                        // markers: true,
                    },
                }
            );
        });
    }, []);

    return (
        <div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky" ref={containerRef}>
                <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div
                            className="absolute h-full border-2 border-teal-700"
                            style={{ right: '50%', borderRadius: '1%' }}
                        ></div>
                        <div
                            className="absolute h-full border-2 border-teal-700"
                            style={{ left: '50%', borderRadius: '1%' }}
                        ></div>

                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full hello">
                            <div className="order-1 w-5/12"></div>
                            <div className="order-1 w-5/12 px-1 py-4 text-right">
                                <p className="mb-3 text-base text-teal-700">1-6 May, 2021</p>
                                <h4 className="mb-3 font-bold text-lg md:text-2xl text-teal-400">Registration</h4>
                                <p className="text-sm md:text-base leading-snug text-opacity-100">
                                    Pick your favourite event(s) and register in that event by filling the form corresponding to that event. It's that easy :)
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between items-center w-full hello2">
                            <div className="order-1 w-5/12"></div>
                            <div className="order-1 w-5/12 px-1 py-4 text-left">
                                <p className="mb-3 text-base text-teal-700">6-9 May, 2021</p>
                                <h4 className="mb-3 font-bold text-lg md:text-2xl text-teal-400">Participation</h4>
                                <p className="text-sm md:text-base leading-snug  text-opacity-100">
                                    Participate online. The links for your registered events will be sent to you via email and WhatsApp groups. Use those links and show your talent.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full hello3">
                            <div className="order-1 w-5/12"></div>
                            <div className="order-1 w-5/12 px-1 py-4 text-right">
                                <p className="mb-3 text-base text-teal-700">10 May, 2021</p>
                                <h4 className="mb-3 font-bold text-lg md:text-2xl text-teal-400">Result Declaration</h4>
                                <p className="text-sm md:text-base leading-snug  text-opacity-100">
                                    The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be announced on the WhatsApp groups and will be mailed to you.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between items-center w-full hello4">
                            <div className="order-1 w-5/12"></div>
                            <div className="order-1 w-5/12 px-1 py-4 text-left">
                                <p className="mb-3 text-base text-teal-700">12 May, 2021</p>
                                <h4 className="mb-3 font-bold text-lg md:text-2xl text-teal-400">Prize Distribution</h4>
                                <p className="text-sm md:text-base leading-snug  text-opacity-100">
                                    The winners will be contacted by our team for their addresses and the winning goodies will be sent to their addresses.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        className="mx-auto -mt-36 md:-mt-36"
                        src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                        alt="Timeline"
                    />
                </div>
            </div>
        </div>
    );
};

export default Mission;
