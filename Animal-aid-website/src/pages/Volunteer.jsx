import React from 'react';
import { motion } from 'framer-motion';

const Volunteer = () => {
    return (
        <motion.div 
            className="text-center p-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold mb-4">Volunteer with Us</h1>
            <p className="text-xl">Join our team and make a difference in the lives of animals...</p>
        </motion.div>
    );
}

export default Volunteer;
