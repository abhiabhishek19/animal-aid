// import React from 'react';
// import { motion } from 'framer-motion';

// import im1 from "../images/im1.jpeg"
// import im2 from "../images/im2.jpg"
// import im3 from "../images/im3.jpeg"
// const FurryFriends = () => {
//     const animals = [
//         { name: 'Buddy', description: 'Friendly and playful', image: im1 },
//         { name: 'Mittens', description: 'Calm and loving', image: im2 },
//         { name: 'Rex', description: 'Energetic and loyal', image: im3 },
//         // Add more animals here
//     ];

//     return (
//         <motion.div 
//             className="text-center p-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             <h1 className="text-4xl font-bold mb-8">Furry Friends Up for Adoption</h1>
//             <div className="flex flex-wrap justify-center gap-8">
//                 {animals.map((animal, index) => (
//                     <motion.div 
//                         className="bg-white rounded-lg shadow-lg overflow-hidden w-80 text-center transform transition-transform duration-300"
//                         key={index}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <img src={animal.image} alt={animal.name} className="w-full h-56 object-cover" />
//                         <h2 className="text-2xl font-bold mt-4">{animal.name}</h2>
//                         <p className="p-4 text-lg">{animal.description}</p>
//                     </motion.div>
//                 ))}
//             </div>


//             <h1 className="text-4xl font-bold mb-8 mt-8">Furry Friends Up for Adoption</h1>
//             <div className="flex flex-wrap justify-center gap-8">
//                 {animals.map((animal, index) => (
//                     <motion.div 
//                         className="bg-white rounded-lg shadow-lg overflow-hidden w-80 text-center transform transition-transform duration-300"
//                         key={index}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <img src={animal.image} alt={animal.name} className="w-full h-56 object-cover" />
//                         <h2 className="text-2xl font-bold mt-4">{animal.name}</h2>
//                         <p className="p-4 text-lg">{animal.description}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.div>
//     );
// }

// export default FurryFriends;

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import im1 from "../images/im1.jpeg";
// import im2 from "../images/im2.jpg";
// import im3 from "../images/im3.jpeg";

// const FurryFriends = () => {
//     const containerRef = useRef(null);
//     const animalRefs = useRef([]);

//     const animals = [
//         { name: 'Buddy', description: 'Friendly and playful', image: im1, category: 'cat' },
//         { name: 'Mittens', description: 'Calm and loving', image: im2, category: 'dog' },
//         { name: 'orange', description: 'sleepy', image: im1, category: 'cat' },
//         { name: 'Rex', description: 'Energetic and loyal', image: im3, category: 'dog' },
//         { name: 'Bruzo', description: 'Browny cupcake', image: im3, category: 'dog' },
//         // Add more animals here
//     ];

//     useEffect(() => {
//         gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
//     }, []);

//     useEffect(() => {
//         animalRefs.current.forEach((ref, index) => {
//             if (ref) {
//                 const tl = gsap.timeline({ paused: true });
//                 tl.to(ref, { scale: 1.1, duration: 0.3 });

//                 ref.addEventListener('mouseenter', () => tl.play());
//                 ref.addEventListener('mouseleave', () => tl.reverse());
//                 ref.addEventListener('mousedown', () => gsap.to(ref, { scale: 0.95, duration: 0.3 }));
//                 ref.addEventListener('mouseup', () => gsap.to(ref, { scale: 1.1, duration: 0.3 }));
//             }
//         });

//         // Clean up event listeners on component unmount
//         return () => {
//             animalRefs.current.forEach((ref) => {
//                 if (ref) {
//                     ref.removeEventListener('mouseenter', () => tl.play());
//                     ref.removeEventListener('mouseleave', () => tl.reverse());
//                     ref.removeEventListener('mousedown', () => gsap.to(ref, { scale: 0.95, duration: 0.3 }));
//                     ref.removeEventListener('mouseup', () => gsap.to(ref, { scale: 1.1, duration: 0.3 }));
//                 }
//             });
//         };
//     }, []);

//     return (
//         <div ref={containerRef} className="text-center p-8">
//             <h1 className="text-4xl font-bold mb-8">Cats for Adoption</h1>
//             <div className="flex flex-wrap justify-center gap-8">
//                 {animals.map((animal, index) => (
//                     <div
//                         className="bg-white rounded-lg shadow-lg overflow-hidden w-80 text-center transform transition-transform duration-300"
//                         key={index}
//                         ref={el => animalRefs.current[index] = el}
//                     >
//                         <img src={animal.image} alt={animal.name} className="w-full h-56 object-cover" />
//                         <h2 className="text-2xl font-bold mt-4">{animal.name}</h2>
//                         <p className="p-4 text-lg">{animal.description}</p>
//                     </div>
//                 ))}
//             </div>

//             <h1 className="text-4xl font-bold mb-8 mt-8">Dogs for adoption</h1>
//             <div className="flex flex-wrap justify-center gap-8">
//                 {animals.map((animal, index) => (
//                     <div
//                         className="bg-white rounded-lg shadow-lg overflow-hidden w-80 text-center transform transition-transform duration-300"
//                         key={index}
//                         ref={el => animalRefs.current[index] = el}
//                     >
//                         <img src={animal.image} alt={animal.name} className="w-full h-56 object-cover" />
//                         <h2 className="text-2xl font-bold mt-4">{animal.name}</h2>
//                         <p className="p-4 text-lg">{animal.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default FurryFriends;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import im1 from "../images/im1.jpeg";
import im2 from "../images/im2.jpg";
import im3 from "../images/im3.jpeg";

const FurryFriends = () => {
    const containerRef = useRef(null);
    const animalRefs = useRef({ cats: [], dogs: [] });

    const animals = [
        { name: 'Buddy', description: 'Friendly and playful', image: im1, category: 'cat' },
        { name: 'Mittens', description: 'Calm and loving', image: im2, category: 'dog' },
        { name: 'Orange', description: 'Sleepy', image: im1, category: 'cat' },
        { name: 'Rex', description: 'Energetic and loyal', image: im3, category: 'dog' },
        { name: 'Bruzo', description: 'Brownie cupcake', image: im3, category: 'dog' },
        // Add more animals here
    ];

    const cats = animals.filter(animal => animal.category === 'cat');
    const dogs = animals.filter(animal => animal.category === 'dog');

    useEffect(() => {
        gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }, []);

    useEffect(() => {
        const allRefs = [...animalRefs.current.cats, ...animalRefs.current.dogs];

        allRefs.forEach((ref) => {
            if (ref) {
                const tl = gsap.timeline({ paused: true });
                tl.to(ref, { scale: 1.1, duration: 0.3 });

                ref.addEventListener('mouseenter', () => tl.play());
                ref.addEventListener('mouseleave', () => tl.reverse());
                ref.addEventListener('mousedown', () => gsap.to(ref, { scale: 0.95, duration: 0.3 }));
                ref.addEventListener('mouseup', () => gsap.to(ref, { scale: 1.1, duration: 0.3 }));
            }
        });

        // Clean up event listeners on component unmount
        return () => {
            allRefs.forEach((ref) => {
                if (ref) {
                    ref.removeEventListener('mouseenter', () => tl.play());
                    ref.removeEventListener('mouseleave', () => tl.reverse());
                    ref.removeEventListener('mousedown', () => gsap.to(ref, { scale: 0.95, duration: 0.3 }));
                    ref.removeEventListener('mouseup', () => gsap.to(ref, { scale: 1.1, duration: 0.3 }));
                }
            });
        };
    }, []);

    return (
        <div ref={containerRef} className="text-center p-8">
            <h1 className="text-4xl font-bold mb-8">Cats for Adoption</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {cats.map((animal, index) => (
                    <div
                        className="bg-white rounded-lg shadow-lg overflow-hidden w-80 text-center transform transition-transform duration-300"
                        key={index}
                        ref={el => animalRefs.current.cats[index] = el}
                    >
                        <img src={animal.image} alt={animal.name} className="w-full h-56 object-cover" />
                        <h2 className="text-2xl font-bold mt-4">{animal.name}</h2>
                        <p className="p-4 text-lg">{animal.description}</p>
                    </div>
                ))}
            </div>

            <h1 className="text-4xl font-bold mb-8 mt-8">Dogs for Adoption</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {dogs.map((animal, index) => (
                    <div
                        className="bg-white rounded-lg shadow-lg overflow-hidden w-80 text-center transform transition-transform duration-300"
                        key={index}
                        ref={el => animalRefs.current.dogs[index] = el}
                    >
                        <img src={animal.image} alt={animal.name} className="w-full h-56 object-cover" />
                        <h2 className="text-2xl font-bold mt-4">{animal.name}</h2>
                        <p className="p-4 text-lg">{animal.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FurryFriends;
