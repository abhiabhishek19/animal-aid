import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { motion } from 'framer-motion';

gsap.registerPlugin(Draggable);
const Foster = () => {
    
    const formRef = useRef(null);
    const eyeRef = useRef(null);

    useEffect(() => {
        // GSAP Draggable for eye tracking effect
        const eye = eyeRef.current;
        const form = formRef.current;

        // Initialize Draggable for the eye
        Draggable.create(eye, {
            type: 'x,y',
            bounds: form,
            edgeResistance: 0.65,
            throwProps: true,
            onDrag: updateEyePosition,
        });

        function updateEyePosition() {
            // Calculate eye position relative to the form
            const mouseX = eye.getBoundingClientRect().left + eye.offsetWidth / 2;
            const mouseY = eye.getBoundingClientRect().top + eye.offsetHeight / 2;

            // Calculate distance from eye to cursor
            const dx = mouseX - (window.innerWidth / 2);
            const dy = mouseY - (window.innerHeight / 2);

            // Update eye position
            gsap.to(eye, {
                x: dx * 0.05,
                y: dy * 0.05,
                duration: 0.3,
                ease: 'power2.out',
            });
        }
    }, []);


    return (
        // <motion.div 
        //     className="text-center p-8"
        //     initial={{ y: '100vh' }}
        //     animate={{ y: 0 }}
        //     transition={{ type: 'spring', stiffness: 50 }}
        // >
        //     <h1 className="text-4xl font-bold mb-4">Foster a Pet</h1>
        //     <p className="text-xl">Become a foster parent and help a pet in need...</p>
        // </motion.div>

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div ref={formRef} className="relative p-8 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Dog image with animated eye */}
                <div
                    ref={eyeRef}
                    className="absolute w-12 h-12 bg-gray-800 rounded-full border-4 border-white shadow-md"
                    style={{ transform: 'translate(-50%, -50%)' }}
                ></div>
                <img
                    src="https://www.flaticon.com/svg/static/icons/svg/3899/3899443.svg" // Replace with your dog image
                    alt="Dog"
                    className="relative z-10 w-full"
                />
                {/* Form fields */}
                <form className="mt-8 space-y-4">
                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Foster;
