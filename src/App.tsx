import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { 
  Download, 
  Sparkles, 
  BookOpen, 
  Users, 
  Star, 
  ChevronRight, 
  Github, 
  Linkedin,
  Wand2,
  Twitter,
  Gamepad2,
  Crown,
  Shield,
  Rocket,
} from 'lucide-react';
import georgy from './assets/georgy.jpg';
import insaf from './assets/insaf.jpg';
import devan from './assets/devan.jpg';
import jacob from './assets/jacob.jpg';
import apple from './assets/apple.png';
import android from './assets/andriod.png';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Allow animations to trigger multiple times
    });
  }, []);

  const screenshots = [
    "https://images.unsplash.com/photo-1614043527063-aef59ae07b79?auto=format&fit=crop&q=80&w=1080",
    "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=1080",
    "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1080",
    "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=1080"
  ];

  const teamMembers = [
    {
      name: "Georgy Prakash",
      role: "Lead Designer",
      image: georgy,
      bio: "",
      github: "https://github.com/georgy-gp",
      Linkedin: "https://www.linkedin.com/in/georgy-prakashp-566233306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Insaf Finser",
      role: "Lead Developer",
      image: insaf,
      bio: "",
      github: "https://github.com/Insaf-Finser",
      Linkedin: "https://twitter.com/insaf"
    },
    {
      name: "Bipin Dev.B",
      role: "Story Director",
      image: devan,
      bio: "",
      github: "https://github.com/Bipindev01",
      Linkedin: "https://www.linkedin.com/in/bipindevb"
    },
    {
      name: "Jacob Cyriac",
      role: "Technical Artist",
      image: jacob,
      bio: "",
      github: "https://github.com/jacobcyriac66",
      Linkedin: "https://www.linkedin.com/in/jacob-cyriac-92b9a8328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5e6d3] text-[#2c1810]">
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614043527063-aef59ae07b79?auto=format&fit=crop&q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8d5c4] via-[#f5e6d3] to-[#f5e6d3]"></div>
        
        <nav className="absolute top-0 left-0 right-0 z-10 container mx-auto px-6 py-6" data-aos="fade-down">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-[#8b5e34] animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#8b5e34] to-[#a67c52] bg-clip-text text-transparent">
                Questora
              </span>
            </div>  
          </div>
        </nav>
        <nav className="absolute top-0 left-0 right-0 z-10 container mx-auto px-6 py-6 flex justify-center" data-aos="fade-down">
  <div className="flex space-x-8">
    <a href="#introduction" className="text-[#2c1810] hover:text-[#8b5e34] transition-colors">About</a>
    <a href="#features" className="text-[#2c1810] hover:text-[#8b5e34] transition-colors">Features</a>
    <a href="#download" className="text-[#2c1810] hover:text-[#8b5e34] transition-colors">Download</a>
    <a href="#team" className="text-[#2c1810] hover:text-[#8b5e34] transition-colors">Team</a>
  </div>
</nav>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-float" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Create Your Own
              <span className="block bg-gradient-to-r from-[#8b5e34] to-[#a67c52] bg-clip-text text-transparent">
                Interactive Adventure
              </span>
            </h1>
            <p className="text-xl text-[#4a3427] mb-12 max-w-2xl mx-auto">
              Dive into a world where your choices matter. Craft branching narratives, 
              build immersive worlds, and share your stories with a growing community 
              of storytellers.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button className="bg-[#8b5e34] hover:bg-[#6d4a29] text-[#f5e6d3] px-8 py-4 rounded-full flex items-center space-x-2 transition-colors w-full md:w-auto group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Now</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border border-[#8b5e34] text-[#8b5e34] hover:bg-[#8b5e34] hover:text-[#f5e6d3] px-8 py-4 rounded-full transition-colors w-full md:w-auto">
                Watch Tutorial
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section id="introduction" className="py-24 bg-[#e8d5c4] relative overflow-hidden">
        <div className="container mx-auto px-6" style={{height:'50vh', alignItems:'center',justifyContent:'center',display:'flex'}}>
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <Wand2 className="w-16 h-16 text-[#8b5e34] mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#8b5e34] to-[#a67c52] bg-clip-text text-transparent">
              INTRODUCTION
            </h2>
            <p className="text-xl text-[#4a3427] leading-relaxed">
            <p className="text-xl text-[#4a3427] leading-relaxed">
            Questora is an AI-powered interactive storytelling platform that transforms storytelling into a dynamic,personalized experience. It enables adaptive narratives, intelligent character interactions, and decision-driven plots, allowing readers to shape their journeys.

            </p>
            </p>
            <br />
            <p className="text-xl text-[#4a3427] leading-relaxed">
            Questora’s AI-driven story editor helps authors craft branching narratives, ensuring consistency and creativity. With AI visuals, multilingual translation, and lifelike narration, it enhances storytelling, making it more immersive and accessible for both authors and readers in the digital age.


            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section id="features" className="py-24 bg-[#f5e6d3] relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2c1810]">
            Magical Features
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-colors transform hover:-translate-y-2 duration-300 shadow-lg" data-aos="fade-up">
              <BookOpen className="w-12 h-12 text-[#8b5e34] mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-[#2c1810]">Rich Storytelling</h3>
              <p className="text-[#4a3427]">
                Create branching narratives with our intuitive story editor. Add choices, 
                consequences, and multiple endings.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-colors transform hover:-translate-y-2 duration-300 shadow-lg" data-aos="fade-up">
              <Users className="w-12 h-12 text-[#8b5e34] mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-[#2c1810]">Active Community</h3>
              <p className="text-[#4a3427]">
                Join thousands of storytellers. Share your stories, get feedback, 
                and collaborate with others.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-colors transform hover:-translate-y-2 duration-300 shadow-lg" data-aos="fade-up">
              <Star className="w-12 h-12 text-[#8b5e34] mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-[#2c1810]">Premium Features</h3>
              <p className="text-[#4a3427]">
                Access advanced tools like character sheets, story mapping, and 
                custom artwork integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-gradient-to-b from-[#f5e6d3] to-[#e8d5c4]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2c1810]">Why Choose Questora?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4" data-aos="fade-up">
            <Crown className="w-8 h-8 text-[#8b5e34] flex-shrink-0" />
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#2c1810]">MAKE YOUR CHOISE</h3>
                <p className="text-[#4a3427]">Every step in Questora offers a new choice, a fork in the narrative path. Your decisions are not just for entertainment, but shape your adventure and the learning content you encounter.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up">
              <Rocket className="w-8 h-8 text-[#8b5e34] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#2c1810]">POWER OF DATA</h3>
                <p className="text-[#4a3427]">User data becomes a crucial driver of the narrative. As you explore, the app adapts to your choices, presenting challenges, information, and twists that resonate with your individual preferences and learning style.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up">
              <Shield className="w-8 h-8 text-[#8b5e34] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#2c1810]">BUILDING  THE FRAMEWORK</h3>
                <p className="text-[#4a3427]">
                  User data becomes a crucial driver of the narrative. As you explore, the app adapts to your choices, presenting challenges, information, and twists that resonate with your individual preferences and learning style.
                </p>

              </div>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up">
              <Gamepad2 className="w-8 h-8 text-[#8b5e34] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#2c1810]">IMMERSIVE EXPERIENCE</h3>
                <p className="text-[#4a3427]">Questora offers a unique blend of storytelling and gaming. Dive into a world of interactive fiction, where your choices shape the narrative and lead to different outcomes.
                </p>
              </div>
            </div>
    
          </div>
        </div>
      </section>

      {/* Specifications Section */}
<section className="py-24 bg-[#e8d5c4]">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-[#2c1810]">Technical Specifications</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg" data-aos="fade-up">
        <h3 className="font-bold mb-4 text-[#8b5e34]">App Specification</h3>
        <ul className="space-y-2 text-[#4a3427]">
          <li>Flutter</li>
          <li>Dart</li>
          <li>Firebase</li>
          <li>AI Model Ystrel 7b</li>
        </ul>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg" data-aos="fade-up">
        <h3 className="font-bold mb-4 text-[#8b5e34]">System Requirements</h3>
        <ul className="space-y-2 text-[#4a3427]">
          <li>iOS 14.0 or later</li>
          <li>Android 8.0 or later</li>
          <li>2GB RAM minimum</li>
          <li>500MB free space</li>
        </ul>
      </div>

      {/* New Box */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg" data-aos="fade-up">
        <h3 className="font-bold mb-4 text-[#8b5e34]">Supported Features</h3>
        <ul className="space-y-2 text-[#4a3427]">
          <li>Online story creation</li>
          <li>Cloud sync</li>
          <li>Multi-language support</li>
          <li>Custom themes</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Screenshots Section */}
      <section className="py-24 bg-[#f5e6d3]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2c1810]">App Screenshots</h2>
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x hide-scrollbar" data-aos="fade-up">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index}
                className="flex-none w-80 h-[600px] rounded-xl overflow-hidden snap-center shadow-lg"
              >
                <img 
                  src={screenshot} 
                  alt={`App Screenshot ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
  {`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }

    .hide-scrollbar {
      -ms-overflow-style: none;  /* For Internet Explorer 10+ */
      scrollbar-width: none;  /* For Firefox */
    }
  `}
</style>

      {/* Download Section */}
      <section id="download" className="py-24 bg-gradient-to-b from-[#e8d5c4] to-[#f5e6d3] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-8 text-[#2c1810]">Download Now</h2>
            <p className="text-xl text-[#4a3427] mb-12">
              Available for both iOS and Android. Start your storytelling journey today!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#" className="bg-white/80 backdrop-blur-sm hover:bg-white px-8 py-4 rounded-xl flex items-center justify-center space-x-3 transition-colors group shadow-lg">
              <img 
                  src={apple} 
                  alt="App Store" 
                  className="w-8 h-8 group-hover:opacity-80"
                />
                <div className="text-left">
                  <div className="text-sm text-[#4a3427]">Download on the</div>
                  <div className="text-xl font-bold text-[#2c1810]">App Store</div>
                </div>
              </a>
          
              <a href="#" className="bg-white/80 backdrop-blur-sm hover:bg-white px-8 py-4 rounded-xl flex items-center justify-center space-x-3 transition-colors group shadow-lg">
                <img 
                  src={android} 
                  alt="App Store" 
                  className="w-8 h-8 group-hover:opacity-80"
                />
                <div className="text-left">
                  <div className="text-sm text-[#4a3427]">Get it on</div>
                  <div className="text-xl font-bold text-[#2c1810]">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-[#f5e6d3]">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-[#2c1810]">Meet the Team</h2>
    <div className="grid md:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-lg" data-aos="fade-up">
          <div className="aspect-square overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1 ml-10 text-[#2c1810]">{member.name}</h3>
            <div className="text-[#8b5e34] mb-2 ml-10">{member.role}</div>
            <p className="text-[#4a3427] text-sm mb-4">{member.bio}</p>
            <div className="flex space-x-4 ml-40"> {/* Added ml-4 to move icons to the right */}
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-[#4a3427] hover:text-[#8b5e34] transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={member.Linkedin} target="_blank" rel="noopener noreferrer" className="text-[#4a3427] hover:text-[#8b5e34] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-[#e8d5c4] py-12 border-t border-[#d4c1b0]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Sparkles className="w-6 h-6 text-[#8b5e34]" />
              <span className="text-xl font-bold text-[#2c1810]">Questora</span>
            </div>
            <div className="flex space-x-6">
            <a 
                href="https://github.com/Insaf-Finser/story_app" 
                target="_blank" 
                rel="noopener noreferrer" 
              className="text-[#4a3427] hover:text-[#8b5e34] transition-colors">
              <Github className="w-6 h-6" />
             </a>
              <a href="#" className="text-[#4a3427] hover:text-[#8b5e34] transition-colors">
                <Twitter className="w-6 h-6" />
               
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-[#4a3427] text-sm">
            © 2025 Questora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;