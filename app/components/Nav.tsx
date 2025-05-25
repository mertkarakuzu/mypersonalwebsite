import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React from "react";

const Nav = () => {
    return (
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-950 py-4 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-90"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-white font-bold text-xl"
            >
              <span className="text-red-500">Mert</span>Karakuzu
            </motion.div>
            <ul className="flex space-x-6">
              {[
                { icon: FaInstagram, color: 'hover:text-pink-500', href: 'https://www.instagram.com/mertkrkzz' },
                { icon: FaLinkedin, color: 'hover:text-blue-500', href: 'https://www.linkedin.com/in/mert-karakuzu-07bab8289' },
                { icon: FaGithub, color: 'hover:text-white', href: 'https://github.com/mertkarakuzu' },
                { icon: FaEnvelope, color: 'hover:text-red-500', href: 'mailto:krkz.mert@gmail.com' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <item.icon className={`w-6 h-6 text-gray-500 ${item.color} transition`}/>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

    )
}

export default Nav