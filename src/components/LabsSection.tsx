'use client';

import { motion } from 'framer-motion';
import { Code, Database, Bot, Globe, Cpu, FileText } from 'lucide-react';

const solutions = [
  {
    icon: Code,
    title: 'Desenvolvimento Sob Medida',
    description: 'Soluções personalizadas para suas necessidades específicas com tecnologia de ponta.',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    icon: Database,
    title: 'API de Pagamento',
    description: 'Sistemas de pagamento seguros e integrados para sua plataforma.',
    gradient: 'from-green-600 to-blue-600'
  },
  {
    icon: Globe,
    title: 'Web Scraper',
    description: 'Extração de dados inteligente e automatizada da web.',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    icon: Bot,
    title: 'BOT Telegram',
    description: 'Automação completa para Telegram com recursos avançados.',
    gradient: 'from-pink-600 to-red-600'
  },
  {
    icon: Cpu,
    title: 'Integração IA Agentes',
    description: 'Assistentes inteligentes e agentes de IA personalizados.',
    gradient: 'from-yellow-600 to-orange-600'
  },
  {
    icon: FileText,
    title: 'Sites E-commerce',
    description: 'Lojas virtuais completas e otimizadas para vendas.',
    gradient: 'from-indigo-600 to-purple-600'
  }
];

export function LabsSection() {
  return (
    <section id="labs" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(155, 77, 255, 0.03) 2px,
            rgba(155, 77, 255, 0.03) 4px
          )`,
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dhwqfkhzm/image/upload/v1765491427/photo_5028434353544956694_y_oiirp7.jpg"
                alt="Ghost-0"
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-500/50 shadow-2xl shadow-purple-500/30"
                style={{ filter: 'drop-shadow(0 0 30px rgba(155, 77, 255, 0.8))' }}
              />
            </div>
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                Ghost-0 Labs
              </h2>
              <p className="text-xl md:text-2xl text-purple-300 font-mono">
                {'<'} Pixel / Código / Hacker / Dev Sénior {'/>'}
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-400 text-lg leading-relaxed font-mono">
              Laboratório de Desenvolvimento de Soluções IT. Especialistas em transformar ideias complexas em soluções funcionais.
            </p>
          </motion.div>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(155, 77, 255, 0.3)'
                }}
                className="group relative bg-gray-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-lg bg-gradient-to-br ${solution.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Tech Border Effect */}
                <div className="absolute inset-0 rounded-xl border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gray-900/30 rounded-xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Stack Tecnológico
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Blockchain', 'AI/ML', 'Web3'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm font-mono text-purple-300 hover:border-purple-500/60 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6 font-mono">
            Pronto para transformar sua ideia em realidade digital?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5516988142848"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Iniciar Projeto
            </a>
            <a 
              href="https://t.me/MarianaAlvesT7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-500 rounded-full font-semibold text-purple-400 hover:bg-purple-500/10 transition-all"
            >
              Consultoria Técnica
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}