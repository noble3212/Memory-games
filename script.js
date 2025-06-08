const quizData = [
  {
    question: "Which device operates at Layer 3 of the OSI model?",
    options: ["Switch", "Router", "Hub", "Repeater"],
    answer: "Router"
  },
  {
    question: "What protocol is used to translate domain names into IP addresses?",
    options: ["DHCP", "FTP", "DNS", "SSH"],
    answer: "DNS"
  },
  {
    question: "Which of the following uses port 443 by default?",
    options: ["HTTP", "FTP", "HTTPS", "Telnet"],
    answer: "HTTPS"
  },
  {
    question: "Which topology requires a central device?",
    options: ["Bus", "Ring", "Mesh", "Star"],
    answer: "Star"
  },
  {
    question: "Which layer of the OSI model is responsible for end-to-end communication?",
    options: ["Session", "Transport", "Network", "Data Link"],
    answer: "Transport"
  },
  {
    question: "Which layer of the OSI model is responsible for routing packets to their destination across multiple networks?",
    options: ["Network", "Transport", "Data Link", "Application"],
    answer: "Network"
  },
  {
    question: "Which layer of the OSI model deals with mechanical and electrical specifications (e.g., RJ45)?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: "Physical"
  },
  {
    question: "What is the primary function of the TCP protocol in network communication?",
    options: ["Encryption of data", "Routing of data packets", "Ensuring reliable data transfer", "Compressing data"],
    answer: "Ensuring reliable data transfer"
  },
  {
    question: "Which protocol is commonly used for automatically assigning IP addresses to devices on a network?",
    options: ["DHCP", "FTP", "HTTP", "SNMP"],
    answer: "DHCP"
  },
  {
    question: "Which layer of the OSI model is responsible for translating data from the application layer into a format suitable for transmission?",
    options: ["Presentation", "Transport", "Data Link", "Network"],
    answer: "Presentation"
  },
  {
    question: "What does NAT stand for in networking?",
    options: ["Network Address Translation", "Native Address Tracker", "Network Administration Tool", "Network Application Testing"],
    answer: "Network Address Translation"
  },
  {
    question: "What is the purpose of a default gateway in a network?",
    options: ["To route traffic within the local network", "To route traffic to external networks", "To assign IP addresses to devices", "To encrypt data traffic"],
    answer: "To route traffic to external networks"
  },
  {
    question: "What is the purpose of a subnet mask in IP addressing?",
    options: ["To identify the gateway address", "To assign MAC addresses", "To divide an IP address into network and host portions", "To encrypt data packets"],
    answer: "To divide an IP address into network and host portions"
  },
  {
    question: "Which protocol is used to translate domain names into IP addresses?",
    options: ["DHCP", "FTP", "DNS", "SSH"],
    answer: "DNS"
  },
  {
    question: "Which protocol is used for secure data transmission in e-commerce transactions?",
    options: ["HTTPS", "FTP", "SMTP", "ARP"],
    answer: "HTTPS"
  },
  {
    question: "Which protocol maps IP network addresses to MAC (physical) addresses of devices?",
    options: ["ARP", "RARP", "ICMP", "PPP"],
    answer: "ARP"
  },
  {
    question: "Which protocol is used to securely transfer files over a network?",
    options: ["FTP", "SFTP", "TFTP", "SMTP"],
    answer: "SFTP"
  },
  {
    question: "Which of the following is a private IP address?",
    options: ["12.0.0.1", "168.172.19.39", "172.15.14.36", "192.168.24.43"],
    answer: "192.168.24.43"
  },
  {
    question: "Which command is used to test connectivity between two network devices?",
    options: ["ipconfig", "ping", "netstat", "tracert"],
    answer: "ping"
  },
  {
    question: "Which protocol is used to securely transfer files over a network?",
    options: ["FTP", "SFTP", "TFTP", "SMTP"],
    answer: "SFTP"
  },
  {
    question: "Which IP address class provides the most host addresses by default?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answer: "Class A"
  },
  {
    question: "Which protocol is used for error reporting and diagnostics in IP networks?",
    options: ["ICMP", "ARP", "TCP", "UDP"],
    answer: "ICMP"
  },
  {
    question: "What does the acronym VPN stand for?",
    options: ["Virtual Private Network", "Verified Public Network", "Virtual Public Node", "Variable Private Network"],
    answer: "Virtual Private Network"
  },
  {
    question: "Which device forwards packets based on MAC addresses?",
    options: ["Switch", "Router", "Hub", "Repeater"],
    answer: "Switch"
  },
  {
    question: "Which of the following is a broadcast address in IPv4?",
    options: ["255.255.255.255", "0.0.0.0", "127.0.0.1", "192.168.1.1"],
    answer: "255.255.255.255"
  },
  {
    question: "What is the default subnet mask for a Class C IP address?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    answer: "255.255.255.0"
  },
  {
    question: "Which layer of the OSI model is responsible for establishing, managing, and terminating sessions?",
    options: ["Session", "Transport", "Network", "Data Link"],
    answer: "Session"
  },
  {
    question: "What protocol is used for sending email between servers?",
    options: ["SMTP", "POP3", "IMAP", "FTP"],
    answer: "SMTP"
  },
  {
    question: "What does MAC stand for in networking?",
    options: ["Media Access Control", "Message Access Control", "Media Application Control", "Message Application Control"],
    answer: "Media Access Control"
  },
  {
    question: "Which topology requires a central device?",
    options: ["Bus", "Ring", "Mesh", "Star"],
    answer: "Star"
  },
  {
    question: "Which protocol is used for remote command line login to network devices?",
    options: ["Telnet", "FTP", "SSH", "SMTP"],
    answer: "SSH"
  },
  {
    question: "Which port number is used by the HTTP protocol by default?",
    options: ["80", "443", "21", "25"],
    answer: "80"
  },
  {
    question: "Which protocol helps to automatically detect devices on a network?",
    options: ["LLDP", "DHCP", "DNS", "ARP"],
    answer: "LLDP"
  },
  {
    question: "What is the function of a firewall in a network?",
    options: ["To filter incoming and outgoing network traffic", "To assign IP addresses", "To route packets", "To provide physical connectivity"],
    answer: "To filter incoming and outgoing network traffic"
  },
  {
    question: "Which wireless encryption standard is considered the most secure?",
    options: ["WEP", "WPA", "WPA2", "WPS"],
    answer: "WPA2"
  },
  {
    question: "Which protocol is used to synchronize time on network devices?",
    options: ["NTP", "SNMP", "FTP", "SMTP"],
    answer: "NTP"
  },
  {
    question: "What is the maximum cable length for a Cat5e Ethernet cable segment?",
    options: ["100 meters", "10 meters", "1 kilometer", "500 meters"],
    answer: "100 meters"
  },
  {
    question: "Which layer of the OSI model provides encryption and compression services?",
    options: ["Presentation", "Session", "Transport", "Network"],
    answer: "Presentation"
  },
  {
    question: "What device regenerates and amplifies signals in a network?",
    options: ["Repeater", "Router", "Switch", "Hub"],
    answer: "Repeater"
  },
  {
    question: "Which IPv6 address type is used for one-to-one communication?",
    options: ["Unicast", "Multicast", "Anycast", "Broadcast"],
    answer: "Unicast"
  },
  {
    question: "Which command shows the routing table on a Windows machine?",
    options: ["route print", "ipconfig", "ping", "tracert"],
    answer: "route print"
  },
  {
    question: "Which port is typically used for DNS queries?",
    options: ["53", "80", "21", "443"],
    answer: "53"
  },
  {
    question: "Which layer of the OSI model establishes, manages, and terminates virtual circuits?",
    options: ["Session", "Presentation", "Transport", "Network"],
    answer: "Session"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(button, currentQuestion.answer);
    optionsContainer.appendChild(button);
  });

  nextButton.style.display = "none";
}

function selectAnswer(button, correctAnswer) {
  const allButtons = optionsContainer.querySelectorAll("button");

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.style.backgroundColor = "#16a34a"; // green
    } else {
      btn.style.backgroundColor = "#dc2626"; // red
    }
  });

  if (button.textContent === correctAnswer) {
    score++;
  }

  nextButton.style.display = "block";
}

function showScore() {
  questionElement.textContent = "Quiz Completed!";
  optionsContainer.innerHTML = "";
  nextButton.style.display = "none";
  scoreDisplay.textContent = `Your Score: ${score} / ${quizData.length}`;
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
});

showQuestion();
