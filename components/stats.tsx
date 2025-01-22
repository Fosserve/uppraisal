"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import background from "../public/stats.png";

const stats = [
  {
    value: 10000,
    suffix: "+",
    title: "Candidates registered / applied for jobs",
  },
  {
    value: 100,
    suffix: "+",
    title: "Corporate & MNC clients",
  },
  {
    value: 2000,
    suffix: "+",
    title: "Successful Placements",
  },
  {
    value: 50,
    suffix: "+",
    title: "Monthly Active Jobs",
  },
];

const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = `${Math.floor(
          latest
        )}${suffix}`;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-4xl md:text-6xl font-bold" />;
};

export const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(185, 85, 173, 0.6), rgba(217, 147, 155, 0.4),rgba(208, 125, 117, 0.2)), url(${background.src})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY:'-60px',
          backgroundPosition: "center",
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/90 font-medium"
          >
            WHY UPPRAISAL CONSULTANT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            With over 10 years of experience <span className="text-primary ">helping businesses</span> 
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-white/80 text-sm md:text-base">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-base/90 bg-accent/40 p-5 rounded-md text-center max-w-5xl mx-auto"
        >
          <p className="text-lg leading-relaxed">
            We believe businesses are at the core of growth and development of a
            country. We also understand the key role that employees play in an
            organization for achieving business goals and objectives. The need
            for right people at the right time, and for the right tasks is
            therefore a key requisite for success and sustainability of a
            business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
