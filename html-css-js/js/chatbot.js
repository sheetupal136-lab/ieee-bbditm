// ===================================================================
// IEEE BBDITM STANDALONE AI AGENT ENGINE (CHATBOT)
// ===================================================================

const IEEE_KNOWLEDGE_BASE = [
  {
    keywords: ['join', 'membership', 'register', 'cost', 'fee', 'how to join'],
    reply: `To join **IEEE BBDITM Student Branch (STB10214)**:
1. Visit the official IEEE global portal: <a href="https://www.ieee.org/membership/join/index.html" target="_blank" style="color:#00a3e0;text-decoration:underline;">ieee.org/membership/join</a>
2. Create an account with your college email.
3. Select <strong>Student Membership</strong> (eligible for 50% discount in India).
4. Enter institution as <strong>Babu Banarasi Das Institute of Technology and Management</strong> (Code: <strong>STB10214</strong>).
5. Share your 8-digit IEEE ID with Branch Counselor <strong>Prof. Rafik Ahmad</strong> or the Executive Committee!`
  },
  {
    keywords: ['sheetal', 'sheetal pal', 'pels vice chair'],
    reply: `<strong>Sheetal Pal</strong> is the <strong>Vice-Chairperson of IEEE Power Electronics Society (PELS)</strong> Student Chapter at IEEE BBDITM for 2026! Working with Chair Surbhi Pandey and Counselor Prof. Rafik Ahmad on power electronics innovations.`
  },
  {
    keywords: ['team', 'office bearers', 'chair', 'executive', 'saif', 'vaibhav', 'arnav'],
    reply: `<strong>IEEE BBDITM 2026 Office Bearers</strong>:
• <strong>Chief Patron:</strong> Mrs. Alka Das (Hon'ble Chairperson, BBD Group)
• <strong>Patron:</strong> Shri Viraj Sagar Das (Hon'ble President, BBD Group)
• <strong>Asst. Director:</strong> Dr. Anurag Tiwari
• <strong>Branch Counselor:</strong> Prof. Rafik Ahmad
• <strong>Chair:</strong> Mohammed Saif | <strong>Vice-Chair:</strong> Vaibhav Pandey
• <strong>Treasurer:</strong> Arnav Gupta
• <strong>CS Chair:</strong> Swapnil Tripathi | <strong>WIE Chair:</strong> Vanshika Sharma
• <strong>PELS Chair:</strong> Surbhi Pandey | <strong>PELS Vice-Chair:</strong> Sheetal Pal
• <strong>SPS Chair:</strong> Yash Gupta | <strong>EMB Chair:</strong> Vibhav Shukla
• <strong>SIGHT Vice-Chair:</strong> Anshul Dubey`
  },
  {
    keywords: ['isro', 'space', 'puneet', 'expert talk'],
    reply: `<strong>Distinguished Expert Talk on Space Technology and AI (2026)</strong>:
• <strong>Speaker:</strong> Shri Puneet Kumar Mishra (Head, Satellite Antenna Systems at URSC ISRO; Global VP, IEEE AESS)
• <strong>Venue:</strong> Main Auditorium, BBDITM Lucknow
• Focused on satellite telemetry, antenna arrays, and AI in deep space exploration!`
  },
  {
    keywords: ['societies', 'chapters', 'cs', 'pes', 'pels', 'wie', 'sps', 'ras', 'sight'],
    reply: `IEEE BBDITM hosts <strong>7 Active Societies & Groups</strong>:
1. <strong>IEEE CS:</strong> Computer Society (AI/ML, Web, Hackathons)
2. <strong>IEEE PES:</strong> Power & Energy Society (Clean Grids, Solar)
3. <strong>IEEE PELS:</strong> Power Electronics Society (Converters, Robotics)
4. <strong>IEEE SPS:</strong> Signal Processing Society (DSP, Computer Vision)
5. <strong>IEEE RAS:</strong> Robotics and Automation Society (ROS 2, Rovers)
6. <strong>IEEE WIE:</strong> Women in Engineering (#wielead Conclaves)
7. <strong>IEEE SIGHT:</strong> Humanitarian Technology`
  },
  {
    keywords: ['counselor', 'rafik', 'faculty'],
    reply: `Our official Branch Counselor is <strong>Prof. Rafik Ahmad</strong>, Department of Electronics & Communication Engineering (ECE) at BBDITM Lucknow. The STB10214 counselor chamber is located inside campus!`
  }
];

function initIEEEChatbot() {
  const triggerBtn = document.getElementById('chatTrigger');
  const chatWindow = document.getElementById('chatWindow');
  const chatCloseBtn = document.getElementById('chatCloseBtn');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  if (!triggerBtn || !chatWindow) return;

  triggerBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
  });

  if (chatCloseBtn) {
    chatCloseBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });
  }

  function appendMessage(sender, text) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleQuery(query) {
    if (!query.trim()) return;
    appendMessage('user', query);

    const q = query.toLowerCase();
    let reply = `Thank you for asking about <strong>IEEE BBDITM (STB10214)</strong>! 
You can join on <a href="https://www.ieee.org/membership/join/index.html" target="_blank" style="color:#00a3e0;text-decoration:underline;">ieee.org</a> or contact Branch Counselor <strong>Prof. Rafik Ahmad</strong>. Check out our 2026 Office Bearers team roster!`;

    for (const item of IEEE_KNOWLEDGE_BASE) {
      if (item.keywords.some(k => q.includes(k))) {
        reply = item.reply;
        break;
      }
    }

    setTimeout(() => {
      appendMessage('ai', reply);
    }, 400);
  }

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = chatInput.value;
      chatInput.value = '';
      handleQuery(val);
    });
  }

  // Quick Pills
  document.querySelectorAll('.chat-pills .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleQuery(btn.getAttribute('data-query') || btn.innerText);
    });
  });
}
