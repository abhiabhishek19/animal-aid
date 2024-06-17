import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <motion.div 
            className="text-center p-8"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
        >
            <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
            <p className="text-xl">At Loving Hearts, our mission is to find loving homes for animals in need...</p>
        </motion.div>
    );
}

export default Mission;
