import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TerminalHero = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, threshold: 0.2 });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const kaliDragon = `
..............                                     
            ..,;:ccc,.                                                            
          ......''';lxO.                                  
.....''''..........,:ld;                            
           .';;;:::;,,.x,                                             
      ..'''.            0Xxoc:,.  ...                                       
  ....                ,ONkc;,;cokOdc',.                               
 .                   OMo           ':ddo.                                    
                    dMc               :OO;                            
                    0M.                 .:o.                                  
                    ;Wd                                                           
                     ;XO,                            
                       ,d0Odlc;,..                    
                           ..',;:cdOOd::,.                              
                                    .:d;.':;.                                      
                                       'd,  .'            
                                         ;l   ..                
                                          .o                                               
                                            c                                              
                                            .'                                             
                                             .
`;

  const terminalCommands = [
    { user: "root@kali", path: "~", cmd: "nmap -sS -O target.com", delay: 0 },
    { user: "root@kali", path: "~", cmd: "Starting Nmap 7.93 ( https://nmap.org )", delay: 1 },
    { user: "root@kali", path: "~", cmd: "Nmap scan report for target.com", delay: 2 },
    { user: "root@kali", path: "~", cmd: "Host is up (0.045s latency).", delay: 3 },
    { user: "root@kali", path: "~", cmd: "PORT     STATE SERVICE", delay: 4 },
    { user: "root@kali", path: "~", cmd: "22/tcp   open  ssh", delay: 5 },
    { user: "root@kali", path: "~", cmd: "80/tcp   open  http", delay: 6 },
    { user: "root@kali", path: "~", cmd: "443/tcp  open  https", delay: 7 },
    { user: "root@kali", path: "~", cmd: "sqlmap -u 'http://target.com' --batch", delay: 8 },
    { user: "root@kali", path: "~", cmd: "[INFO] testing connection to the target URL", delay: 9 },
    { user: "root@kali", path: "~", cmd: "[INFO] checking if the target is protected", delay: 10 },
    { user: "root@kali", path: "~", cmd: "hydra -l admin -P /usr/share/wordlists/rockyou.txt", delay: 11 },
    { user: "root@kali", path: "~", cmd: "Hydra v9.4 starting at " + currentTime.toLocaleTimeString(), delay: 12 },
    { user: "root@kali", path: "~", cmd: "metasploit-framework", delay: 13 },
    { user: "root@kali", path: "~", cmd: "msf6 > use exploit/multi/handler", delay: 14 },
    { user: "root@kali", path: "~", cmd: "msf6 exploit(multi/handler) > set payload", delay: 15 },
    { user: "root@kali", path: "~", cmd: "wireshark &", delay: 16 },
    { user: "root@kali", path: "~", cmd: "burpsuite &", delay: 17 },
    { user: "root@kali", path: "~", cmd: "john --wordlist=/usr/share/wordlists/rockyou.txt", delay: 18 },
    { user: "root@kali", path: "~", cmd: "hashcat -m 1000 -a 0 hash.txt wordlist.txt", delay: 19 }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    <motion.header 
      ref={heroRef}
      initial="hidden"
      animate={heroInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="bg-black text-green-400 pb-16 pt-4 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Terminal Background */}
      <div className="absolute inset-0 bg-black">
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.03)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
        
        {/* CRT effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-20 pointer-events-none"></div>
        
        {/* Binary rain - keeping your existing effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: "100vh",
                opacity: [0, 0.6, 0],
                transition: {
                  delay: Math.random() * 5,
                  duration: 8 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="text-green-300 font-mono absolute text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${8 + Math.random() * 4}px`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          
          {/* Left Side - Kali Dragon and Terminal */}
          <div className="space-y-6">
            {/* ASCII Dragon */}
            <motion.div 
              variants={fadeInUp}
              className="font-mono text-2sm sm:text-sm text-red-400 whitespace-pre leading-tight"
            >
              {kaliDragon}
            </motion.div>

            {/* Terminal Window */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">root@kali: ~</div>
                <div className="text-gray-500 text-xs">{currentTime.toLocaleTimeString()}</div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 h-64 overflow-hidden relative bg-black">
                <div className="space-y-1">
                  {terminalCommands.map((cmd, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: cmd.delay * 0.5,
                          duration: 0.3 
                        }
                      }}
                      className="font-mono text-xs"
                    >
                      {cmd.cmd.startsWith('[') || cmd.cmd.startsWith('PORT') || cmd.cmd.startsWith('22/tcp') || cmd.cmd.startsWith('80/tcp') || cmd.cmd.startsWith('443/tcp') || cmd.cmd.startsWith('Host is up') || cmd.cmd.startsWith('Nmap scan') || cmd.cmd.startsWith('Starting Nmap') || cmd.cmd.startsWith('Hydra') || cmd.cmd.startsWith('msf6') ? (
                        <span className="text-gray-300">{cmd.cmd}</span>
                      ) : (
                        <>
                          <span className="text-red-400">{cmd.user}</span>
                          <span className="text-white">:</span>
                          <span className="text-blue-400">{cmd.path}</span>
                          <span className="text-white">$ </span>
                          <span className="text-green-400">{cmd.cmd}</span>
                          <motion.span
                            animate={{ 
                              opacity: [0, 1, 0],
                              transition: {
                                duration: 1,
                                repeat: Infinity,
                                delay: cmd.delay * 0.5 + 0.3
                              }
                            }}
                            className="ml-1 text-green-400"
                          >
                            █
                          </motion.span>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Scrolling gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
                <span className='text-red-500 md:text-5xl text-3xl'>Cybersecurity {' - '} <br/></span>
                <span className="text-red-500">Red</span> Team{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
                  Specialist
                </span>
              </h1>
              
              <div className="text-md md:text-md mb-8 text-gray-300 font-mono space-y-2">
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="text-red-400">root@kali</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="text-green-400 overflow-hidden whitespace-nowrap"
                  >
                    whoami | grep -i "ethical hacker"
                  </motion.span>
                  <motion.span
                    animate={{ 
                      opacity: [0, 1, 0],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        delay: 3
                      }
                    }}
                    className="ml-1 text-green-400"
                  >
                    █
                  </motion.span>
                </div>
              </div>

              <motion.div 
                variants={fadeInUp}
                className="flex justify-center flex-col md:flex-row lg:justify-start mt-0 md:space-x-4"
              >
                <motion.a 
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl font-mono border border-red-500/20"
                >
                  <span className="mr-2">$</span>
                  ./contact_me.sh
                </motion.a>

                <motion.a 
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#services" 
                  className="bg-transparent border-2 md:mt-0 mt-4 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center font-mono"
                >
                  <span className="mr-2">$</span>
                  ./view_services.sh
                </motion.a>
              </motion.div>

              {/* System Info */}
              <motion.div 
                variants={fadeInUp}
                className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-700 font-mono text-sm"
              >
                <div className="text-gray-400 space-y-1">
                  <div><span className="text-red-400">OS:</span> Kali Linux 2023.4</div>
                  <div><span className="text-red-400">Kernel:</span> 6.1.0-kali9-amd64</div>
                  <div><span className="text-red-400">Shell:</span> /bin/bash</div>
                  <div><span className="text-red-400">Uptime:</span> 1337 days, 13:37</div>
                  <div><span className="text-red-400">Status:</span> <span className="text-green-400">Ready for engagement</span></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default TerminalHero;