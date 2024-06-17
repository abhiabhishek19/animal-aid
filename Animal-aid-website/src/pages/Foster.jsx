import React from 'react';
import { motion } from 'framer-motion';

const Foster = () => {
    return (
        <motion.div 
            className="text-center p-8"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
        >
            <h1 className="text-4xl font-bold mb-4">Foster a Pet</h1>
            <p className="text-xl">Become a foster parent and help a pet in need...</p>
        </motion.div>
    );
}

export default Foster;
