import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Star, Users, Award, Briefcase, Play, ChevronDown, Eye, Lightbulb, Palette, Home, Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const languages: Language[] = [
  { code: 'hy', name: 'Հայերեն', flag: '🇦🇲' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

const translations: Translations = {
  hy: {
    // Navigation
    home: 'Գլխավոր',
    services: 'Ծառայություններ',
    projects: 'Նախագծեր',
    about: 'Մեր մասին',
    contacts: 'Կապ',
    
    // Hero Section
    heroTitle1: 'ՍՏԵՂԾՈՒՄ ԵՆՔ',
    heroTitle2: 'ԱՊԱԳԱՅԻ',
    heroTitle3: 'ՏԱՐԱԾՔՆԵՐ',
    heroSubtitle: 'Հեղափոխական ճարտարապետական նախագծում և ինտերիերի դիզայն։ Իրականացնում ենք ամենաարիական գաղափարները։',
    viewProjects: 'Դիտել նախագծերը',
    getConsultation: 'Ստանալ խորհրդատվություն',
    
    // Services
    servicesTitle: 'ՄԵՐ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԸ',
    servicesSubtitle: 'Նորարարական լուծումների ամբողջական սպեկտր եզակի տարածքների ստեղծման համար',
    
    service1Title: 'Ճարտարապետական նախագծում',
    service1Desc: 'Նորարարական ճարտարապետական լուծումներ բնակելի և առևտրային օբյեկտների համար',
    
    service2Title: 'Ինտերիերի դիզայն',
    service2Desc: 'Ստիլային և գործառական պրեմիում դասի ինտերիերների ստեղծում',
    
    service3Title: 'Կոնցեպտուալ դիզայն',
    service3Desc: 'Եզակի կոնցեպցիաների և ստեղծագործական լուծումների մշակում',
    
    service4Title: '3D վիզուալիզացիա',
    service4Desc: 'Նախագծերի ֆոտոռեալիստիկ վիզուալիզացիա բարձրագույն որակով',
    
    service5Title: 'Հեղինակային հսկողություն',
    service5Desc: 'Իրականացման բոլոր փուլերում որակի պրոֆեսիոնալ վերահսկողություն',
    
    service6Title: 'VIP խորհրդատվություն',
    service6Desc: 'Անհատական խորհրդատվություն և յուրաքանչյուր հաճախորդի հետ անհատական մոտեցում',
    
    learnMore: 'Մանրամասն',
    
    // Stats
    stat1: 'Ավարտված նախագծեր',
    stat2: 'Գոհ հաճախորդներ',
    stat3: 'Տարվա փորձ',
    stat4: 'Հաճախորդների գնահատական',
    
    // Portfolio
    portfolioTitle: 'ՄԵՐ ՆԱԽԱԳԾԵՐԸ',
    portfolioSubtitle: 'Պրեմիում նախագծերի պորտֆոլիո, որոնք ոգեշնչում և հիացմունք են առաջացնում',
    
    project1Title: 'Ժամանակակից վիլլա',
    project1Cat: 'Բնակելի ճարտարապետություն',
    
    project2Title: 'Գրասենյակային համալիր',
    project2Cat: 'Առևտրային անշարժ գույք',
    
    project3Title: 'Դիզայն հյուրանոց',
    project3Cat: 'Հյուրանոցային բիզնես',
    
    project4Title: 'Պենթհաուս',
    project4Cat: 'Էլիտ բնակարան',
    
    project5Title: 'Ռեստորան',
    project5Cat: 'Հասարակական տարածքներ',
    
    project6Title: 'Արվարձանային տուն',
    project6Cat: 'Մասնավոր ճարտարապետություն',
    
    viewProject: 'Դիտել նախագիծը',
    
    // Contact
    contactTitle: 'ԿԱՊՎԵՔ ՄԵԶ ՀԵՏ',
    contactSubtitle: 'Պատրա՞ստ եք ձեր երազանքները իրականություն դարձնել: Եկեք միասին ստեղծենք ինչ-որ անհավանական բան:',
    contactInfo: 'Մեր կոնտակտները',
    
    phone: 'Հեռախոս',
    email: 'Էլ. փոստ',
    address: 'Հասցե',
    addressValue: 'ք. Երևան, Հայաստան',
    
    writeUs: 'Գրեք մեզ',
    yourName: 'Ձեր անունը',
    yourEmail: 'Էլ. փոստ',
    projectDescription: 'Պատմեք ձեր նախագծի մասին',
    sendMessage: 'Ուղարկել հաղորդագրությունը',
    
    // Footer
    footerText: 'Բոլոր իրավունքները պաշտպանված են։',
    footerSubtext: 'Ստեղծված է ❤️-ով ոգեշնչող նախագծերի համար'
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contacts: 'Contacts',
    
    // Hero Section
    heroTitle1: 'CREATING',
    heroTitle2: 'SPACES OF',
    heroTitle3: 'THE FUTURE',
    heroSubtitle: 'Revolutionary architectural design and interior solutions. We bring the boldest ideas to life.',
    viewProjects: 'View Projects',
    getConsultation: 'Get Consultation',
    
    // Services
    servicesTitle: 'OUR SERVICES',
    servicesSubtitle: 'Complete spectrum of innovative solutions for creating unique spaces',
    
    service1Title: 'Architectural Design',
    service1Desc: 'Innovative architectural solutions for residential and commercial properties',
    
    service2Title: 'Interior Design',
    service2Desc: 'Creating stylish and functional premium-class interiors',
    
    service3Title: 'Conceptual Design',
    service3Desc: 'Development of unique concepts and creative solutions',
    
    service4Title: '3D Visualization',
    service4Desc: 'Photorealistic visualization of projects with highest quality',
    
    service5Title: 'Author Supervision',
    service5Desc: 'Professional quality control at all stages of implementation',
    
    service6Title: 'VIP Consultations',
    service6Desc: 'Personal consultations and individual approach to each client',
    
    learnMore: 'Learn More',
    
    // Stats
    stat1: 'Completed Projects',
    stat2: 'Happy Clients',
    stat3: 'Years of Experience',
    stat4: 'Client Rating',
    
    // Portfolio
    portfolioTitle: 'OUR PROJECTS',
    portfolioSubtitle: 'Portfolio of premium projects that inspire and amaze',
    
    project1Title: 'Modern Villa',
    project1Cat: 'Residential Architecture',
    
    project2Title: 'Office Complex',
    project2Cat: 'Commercial Real Estate',
    
    project3Title: 'Design Hotel',
    project3Cat: 'Hospitality Business',
    
    project4Title: 'Penthouse',
    project4Cat: 'Elite Housing',
    
    project5Title: 'Restaurant',
    project5Cat: 'Public Spaces',
    
    project6Title: 'Country House',
    project6Cat: 'Private Architecture',
    
    viewProject: 'View Project',
    
    // Contact
    contactTitle: 'GET IN TOUCH',
    contactSubtitle: 'Ready to turn your dreams into reality? Let\'s create something incredible together!',
    contactInfo: 'Our Contacts',
    
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressValue: 'Yerevan, Armenia',
    
    writeUs: 'Write to Us',
    yourName: 'Your Name',
    yourEmail: 'Email',
    projectDescription: 'Tell us about your project',
    sendMessage: 'Send Message',
    
    // Footer
    footerText: 'All rights reserved.',
    footerSubtext: 'Created with ❤️ for inspiring projects'
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentLang, setCurrentLang] = useState<string>('hy');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const t = (key: string): string => {
    return translations[currentLang]?.[key] || key;
  };

  // Динамичные фразы для анимации
  const brandPhrases = {
    hy: [
      ['ՍՏԵՂԾՈՒՄ ԵՆՔ', 'ԱՊԱԳԱՅԻ', 'ՏԱՐԱԾՔՆԵՐ'],
      ['REFORM', 'ՃԱՐՏԱՐԱՊԵՏՈՒԹՅՈՒՆ', '& ԴԻԶԱՅՆ'],
      ['ՆՈՐԱՐԱՐԱԿԱՆ', 'ԼՈՒԾՈՒՄՆԵՐ', 'ՁԵԶՆԻՑ ՀԱՄԱՐ'],
      ['ՊՐԵՄԻՈՒՄ', 'ՈՐԱԿ', 'ԲԱՐՁՐ ՄԱԿԱՐԴԱԿ'],
      ['ՍՏԵՂԾԱԳՈՐԾԱԿԱՆ', 'ՄՈՏԵՑՈՒՄ', 'ՅՈՒՐԱՔԱՆՉՅՈՒՐ ՆԱԽԱԳԾԻ']
    ],
    en: [
      ['CREATING', 'SPACES OF', 'THE FUTURE'],
      ['REFORM', 'ARCHITECTURE', '& DESIGN'],
      ['INNOVATIVE', 'SOLUTIONS', 'FOR YOU'],
      ['PREMIUM', 'QUALITY', 'HIGH STANDARD'],
      ['CREATIVE', 'APPROACH', 'EVERY PROJECT']
    ]
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Смена фраз каждые 4 секунды
    const phraseInterval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % brandPhrases[currentLang as keyof typeof brandPhrases].length);
    }, 4000);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(phraseInterval);
    };
  }, [currentLang]);

  // Сброс анимации при смене языка
  useEffect(() => {
    setCurrentPhrase(0);
  }, [currentLang]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const switchLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsLangMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-[#EF4822]/20 to-[#706F6F]/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-[#EF4822]/10 to-[#706F6F]/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-[#EF4822]/5 to-[#706F6F]/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-2' : 'bg-white/90 backdrop-blur-lg py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-4 group">
            <div className="flex flex-col items-center">
              <a href="#home" className="group cursor-pointer">
                <img 
                  src="/reformLogo.png" 
                  alt="REFORM Logo" 
                  className="w-20 h-auto transition-all duration-300 group-hover:scale-110"
                  style={{ objectFit: 'contain' }}
                />
                <p className="text-sm text-gray-800 font-medium mt-2 group-hover:text-[#EF4822] transition-colors duration-300">
                  {currentLang === 'hy' ? 'Ճարտարապետություն & Դիզայն' : 'Architecture & Design'}
                </p>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { key: 'home', href: '#home' },
              { key: 'services', href: '#services' },
              { key: 'projects', href: '#projects' },
              { key: 'about', href: '#about' },
              { key: 'contacts', href: '#contacts' }
            ].map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className="relative text-gray-800 font-semibold hover:text-[#EF4822] transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EF4822] to-[#706F6F] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-gray-800 font-semibold hover:text-[#EF4822] transition-all duration-300 bg-gray-100/80 px-4 py-2 rounded-xl backdrop-blur-lg border border-gray-200"
              >
                <Globe size={18} />
                <span>{languages.find(lang => lang.code === currentLang)?.flag}</span>
                <ChevronDown size={16} className={`transform transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-700/50 transition-colors duration-300 flex items-center space-x-3 ${
                        currentLang === lang.code ? 'bg-[#EF4822]/20 text-[#EF4822]' : 'text-gray-800'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
                            className="md:hidden p-3 rounded-xl bg-gradient-to-r from-[#EF4822]/20 to-[#706F6F]/20 text-[#EF4822] hover:from-[#EF4822]/30 hover:to-[#706F6F]/30 transition-all duration-300 border border-[#EF4822]/30"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {[
                { key: 'home', href: '#home' },
                { key: 'services', href: '#services' },
                { key: 'projects', href: '#projects' },
                { key: 'about', href: '#about' },
                { key: 'contacts', href: '#contacts' }
              ].map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block text-gray-800 font-semibold hover:text-[#EF4822] transition-colors duration-300 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {t(item.key)}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        currentLang === lang.code 
                          ? 'bg-[#EF4822]/20 text-[#EF4822]' 
                          : 'bg-gray-100/80 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="relative z-10 text-center text-gray-800 px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-12 leading-tight">
              <span 
                key={`line1-${currentPhrase}-${currentLang}`}
                className="typewriter-line block bg-gradient-to-r from-[#EF4822] via-[#706F6F] to-[#161616] bg-clip-text text-transparent"
              >
                {brandPhrases[currentLang as keyof typeof brandPhrases][currentPhrase][0]}
              </span>
              <span 
                key={`line2-${currentPhrase}-${currentLang}`}
                className="typewriter-line block text-gray-800 mt-4"
              >
                {brandPhrases[currentLang as keyof typeof brandPhrases][currentPhrase][1]}
              </span>
              <span 
                key={`line3-${currentPhrase}-${currentLang}`}
                className="typewriter-line block bg-gradient-to-r from-[#706F6F] via-[#161616] to-[#EF4822] bg-clip-text text-transparent"
              >
                {brandPhrases[currentLang as keyof typeof brandPhrases][currentPhrase][2]}
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up animation-delay-300">
            <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('heroSubtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
            <button className="group relative bg-gradient-to-r from-[#EF4822] to-[#706F6F] hover:from-[#d13d1e] hover:to-[#5a5959] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center justify-center">
                {t('viewProjects')}
                <Play className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d13d1e] to-[#5a5959] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative border-2 border-[#EF4822] text-[#EF4822] hover:text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">{t('getConsultation')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#EF4822] to-[#706F6F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-[#EF4822]" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#EF4822]/20 to-[#706F6F]/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-[#EF4822]/20 to-[#706F6F]/20 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-[#161616]/20 to-[#706F6F]/20 rounded-full animate-float animation-delay-2000"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-[#EF4822] to-[#706F6F] bg-clip-text text-transparent">
                {t('servicesTitle')}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                titleKey: 'service1Title',
                descKey: 'service1Desc',
                gradient: 'from-[#EF4822] to-[#d13d1e]',
                image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                icon: Palette,
                titleKey: 'service2Title',
                descKey: 'service2Desc',
                gradient: 'from-[#706F6F] to-[#5a5959]',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                icon: Lightbulb,
                titleKey: 'service3Title',
                descKey: 'service3Desc',
                gradient: 'from-[#161616] to-[#0f0f0f]',
                image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                icon: Eye,
                titleKey: 'service4Title',
                descKey: 'service4Desc',
                gradient: 'from-[#EF4822] to-[#706F6F]',
                image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                icon: Award,
                titleKey: 'service5Title',
                descKey: 'service5Desc',
                gradient: 'from-[#706F6F] to-[#161616]',
                image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                icon: Users,
                titleKey: 'service6Title',
                descKey: 'service6Desc',
                gradient: 'from-[#161616] to-[#EF4822]',
                image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  ></div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className="absolute top-6 left-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#EF4822] transition-all duration-300">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t(service.descKey)}</p>
                  <button className={`flex items-center text-white font-semibold bg-gradient-to-r ${service.gradient} px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    {t('learnMore')}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 bg-gradient-to-r from-[#EF4822] via-[#706F6F] to-[#161616] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                          {[
                { icon: Briefcase, number: '500+', labelKey: 'stat1', color: 'text-[#FEFEFE]' },
                { icon: Users, number: '1000+', labelKey: 'stat2', color: 'text-[#FEFEFE]' },
                { icon: Award, number: '25+', labelKey: 'stat3', color: 'text-[#FEFEFE]' },
                { icon: Star, number: '5.0', labelKey: 'stat4', color: 'text-[#FEFEFE]' }
              ].map((stat, index) => (
              <div 
                key={index} 
                className="group transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <stat.icon className={`w-16 h-16 mx-auto mb-6 ${stat.color} group-hover:scale-125 transition-transform duration-300`} />
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-4xl md:text-6xl font-black mb-4 text-white group-hover:text-[#EF4822] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200 font-semibold">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="relative py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-[#EF4822] to-[#706F6F] bg-clip-text text-transparent">
                {t('portfolioTitle')}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('portfolioSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop',
                titleKey: 'project1Title',
                categoryKey: 'project1Cat'
              },
              {
                image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop',
                titleKey: 'project2Title',
                categoryKey: 'project2Cat'
              },
              {
                image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop',
                titleKey: 'project3Title',
                categoryKey: 'project3Cat'
              },
              {
                image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop',
                titleKey: 'project4Title',
                categoryKey: 'project4Cat'
              },
              {
                image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop',
                titleKey: 'project5Title',
                categoryKey: 'project5Cat'
              },
              {
                image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop',
                titleKey: 'project6Title',
                categoryKey: 'project6Cat'
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-125 transition-transform duration-700"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm font-semibold text-[#EF4822] mb-2">{t(project.categoryKey)}</div>
                  <h3 className="text-2xl font-bold mb-4">{t(project.titleKey)}</h3>
                                      <button className="bg-gradient-to-r from-[#EF4822] to-[#706F6F] text-white px-6 py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105">
                      {t('viewProject')}
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="relative py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-6">
              <span className="text-[#EF4822]">
                {t('contactTitle')}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-8">{t('contactInfo')}</h3>
              {[
                { icon: Phone, titleKey: 'phone', info: '+374 XX XXX XXX', gradient: 'from-[#EF4822] to-[#d13d1e]' },
                { icon: Mail, titleKey: 'email', info: 'info@reform.am', gradient: 'from-[#706F6F] to-[#5a5959]' },
                { icon: MapPin, titleKey: 'address', infoKey: 'addressValue', gradient: 'from-[#161616] to-[#0f0f0f]' }
              ].map((contact, index) => (
                <div 
                  key={index} 
                  className="group flex items-center space-x-6 p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800 mb-1">{t(contact.titleKey)}</div>
                    <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {contact.infoKey ? t(contact.infoKey) : contact.info}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">{t('writeUs')}</h3>
              <form className="space-y-6">
                <div className="group">
                  <input
                    type="text"
                    placeholder={t('yourName')}
                    className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl focus:outline-none focus:border-[#EF4822] focus:bg-gray-700 transition-all duration-300 text-white placeholder-gray-400 group-hover:border-gray-500"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder={t('yourEmail')}
                    className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl focus:outline-none focus:border-[#706F6F] focus:bg-gray-700 transition-all duration-300 text-white placeholder-gray-400 group-hover:border-gray-500"
                  />
                </div>
                <div className="group">
                  <textarea
                    placeholder={t('projectDescription')}
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl focus:outline-none focus:border-[#161616] focus:bg-gray-700 transition-all duration-300 text-white placeholder-gray-400 resize-none group-hover:border-gray-500"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-[#EF4822] via-[#706F6F] to-[#161616] hover:from-[#d13d1e] hover:via-[#5a5959] hover:to-[#0f0f0f] text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  {t('sendMessage')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#EF4822]/20 via-[#706F6F]/20 to-[#161616]/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-8 md:mb-0 group">
              <div className="flex flex-col items-center">
                <a href="#home" className="group cursor-pointer">
                  <img 
                    src="/reformLogo.png" 
                    alt="REFORM Logo" 
                    className="w-20 h-auto transition-all duration-300 group-hover:scale-110"
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="text-gray-200 font-medium mt-2 group-hover:text-[#EF4822] transition-colors duration-300">
                    {currentLang === 'hy' ? 'Ճարտարապետություն & Դիզայն' : 'Architecture & Design'}
                  </div>
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">&copy; 2024 REFORM. {t('footerText')}</p>
              <p className="text-sm text-gray-500">{t('footerSubtext')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;