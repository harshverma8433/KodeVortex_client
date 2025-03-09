import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AlgoAcharya = () => {
  const [activeTab, setActiveTab] = useState("technology");
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const techItems = [
    { name: "Python", icon: "🐍", description: "Master core concepts and advanced Python programming for industry applications", color: "from-blue-600 to-cyan-500" },
    { name: "ML & AI", icon: "🧠", description: "Explore foundations of machine learning, neural networks and practical AI implementations", color: "from-violet-600 to-purple-500" },
    { name: "MERN Stack", icon: "⚛️", description: "Build dynamic web applications with MongoDB, Express, React, and Node.js", color: "from-cyan-500 to-teal-400" },
    { name: "Cybersecurity", icon: "🔒", description: "Learn security fundamentals, threat detection, and ethical hacking methods", color: "from-red-500 to-pink-500" },
    { name: "Data Analysis", icon: "📊", description: "Visualize and interpret complex datasets using modern analysis tools", color: "from-amber-500 to-orange-500" },
    { name: "Cloud Computing", icon: "☁️", description: "Harness the power of AWS, Azure and Google Cloud platforms", color: "from-indigo-600 to-blue-500" }
  ];

  const featureItems = [
    {
      id: 1,
      title: "Immersive Learning Experience",
      description: "Career-focused projects and live coding sessions with real-time feedback from industry experts.",
      icon: "🚀",
      color: "text-emerald-400",
      bgColor: "from-emerald-700/20 to-teal-500/30"
    },
    {
      id: 2,
      title: "Comprehensive Placement Support",
      description: "End-to-end preparation to excel in technical interviews and land your dream job.",
      list: [
        "Data structures & algorithms mastery (Leetcode-style challenges)",
        "Company-specific interview preparation",
        "Mock technical interviews with senior engineers",
        "Personal branding and portfolio optimization",
        "Salary negotiation strategies"
      ],
      icon: "🏆",
      color: "text-blue-400",
      bgColor: "from-blue-700/20 to-indigo-500/30"
    },
    {
      id: 3,
      title: "Premium Learning Ecosystem",
      description: "Access to exclusive resources, mentorship, and a thriving tech community.",
      list: [
        "One-on-one mentorship sessions with industry veterans",
        "Lifetime access to course updates and material",
        "Exclusive tech community membership",
        "Job referrals and placement assistance",
        "Certificate of excellence upon completion"
      ],
      icon: "💎",
      color: "text-amber-400",
      bgColor: "from-orange-700/20 to-yellow-500/30"
    }
  ];

  // Generate animated particles
  const particles = Array(100).fill().map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.5 + 0.1
  }));

  return (
    <div className="relative min-h-screen w-full bg-[#0a0118] overflow-hidden" ref={containerRef}>
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white z-0"
            style={{ 
              left: `${particle.x}%`,
              top: `${particle.y}%`, 
              width: `${particle.size}px`, 
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{
              y: { 
                duration: 5 / particle.speed, 
                repeat: Infinity,
                ease: "easeInOut", 
                delay: Math.random() * 5
              },
              opacity: { 
                duration: 3 / particle.speed, 
                repeat: Infinity,
                ease: "easeInOut", 
                delay: Math.random() * 3
              }
            }}
          />
        ))}
      </div>

      {/* Background gradients with reduced glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-purple-900/20 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[30%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-indigo-800/10 blur-[70px]"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -5, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-orange-700/10 blur-[90px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Main content container */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-6 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero section */}
        <motion.div 
          className="w-full flex flex-col items-center text-center mb-16"
          variants={itemVariants}
        >
          {/* Logo and branding */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-60 blur-[20px] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div className="w-32 h-32 md:w-40 md:h-40 relative z-10">
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-orange-500/50"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(249, 115, 22, 0.2)",
                    "0 0 0 10px rgba(249, 115, 22, 0)",
                    "0 0 0 0 rgba(249, 115, 22, 0)"
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <img
                src="/api/placeholder/160/160"
                alt="AlgoAcharya Logo"
                className="w-full h-full rounded-full object-cover border-2 border-orange-500/70"
              />
            </motion.div>
          </motion.div>

          {/* Title with animated elements */}
          <motion.div 
            className="relative mb-8"
            variants={itemVariants}
          >
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300"
              >
                ALGO
              </motion.span>
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.8 }
                }}
                className="inline-block relative mx-1"
              >
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full" />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
              >
                ACHARYA
              </motion.span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div 
            className="max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Where <span className="text-orange-400 font-semibold">ancient wisdom</span> meets 
              <span className="text-purple-400 font-semibold"> modern technology</span> to transform 
              students into industry-ready professionals
            </motion.p>
          </motion.div>

          {/* Program duration badges */}
          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 blur-sm opacity-60 rounded-xl group-hover:opacity-80"
                animate={{
                  scale: [1, 1.03, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
              />
              <div className="relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg backdrop-blur-sm border border-amber-500/50">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-white">5</span>
                  <div className="text-left">
                    <span className="block text-white font-semibold">Day</span>
                    <span className="text-amber-100 text-sm">Intensive Program</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 blur-sm opacity-60 rounded-xl group-hover:opacity-80"
                animate={{
                  scale: [1, 1.03, 1],
                  transition: { duration: 2, repeat: Infinity, delay: 0.5 }
                }}
              />
              <div className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg backdrop-blur-sm border border-pink-500/50">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-white">10</span>
                  <div className="text-left">
                    <span className="block text-white font-semibold">Day</span>
                    <span className="text-pink-100 text-sm">Master Program</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tabs navigation */}
        <motion.div 
          className="w-full max-w-5xl mx-auto mb-12"
          variants={itemVariants}
        >
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/30 backdrop-blur-md p-2 rounded-xl border border-slate-700/70 shadow-lg">
              <div className="flex gap-2">
                <motion.button
                  className={`py-3 px-8 rounded-lg font-medium text-base transition-all ${
                    activeTab === "technology" 
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg" 
                      : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50"
                  }`}
                  onClick={() => setActiveTab("technology")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Technology Tracks
                </motion.button>
                
                <motion.button
                  className={`py-3 px-8 rounded-lg font-medium text-base transition-all ${
                    activeTab === "features" 
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg" 
                      : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50"
                  }`}
                  onClick={() => setActiveTab("features")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Program Features
                </motion.button>
              </div>
            </div>
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {activeTab === "technology" && (
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                key="technology"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {techItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 blur-md rounded-2xl`}
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.3, 0.4, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      />
                      
                      <div className="h-full relative backdrop-blur-lg bg-slate-900/50 rounded-2xl p-6 border border-slate-700/70 shadow-lg flex flex-col">
                        <div className="mb-4 flex justify-between items-start">
                          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-lg">
                            <motion.span 
                              className="text-3xl"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, 0, -5, 0],
                                transition: { 
                                  repeat: Infinity, 
                                  repeatDelay: 2, 
                                  duration: 1.5,
                                  delay: index * 0.2
                                } 
                              }}
                            >
                              {item.icon}
                            </motion.span>
                          </div>
                          
                          <motion.div 
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.color}`}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                          />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-gray-300 text-sm mb-4 flex-grow">{item.description}</p>
                        
                        <div className="mt-auto">
                          <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${item.color}`}></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "features" && (
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                key="features"
              >
                <div className="space-y-6">
                  {featureItems.map((feature, index) => (
                    <motion.div
                      key={index}
                      className={`relative overflow-hidden group`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        transition: { delay: 0.15 * index, duration: 0.6 } 
                      }}
                      whileHover={{ 
                        scale: 1.01,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} blur-md opacity-50`}
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.4, 0.5, 0.4],
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                      />
                      
                      <div 
                        className="relative backdrop-blur-md bg-slate-900/50 rounded-2xl p-6 border border-slate-700/70 shadow-lg cursor-pointer"
                        onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-lg flex-shrink-0">
                            <motion.span 
                              className={`text-2xl ${feature.color}`}
                              animate={{ 
                                scale: [1, 1.3, 1],
                                rotate: [0, 10, 0],
                                transition: { 
                                  repeat: Infinity, 
                                  repeatDelay: 2 + index, 
                                  duration: 2
                                } 
                              }}
                            >
                              {feature.icon}
                            </motion.span>
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                            <p className="text-gray-300 mt-2">{feature.description}</p>
                            
                            <AnimatePresence>
                              {feature.list && activeFeature === feature.id && (
                                <motion.div 
                                  className="mt-6 p-4 bg-slate-800/70 backdrop-blur-md rounded-xl border border-slate-700/90"
                                  initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                                  animate={{ 
                                    opacity: 1, 
                                    height: "auto",
                                    transition: { duration: 0.4 }
                                  }}
                                  exit={{ 
                                    opacity: 0, 
                                    height: 0,
                                    overflow: "hidden",
                                    transition: { duration: 0.3 }
                                  }}
                                >
                                  <ul className="space-y-3">
                                    {feature.list.map((item, i) => (
                                      <motion.li 
                                        key={i} 
                                        className="flex items-start gap-3 text-gray-300"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ 
                                          opacity: 1, 
                                          x: 0,
                                          transition: { delay: 0.05 * i, duration: 0.3 } 
                                        }}
                                      >
                                        <span className={`text-lg ${feature.color} mt-0.5`}>•</span>
                                        <span>{item}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            
                            {feature.list && (
                              <motion.button
                                className={`mt-4 px-4 py-2 rounded-lg text-sm ${
                                  activeFeature === feature.id 
                                    ? "bg-gray-800/70 text-gray-300"
                                    : `${feature.color} bg-slate-800/70`
                                } flex items-center gap-2 border border-slate-700/70`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveFeature(activeFeature === feature.id ? null : feature.id);
                                }}
                              >
                                {activeFeature === feature.id ? "Show less" : "View details"}
                                <span className="text-xs">
                                  {activeFeature === feature.id ? "↑" : "↓"}
                                </span>
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA section */}
        <motion.div 
          className="w-full max-w-md mx-auto text-center mt-12"
          variants={itemVariants}
        >
          <motion.div
            className="relative group mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 rounded-full blur-sm opacity-70 group-hover:opacity-90"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 0.9, 0.7],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <button className="relative py-4 px-12 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 rounded-full text-white text-lg font-bold shadow-lg border border-orange-500/50">
              Enroll Now
            </button>
          </motion.div>
          
          <motion.div
            className="flex justify-center items-center gap-2 text-orange-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                transition: { duration: 1.5, repeat: Infinity }
              }}
            >
              🔥
            </motion.span>
            <p className="text-sm">Limited seats available. Batch starting on March 15, 2025</p>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <span>100% Placement Assistance</span>
            <span>•</span>
            <span>Industry Recognized Certificate</span>
            <span>•</span>
            <span>Lifetime Access</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AlgoAcharya;