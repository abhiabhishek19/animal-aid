import React from 'react';
import { motion } from 'framer-motion';

const Donate = () => {
    return (
        <motion.div 
            className="text-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-4xl font-bold mb-4">Donate to Loving Hearts</h1>
            <p className="text-xl">Your generous donations help us provide care and support for animals...</p>
        </motion.div>
    );
}

export default Donate;
