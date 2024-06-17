import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div 
            className="text-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-4xl font-bold mb-4">Welcome to Loving Hearts</h1>
            <p className="text-xl">Your loving companion is just a click away.</p>
        </motion.div>
    );
}

export default Home;
