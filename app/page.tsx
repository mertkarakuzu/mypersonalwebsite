'use client'

import Head from 'next/head';
import { 
  FaShieldAlt, 
  FaSearch, 
  FaUsers, 
  FaUserShield, 
  FaCogs, 
  FaLock,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaTerminal
} from 'react-icons/fa';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiExternalLink
} from 'react-icons/fi';
import { 
  SiInstagram, 
  SiLinkedin, 
  SiGithub 
} from 'react-icons/si';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TerminalHero from './components/TerminalHero';
import Nav from './components/Nav';
import TerminalServices from './components/TerminalServices';
import TerminalAbout from './components/TerminalAbout';

export default function HomePage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleEmailClick = () => {
    window.location.href = "mailto:krkz.mert@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+905060921797";
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const generateRandomTerminalCommand = () => {
  const commands = [
    "sudo nmap -sV -O -T4",
    "hydra -l admin -P rockyou.txt ssh://",
    "msfconsole -q -x 'use exploit/multi/handler'",
    "python3 exploit.py --target 127.0.0.1",
    "john --wordlist=rockyou.txt hashes.txt",
    "sqlmap -u 'http://test.com?id=1' --dbs",
    "aircrack-ng capture.cap -w wordlist.txt",
    "burpsuite --project-file=test.burp",
    "wpscan --url blog.example.com --enumerate p",
    "metasploit-framework/bin/msfvenom -p windows/meterpreter/reverse_tcp",
    "MertKarakuzu.tar.gz",
    "sudo everything",
    "cd Dokuz Eylul Universitesi",
    "mkdir New-Hacker-Component",
    "sudo apt install brupsuite"
  ];
  return commands[Math.floor(Math.random() * commands.length)];
};

  return (
    <>
      <Head>
        <title>Mert Karakuzu | Cybersecurity Consultant</title>
        <meta name="description" content="Professional cybersecurity services including Penetration Testing, Vulnerability Assessment, and Security Consulting by Mert Karakuzu." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="cybersecurity, penetration testing, vulnerability assessment, security consultant, ethical hacking" />
        <meta property="og:title" content="Mert Karakuzu Cybersecurity Consulting" />
        <meta property="og:description" content="Professional cybersecurity services to protect your digital assets." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <TerminalHero />

      {/* Main Content */}
      <main className="bg-gray-100">
        {/* Services Section */}
        <TerminalServices/>

        {/* About Section */}
        <TerminalAbout />
        

        
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                <span className="text-red-500">Mert</span>Karakuzu
              </h2>
              <p className="text-gray-400 mt-2">Cybersecurity - Red Team Specialist</p>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              {[
                { icon: SiInstagram, href: "https://www.instagram.com/mertkrkzz", color: "hover:text-pink-500" },
                { icon: FiMail, href: "mailto:krkz.mert@gmail.com", color: "hover:text-red-500" },
                { icon: SiLinkedin, href: "https://www.linkedin.com/in/mert-karakuzu-07bab8289", color: "hover:text-blue-500" },
                { icon: SiGithub, href: "https://github.com/mertkarakuzu", color: "hover:text-white" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-gray-400 ${item.color} transition-colors duration-300 text-xl`}
                >
                  <item.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Mert Karakuzu. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}