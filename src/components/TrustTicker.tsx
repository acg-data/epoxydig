import { motion } from 'framer-motion';

const stats = [
  { label: 'Epoxy Companies Served', value: '500+' },
  { label: 'Revenue Generated', value: '$10M+' },
  { label: 'Average ROI', value: '3.2x' },
  { label: 'Leads Per Month', value: '847' },
  { label: 'Avg Job Value', value: '$8.5K' },
  { label: 'Satisfaction Rate', value: '98%' },
];

export function TrustTicker() {
  // Double the stats array for seamless loop
  const doubledStats = [...stats, ...stats];

  return (
    <section className="relative bg-brand-black border-y border-brand-grey-dark overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>

      <div className="py-8 flex">
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -50 * stats.length * 4],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {doubledStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0">
              <div className="text-brand-red text-3xl font-bold">{stat.value}</div>
              <div className="text-brand-grey text-sm uppercase tracking-wider font-medium whitespace-nowrap">
                {stat.label}
              </div>
              <div className="w-2 h-2 rounded-full bg-brand-grey-dark"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}