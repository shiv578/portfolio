import React, { useState, useEffect } from "react";

import profile from "./assest/profile.png";
import profile1 from "./assest/profile1.png";
import profile3 from "./assest/profile3.png";

const About: React.FC = () => {

  const images = [profile, profile1, profile3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 px-6 lg:px-24 bg-[#050505] overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 items-center">
{/* LEFT SIDE IMAGE */}
<div className="lg:col-span-5 relative flex flex-col items-center lg:items-start">

  {/* About Me Heading */}
<h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-center mb-16 tracking-wide text-white">
  About <span className="text-primary">Me</span>
</h1>

  <div className="relative max-w-[420px] w-full p-2 rounded-2xl overflow-hidden">

    {/* Gradient Border */}
    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-secondary opacity-40" />

    <div className="relative bg-dark-bg rounded-xl overflow-hidden border border-white/10 shadow-2xl">

      {/* IMAGE SLIDER */}
      <div className="relative w-full h-[260px] overflow-hidden rounded-xl">
        <img
          src={images[currentImage]}
          alt="Shivam Swaraj"
          className="w-full h-full object-cover transition-all duration-1000"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Badge */}
      <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
        <p className="text-xs text-primary font-mono uppercase tracking-widest">
          Engineer // Developer
        </p>
      </div>

    </div>
  </div>

</div>

          {/* RIGHT SIDE CONTENT */}
          <div className="lg:col-span-7">

            <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-primary/40 via-secondary/30 to-primary/40">

              <div className="relative bg-[#050505]/90 backdrop-blur-xl border border-white/10 rounded-xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,242,255,0.08)]">

                {/* Moving Top Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-[slide_6s_linear_infinite]" />

                <div className="space-y-6">
                  

                  {/* Label */}
                  <div className="text-primary font-mono text-xs uppercase tracking-[0.4em]">
                    IDENTITY.MANIFEST
                  </div>

                  {/* Name */}
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                    <span className="text-white">SHIVAM </span>
                    <span className="hero-gradient-text neon-text-glow">
                      SWARAJ
                    </span>
                  </h2>

                  <p className="text-white/40 uppercase tracking-[0.2em] text-sm">
                    SOFTWARE ENGINEER // SYSTEM ARCHITECT
                  </p>

                  {/* Bio */}
                  <div className="space-y-4 text-white/70 leading-relaxed">

                    <p>
                      I am a <span className="text-white font-semibold">Computer Science Engineer</span> with a foundational background in <span className="text-primary">Mechatronics</span>. This unique origin allows me to approach software through a lens of mechanical precision and systemic efficiency.
                    </p>

                    <p>
                      Specializing in <span className="text-white font-semibold">C++ and Algorithmic Logic</span>, I have resolved over <span className="text-secondary font-semibold">250+ complex problems on LeetCode</span> and maintained a <span className="text-secondary font-semibold">5★ HackerRank rating</span>. I thrive where logic meets performance.
                    </p>

                    <p>
                      I engineer high-performance full-stack applications using <span className="text-white font-semibold">React, Node.js, and MySQL</span>. My passion lies in designing robust backend architectures, scalable APIs, and seamless user experiences that solve real-world challenges.
                    </p>

                  </div>

                  {/* Quote */}
                  <div className="border-l-2 border-primary pl-4 italic text-white/40 text-sm">
                    "My mission is to architect innovative, high-performance systems that redefine how we interact with digital infrastructure. Currently exploring the intersection of AI and Cloud-native development."
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">

                    <div>
                      <span className="text-2xl font-black text-white">250+</span>
                      <p className="text-[10px] uppercase text-white/40 tracking-[0.2em]">
                        Problems Solved
                      </p>
                    </div>

                    <div>
                      <span className="text-2xl font-black text-white">5★</span>
                      <p className="text-[10px] uppercase text-white/40 tracking-[0.2em]">
                        C++ HackerRank
                      </p>
                    </div>

                    <div>
                      <span className="text-2xl font-black text-white">MERN</span>
                      <p className="text-[10px] uppercase text-white/40 tracking-[0.2em]">
                        Stack Proficiency
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;