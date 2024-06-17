import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <motion.div 
            className="text-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with us for more information...</p>
        </motion.div>
    );
}

export default ContactUs;
