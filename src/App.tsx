import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Users, Briefcase, Star, BarChart3, MessageCircle, CheckCircle, ShoppingBag } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 rounded-full border-2 border-amber-400 flex items-center justify-center">
                <span className="text-amber-400 font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-lg tracking-tight hidden sm:inline">KlickConnect</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-sm text-gray-300 hover:text-white transition">Features</button>
              <button onClick={() => scrollToSection('creators')} className="text-sm text-gray-300 hover:text-white transition">Creators</button>
              <button onClick={() => scrollToSection('storefronts')} className="text-sm text-gray-300 hover:text-white transition">Storefronts</button>
              <button onClick={() => scrollToSection('vision')} className="text-sm text-gray-300 hover:text-white transition">Vision</button>
              <a href="https://tally.so/r/J9WBOo" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition text-sm">Join Waitlist</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-300 hover:text-white py-2">Features</button>
              <button onClick={() => scrollToSection('creators')} className="block w-full text-left text-gray-300 hover:text-white py-2">Creators</button>
              <button onClick={() => scrollToSection('storefronts')} className="block w-full text-left text-gray-300 hover:text-white py-2">Storefronts</button>
              <button onClick={() => scrollToSection('vision')} className="block w-full text-left text-gray-300 hover:text-white py-2">Vision</button>
              <a href="https://tally.so/r/J9WBOo" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-2.5 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition text-center">Join Waitlist</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-black -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Where Creatives Get
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">Seen, Hired and Paid</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              KlickConnect helps photographers, videographers, designers and creators showcase their work, connect with clients, manage bookings and grow sustainable creative businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="https://tally.so/r/J9WBOo" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-300 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-400/20 transition transform hover:scale-105 flex items-center justify-center gap-2">
              Join The Waitlist <ArrowRight size={20} />
            </a>
            <button onClick={() => scrollToSection('about')} className="px-8 py-4 border border-gray-500 text-white font-semibold rounded-lg hover:border-amber-400 hover:text-amber-400 transition">
              Learn More
            </button>
          </div>

          <div className="pt-12 text-sm text-gray-500">
            {/* Image placeholder for hero background */}
            <div className="w-full h-96 bg-gradient-to-b from-amber-900/10 to-transparent rounded-2xl border border-amber-400/20 flex items-center justify-center">
              <p className="text-gray-600">[Hero image: Creative professionals at work]</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold">The Marketplace Built For Creatives</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              KlickConnect is building infrastructure for Africa's creative economy by helping creators showcase portfolios, receive bookings, communicate with clients, sell products and grow their businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Discover Talent', desc: 'Find the perfect creative professionals for your project' },
              { icon: Briefcase, title: 'Book Services', desc: 'Seamless booking and project management tools' },
              { icon: Star, title: 'Grow Your Business', desc: 'Build your portfolio and earn sustainable income' }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800 hover:border-amber-400/30 transition cursor-pointer">
                <item.icon className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section id="creators" className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Who Uses KlickConnect</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">For photographers, videographers, designers, models, and creative professionals across Africa</p>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Photographers', 'Videographers', 'Designers', 'Models', 'Content Creators', 'Creative Agencies'].map((category, i) => (
              <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 flex items-center justify-center hover:border-amber-400/30 transition cursor-pointer group">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-400/10 mx-auto flex items-center justify-center group-hover:bg-amber-400/20 transition">
                    <Sparkles className="w-6 h-6 text-amber-400" />
                  </div>
                  <p className="text-sm font-medium">{category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-1 bg-gradient-to-r from-amber-400/20 via-transparent to-amber-400/20 rounded-2xl">
            <div className="bg-black rounded-2xl p-12 text-center">
              <p className="text-gray-400 mb-4">Plus brands, businesses, and clients looking for premium creative talent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Powerful Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: 'Professional Portfolios', desc: 'Showcase your best work' },
              { icon: MessageCircle, title: 'Client Messaging', desc: 'Direct communication tools' },
              { icon: Briefcase, title: 'Booking Management', desc: 'Manage projects and schedules' },
              { icon: Star, title: 'Reviews & Ratings', desc: 'Build your reputation' },
              { icon: Users, title: 'Verification', desc: 'Trust and credibility' },
              { icon: ShoppingBag, title: 'Creator Storefronts', desc: 'Sell your products' },
              { icon: BarChart3, title: 'Analytics', desc: 'Track your performance' },
              { icon: Sparkles, title: 'Creative Community', desc: 'Connect with peers' }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-lg bg-gray-900/40 border border-gray-800 hover:border-amber-400/30 hover:bg-gray-900/60 transition group cursor-pointer">
                <feature.icon className="w-10 h-10 text-amber-400 mb-3 group-hover:scale-110 transition" />
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storefronts Section */}
      <section id="storefronts" className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold">Creator Storefronts</h2>
              <p className="text-xl text-gray-400">
                Build your own customizable storefront to showcase your unique brand, connect directly with clients, and grow your creative business on your own terms.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Your Store</p>
                    <p className="text-gray-400 text-sm">Fully branded and customizable</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Your Brand</p>
                    <p className="text-gray-400 text-sm">Express your creative identity</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Direct Client Access</p>
                    <p className="text-gray-400 text-sm">Connect with your audience directly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/10 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full border-2 border-amber-400 mx-auto mb-6 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium Storefront</h3>
                <p className="text-gray-400 mb-6">Coming soon on KlickConnect</p>
                <div className="h-32 bg-gray-800/30 rounded-lg border border-gray-700 flex items-center justify-center">
                  <p className="text-gray-600">[Storefront preview]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-6 gap-8 relative">
            {[
              { num: '1', title: 'Create Account', desc: 'Sign up in minutes' },
              { num: '2', title: 'Build Portfolio', desc: 'Showcase your work' },
              { num: '3', title: 'Showcase Work', desc: 'Get discovered' },
              { num: '4', title: 'Connect Clients', desc: 'Build relationships' },
              { num: '5', title: 'Get Booked', desc: 'Receive projects' },
              { num: '6', title: 'Get Paid', desc: 'Earn sustainably' }
            ].map((step, i) => (
              <div key={i} className="relative">
                {i < 5 && (
                  <div className="hidden md:block absolute left-full top-8 w-8 border-t-2 border-amber-400/30" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-400/20">
                    {step.num}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">Building Infrastructure For Africa's Creative Economy</h2>
          <p className="text-xl text-gray-400">
            KlickConnect is evolving beyond bookings into storefronts, creative commerce, collaboration tools and future content distribution opportunities. We're committed to empowering African creatives with world-class tools to thrive independently.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { label: 'Creator-Focused', desc: 'Built by creatives, for creatives' },
              { label: 'Africa First', desc: 'Serving the continent\'s talent' },
              { label: 'Sustainable', desc: 'Long-term business growth' }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-gray-900/40 border border-amber-400/20">
                <p className="font-semibold text-amber-400 mb-2">{item.label}</p>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-4 bg-gradient-to-b from-black via-black to-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-1 bg-gradient-to-r from-amber-400/30 via-amber-600/10 to-amber-400/30 rounded-2xl">
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-12 sm:p-16 text-center space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold">Be Among The First To Experience KlickConnect</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Join our waitlist and receive exclusive updates as we prepare for launch. Get early access to the platform that's transforming Africa's creative economy.
              </p>

              <a href="https://tally.so/r/J9WBOo" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-300 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-amber-400/30 transition transform hover:scale-105 text-lg">
                Join The Waitlist <ArrowRight className="inline ml-2" size={20} />
              </a>

              <p className="text-sm text-gray-500">No spam. Just updates about KlickConnect launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-amber-400 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">K</span>
                </div>
                <span className="font-bold">KlickConnect</span>
              </div>
              <p className="text-gray-500 text-sm">Connect. Create. Earn.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-amber-400 transition">Features</button></li>
                <li><button onClick={() => scrollToSection('creators')} className="hover:text-amber-400 transition">For Creators</button></li>
                <li><button onClick={() => scrollToSection('storefronts')} className="hover:text-amber-400 transition">Storefronts</button></li>
                <li><button onClick={() => scrollToSection('vision')} className="hover:text-amber-400 transition">Vision</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://instagram.com/officialklickconnect" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Instagram</a></li>
                <li><a href="https://facebook.com/officialklickconnect" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Facebook</a></li>
                <li><a href="https://tiktok.com/@officialklickconnect" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">TikTok</a></li>
                <li><a href="mailto:hello@klickconnect.online" className="hover:text-amber-400 transition">Email</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Community Guidelines</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 KlickConnect. All rights reserved.</p>
            <p className="mt-4 sm:mt-0">Helping creatives get seen, hired and paid.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
