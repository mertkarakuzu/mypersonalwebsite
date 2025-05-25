import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TerminalServices = () => {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, threshold: 0.1 });
  const [activeService, setActiveService] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      id: "pentest",
      title: "Penetration Testing",
      command: "./pentest.sh",
      desc: "Simulate real-world attacks to identify vulnerabilities before malicious actors can exploit them.",
      tools: ["nmap", "metasploit", "burpsuite", "sqlmap"],
      items: [
        "Web Application Testing",
        "Network Infrastructure Testing", 
        "API Security Assessment",
        "Mobile App Testing"
      ],
      status: "ACTIVE",
      ports: ["22/tcp", "80/tcp", "443/tcp", "8080/tcp"],
      color: "red"
    },
    {
      id: "vuln_scan",
      title: "Vulnerability Assessment",
      command: "./vuln_scan.sh",
      desc: "Systematic review of security weaknesses in your systems with prioritized remediation guidance.",
      tools: ["nessus", "openvas", "nuclei", "nikto"],
      items: [
        "Automated Scanning",
        "Manual Verification",
        "Risk Scoring & Prioritization",
        "Compliance Mapping"
      ],
      status: "SCANNING",
      ports: ["21/tcp", "23/tcp", "53/tcp", "445/tcp"],
      color: "purple"
    },
    {
      id: "social_eng", 
      title: "Social Engineering",
      command: "./social_eng.sh",
      desc: "Test your organization's human defenses against manipulation and deception tactics.",
      tools: ["gophish", "setoolkit", "king-phisher", "evilginx"],
      items: [
        "Phishing Campaigns",
        "Vishing Attacks",
        "Physical Security Testing",
        "OSINT Gathering"
      ],
      status: "READY",
      ports: ["25/tcp", "110/tcp", "143/tcp", "993/tcp"],
      color: "green"
    },
    {
      id: "awareness",
      title: "Security Awareness",
      command: "./awareness.sh", 
      desc: "Transform your employees into your first line of defense against cyber threats.",
      tools: ["training-platform", "phishing-sim", "metrics", "reporting"],
      items: [
        "Interactive Workshops",
        "Phishing Simulations", 
        "Policy Development",
        "Metrics & Reporting"
      ],
      status: "TRAINING",
      ports: ["80/tcp", "443/tcp", "8443/tcp"],
      color: "cyan"
    },
    {
      id: "vciso",
      title: "vCISO Services",
      command: "./vciso.sh",
      desc: "Executive-level security leadership and strategy without the full-time cost.",
      tools: ["governance", "compliance", "strategy", "incident-response"],
      items: [
        "Security Strategy",
        "Risk Management",
        "Incident Response",
        "Board Reporting"
      ],
      status: "CONSULTING",
      ports: ["22/tcp", "443/tcp"],
      color: "yellow"
    },
    {
      id: "compliance",
      title: "Compliance Auditing",
      command: "./compliance.sh",
      desc: "Achieve and maintain compliance with industry standards and regulations.",
      tools: ["iso27001", "pci-dss", "hipaa", "gdpr"],
      items: [
        "Gap Analysis",
        "Policy Development",
        "Audit Support",
        "Continuous Monitoring"
      ],
      status: "AUDITING",
      ports: ["443/tcp", "636/tcp"],
      color: "blue"
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

  const getStatusColor = (status) => {
    switch(status) {
      case 'ACTIVE': return 'text-green-400';
      case 'SCANNING': return 'text-yellow-400';
      case 'READY': return 'text-cyan-400';
      case 'TRAINING': return 'text-purple-400';
      case 'CONSULTING': return 'text-orange-400';
      case 'AUDITING': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      red: { border: 'border-red-500', bg: 'bg-red-500/10', text: 'text-red-400', glow: 'shadow-red-500/20' },
      purple: { border: 'border-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
      green: { border: 'border-green-500', bg: 'bg-green-500/10', text: 'text-green-400', glow: 'shadow-green-500/20' },
      cyan: { border: 'border-cyan-500', bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
      yellow: { border: 'border-yellow-500', bg: 'bg-yellow-500/10', text: 'text-yellow-400', glow: 'shadow-yellow-500/20' },
      blue: { border: 'border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-blue-500/20' }
    };
    return colors[color] || colors.red;
  };

  return (
    <section id="services" className="py-20 bg-black text-green-400 relative overflow-hidden">
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
            echo "Comprehensive cybersecurity solutions for enterprise defense"
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