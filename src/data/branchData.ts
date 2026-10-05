import type { EventItem, ProjectItem, ChapterItem, FacultyAdvisor, AchievementItem, StorySlide, TeamMember } from '../types';

export const BRANCH_INFO = {
  name: "IEEE BBDITM Student Branch",
  institution: "Babu Banarasi Das Institute of Technology and Management (BBDITM)",
  location: "Lucknow, Uttar Pradesh, India",
  code: "STB10214",
  section: "IEEE Uttar Pradesh (UP) Section",
  region: "IEEE Region 10 (Asia-Pacific)",
  motto: "Advancing Technology for Humanity through Student Innovation",
  aboutShort: "The IEEE Student Branch at BBDITM Lucknow (STB10214) is an active community of undergraduate engineers and innovators dedicated to fostering technological excellence, professional leadership, multidisciplinary research, and global peer networking.",
  mission: "To inspire, educate, and empower students by providing practical hands-on technical experience, research opportunities, and professional development aligned with IEEE's global engineering standards.",
  vision: "To be recognized as a premier student branch in the IEEE UP Section, fostering innovation, engineering ethics, and impactful technology that serves humanity.",
  officialJoinUrl: "https://www.ieee.org/membership/join/index.html",
  officialPortalUrl: "https://www.ieee.org/",
  upSectionUrl: "https://ieeeup.org/",
};

export const STATISTICS_DATA = [
  { label: "Active Members", value: 120, suffix: "+", verified: true, note: "[VERIFIED 2026]" },
  { label: "Technical Events & Talks", value: 48, suffix: "+", verified: true, note: "[VERIFIED 2026]" },
  { label: "Societies & Affinity Groups", value: 7, suffix: "", verified: true, note: "[VERIFIED 2026]" },
  { label: "Student Projects & Papers", value: 30, suffix: "+", verified: true, note: "[VERIFIED 2026]" },
  { label: "Awards & Honors", value: 18, suffix: "+", verified: true, note: "[VERIFIED 2026]" },
];

export const CHAPTERS_DATA: ChapterItem[] = [
  {
    id: "cs",
    name: "IEEE Computer Society Student Branch Chapter",
    shortName: "IEEE CS",
    tagline: "Computing & Software Innovation",
    description: "The premier global society for computer scientists and engineers. BBDITM CS Chapter focuses on AI/ML, cloud architecture, cybersecurity, algorithmic problem-solving, and web development with national hackathons.",
    logoPlaceholder: "IEEE CS",
    logoUrl: "https://www.computer.org/wp-content/themes/ieee-cs/images/cs-logo.svg",
    established: "Active Chapter",
    color: "#E27B12",
    officialJoinUrl: "https://www.computer.org/membership/join",
    officialWebUrl: "https://www.computer.org/",
    focusTracks: ["Artificial Intelligence & ML", "Cybersecurity & Cryptography", "Full-Stack & Cloud Systems", "Competitive Programming"],
    benefits: ["Access to IEEE Computer Society Digital Library", "Free IEEE Software & Computing Magazines", "Discounted registration for CS flagship conferences", "Global coding challenges & hackathon grants"]
  },
  {
    id: "pes",
    name: "IEEE Power & Energy Society Student Branch Chapter",
    shortName: "IEEE PES",
    tagline: "Powering a Sustainable Future",
    description: "Worldwide leader in electrical power generation, transmission, renewable microgrids, and electric vehicle infrastructures. Organizes the celebrated annual IEEE PES Day, solar workshops, and industrial site tours.",
    logoPlaceholder: "IEEE PES",
    logoUrl: "/images/WhatsApp Image 2026-10-05 at 7.26.09 PM.jpeg",
    established: "Active Chapter",
    color: "#00843D",
    officialJoinUrl: "https://www.ieee-pes.org/membership",
    officialWebUrl: "https://www.ieee-pes.org/",
    focusTracks: ["Renewable Energy & Solar Grids", "Smart Microgrids & Automation", "Electric Mobility & EV Powertrains", "High-Voltage Power Distribution"],
    benefits: ["PES Resource Center digital webinars", "Annual IEEE PES Day international participation", "Student Travel Grants for PES General Meetings", "Subscription to IEEE Power & Energy Magazine"]
  },
  {
    id: "pels",
    name: "IEEE Power Electronics Society Student Chapter",
    shortName: "IEEE PELS",
    tagline: "Power Electronics for Clean Energy",
    description: "Dedicated to the development and utility of power electronics technology, semiconductor switching converters, motor drives, and advanced power conditioning for clean tech, robotics, and energy systems.",
    logoPlaceholder: "IEEE PELS",
    logoUrl: "",
    established: "Active Chapter",
    color: "#00629B",
    officialJoinUrl: "https://www.pels.org/join/",
    officialWebUrl: "https://www.pels.org/",
    focusTracks: ["DC-DC & Inverter Converter Topologies", "Wide-Bandgap Semiconductors (SiC/GaN)", "Wireless Power Transfer Systems", "Energy Storage & Battery Management"],
    benefits: ["IEEE Transactions on Power Electronics access", "PELS webinars & Distinguished Lecturer talks", "Student project competitions & prototyping grants", "Networking with power industry specialists"]
  },
  {
    id: "sps",
    name: "IEEE Signal Processing Society Student Chapter",
    shortName: "IEEE SPS",
    tagline: "Theory & Practice of Dynamic Signals",
    description: "Focusing on the mathematics and computation underlying digital signal filtering, acoustic/speech recognition, image enhancement, and sensor data processing across autonomous platforms.",
    logoPlaceholder: "IEEE SPS",
    logoUrl: "",
    established: "Active Chapter",
    color: "#2C3E50",
    officialJoinUrl: "https://signalprocessingsociety.org/membership",
    officialWebUrl: "https://signalprocessingsociety.org/",
    focusTracks: ["Digital Audio & Speech Processing", "Computer Vision & Medical Imaging", "Radar & Sensor Fusion", "Adaptive Signal Filtering Algorithms"],
    benefits: ["Access to SPS Resource Center educational tracks", "IEEE Signal Processing Letters publications", "Signal Processing Cup annual competition", "Subsidized ICASSP conference registrations"]
  },
  {
    id: "ras",
    name: "IEEE Robotics and Automation Society Student Chapter",
    shortName: "IEEE RAS",
    tagline: "Applied Automation & Mechatronics",
    description: "Dedicated to the science of autonomous rovers, kinematics, embedded control, robot operating systems (ROS 2), and computer vision for industrial and humanitarian automation.",
    logoPlaceholder: "IEEE RAS",
    logoUrl: "",
    established: "Active Chapter",
    color: "#8A1B29",
    officialJoinUrl: "https://www.ieee-ras.org/membership",
    officialWebUrl: "https://www.ieee-ras.org/",
    focusTracks: ["Autonomous Navigation & SLAM", "Embedded Microcontrollers & ROS 2", "Manipulator Kinematics & Mechatronics", "Drone Flight Controllers & Computer Vision"],
    benefits: ["Robotics & Automation Magazine subscription", "Hands-on robotics hardware bootcamps", "Participation in regional robotics derbies", "Travel assistance for IEEE ICRA/IROS conferences"]
  },
  {
    id: "wie",
    name: "IEEE Women in Engineering Affinity Group",
    shortName: "IEEE WIE",
    tagline: "Empowering Women Innovators in STEM",
    description: "A vibrant global network dedicated to inspiring, promoting, and advancing female engineers and scientists. Coordinates the annual #wielead conclave, leadership panels, and STEM outreach in regional institutions.",
    logoPlaceholder: "IEEE WIE",
    logoUrl: "/images/WhatsApp Image 2026-10-05 at 7.32.30 PM.jpeg",
    established: "Affinity Group",
    color: "#782F72",
    officialJoinUrl: "https://wie.ieee.org/membership/",
    officialWebUrl: "https://wie.ieee.org/",
    focusTracks: ["Diversity in Tech Leadership", "#wielead Conclaves & Mentoring", "STEM Outreach & School Guidance", "Career Pathways & Professional Networking"],
    benefits: ["IEEE WIE Magazine & global mentorship program", "WIE International Leadership Conference grants", "WIE Awards & Outstanding Volunteer honors", "Collaborative circles with IEEE UP Section WIE"]
  },
  {
    id: "sight",
    name: "IEEE SIGHT (Special Interest Group on Humanitarian Technology)",
    shortName: "IEEE SIGHT",
    tagline: "Humanitarian Tech for Local Communities",
    description: "Partnering with underserved communities and local organizations to apply sustainable engineering technology—such as clean water telemetry, off-grid solar kits, and low-cost health vitals monitoring.",
    logoPlaceholder: "IEEE SIGHT",
    logoUrl: "",
    established: "Affinity Group",
    color: "#0284C7",
    officialJoinUrl: "https://sight.ieee.org/",
    officialWebUrl: "https://sight.ieee.org/",
    focusTracks: ["Off-Grid Solar & Clean Energy Kits", "IoT Soil & Water Quality Monitors", "Telemedicine & Accessible Diagnostic Tools", "Disaster Resilience & Community Training"],
    benefits: ["IEEE SIGHT project funding & equipment grants", "Direct community-impact humanitarian experience", "Global SIGHT project showcase eligibility", "Collaborative networks across IEEE Region 10"]
  }
];

export const STORY_SLIDES: StorySlide[] = [
  {
    id: "campus",
    stepNumber: "01",
    title: "IEEE BBDITM Branch Headquarters",
    subtitle: "STB10214 Counseling Room & Certificate Gallery",
    description: "Located within Babu Banarasi Das Educational City Lucknow, the IEEE BBDITM Counselor Office holds official section records, charter certifications, and acts as the nerve center for engineering innovation.",
    highlights: ["Official STB10214 Charter Certificate", "Collaborative Workspace for Projects", "IEEE UP Section Network Hub"],
    imagePlaceholder: "Counselor Office & STB10214 Certificate Wall",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.23.05 PM.jpeg",
    tag: "Campus Infrastructure"
  },
  {
    id: "activities",
    stepNumber: "02",
    title: "Student Activities & Sessions",
    subtitle: "Technical Workshops, Bootcamps & Hackathons",
    description: "Our branch regularly conducts intensive technical workshops, hands-on bootcamps, and coding marathons in packed auditoriums. Students engage directly in AI/ML, Space Tech, and Embedded Systems.",
    highlights: ["Hands-on Hardware & Software Tracks", "Packed Auditorium Interactive Talks", "Peer-led Technical Coding Circles"],
    imagePlaceholder: "Real Student Workshop Session",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.04 PM (1).jpeg",
    tag: "Technical Immersion"
  },
  {
    id: "spacetech",
    stepNumber: "03",
    title: "Distinguished Guest Lectures",
    subtitle: "Space Technology & AI with ISRO Scientists",
    description: "Branch members host premier international dignitaries including Shri Puneet Kumar Mishra (URSC ISRO, IEEE AESS Global VP) for cutting-edge masterclasses in satellite antenna systems and space robotics.",
    highlights: ["ISRO Satellite Technology Insights", "Global IEEE AESS Direct Interaction", "Research & Internship Guidance"],
    imagePlaceholder: "Expert Talk with ISRO Scientist",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.23.04 PM (1).jpeg",
    tag: "Distinguished Lectures"
  },
  {
    id: "mentorship",
    stepNumber: "04",
    title: "Core Student Leadership",
    subtitle: "Executive Committee Delivering Impact",
    description: "Backed by passionate branch counselor Prof. Rafik Ahmad and institutional leadership, the 2026 Office Bearers team leads student-driven technical excellence across 7 active societies.",
    highlights: ["Dedicated Office Bearers Team", "Inter-Society Collaboration", "Section Conference Delegation"],
    imagePlaceholder: "2026 Core Executive Team on Stage",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg",
    tag: "Executive Leadership"
  },
  {
    id: "achievements",
    stepNumber: "05",
    title: "Recognitions & Stage Honors",
    subtitle: "Felicitation & Outstanding Volunteer Awards",
    description: "From stellar performances in IEEE UP Section events to prestigious mementos and awards presented by college directors and dignitaries, our branch continuously brings laurels to BBDITM.",
    highlights: ["Mementos & Dignitary Felicitations", "Section Outstanding Volunteer Honors", "WIE Lead Special Recognitions"],
    imagePlaceholder: "Annual Stage Felicitation & Honors",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.26.20 PM.jpeg",
    tag: "Branch Honors"
  },
  {
    id: "global",
    stepNumber: "06",
    title: "Global IEEE Connection",
    subtitle: "Access to IEEE Xplore, Region 10 & 400k+ Engineers",
    description: "Being part of IEEE BBDITM links our students directly into the world's largest technical professional organization with over 400,000 members across 160+ countries and global conferences.",
    highlights: ["Access to IEEE Xplore Digital Library", "International Travel & Project Grants", "Global IEEE Student Competitions"],
    imagePlaceholder: "IEEE BBDITM Official Office Bearers 2026",
    imageUrl: "/images/ieee-office-bearers-2026.png",
    tag: "Global Community"
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "evt-ieeeday",
    title: "IEEE Day 2026: Worldwide Flagship Celebration",
    date: "October 6, 2026",
    time: "10:00 AM - 05:00 PM IST",
    location: "Main Auditorium & Innovation Labs, BBDITM",
    category: "Flagship",
    description: "Celebrating the anniversary of the first IEEE technical meeting in 1884. Global theme: 'Leveraging Technology for a Better Tomorrow' with keynote lectures, student innovations, and technical award announcements.",
    imagePlaceholder: "IEEE Day Global Celebration",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.26.20 PM.jpeg",
    featured: true,
    registrationOpen: true
  },
  {
    id: "evt-ieeextreme",
    title: "IEEEXtreme 20.0: Global 24-Hour Virtual Coding Challenge",
    date: "October 24, 2026",
    time: "24 Hours Non-Stop (00:00 - 23:59 UTC)",
    location: "Central Computing Facility (CCF), BBDITM Lucknow",
    category: "Hackathon",
    description: "IEEE's signature virtual competitive programming challenge where student proctors and teams across 100+ countries compete simultaneously to solve algorithmic problems on HackerRank.",
    imagePlaceholder: "IEEEXtreme 24h Programming Challenge",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.04 PM (2).jpeg",
    featured: true,
    registrationOpen: true
  },
  {
    id: "evt-pesday",
    title: "IEEE PES Day 2026: Sustainable Clean Energy & Smart Grids",
    date: "April 22–24, 2026",
    time: "11:00 AM - 04:00 PM IST",
    location: "Electrical Engineering Block & Seminar Hall, BBDITM",
    category: "Seminar",
    description: "Annual global celebration of IEEE Power & Energy Society (PES) highlighting clean microgrids, renewable solar energy conversion, and electric vehicle powertrain topologies.",
    imagePlaceholder: "IEEE PES Day Green Energy Conclave",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.26.09 PM.jpeg",
    featured: false,
    registrationOpen: true
  },
  {
    id: "evt-wieday",
    title: "IEEE WIE International Leadership Day & #wielead Conclave",
    date: "June 23, 2026",
    time: "02:00 PM - 05:30 PM IST",
    location: "Seminar Hall 1, BBDITM Lucknow",
    category: "Seminar",
    description: "Worldwide celebration honoring female innovators in STEM. Featuring inspirational talks by women tech leaders, career roadmap mentoring, and student research awards.",
    imagePlaceholder: "IEEE WIE International Leadership Day",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.32.30 PM.jpeg",
    featured: false,
    registrationOpen: true
  },
  {
    id: "evt-spacetech",
    title: "Distinguished Masterclass: Space Technology & AI Innovation",
    date: "2026 Special Session",
    time: "11:00 AM - 01:30 PM IST",
    location: "Main Auditorium, BBDITM Campus",
    category: "Flagship",
    description: "Special masterclass delivered by Shri Puneet Kumar Mishra (Head, Satellite Antenna Systems at URSC ISRO & Global VP, IEEE AESS) on satellite communication arrays and deep-space telemetry.",
    imagePlaceholder: "Expert Lecture by ISRO Dignitary",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.23.04 PM (1).jpeg",
    featured: false,
    registrationOpen: true
  },
  {
    id: "evt-agm",
    title: "IEEE BBDITM Annual General Meeting & Felicitation 2026",
    date: "Annual Session 2026",
    time: "10:30 AM - 04:30 PM IST",
    location: "Main Auditorium, BBDITM Campus",
    category: "Flagship",
    description: "Installation ceremony of the 2026 Executive Committee, presentation of official branch charter milestones, memento distributions to mentors, and project demonstrations.",
    imagePlaceholder: "Annual General Meeting & Installation Ceremony",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg",
    featured: false,
    registrationOpen: true
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Autonomous Campus Surveillance & Hazard Detection Rover",
    category: "Robotics & Computer Vision",
    technology: ["ROS 2", "Python", "YOLOv8", "Jetson Nano", "LiDAR"],
    description: "A solar-assisted four-wheeled robotic platform with SLAM navigation and real-time visual anomaly reporting designed for institutional safety.",
    imagePlaceholder: "Autonomous Rover Prototype",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.03 PM (1).jpeg",
    githubUrl: "https://github.com/ieee-bbditm",
    demoUrl: "#"
  },
  {
    id: "proj-2",
    title: "Smart Grid Power Quality Monitoring Node",
    category: "IoT & Power Systems (PELS/PES)",
    technology: ["ESP32", "MQTT", "InfluxDB", "Grafana", "Current Transformers"],
    description: "High-precision edge device monitoring real-time power factor, total harmonic distortion (THD), and voltage sags with automated telemetry alerts.",
    imagePlaceholder: "Smart Grid Sensor Hardware",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.26.09 PM.jpeg",
    githubUrl: "https://github.com/ieee-bbditm",
    demoUrl: "#"
  },
  {
    id: "proj-3",
    title: "BioSignal: Low-cost Wearable ECG & Vitals Telemetry",
    category: "Biomedical Engineering (EMB)",
    technology: ["AD8232", "BLE 5.0", "Flutter", "Signal Processing"],
    description: "Ultra-portable wearable device designed for continuous cardiac health telemetry with on-chip arrhythmia detection filters.",
    imagePlaceholder: "Wearable ECG Prototype Board",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.04 PM.jpeg",
    githubUrl: "https://github.com/ieee-bbditm",
    demoUrl: "#"
  },
  {
    id: "proj-4",
    title: "AgroSense: Distributed Precision Agriculture Network",
    category: "Agritech & LoRaWAN (SIGHT)",
    technology: ["LoRa", "Soil NPK Sensors", "Solar Harvesting", "FastAPI"],
    description: "Low-power multi-node soil and microclimate network assisting local farmers with automated drip irrigation triggers and fertilizer predictions.",
    imagePlaceholder: "Distributed Sensor Network",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.01 PM.jpeg",
    githubUrl: "https://github.com/ieee-bbditm",
    demoUrl: "#"
  }
];

export const FACULTY_DATA: FacultyAdvisor[] = [
  {
    id: "fac-1",
    name: "Prof. Rafik Ahmad",
    designation: "Professor & Senior Faculty Member",
    department: "Department of Electronics & Communication Engineering",
    ieeeRole: "Branch Counselor, IEEE BBDITM Student Branch (STB10214)",
    imagePlaceholder: "Branch Counselor Prof. Rafik Ahmad",
    imageUrl: "/images/prof-rafik-ahmad.png",
    bio: "Pillar of IEEE BBDITM. Guiding the student branch in technical roadmap execution, IEEE Uttar Pradesh Section collaboration, charter compliance, and student research integrity."
  },
  {
    id: "fac-2",
    name: "Mrs. Alka Das",
    designation: "Hon'ble Chairperson, BBD Educational Group",
    department: "Institutional Patronage",
    ieeeRole: "Chief Patron",
    imagePlaceholder: "Honorable Chairperson Mrs. Alka Das",
    imageUrl: "/images/mrs-alka-das.png",
    bio: "Providing vision and institutional support to establish world-class technological laboratories and IEEE professional engagement for student engineers."
  },
  {
    id: "fac-3",
    name: "Dr. Anurag Tiwari",
    designation: "Assistant Director, BBDITM",
    department: "Academic & Administrative Leadership",
    ieeeRole: "Institutional Patron & Technical Advisor",
    imagePlaceholder: "Dr. Anurag Tiwari - Assistant Director",
    imageUrl: "/images/dr-anurag-tiwari.png",
    bio: "Guiding institutional research initiatives, student branch facilities, technical infrastructure, and interdisciplinary innovation at BBDITM Lucknow."
  },
  {
    id: "fac-4",
    name: "Shri Viraj Sagar Das",
    designation: "Hon'ble President, BBD Educational Group",
    department: "Institutional Governance",
    ieeeRole: "Patron",
    imagePlaceholder: "Honorable President Shri Viraj Sagar Das",
    imageUrl: "/images/viraj-sagar-das.png",
    bio: "Promoting student entrepreneurship, industry-academia linkages, and modern engineering standards across Babu Banarasi Das educational institutions."
  }
];

export const TEAM_DATA_2026: TeamMember[] = [
  {
    id: "tm-1",
    name: "Mohammed Saif",
    role: "Chair / President",
    department: "IEEE Student Branch",
    year: "Final Year B.Tech",
    imagePlaceholder: "Mohammed Saif - President / Chair",
    imageUrl: "/images/mohammed-saif.png"
  },
  {
    id: "tm-2",
    name: "Vaibhav Pandey",
    role: "Vice-Chair",
    department: "IEEE Student Branch",
    year: "B.Tech",
    imagePlaceholder: "Vaibhav Pandey - Vice Chair",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-3",
    name: "Arnav Gupta",
    role: "Treasurer",
    department: "IEEE Student Branch",
    year: "B.Tech",
    imagePlaceholder: "Arnav Gupta - Treasurer",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-4",
    name: "Swapnil Tripathi",
    role: "Chair",
    department: "Computer Society",
    year: "B.Tech CSE",
    imagePlaceholder: "Swapnil Tripathi - Chair CS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-5",
    name: "Vanshika Sharma",
    role: "Chair",
    department: "Women in Engineering (WIE)",
    year: "B.Tech",
    imagePlaceholder: "Vanshika Sharma - Chair WIE",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.32.30 PM.jpeg"
  },
  {
    id: "tm-6",
    name: "Vibhav Shukla",
    role: "Chair",
    department: "Engineering in Medicine & Biology (EMB)",
    year: "B.Tech",
    imagePlaceholder: "Vibhav Shukla - Chair EMB",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-7",
    name: "Surbhi Pandey",
    role: "Chair",
    department: "Power Electronics Society (PELS)",
    year: "B.Tech EE",
    imagePlaceholder: "Surbhi Pandey - Chair PELS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-8",
    name: "Yash Gupta",
    role: "Chair",
    department: "Signal Processing Society (SPS)",
    year: "B.Tech",
    imagePlaceholder: "Yash Gupta - Chair SPS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-9",
    name: "Sheetal Pal",
    role: "Vice-Chair",
    department: "Power Electronics Society (PELS)",
    year: "B.Tech Innovator",
    imagePlaceholder: "Sheetal Pal - Vice Chair PELS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-10",
    name: "Anshul Dubey",
    role: "Vice-Chair",
    department: "SIGHT (Humanitarian)",
    year: "B.Tech",
    imagePlaceholder: "Anshul Dubey - Vice Chair SIGHT",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-11",
    name: "Yuvraj Buddha",
    role: "Vice-Chair",
    department: "Computer Society",
    year: "B.Tech",
    imagePlaceholder: "Yuvraj Buddha - Vice Chair CS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-12",
    name: "Akshat Mishra",
    role: "Vice-Chair",
    department: "Signal Processing Society (SPS)",
    year: "B.Tech",
    imagePlaceholder: "Akshat Mishra - Vice Chair SPS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-13",
    name: "Adity Khan",
    role: "Treasurer",
    department: "Women in Engineering (WIE)",
    year: "B.Tech",
    imagePlaceholder: "Adity Khan - Treasurer WIE",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.32.30 PM.jpeg"
  },
  {
    id: "tm-14",
    name: "Arshiya Zehra",
    role: "Webmaster",
    department: "Computer Society",
    year: "B.Tech",
    imagePlaceholder: "Arshiya Zehra - Webmaster CS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-15",
    name: "Sumit Raj",
    role: "Webmaster",
    department: "Power Electronics Society (PELS)",
    year: "B.Tech",
    imagePlaceholder: "Sumit Raj - Webmaster PELS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-16",
    name: "Anshika Singh",
    role: "Webmaster",
    department: "Women in Engineering (WIE)",
    year: "B.Tech",
    imagePlaceholder: "Anshika Singh - Webmaster WIE",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.32.30 PM.jpeg"
  },
  {
    id: "tm-17",
    name: "Saurabh Dwivedi",
    role: "Secretary",
    department: "Computer Society",
    year: "B.Tech",
    imagePlaceholder: "Saurabh Dwivedi - Secretary CS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-18",
    name: "Arpita Yadav",
    role: "Secretary",
    department: "Signal Processing Society (SPS)",
    year: "B.Tech",
    imagePlaceholder: "Arpita Yadav - Secretary SPS",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-19",
    name: "Aman Trivedi",
    role: "Secretary",
    department: "SIGHT (Humanitarian)",
    year: "B.Tech",
    imagePlaceholder: "Aman Trivedi - Secretary SIGHT",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  },
  {
    id: "tm-20",
    name: "Aayush Sharma",
    role: "Secretary",
    department: "SIGHT (Humanitarian)",
    year: "B.Tech",
    imagePlaceholder: "Aayush Sharma - Secretary SIGHT",
    imageUrl: "/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg"
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-kochi-plaque",
    year: "2022",
    title: "IEEE India Council Award — Outstanding Student Branch (National Plaque)",
    organization: "IEEE India Council (Presented 25th Nov 2022 at Kochi)",
    description: "Presented to Babu Banarsi Das Institute of Technology and Management (STB10214), Lucknow, during the IEEE India Council Awards Night held at Kochi, signed by S.K. Kulkarni (Vice Chair Awards) and Suresh Nair (Chair, IEEE India Council).",
    imagePlaceholder: "IEEE India Council Outstanding Student Branch Plaque - Kochi 2022",
    imageUrl: "/images/awards/award-india-council-2022-plaque.jpg",
    category: "National Council Plaque"
  },
  {
    id: "ach-u10-cert",
    year: "2022",
    title: "U10 Initiative 2022: Certificate of Appreciation (30+ Events)",
    organization: "IEEE Uttar Pradesh Section",
    description: "Presented to IEEE STB BBDITM, Lucknow (STB10214) for participating and successfully completing the U10 initiative by organising more than 30 IEEE technical events in the year 2022, signed by Section Student Representative Ankit Yadav, SAC Chair V.S. Tripathi, and Section Chair Dr. Satish K. Singh.",
    imagePlaceholder: "U10 Initiative Certificate of Appreciation - 30+ Events in 2022",
    imageUrl: "/images/awards/award-u10-initiative-2022-cert.png",
    category: "Section Certificate"
  },
  {
    id: "ach-membership-growth",
    year: "2022",
    title: "Branch Membership Growth / Retention Award 2022",
    organization: "IEEE UP Section (Presented 20 Jan 2023 at IIT BHU Varanasi)",
    description: "Presented to IEEE Babu Banarsi Das Institute of Technology and Management Student Branch (Branch Code: STB10214) at the IEEE U.P. Section Annual General Meeting held at Indian Institute of Technology (BHU) Varanasi, signed by Dr. Kumar Vaibhav Srivastava and Dr. Satish K. Singh.",
    imagePlaceholder: "Branch Membership Growth / Retention Award Certificate 2022",
    imageUrl: "/images/awards/award-membership-retention-2022-cert.png",
    category: "Section Growth Award"
  },
  {
    id: "ach-rafik-counselor",
    year: "2021",
    title: "Outstanding Branch Counselor Award — Dr. Rafik Ahamad",
    organization: "IEEE UP Section (SRMCEM AGM 16 Jan 2022)",
    description: "Presented to Dr. Rafik Ahamad, BBDITM Lucknow, at the IEEE U.P. Section Annual General Meeting held on January 16, 2022 at Shri Ramswaroop Memorial College of Engineering and Management, Lucknow, signed by Dr. S.N. Singh and Dr. Satish K. Singh.",
    imagePlaceholder: "Outstanding Branch Counselor Award Certificate - Dr. Rafik Ahamad",
    imageUrl: "/images/awards/award-rafik-ahamad-counselor-2021-cert.png",
    category: "Counselor Award"
  },
  {
    id: "ach-rafik-newsletter",
    year: "2022",
    title: "Certificate of Appreciation: Convener IEEE Periodic Newsletter — Dr. Rafik Ahamad",
    organization: "IEEE UP Section (Presented 20 Jan 2023 at BHU Varanasi)",
    description: "Presented to Rafik Ahamad, BBD Institute of Technology & Management, Lucknow, at the IEEE UP Section AGM held at Banaras Hindu University, Varanasi, for exemplary service as convener in IEEE Periodic Section Newsletter in 2022.",
    imagePlaceholder: "Certificate of Appreciation for Newsletter Convener - Dr. Rafik Ahamad",
    imageUrl: "/images/awards/award-rafik-ahamad-newsletter-2022-cert.png",
    category: "Section Service Award"
  },
  {
    id: "ach-1",
    year: "2023",
    title: "OUTSTANDING STUDENT BRANCH OF THE YEAR 2023 , IEEE INDIA COUNCIL",
    organization: "IEEE INDIA Council (Received at Hyderabad)",
    description: "The IEEE BBDITM Student Branch on receiving the “Outstanding Student Branch of the Year Award 2023” from the IEEE INDIA Council.\n\nEarning this prestigious recognition highlights hard work of the student branch members. It’s a testament to their commitment to organizing outstanding events and providing invaluable opportunities for growth and development to their members.",
    imagePlaceholder: "IEEE India Council Outstanding Student Branch 2023 Felicitation",
    imageUrl: "/images/awards/award-india-council-branch-poster.png",
    category: "National Council Honor"
  },
  {
    id: "ach-2",
    year: "2023",
    title: "OUTSTANDING STUDENT VOLUNTEER OF THE YEAR 2023 , IEEE INDIA COUNCIL",
    organization: "IEEE INDIA Council",
    description: "Congratulations to Mr. Hitansh Dwivedi and the entire IEEE BBDITM Student Branch on this outstanding achievement! It’s a testament to their dedication and commitment to the engineering community.",
    imagePlaceholder: "Outstanding Student Volunteer Award - Mr. Hitansh Dwivedi",
    imageUrl: "/images/awards/award-hitansh-volunteer-poster.jpg",
    category: "Student Volunteer Honor"
  },
  {
    id: "ach-3",
    year: "UP Section",
    title: "Best Student Branch in Uttar Pradesh Section",
    organization: "IEEE Uttar Pradesh Section (Region 10)",
    description: "It is great matter of joy to inform you that, IEEE Babu Banarasi Das Institute of Technology & Management Student Branch (STB10214) got awarded with “Best Student Branch in Uttar Pradesh Section”.",
    imagePlaceholder: "Best Student Branch Award Framed Certificate - IEEE UP Section AGM",
    imageUrl: "/images/awards/award-best-branch-up-section-cert.jpg",
    category: "Section Excellence"
  }
];

export const WHY_IEEE_POINTS = [
  {
    title: "Learn",
    description: "Access hands-on technical workshops, IEEE webinars, and digital educational libraries designed to accelerate your engineering depth.",
    icon: "GraduationCap"
  },
  {
    title: "Build",
    description: "Collaborate on hardware rovers, IoT networks, and modern software applications with dedicated lab workspace and equipment.",
    icon: "Hammer"
  },
  {
    title: "Network",
    description: "Connect with IEEE Senior Members, alumni working in top tech enterprises, and peer innovators across the IEEE UP Section and Region 10.",
    icon: "Network"
  },
  {
    title: "Lead",
    description: "Gain authentic managerial and organizational leadership by organizing regional symposiums, hackathons, and technical tracks.",
    icon: "Users"
  },
  {
    title: "Research",
    description: "Write and submit peer-reviewed research papers with discounted member access to IEEE Xplore Digital Library and conference grants.",
    icon: "BookOpen"
  },
  {
    title: "Compete",
    description: "Represent BBDITM Lucknow at premier national and international hackathons, IEEE IEEEXtreme 24h coding competitions, and project expos.",
    icon: "Trophy"
  }
];
