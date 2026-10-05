import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  Bot, 
  X, 
  Send, 
  Key, 
  ChevronDown, 
  Compass, 
  ArrowRight, 
  ExternalLink, 
  Zap, 
  HelpCircle 
} from 'lucide-react';

interface ActionButton {
  label: string;
  action: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'agent' | 'system';
  text: string;
  toolCall?: {
    toolName: string;
    status: 'executing' | 'completed';
    description: string;
  };
  actions?: ActionButton[];
  timestamp: string;
}

interface CategoryQuestion {
  category: string;
  icon: string;
  questions: string[];
}

const CATEGORIZED_QUESTIONS: CategoryQuestion[] = [
  {
    category: "Popular",
    icon: "Sparkles",
    questions: [
      "How to join IEEE BBDITM?",
      "Who is Sheetal Pal?",
      "List 2026 Office Bearers",
      "Major Awards & Recognitions",
      "List of 7 Societies",
      "ISRO Space Tech Event"
    ]
  },
  {
    category: "Membership",
    icon: "BookOpen",
    questions: [
      "How to join IEEE BBDITM?",
      "What is Branch Code STB10214?",
      "Student Membership fee discount?",
      "Benefits of IEEE Membership?",
      "How to access IEEE Xplore?"
    ]
  },
  {
    category: "Societies",
    icon: "Layers",
    questions: [
      "IEEE PELS (Power Electronics)",
      "IEEE Computer Society (CS)",
      "IEEE Women in Engineering (WIE)",
      "IEEE Power & Energy Society (PES)",
      "IEEE Robotics & Automation (RAS)",
      "IEEE Signal Processing (SPS)",
      "IEEE SIGHT (Humanitarian)"
    ]
  },
  {
    category: "Awards",
    icon: "Award",
    questions: [
      "Major Awards & Recognitions",
      "IEEE India Council Kochi Plaque 2022",
      "U10 Initiative 2022 (30+ Events)",
      "Dr. Rafik Ahamad Counselor Award",
      "Membership Growth Award 2022"
    ]
  },
  {
    category: "Leadership",
    icon: "Users",
    questions: [
      "List 2026 Office Bearers",
      "Who is Sheetal Pal?",
      "Branch Counselor Dr. Rafik Ahamad",
      "Student Chair Mohammed Saif",
      "Director & Institution Head"
    ]
  },
  {
    category: "Events & Labs",
    icon: "Calendar",
    questions: [
      "ISRO Space Tech Event",
      "IEEEXtreme 24h Hackathon",
      "Village Adoption Project",
      "Hardware Labs & Projects",
      "Annual General Meeting (AGM)"
    ]
  },
  {
    category: "Actions",
    icon: "Cpu",
    questions: [
      "Take me to Awards page",
      "Take me to About page",
      "Take me to Chapters",
      "Take me to Events",
      "Switch to dark mode",
      "Switch to light mode"
    ]
  }
];

const KNOWLEDGE_BASE_RESPONSES = [
  // 1. Membership & Joining
  {
    keywords: ['join', 'membership', 'cost', 'fee', 'register', 'how to join', 'admit', 'admission', 'student discount', 'discount'],
    reply: `To join **IEEE BBDITM Student Branch (STB10214)**:
1. Visit the official global portal: [ieee.org/membership/join](https://www.ieee.org/membership/join/index.html).
2. Create an IEEE account with your student email.
3. Select **Student Membership** (eligible for 50% global student discount + Future50 discounts).
4. Enter your institution as **Babu Banarasi Das Institute of Technology and Management (BBDITM)**, Lucknow.
5. Our Official Branch Code is **STB10214** (Region 10 • UP Section).
6. Choose optional society memberships like **IEEE Computer Society**, **IEEE PELS**, or **IEEE PES**.
7. Once registered, show your IEEE Member ID to Branch Counselor **Dr. Rafik Ahamad** or the Executive Committee to join branch WhatsApp channels and working groups!`,
    suggestedNav: '/join',
    suggestedNavLabel: 'Open Join Page'
  },

  // 2. Sheetal Pal & PELS
  {
    keywords: ['sheetal', 'sheetal pal', 'pels vice chair'],
    reply: `**Sheetal Pal** is the **Vice-Chairperson of the IEEE Power Electronics Society (PELS) Student Chapter** at IEEE BBDITM for 2026!
Sheetal works alongside **Surbhi Pandey (Chair, PELS)** and Branch Counselor **Dr. Rafik Ahamad** to lead power electronics workshops, clean energy microgrid projects, semiconductor converter research, and inter-society collaborations.`,
    suggestedNav: '/chapters',
    suggestedNavLabel: 'View PELS Chapter'
  },

  // 3. 2026 Office Bearers & Executive Committee
  {
    keywords: ['team', 'office bearers', 'chair', 'chairperson', 'vice chair', 'president', 'saif', 'vaibhav', 'arnav', 'lead', 'leadership', 'council', 'executive'],
    reply: `Here is the **Official IEEE BBDITM 2026 Executive Council**:
- **Branch Counselor:** Dr. Rafik Ahamad (ECE Dept)
- **Student Branch Chair:** Mohammed Saif
- **Student Branch Vice-Chair:** Vaibhav Pandey
- **Branch Treasurer:** Arnav Gupta
- **IEEE CS Chair:** Swapnil Tripathi
- **IEEE PELS Chair:** Surbhi Pandey | **Vice-Chair:** Sheetal Pal
- **IEEE WIE Chair:** Vanshika Sharma
- **IEEE EMB Chair:** Vibhav Shukla
- **IEEE SPS Chair:** Yash Gupta
- **IEEE SIGHT Vice-Chair:** Anshul Dubey`,
    suggestedNav: '/faculty',
    suggestedNavLabel: 'View Leadership & Faculty'
  },

  // 4. Awards & Recognitions
  {
    keywords: ['award', 'awards', 'trophy', 'plaque', 'recognition', 'kochi', 'u10', 'retention', 'merit', 'honors'],
    reply: `**Verified Landmark Awards of IEEE BBDITM (STB10214)**:
🏆 **IEEE India Council Award (2022):** Outstanding Student Branch National Plaque presented at Kochi Awards Night.
🏆 **IEEE India Council Award (2023):** Outstanding Student Branch of the Year presented at Hyderabad.
📜 **U10 Initiative 2022:** Certificate of Appreciation for organizing >30 technical events in 2022.
📈 **Branch Membership Growth & Retention Award 2022:** Presented at IIT (BHU) Varanasi.
🎖️ **Outstanding Branch Counselor Award (2021):** Awarded to Dr. Rafik Ahamad at SRMCEM Lucknow.
📰 **Newsletter Convener Appreciation (2022):** Awarded to Dr. Rafik Ahamad at BHU Varanasi.
🥇 **Outstanding Section Student Volunteer (2021 & 2022):** Mr. Srikant Singh & Ms. Shambhavi.`,
    suggestedNav: '/achievements',
    suggestedNavLabel: 'Open Awards Page'
  },

  // 5. PELS Society
  {
    keywords: ['pels', 'power electronics', 'converter', 'surbhi'],
    reply: `**IEEE Power Electronics Society (PELS) Student Chapter**:
- **Chair:** Surbhi Pandey | **Vice-Chair:** Sheetal Pal
- **Focus:** DC-DC converter topologies, wide-bandgap semiconductors (SiC/GaN), wireless power transfer, and electric vehicle charging stations.
- **Benefits:** Access to IEEE Transactions on Power Electronics, PELS Distinguished Lecturer talks, and prototyping grants.`,
    suggestedNav: '/chapters',
    suggestedNavLabel: 'Explore PELS Chapter'
  },

  // 6. Computer Society (CS)
  {
    keywords: ['cs', 'computer society', 'software', 'ai/ml', 'coding', 'swapnil'],
    reply: `**IEEE Computer Society (CS) Student Branch Chapter**:
- **Chair:** Swapnil Tripathi
- **Focus:** AI/ML algorithms, cloud computing, cybersecurity, full-stack architectures, and competitive hackathons.
- **Flagship Activities:** Codeathons, IEEEXtreme preparation workshops, and open-source masterclasses.`,
    suggestedNav: '/chapters',
    suggestedNavLabel: 'Explore CS Chapter'
  },

  // 7. Women in Engineering (WIE)
  {
    keywords: ['wie', 'women in engineering', 'vanshika', 'wielead', 'girls in stem'],
    reply: `**IEEE Women in Engineering (WIE) Affinity Group**:
- **Chair:** Vanshika Sharma
- **Theme:** *#wielead — Empowering Female Engineers in STEM*
- **Flagship Activities:** "My Story: Passion into Action" distinguished series, career mentoring, and leadership summits across Region 10.`,
    suggestedNav: '/chapters',
    suggestedNavLabel: 'Explore WIE Chapter'
  },

  // 8. Power & Energy Society (PES)
  {
    keywords: ['pes', 'power and energy', 'solar', 'grid', 'green energy', 'clean energy'],
    reply: `**IEEE Power & Energy Society (PES) Student Chapter**:
- **Focus:** Solar microgrids, smart distribution grids, battery energy storage systems (BESS), and electric mobility powertrains.
- **Flagship Event:** Annual **IEEE PES Day** global celebration with technical symposiums and clean energy talks.`,
    suggestedNav: '/chapters',
    suggestedNavLabel: 'Explore PES Chapter'
  },

  // 9. Robotics & Automation (RAS)
  {
    keywords: ['ras', 'robotics', 'automation', 'rover', 'ros', 'drone', 'robot'],
    reply: `**IEEE Robotics & Automation Society (RAS) Student Chapter**:
- **Focus:** ROS 2 (Robot Operating System), autonomous rover kinematics, SLAM navigation, computer vision, and manipulator robotics.
- **Activities:** Hands-on hardware prototyping, autonomous bot racing, and national robotics exhibitions.`,
    suggestedNav: '/chapters',
    suggestedNavLabel: 'Explore RAS Chapter'
  },

  // 10. Signal Processing Society (SPS)
  {
    keywords: ['sps', 'signal processing', 'dsp', 'filter', 'yash gupta', 'image processing'],
    reply: `**IEEE Signal Processing Society (SPS) Student Chapter**:
- **Chair:** Yash Gupta
- **Focus:** Digital audio filtering, computer vision, speech recognition, biomedical signal enhancement, and radar algorithms.
- **Benefits:** Access to IEEE SPS Resource Center, ICASSP conference subsidies, and Signal Processing Cup competitions.`,
    suggestedNav: '/chapters',
    suggestedNavLabel: 'Explore SPS Chapter'
  },

  // 11. SIGHT & Village Adoption
  {
    keywords: ['sight', 'humanitarian', 'village', 'papanamau', 'jhinauli', 'anshul'],
    reply: `**IEEE SIGHT (Special Interest Group on Humanitarian Technology)**:
- **Vice-Chair:** Anshul Dubey
- **Landmark Impact:** Collaboration with WEAG for the adoption of local villages (**Papanamau & Jhinauli**) to deliver digital literacy, employment skill training, and solar equipment for rural communities.`,
    suggestedNav: '/about',
    suggestedNavLabel: 'View Humanitarian Impact'
  },

  // 12. ISRO Space Tech Keynote
  {
    keywords: ['isro', 'space', 'puneet', 'satellite', 'antenna'],
    reply: `**Distinguished Keynote on Space Technology and AI Innovation (2026)**:
- **Speaker:** Shri Puneet Kumar Mishra (Head, Satellite Antenna Systems at URSC ISRO; Global VP, IEEE Aerospace and Electronic Systems Society).
- **Highlights:** Satellite antenna architectures, telemetry payloads, ISRO space exploration missions, and real-time AI in deep-space communication.
- **Venue:** Main Auditorium, BBDITM Lucknow.`,
    suggestedNav: '/events',
    suggestedNavLabel: 'View Events Page'
  },

  // 13. Branch Counselor Dr. Rafik Ahamad
  {
    keywords: ['counselor', 'rafik', 'faculty', 'advisor', 'rafik ahamad', 'rafik ahmad'],
    reply: `Our official IEEE Branch Counselor is **Dr. Rafik Ahamad**, Professor in the Department of Electronics & Communication Engineering (ECE) at BBDITM Lucknow.
**Honors:**
- Recognized with the **Outstanding Branch Counselor Award** (2021) by IEEE UP Section.
- Awarded for **Exemplary Service as Convener in IEEE Periodic Section Newsletter** (2022) at BHU Varanasi.`,
    suggestedNav: '/faculty',
    suggestedNavLabel: 'View Faculty Dossier'
  },

  // 14. Branch Code STB10214
  {
    keywords: ['code', 'stb', 'branch code', 'number', 'id', 'stb10214'],
    reply: `The official IEEE Student Branch code for BBDITM Lucknow is **STB10214** (affiliated with IEEE Uttar Pradesh Section, IEEE Region 10 Asia-Pacific).`,
    suggestedNav: '/about',
    suggestedNavLabel: 'View About STB10214'
  },

  // 15. IEEE Xplore & Research
  {
    keywords: ['xplore', 'paper', 'research', 'library', 'publish', 'digital library'],
    reply: `**IEEE Xplore Digital Library Access**:
IEEE members receive discounted and institutional access to over **5.5 million peer-reviewed scientific papers**, standards, and transactions across AI, electronics, computing, and telecommunications. Members can also apply for student travel grants to present papers at IEEE flagship conferences.`,
    suggestedNav: '/projects',
    suggestedNavLabel: 'View Student Research'
  },

  // 16. IEEEXtreme Hackathon
  {
    keywords: ['ieeextreme', 'hackathon', 'extreme', '24h', 'coding competition'],
    reply: `**IEEEXtreme 24-Hour Virtual Coding Marathon**:
IEEEXtreme is IEEE's global competitive programming challenge where thousands of student proctor teams solve complex algorithmic problems non-stop for 24 hours on HackerRank. BBDITM teams compete every year from the Central Computing Facility!`,
    suggestedNav: '/events',
    suggestedNavLabel: 'View Hackathons'
  },

  // 17. 7 Societies Summary
  {
    keywords: ['7 societies', 'all societies', 'chapters list', 'list of 7'],
    reply: `IEEE BBDITM hosts **7 Active Societies & Affinity Groups**:
1. **IEEE Computer Society (CS)** - AI/ML, Cloud & Hackathons
2. **IEEE Power & Energy Society (PES)** - Green grids & PES Day
3. **IEEE Power Electronics Society (PELS)** - Power converters (Vice-Chair: Sheetal Pal)
4. **IEEE Signal Processing Society (SPS)** - Audio/Image DSP
5. **IEEE Robotics & Automation Society (RAS)** - Autonomous rovers
6. **IEEE Women in Engineering (WIE)** - STEM leadership (#wielead)
7. **IEEE SIGHT** - Humanitarian tech & village adoption`,
    suggestedNav: '/chapters',
    suggestedNavLabel: 'Explore All 7 Societies'
  }
];

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('ieee_bbditm_gemini_key') || '');
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [inputKey, setInputKey] = useState(apiKey);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Popular');
  
  const navigate = useNavigate();
  const { resolvedTheme, toggleTheme } = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'agent',
      text: `Hello! I am the **STB10214 Autonomous AI Agent** for IEEE BBDITM.
Ask me anything about **IEEE Membership**, our **7 Societies (PELS, CS, WIE, etc.)**, **2026 Office Bearers**, **Awards & Kochi Plaque**, or give website navigation commands!

Choose a category below or ask a question:`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSaveApiKey = () => {
    setApiKey(inputKey.trim());
    localStorage.setItem('ieee_bbditm_gemini_key', inputKey.trim());
    setShowKeyModal(false);
  };

  // Autonomous Agent Tool Classifier & Executor
  const executeAgentAction = (query: string): { toolName?: string; description?: string; executed: boolean; navAction?: () => void } => {
    const q = query.toLowerCase();

    // 1. Tool: Theme Toggle
    if (q.includes('dark mode') || q.includes('night mode') || q.includes('light mode') || q.includes('switch theme') || q.includes('change theme')) {
      if ((q.includes('dark') && resolvedTheme === 'light') || (q.includes('light') && resolvedTheme === 'dark') || q.includes('switch') || q.includes('toggle')) {
        toggleTheme();
        return {
          toolName: 'toggleTheme()',
          description: `Switched website theme to ${resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode.`,
          executed: true
        };
      }
    }

    // 2. Tool: Navigation
    if (q.includes('go to about') || q.includes('open about') || q.includes('show about page') || q.includes('take me to about')) {
      navigate('/about');
      return {
        toolName: "navigate('/about')",
        description: "Navigated to About IEEE BBDITM Page.",
        executed: true,
        navAction: () => navigate('/about')
      };
    }

    if (q.includes('go to award') || q.includes('open award') || q.includes('show award') || q.includes('take me to award') || q.includes('achievements')) {
      navigate('/achievements');
      return {
        toolName: "navigate('/achievements')",
        description: "Navigated to Awards & Achievements Page.",
        executed: true,
        navAction: () => navigate('/achievements')
      };
    }

    if (q.includes('go to chapter') || q.includes('open chapter') || q.includes('show societies') || q.includes('open societies') || q.includes('take me to chapter')) {
      navigate('/chapters');
      return {
        toolName: "navigate('/chapters')",
        description: "Navigated to 7 Technical Chapters & Societies Page.",
        executed: true,
        navAction: () => navigate('/chapters')
      };
    }

    if (q.includes('go to event') || q.includes('open event') || q.includes('show event') || q.includes('upcoming event') || q.includes('take me to event')) {
      navigate('/events');
      return {
        toolName: "navigate('/events')",
        description: "Navigated to Events & Hackathons Page.",
        executed: true,
        navAction: () => navigate('/events')
      };
    }

    if (q.includes('go to project') || q.includes('open project') || q.includes('show project') || q.includes('take me to project')) {
      navigate('/projects');
      return {
        toolName: "navigate('/projects')",
        description: "Navigated to Student Projects & Research Page.",
        executed: true,
        navAction: () => navigate('/projects')
      };
    }

    if (q.includes('go to faculty') || q.includes('open team') || q.includes('view team') || q.includes('faculty page') || q.includes('take me to faculty')) {
      navigate('/faculty');
      return {
        toolName: "navigate('/faculty')",
        description: "Navigated to Faculty & 2026 Leadership Page.",
        executed: true,
        navAction: () => navigate('/faculty')
      };
    }

    return { executed: false };
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Check for autonomous tool execution
    const agentToolResult = executeAgentAction(query);

    // If Gemini Live API Key is present, query Google Gemini LLM with Agent System Prompt
    if (apiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `System Context: You are the autonomous AI Agent for IEEE BBDITM Student Branch (STB10214) at Babu Banarasi Das Institute of Technology and Management (BBDITM), Lucknow, Uttar Pradesh, India (IEEE UP Section, Region 10).
Branch Counselor: Dr. Rafik Ahamad.
2026 Office Bearers: Student Branch Chair: Mohammed Saif, Vice-Chair: Vaibhav Pandey, Treasurer: Arnav Gupta, PELS Chair: Surbhi Pandey, PELS Vice-Chair: Sheetal Pal, CS Chair: Swapnil Tripathi, WIE Chair: Vanshika Sharma, EMB Chair: Vibhav Shukla, SPS Chair: Yash Gupta, SIGHT Vice-Chair: Anshul Dubey.
Official Branch Code: STB10214.
Key Awards: IEEE India Council Outstanding Student Branch 2022 (Kochi Plaque) and 2023 (Hyderabad), U10 Initiative 2022 Certificate (30+ events), Membership Growth Award 2022 at IIT BHU.
Respond helpfully, concisely, and accurately in English or Hinglish:
User: ${query}`
                  }
                ]
              }
            ]
          })
        });

        if (response.ok) {
          const data = await response.json();
          const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (replyText) {
            setMessages(prev => [
              ...prev,
              {
                id: (Date.now() + 1).toString(),
                sender: 'agent',
                text: replyText,
                toolCall: agentToolResult.executed ? {
                  toolName: agentToolResult.toolName!,
                  status: 'completed',
                  description: agentToolResult.description!
                } : undefined,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }
            ]);
            setIsTyping(false);
            return;
          }
        }
      } catch (err) {
        console.warn('Gemini LLM error, using local agent engine:', err);
      }
    }

    // Default High-Performance Local Knowledge & Tool Execution
    setTimeout(() => {
      let matchedResponse = KNOWLEDGE_BASE_RESPONSES.find(item => 
        item.keywords.some(k => query.toLowerCase().includes(k))
      );

      let replyText = matchedResponse?.reply || `I have processed your query for **IEEE BBDITM (STB10214)**.
You can explore our **7 Technical Societies**, view **2026 Office Bearers**, check **Awards**, or register for **Events** using the quick questions above!`;

      if (agentToolResult.executed) {
        replyText = `⚡ **Action Executed:** ${agentToolResult.description}\n\n` + replyText;
      }

      const actions: ActionButton[] = [];
      if (matchedResponse?.suggestedNav) {
        actions.push({
          label: matchedResponse.suggestedNavLabel,
          action: () => navigate(matchedResponse.suggestedNav!)
        });
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'agent',
          text: replyText,
          toolCall: agentToolResult.executed ? {
            toolName: agentToolResult.toolName!,
            status: 'completed',
            description: agentToolResult.description!
          } : undefined,
          actions: actions.length > 0 ? actions : undefined,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 400);
  };

  const currentCategoryData = CATEGORIZED_QUESTIONS.find(c => c.category === activeCategory) || CATEGORIZED_QUESTIONS[0];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {!isOpen && (
          <div className="mb-2 hidden sm:flex items-center gap-1.5 px-3 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full shadow-xl border border-cyan-500/40 text-xs font-bold text-[#00629B] dark:text-cyan-300 animate-bounce">
            <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>AI Knowledge & Agent Ready</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center relative group ${
            isOpen 
              ? 'bg-slate-900 text-white rotate-90 scale-95 border-2 border-cyan-400/40' 
              : 'bg-gradient-to-tr from-[#002855] via-[#00629B] to-[#00A3E0] text-white hover:scale-105 ring-4 ring-cyan-500/30 shadow-cyan-500/25'
          }`}
          aria-label="Toggle IEEE BBDITM AI Agent"
          title="IEEE BBDITM Autonomous AI Agent"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-400"></span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Agent Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-40 w-[94vw] sm:w-[460px] max-h-[660px] h-[84vh] bg-white dark:bg-[#071322] border-2 border-cyan-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Top Bar with Status & Controls */}
          <div className="px-5 py-3.5 bg-gradient-to-r from-[#001D3D] via-[#002855] to-[#00629B] text-white flex items-center justify-between shadow-md border-b border-cyan-500/30">
            <div className="flex items-center gap-3">
              <div className="relative p-2 bg-cyan-500/20 rounded-2xl border border-cyan-400/40 backdrop-blur-md">
                <Bot className="w-5 h-5 text-cyan-300" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#001D3D]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-sm text-white">STB10214 AI Agent</h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-bold">
                    Knowledge Engine
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-cyan-200 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{apiKey ? 'Live Gemini LLM Connected' : '20+ Verified Knowledge Topics'}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* LLM API Key Modal Button */}
              <button
                onClick={() => setShowKeyModal(true)}
                title="Configure Live LLM API Key (Optional)"
                className="p-1.5 text-cyan-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <Key className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-cyan-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Categorized Question Tabs */}
          <div className="px-3 pt-2 pb-1 bg-slate-100 dark:bg-[#09182C] border-b border-slate-200 dark:border-slate-800 flex items-center gap-1 overflow-x-auto scrollbar-none text-xs">
            {CATEGORIZED_QUESTIONS.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-3 py-1 rounded-xl font-bold text-[11px] transition-all flex-shrink-0 flex items-center gap-1 ${
                  activeCategory === cat.category
                    ? 'bg-[#002855] dark:bg-cyan-500 text-white dark:text-slate-950 shadow-sm'
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Quick Questions Scroller for Active Category */}
          <div className="px-3 py-2 bg-slate-50 dark:bg-[#0B1D35] border-b border-slate-200 dark:border-slate-800/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
            {currentCategoryData.questions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-3 py-1 rounded-full bg-white dark:bg-[#122947] border border-slate-200 dark:border-cyan-500/30 text-slate-700 dark:text-cyan-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 whitespace-nowrap text-[11px] font-semibold transition-all shadow-sm active:scale-95 flex items-center gap-1"
              >
                <HelpCircle className="w-3 h-3 text-cyan-500" />
                <span>{q}</span>
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="p-4 flex-1 overflow-y-auto space-y-4 text-xs sm:text-sm bg-slate-50/50 dark:bg-[#071322]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'agent' && (
                  <div className="w-8 h-8 rounded-full bg-[#002855] border border-cyan-400/40 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl space-y-2 ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#002855] to-[#004e7b] text-white rounded-tr-none shadow-md'
                      : 'bg-white dark:bg-[#0D1D33] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-tl-none shadow-sm leading-relaxed'
                  }`}
                >
                  {/* Tool Execution Badge (if any) */}
                  {msg.toolCall && (
                    <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-mono text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span>Action: {msg.toolCall.toolName}</span>
                    </div>
                  )}

                  <div 
                    className="whitespace-pre-line text-xs sm:text-[13px]"
                    dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyan-600 dark:text-cyan-400 underline font-bold">$1</a>')
                    }}
                  />

                  {/* Interactive Action Buttons Attached to Response */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-2 border-t border-slate-200 dark:border-slate-800">
                      {msg.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={act.action}
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#002855] to-[#00629B] text-white font-bold text-[11px] shadow-sm hover:opacity-90 flex items-center gap-1.5 transition-all active:scale-95"
                        >
                          <Compass className="w-3 h-3 text-cyan-300" />
                          <span>{act.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={`text-[9px] mt-1 text-right font-mono ${
                      msg.sender === 'user' ? 'text-cyan-200' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-slate-500 dark:text-slate-400 text-xs">
                <div className="w-8 h-8 rounded-full bg-[#002855] text-cyan-300 flex items-center justify-center border border-cyan-400/40">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="px-4 py-2.5 bg-white dark:bg-[#0D1D33] rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-800 flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-[#00629B] dark:text-cyan-300">
                    STB10214 Agent processing query...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white dark:bg-[#071322] border-t border-slate-200 dark:border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about IEEE BBDITM, PELS, Awards, Join..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-100 dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900 dark:text-white placeholder-slate-400"
              />

              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#002855] via-[#003B75] to-[#00629B] hover:from-[#001D3D] hover:to-[#004e7b] text-white disabled:opacity-40 transition-all shadow-md active:scale-95 border border-cyan-400/30"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Live LLM API Key Configuration Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md bg-white dark:bg-[#071529] border-2 border-cyan-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/30">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                    Live LLM Agent Engine
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400">Google Gemini / AI Studio</span>
                </div>
              </div>
              <button
                onClick={() => setShowKeyModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              The Agent comes pre-loaded with complete verified branch knowledge. To enable <strong>Live Generative Intelligence</strong> for any custom question, paste your free Google Gemini API Key:
            </p>

            <div className="space-y-1">
              <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                Google Gemini API Key
              </label>
              <input
                type="password"
                placeholder="AIzaSy..."
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-[#0D1D33] border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900 dark:text-white font-mono"
              />
              <div className="flex items-center justify-between text-[11px] pt-1">
                <a 
                  href="https://aistudio.google.com/app/apikey" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Get Free Key (aistudio.google.com)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-400">Saved in browser</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveApiKey}
                className="px-5 py-2 text-xs font-bold bg-gradient-to-r from-[#002855] to-[#00629B] text-white rounded-xl shadow-md hover:from-[#001D3D] hover:to-[#004e7b]"
              >
                Save & Connect Agent
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
