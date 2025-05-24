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

      {/* Hero Section */}
      <motion.header 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-red-500">Cybersecurity</span> That <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-950">Protects</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
          >
            Empowering businesses with tailored security solutions for a safer digital future.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center space-x-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services" 
              className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
            >
              Our Services
            </motion.a>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="bg-gray-100">
        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              ref={servicesRef}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl font-bold mb-4 text-gray-800"
              >
                Our <span className="text-red-600">Security Services</span>
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-center text-gray-600 max-w-2xl mx-auto"
              >
                Comprehensive cybersecurity solutions tailored to your specific needs and challenges.
              </motion.p>
            </motion.div>

            <motion.div
              ref={servicesRef}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: FaShieldAlt,
                  title: "Penetration Testing",
                  desc: "Simulate real-world attacks to identify vulnerabilities before malicious actors can exploit them.",
                  items: [
                    "Web Application Testing",
                    "Network Infrastructure Testing",
                    "API Security Assessment"
                  ],
                  color: "border-cyan-500"
                },
                {
                  icon: FaSearch,
                  title: "Vulnerability Assessment",
                  desc: "Systematic review of security weaknesses in your systems with prioritized remediation guidance.",
                  items: [
                    "Automated Scanning",
                    "Manual Verification",
                    "Risk Scoring & Prioritization"
                  ],
                  color: "border-purple-500"
                },
                {
                  icon: FaUsers,
                  title: "Security Awareness",
                  desc: "Transform your employees into your first line of defense against cyber threats.",
                  items: [
                    "Phishing Simulations",
                    "Interactive Workshops",
                    "Policy Development"
                  ],
                  color: "border-red-500"
                },
                {
                  icon: FaUserShield,
                  title: "Social Engineering",
                  desc: "Test your organization's human defenses against manipulation and deception tactics.",
                  items: [],
                  color: "border-green-500"
                },
                {
                  icon: FaCogs,
                  title: "vCISO Services",
                  desc: "Executive-level security leadership and strategy without the full-time cost.",
                  items: [],
                  color: "border-yellow-500"
                },
                {
                  icon: FaLock,
                  title: "Compliance",
                  desc: "Achieve and maintain compliance with industry standards and regulations.",
                  items: [],
                  color: "border-blue-500"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${service.color}`}
                >
                  <div className={`${service.color.replace('border', 'text')} mb-4`}>
                    <service.icon className="text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  {service.items.length > 0 && (
                    <ul className="space-y-2 text-gray-600">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className={`w-2 h-2 ${service.color.replace('border', 'bg')} rounded-full mr-2`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black text-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={aboutRef}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <motion.div 
                variants={fadeInUp}
                className="lg:w-1/2"
              >
                <div className="relative rounded-lg overflow-hidden shadow-2xl group">
                  <Image 
                    src="/profilfoto.jpeg" 
                    alt="Mert Karakuzu - Cybersecurity Consultant"
                    width={600}
                    height={600}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-cyan-400 transition-all duration-500"></div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6">
                  About <span className="text-red-500">Me</span>
                </h2>
                <p className="text-gray-300 mb-4">
                  I'm Mert Karakuzu, a dedicated cybersecurity professional with a passion for protecting digital assets and educating organizations about security best practices.
                </p>
                <p className="text-gray-300 mb-4">
                  With years of experience in penetration testing and vulnerability assessment, I help businesses identify and mitigate security risks before they can be exploited.
                </p>
                <p className="text-gray-300 mb-6">
                  My approach combines technical expertise with clear communication, ensuring that security measures align with business objectives without creating unnecessary barriers.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: FaCode, text: "Web Application Security" },
                      { icon: FaServer, text: "Network Security" },
                      { icon: FaMobileAlt, text: "Mobile Security" },
                      { icon: FaUserShield, text: "Social Engineering" }
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-300"
                      >
                        <skill.icon className="text-red-500 mr-2" />
                        <span>{skill.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center shadow-lg"
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={contactRef}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl font-bold mb-4"
              >
                Get in <span className="text-red-500">Touch</span>
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-center text-gray-300 max-w-2xl mx-auto"
              >
                Ready to enhance your security posture? Contact me to discuss your cybersecurity needs.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  icon: FiMail,
                  title: "Email",
                  text: "krkz.mert@gmail.com",
                  action: handleEmailClick,
                  color: "bg-cyan-600"
                },
                {
                  icon: FiPhone,
                  title: "Phone",
                  text: "+90 506 092 17 97",
                  action: handlePhoneClick,
                  color: "bg-purple-600"
                },
                {
                  icon: FiMapPin,
                  title: "Location",
                  text: "Buca/İzmir/Turkey",
                  color: "bg-red-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  onClick={item.action}
                  className={`${item.color} p-6 rounded-lg hover:opacity-90 transition-all duration-300 cursor-pointer shadow-lg`}
                >
                  <div className="text-white mb-4">
                    <item.icon className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-100">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
  variants={fadeInUp}
  className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl"
>
  <div className="bg-gray-800 px-4 py-3 flex items-center">
    <div className="flex space-x-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div className="text-gray-400 text-sm ml-4">contact_form.sh</div>
  </div>
  
  <div className="p-6 font-mono">
    <div className="text-green-400 mb-6">
      $ ./initiate_secure_contact.sh
    </div>
    
    <form className="space-y-4">
      {[
        { id: 'name', label: 'Enter your name:', type: 'text' },
        { id: 'email', label: 'Provide email:', type: 'email' },
        { id: 'subject', label: 'Message subject:', type: 'text' }
      ].map((field) => (
        <div key={field.id} className="flex items-start">
          <span className="text-blue-400 mr-2">></span>
          <div className="flex-1">
            <label htmlFor={field.id} className="block text-cyan-400 mb-1">{field.label}</label>
            <input
              type={field.type}
              id={field.id}
              className="w-full bg-gray-800 border-b border-gray-700 focus:border-green-400 outline-none text-white px-2 py-1"
              required
            />
          </div>
        </div>
      ))}
      
      <div className="flex items-start">
        <span className="text-blue-400 mr-2">></span>
        <div className="flex-1">
          <label htmlFor="message" className="block text-cyan-400 mb-1">Type your message:</label>
          <textarea
            id="message"
            rows={4}
            className="w-full bg-gray-800 border border-gray-700 focus:border-green-400 outline-none text-white px-2 py-1 resize-none"
            required
          ></textarea>
        </div>
      </div>
      
      <div className="pt-4">
        <motion.button
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          <FaTerminal />
          <span>Execute Send</span>
        </motion.button>
      </div>
    </form>
    
    <div className="text-gray-500 text-xs mt-6">
      // This connection is secured with end-to-end encryption
    </div>
  </div>
</motion.div>
          </div>
        </section>
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
              <p className="text-gray-400 mt-2">Cybersecurity Consultant</p>
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