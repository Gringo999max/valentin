import { motion } from 'framer-motion';
import { Linkedin, User } from 'lucide-react';

export default function TeamCard({ member, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gold/30">
        {/* Image */}
        <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-navy/80 flex items-center justify-center">
            <User className="w-24 h-24 text-white/20" />
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-serif text-xl font-medium text-navy">
                {member.name}
              </h3>
              <p className="text-gold text-sm">{member.title}</p>
            </div>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {member.bio}
          </p>

          {/* Education */}
          <div className="mb-4">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Education
            </h4>
            <ul className="space-y-1">
              {member.education.map((edu, i) => (
                <li key={i} className="text-sm text-gray-700">
                  {edu}
                </li>
              ))}
            </ul>
          </div>

          {/* Previous Experience */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Previous Experience
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.previousExperience.map((company, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100 text-xs text-gray-700"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
