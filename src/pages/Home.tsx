import React from 'react';
import { motion } from 'motion/react';
import { SERVICES, DOCTORS, TESTIMONIALS, FAQS, PROCESS_STEPS, LOCATIONS } from '../constants';
import { 
  Baby, 
  HeartPulse, 
  ClipboardCheck, 
  Snowflake, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
  User,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Award,
  ShieldCheck,
  Phone,
  Video,
  Mic,
  MicOff,
  VideoOff,
  Settings,
  Monitor
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Baby,
  HeartPulse,
  ClipboardCheck,
  Snowflake,
  Video
};

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1920" 
            alt="Happy family" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-12 h-[2px] bg-primary"></span>
                <span className="text-primary font-bold uppercase tracking-widest text-xs">India's Leading Fertility Chain</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                1,50,000+ <span className="text-primary">Successful</span> IVF Stories
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Experience world-class fertility treatments with Bloom IVF. We bring hope to your parenthood journey with advanced technology and affordable care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  Book Free Consultation <ArrowRight size={20} />
                </a>
                <div className="flex items-center gap-4 px-6 py-4 bg-white/50 backdrop-blur-sm rounded-full border border-slate-200">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <MessageSquare size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">WhatsApp Us</p>
                    <p className="font-bold text-slate-900">+1 (555) 999-0000</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
                <p className="text-3xl font-bold text-slate-900">78%</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Success Rate</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
                <p className="text-3xl font-bold text-slate-900">140+</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Centres Pan India</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
                <p className="text-3xl font-bold text-slate-900">250+</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Expert Doctors</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
                <p className="text-3xl font-bold text-slate-900">15+</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Years Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-slate-50 py-10 border-y border-slate-200">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-3 font-bold text-slate-900">
            <Award size={32} className="text-primary" />
            <span>Best IVF Clinic 2025</span>
          </div>
          <div className="flex items-center gap-3 font-bold text-slate-900">
            <ShieldCheck size={32} className="text-primary" />
            <span>ISO 9001 Certified</span>
          </div>
          <div className="flex items-center gap-3 font-bold text-slate-900">
            <CheckCircle2 size={32} className="text-primary" />
            <span>NABH Accredited</span>
          </div>
          <div className="flex items-center gap-3 font-bold text-slate-900">
            <Star size={32} className="text-primary" />
            <span>Google 4.9 Rating</span>
          </div>
        </div>
      </div>

      {/* Process Section - How it Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Bloom Process</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Your 6-Step Path to Parenthood</h3>
            <p className="text-lg text-slate-600">We guide you through every milestone with precision and care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative group p-6 rounded-3xl bg-slate-50 hover:bg-primary hover:text-white transition-all duration-500">
                <div className="text-4xl font-black opacity-10 mb-4 group-hover:opacity-20">{step.number}</div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-xs opacity-70 leading-relaxed">{step.description}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 translate-y-[-50%] z-10 text-slate-200 group-hover:text-white/20">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Presence</h2>
              <h3 className="text-4xl font-bold mb-6">Bloom IVF Centres Near You</h3>
              <p className="text-slate-400 text-lg">With 140+ centres across the country, world-class fertility care is always within your reach.</p>
            </div>
            <a href="#contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
              View All 140+ Centres
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-primary transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{loc.city}</h4>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{loc.address}</p>
                <div className="flex items-center justify-between">
                  <a href={`tel:${loc.phone}`} className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone size={14} /> {loc.phone}
                  </a>
                  <button className="text-xs uppercase tracking-widest font-bold text-primary hover:underline">Get Directions</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579154235602-3c2051ed301e?auto=format&fit=crop&q=80&w=800" 
                  alt="Medical facility" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent rounded-3xl -z-0" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full -z-0" />
              
              <div className="absolute bottom-10 left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Star fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">4.9/5</p>
                    <p className="text-xs text-slate-500 font-medium">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">About Bloom IVF</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                A Legacy of Hope and Medical Excellence
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded with a mission to bring the joy of parenthood to every home, Bloom IVF & Fertility Centre has been at the forefront of reproductive medicine for over 15 years.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our state-of-the-art infrastructure and a team of globally trained specialists ensure that you receive the highest standard of care. We don't just provide treatments; we provide a supportive ecosystem for your journey.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'High Success Rate', desc: '78% success rate for patients under 35.' },
                  { title: 'Expert Doctors', desc: 'Globally trained fertility specialists.' },
                  { title: 'Advanced Tech', desc: 'AI-driven embryo selection technology.' },
                  { title: 'Compassionate Care', desc: 'Dedicated counselors for emotional support.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Fertility Solutions</h3>
            <p className="text-lg text-slate-600">
              We offer a full range of fertility treatments and diagnostic services to help you achieve your goal of parenthood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div 
                  key={service.id}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#contact" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ChevronRight size={18} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Specialists</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Meet Our Expert Medical Team</h3>
            <p className="text-lg text-slate-600">
              Our doctors are world-renowned experts in reproductive medicine, dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {DOCTORS.map((doctor) => (
              <div key={doctor.id} className="group">
                <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/5]">
                  <img 
                    src={doctor.photo} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-1">{doctor.name}</h4>
                <p className="text-primary font-semibold mb-2">{doctor.specialty}</p>
                <p className="text-sm text-slate-500">{doctor.qualification} • {doctor.experience} Exp.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-accent/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Success Stories</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Real Stories from Happy Parents</h3>
            <p className="text-slate-600">Nothing makes us happier than seeing our patients achieve their dreams. Here are some of their journeys.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <motion.div 
                key={t.id} 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-10 rounded-3xl shadow-sm flex flex-col md:flex-row gap-8 items-center border border-slate-100"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-blue-50">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                    "{t.story}"
                  </p>
                  <h4 className="font-bold text-slate-900">— {t.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="text-primary font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
              View All Success Stories <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">FAQ</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 list-none">
                  {faq.question}
                  <ChevronRight size={20} className="group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:row">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-primary text-white">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-blue-100 text-lg mb-12">
                Have questions about our treatments? Our specialists are here to help. Book your first consultation today.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Working Hours</h4>
                    <p className="text-blue-100">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-blue-100">appointments@bloomivf.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-8 bg-white/10 rounded-3xl border border-white/20">
                <h4 className="font-bold mb-2">Emergency Contact</h4>
                <p className="text-2xl font-bold">+1 (555) 999-0000</p>
              </div>
            </div>

            <div className="lg:w-1/2 p-12 lg:p-20">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Book an Appointment</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <User size={16} /> Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Mail size={16} /> Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <HeartPulse size={16} /> Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white">
                    <option>IVF Treatment</option>
                    <option>IUI Treatment</option>
                    <option>Egg Freezing</option>
                    <option>Fertility Testing</option>
                    <option>Video Consultation (Remote)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MessageSquare size={16} /> Message (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all">
                  Send Appointment Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
