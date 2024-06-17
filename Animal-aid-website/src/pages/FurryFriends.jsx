import React from 'react';
import { motion } from 'framer-motion';
import './FurryFriends.css';
import im1 from "../images/im1.jpeg"
import im2 from "../images/im2.jpg"
import im3 from "../images/im3.jpeg"
const FurryFriends = () => {
    const animals = [
        { name: 'Buddy', description: 'Friendly and playful', image: im1 },
        { name: 'Mittens', description: 'Calm and loving', image: im2 },
        { name: 'Rex', description: 'Energetic and loyal', image: im3 },
        // Add more animals here
    ];

    return (
        <motion.div 
            className="text-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-4xl font-bold mb-8">Furry Friends Up for Adoption</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {animals.map((animal, index) => (
                    <motion.div 
                        className="bg-white rounded-lg shadow-lg overflow-hidden w-80 text-center transform transition-transform duration-300"
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={animal.image} alt={animal.name} className="w-full h-56 object-cover" />
                        <h2 className="text-2xl font-bold mt-4">{animal.name}</h2>
                        <p className="p-4 text-lg">{animal.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default FurryFriends;