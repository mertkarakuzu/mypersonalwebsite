import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import ContactForm from './ContactForm';

const TerminalAbout = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.1 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentLine, setCurrentLine] = useState(0);

  const aboutText = useMemo(() => [
    "Hi, I&apos;m Mert Karakuzu, Red Team Specialist",
    "Passionate about cybersecurity and ethical hacking",
    "Specialized in penetration testing and vulnerability analysis", 
    "Combining deep technical knowledge with business understanding",
    "Creating tailored security solutions for modern threats",
    "Ready to protect your digital infrastructure"
  ], []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentLine < aboutText.length) {
      const text = aboutText[currentLine];
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
          }, 1000);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    }
  }, [currentLine, aboutText]);

  const skills = [
    { name: "Web Application Security", level: 95, command: "nmap -sV -sC target.com" },
    { name: "Network Penetration", level: 90, command: "metasploit -x payload.rb" },
    { name: "Social Engineering", level: 85, command: "gophish --campaign phishing.json" },
    { name: "Mobile Security", level: 80, command: "frida -U -f com.app.target" },
    { name: "Incident Response", level: 92, command: "volatility -f memdump.raw" }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div id="about" className=" py-4 bg-black text-green-400 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Matrix Binary Rain */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`matrix-${i}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: "100vh",
                opacity: [0, 0.5, 0],
                transition: {
                  delay: Math.random() * 5,
                  duration: 12 + Math.random() * 8,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="text-green-300 font-mono absolute text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${6 + Math.random() * 4}px`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
        
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_2px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex md:flex-col flex-col-reverse lg:flex-row md:gap-12 gap-8"
        >
          
          {/* Left Side - Profile Terminal */}
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2"
          >
            {/* Profile Terminal Window */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden mb-6">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">profile@redteam</div>
                <div className="text-gray-500 text-xs">{currentTime.toLocaleTimeString()}</div>
              </div>

              {/* Profile Image with Terminal Effect */}
              <div className="p-6 bg-black">
                <div className="relative group">
                  <div className="w-full h-80 bg-gray-800 rounded border border-green-500 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-green-500/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 border-2 border-red-500 flex items-center justify-center">
                            <Image alt="MK" src="/profilfoto.jpeg" width={600} height={600} className='rounded-full'/>
                          </div>
                          <div className="font-mono text-green-400">
                            <div className="text-sm">USER: MERT_KARAKUZU</div>
                            <div className="text-xs text-gray-400">ROLE: RED_TEAM_SPECIALIST</div>
                            <div className="text-xs text-gray-400">STATUS: ONLINE</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-400 transition-all duration-500 rounded"></div>
                </div>
              </div>
            </div>

            {/* System Info Terminal */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
              <div className="font-mono text-sm space-y-1">
                <div className="text-red-400">root@kali:~$ whoami | grep -i &quot;ethical hacker&quot;</div>
                <div className="text-gray-300 ml-4">Name: Mert Karakuzu</div>
                <div className="text-gray-300 ml-4">Role: Red Team Specialist</div>
                <div className="text-green-400 ml-4">Status: Available for engagement</div>
                <div className="text-blue-400 ml-4">Dokuz Eylül University</div>
                <div className="text-purple-400 ml-4">Computer Science</div>
                <div className="text-gray-300 ml-4">Location: Turkey/Izmir</div>
                <div className="text-gray-300 ml-4">Email: krkz.mert@gmail.com</div>
               
              </div>
            </div>
            {/* Contact Section */}
        <section id="contact" className="mt-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white">


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
            
            <ContactForm />
            
            <div className="text-gray-500 text-xs mt-6">
              {`/* This connection is secured with end-to-end encryption */`}
            </div>
          </div>
        </motion.div>
        </section>
          </motion.div>

          {/* Right Side - About Content */}
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2 space-y-6"
          >
            {/* About Terminal */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">about.sh</div>
              </div>

              <div className="p-6 bg-black">
                <div className="font-mono text-sm mb-4">
                  <span className="text-red-400">root@kali</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-green-400">cat about_me.txt</span>
                </div>
                
                <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                  <p>
  Hi, I&apos;m <span className="text-red-400 font-bold">Mert Karakuzu</span>, and my goal is to provide 
  top-notch cybersecurity services to protect businesses and individuals from the ever-evolving cyber threats.
</p>
<p>
  I&apos;m passionate about <span className="text-green-400">cybersecurity</span> and continuously learning to stay 
  ahead of the latest trends and technologies in the field.
</p>
<p>
  <span className="font-semibold">Why Work with Me?</span> I combine a deep understanding of modern 
  cybersecurity strategies with a passion for technology.
</p>
<p>
  My expertise lies in <span className="text-cyan-400">penetration testing</span>, 
  <span className="text-yellow-400"> vulnerability analysis</span>, and 
  <span className="text-purple-400"> risk assessment</span>, with a strong focus on creating 
  tailored solutions to protect your business and personal data.
</p>
<p>
  Whether you&apos;re an individual seeking security for your digital presence or a business looking 
  to strengthen your defenses, I provide comprehensive, cutting-edge cybersecurity solutions.
</p>
<p>
  Let me help you create a digital environment that is not only safe but also 
  <span className="text-red-400"> resilient against evolving threats</span>. 
  Together, we&apos;ll ensure your peace of mind in an increasingly connected world.
</p>

                </div>
              </div>
            </div>

            {/* Skills Terminal */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                <div className="text-gray-400 text-sm font-mono">skills.log</div>
              </div>
              
              <div className="p-6 bg-black">
                <div className="font-mono text-sm mb-4">
                  <span className="text-red-400">root@kali</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-green-400">./enumerate_skills.sh</span>
                </div>

                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-green-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-red-500 to-green-500 h-2 rounded-full"
                        ></motion.div>
                      </div>
                      <div className="text-xs text-gray-500 font-mono"># {skill.command}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <motion.div className="flex md:flex-row flex-col md:space-x-4">
              {/* <motion.a 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="bg-gradient-to-r w-full from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center shadow-lg font-mono border border-red-500/20"
              >
                <span className="mr-2">$</span>
                ./initiate_contact.sh
              </motion.a>```` */}

              {/* <motion.a 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf" 
                className="bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center font-mono md:mt-0 mt-4"
              >
                <span className="mr-2">$</span>
                ./download_resume.sh
              </motion.a> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TerminalAbout;