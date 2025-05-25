import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type ServiceStatus = 'ACTIVE' | 'STANDBY' | 'MAINTENANCE';
type ServiceColor = 'red' | 'purple' | 'green' | 'cyan' | 'yellow' | 'blue';

interface Service {
  id: string;
  title: string;
  desc: string;
  command: string;
  status: ServiceStatus;
  color: ServiceColor;
  tools: string[];
  items: string[];
  ports: string[];
}

interface ColorClasses {
  border: string;
  bg: string;
  text: string;
  glow: string;
}

const TerminalServices = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const [activeService, setActiveService] = useState<number | null>(null);
  const [currentTime] = useState(new Date());

  const services: Service[] = [
    {
      id: 'pentest',
      title: 'Penetration Testing',
      desc: 'Comprehensive security assessment of your systems',
      command: 'nmap -sV -sC target.com',
      status: 'ACTIVE',
      color: 'red',
      tools: ['Nmap', 'Metasploit', 'Burp Suite'],
      items: ['Vulnerability Assessment', 'Exploitation Testing', 'Post-Exploitation Analysis'],
      ports: ['22', '80', '443']
    },
    {
      id: 'vulnscan',
      title: 'Vulnerability Scanning',
      desc: 'Automated security scanning and analysis',
      command: 'nessus -s target.com',
      status: 'STANDBY',
      color: 'purple',
      tools: ['Nessus', 'OpenVAS', 'Nexpose'],
      items: ['Automated Scanning', 'Vulnerability Analysis', 'Risk Assessment'],
      ports: ['22', '80', '443', '8080']
    },
    {
      id: 'websec',
      title: 'Web Security',
      desc: 'Specialized web application security testing',
      command: 'burpsuite --project=webapp',
      status: 'ACTIVE',
      color: 'green',
      tools: ['Burp Suite', 'OWASP ZAP', 'Acunetix'],
      items: ['OWASP Testing', 'API Security', 'Authentication Testing'],
      ports: ['80', '443', '8080', '8443']
    },
    {
      id: 'netsec',
      title: 'Network Security',
      desc: 'Network infrastructure security assessment',
      command: 'nmap -sS -sV -p- target.com',
      status: 'STANDBY',
      color: 'cyan',
      tools: ['Nmap', 'Wireshark', 'Aircrack-ng'],
      items: ['Network Mapping', 'Traffic Analysis', 'Wireless Security'],
      ports: ['21', '22', '23', '25', '80', '443']
    },
    {
      id: 'social',
      title: 'Social Engineering',
      desc: 'Human element security testing',
      command: 'gophish --campaign phishing.json',
      status: 'MAINTENANCE',
      color: 'yellow',
      tools: ['Gophish', 'SET', 'Maltego'],
      items: ['Phishing Tests', 'Social Media Analysis', 'Physical Security'],
      ports: ['25', '465', '587']
    },
    {
      id: 'forensics',
      title: 'Digital Forensics',
      desc: 'Incident response and forensic analysis',
      command: 'volatility -f memdump.raw',
      status: 'ACTIVE',
      color: 'blue',
      tools: ['Volatility', 'Autopsy', 'FTK'],
      items: ['Memory Analysis', 'Disk Forensics', 'Network Forensics'],
      ports: ['22', '3389', '5900']
    }
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

  const getStatusColor = (status: ServiceStatus): string => {
    switch (status) {
      case 'ACTIVE':
        return 'text-green-400';
      case 'STANDBY':
        return 'text-yellow-400';
      case 'MAINTENANCE':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getColorClasses = (color: ServiceColor): ColorClasses => {
    const colorMap: Record<ServiceColor, ColorClasses> = {
      red: {
        border: 'border-red-500/30',
        bg: 'bg-red-500/10',
        text: 'text-red-400',
        glow: 'rgba(239, 68, 68'
      },
      purple: {
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        glow: 'rgba(168, 85, 247'
      },
      green: {
        border: 'border-green-500/30',
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        glow: 'rgba(34, 197, 94'
      },
      cyan: {
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        glow: 'rgba(34, 211, 238'
      },
      yellow: {
        border: 'border-yellow-500/30',
        bg: 'bg-yellow-500/10',
        text: 'text-yellow-400',
        glow: 'rgba(234, 179, 8'
      },
      blue: {
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        glow: 'rgba(59, 130, 246'
      }
    };
    return colorMap[color];
  };

  return (
    <section id="services" className="md:py-20 py-10 bg-black text-green-400 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_2px] pointer-events-none"></div>
        
        {/* Matrix Binary Rain */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`matrix-${i}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: "100vh",
                opacity: [0, 0.5, 0],
                transition: {
                  delay: Math.random() * 5,
                  duration: 10 + Math.random() * 10,
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-gray-900 rounded-lg border border-gray-700 p-6 inline-block mb-8"
          >
            <div className="font-mono text-sm space-y-2">
              <div className="text-red-400">root@kali:~$ ls -la /opt/security-toolkit/</div>
              <div className="text-gray-300 ml-4">total 6</div>
              <div className="text-gray-300 ml-4">drwxr-xr-x 2 root root 4096 {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()} .</div>
              <div className="text-cyan-400 ml-4">-rwxr-xr-x 1 root root 2048 {currentTime.toLocaleDateString()} services.sh</div>
            </div>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-6 font-mono"
          >
            <span className="text-red-500">Security</span> <span className="text-green-400">Toolkit</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-mono"
          >
            <span className="text-red-400">root@kali</span><span className="text-white">:</span><span className="text-blue-400">~</span><span className="text-white">$ </span>
            echo &quot;Comprehensive cybersecurity solutions for enterprise defense&quot;
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 20px 40px ${colorClasses.glow.split('/')[0]}/50)`
                }}
                onHoverStart={() => setActiveService(index)}
                className={`bg-gray-900 rounded-lg border ${colorClasses.border} hover:${colorClasses.bg} transition-all duration-300 overflow-hidden group cursor-pointer`}
              >
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-xs font-mono">{service.id}@security</div>
                  <div className={`text-xs font-mono ${getStatusColor(service.status)}`}>
                    [{service.status}]
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6">
                  {/* Command Line */}
                  <div className="font-mono text-sm mb-4">
                    <span className="text-red-400">root@kali</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ </span>
                    <span className={colorClasses.text}>{service.command}</span>
                    <motion.span
                      animate={{ 
                        opacity: activeService === index ? [0, 1, 0] : 0,
                        transition: {
                          duration: 1,
                          repeat: activeService === index ? Infinity : 0
                        }
                      }}
                      className="ml-1 text-green-400"
                    >
                      █
                    </motion.span>
                  </div>

                  {/* Service Info */}
                  <h3 className={`text-xl font-bold mb-3 font-mono ${colorClasses.text}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.desc}</p>

                  {/* Tools */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2 font-mono">TOOLS:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className={`px-2 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs rounded font-mono border ${colorClasses.border}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2 font-mono">FEATURES:</div>
                    <ul className="space-y-1 text-sm">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className={`w-2 h-2 ${colorClasses.bg} rounded-full mr-2 border ${colorClasses.border}`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Port Info */}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="text-xs text-gray-500 mb-2 font-mono">COMMON PORTS:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.ports.map((port, i) => (
                        <span key={i} className="text-xs font-mono text-gray-400 bg-gray-800 px-2 py-1 rounded">
                          {port}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Execute Button */}
                <div className="px-6 pb-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2 bg-transparent border ${colorClasses.border} ${colorClasses.text} hover:${colorClasses.bg} font-mono text-sm rounded transition-all duration-300`}
                  >
                    $ sudo {service.command} --engage
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Terminal Output */}
        <motion.div 
          variants={fadeInUp}
          className="mt-16 bg-gray-900 rounded-lg border border-gray-700 p-6"
        >
          <div className="font-mono text-sm space-y-2">
            <div className="text-red-400">root@kali:~$ systemctl status security-services</div>
            <div className="text-green-400">● security-services.service - Enterprise Security Toolkit</div>
            <div className="text-gray-300 ml-4">Loaded: loaded (/etc/systemd/system/security-services.service; enabled)</div>
            <div className="text-gray-300 ml-4">Active: <span className="text-green-400">active (running)</span> since {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</div>
            <div className="text-gray-300 ml-4">Process: Ready for engagement</div>
            <div className="text-cyan-400 ml-4">└─ All security modules operational</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalServices;