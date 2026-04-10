// 1. UI Helpers
        const showMessage = (text, type = "info") => {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            const bgColor = type === "success" ? "bg-green-600" : type === "error" ? "bg-red-600" : "bg-blue-600";
            toast.className = `flex items-center gap-3 ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl transform transition-all duration-300 translate-y-20 opacity-0 pointer-events-auto`;
            toast.innerHTML = `<i class="fas ${type === "success" ? "fa-check-circle" : "fa-info-circle"}"></i><span class="font-medium text-sm">${text}</span>`;
            container.appendChild(toast);
            setTimeout(() => toast.classList.remove('translate-y-20', 'opacity-0'), 100);
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        };

        // 2. Interactive Simulation
        function simulateGeneration() {
            const inputVal = document.getElementById('demo-input').value.trim();
            if (!inputVal) {
                showMessage("Please describe your idea first!", "error");
                return;
            }

            const btnText = document.getElementById('btn-text');
            const btnLoader = document.getElementById('btn-loader');
            const btnIcon = document.getElementById('btn-icon');
            const outputPreview = document.getElementById('output-preview');
            const content = document.getElementById('output-content');
            const header = document.getElementById('output-header');
            const codeSnippet = document.getElementById('code-snippet');

            btnText.innerText = "Analyzing Idea Context...";
            btnLoader.classList.remove('hidden');
            btnIcon.classList.add('hidden');
            outputPreview.classList.add('hidden');

            // Logic to make it "Real"
            const keywords = inputVal.toLowerCase();
            let appType = "Digital Platform";
            let stack = "Next.js, Tailwind, TypeScript, OpenAI API";
            let code = "export default function App() {\n  return (\n    <div className='bg-slate-900'>\n      <h1>Building ${inputVal.substring(0,20)}...</h1>\n    </div>\n  );\n}";

            if (keywords.includes('meditation') || keywords.includes('health')) {
                appType = "Mindfulness Wellness App";
                stack = "React Native, Expo, Firebase, Whisper AI";
                code = "const MeditationSession = () => {\n  return (\n    <View style={styles.container}>\n      <Text>Breathing Guide Active</Text>\n      <AI_Assistant prompt='Start mindfulness...' />\n    </View>\n  );\n}";
            } else if (keywords.includes('crypto') || keywords.includes('money') || keywords.includes('fin')) {
                appType = "Fintech Dashboard";
                stack = "Vite, Tailwind, Ethers.js, Chart.js";
                code = "async function connectWallet() {\n  const provider = new ethers.providers.Web3Provider(window.ethereum);\n  await provider.send('eth_requestAccounts', []);\n  console.log('Wallet connected for your project!');\n}";
            }

            const phases = [{
                    title: "Market Research",
                    desc: `Analyzed competition for your "${appType}". Identified gap in existing user experience.`,
                    icon: "fa-search",
                    color: "blue"
                },
                {
                    title: "Visual Architecture",
                    desc: "Generated a responsive High-Fidelity UI based on modern glassmorphism standards.",
                    icon: "fa-palette",
                    color: "purple"
                },
                {
                    title: "Functional Core",
                    desc: `Configured ${stack} environment. Ready for rapid MVP deployment.`,
                    icon: "fa-code",
                    color: "green"
                }
            ];

            setTimeout(() => {
                btnText.innerText = "Writing Source Code...";
                setTimeout(() => {
                    btnText.innerText = "Generate Strategy & Code";
                    btnLoader.classList.add('hidden');
                    btnIcon.classList.remove('hidden');

                    document.getElementById('output-timestamp').innerText = new Date().toLocaleTimeString();
                    header.innerHTML = `<h3 class="text-xl font-bold text-white mb-1">${appType} Blueprint</h3><p class="text-xs text-blue-400">Tech Stack: ${stack}</p>`;
                    codeSnippet.innerText = code;

                    content.innerHTML = '';
                    phases.forEach((p, index) => {
                        const step = document.createElement('div');
                        step.className = `roadmap-step p-4 glass-card border-${p.color}-500/20 bg-${p.color}-500/5 mb-3`;
                        step.style.animationDelay = `${index * 0.1}s`;
                        step.innerHTML = `<div class="flex gap-4"><div class="w-10 h-10 rounded-lg bg-${p.color}-500/10 flex items-center justify-center flex-shrink-0"><i class="fas ${p.icon} text-${p.color}-400"></i></div><div><h4 class="font-bold text-sm text-white mb-1">${p.title}</h4><p class="text-xs text-gray-400 leading-relaxed">${p.desc}</p></div></div>`;
                        content.appendChild(step);
                    });

                    outputPreview.classList.remove('hidden');
                    outputPreview.scrollIntoView({
                        behavior: 'smooth'
                    });
                    showMessage("Full blueprint and initial code generated!", "success");
                }, 1500);
            }, 1000);
        }

        // 3. Global Functions
        window.handleDownload = () => {
            showMessage("Preparing .zip source bundle...", "info");
            setTimeout(() => showMessage("Download started!", "success"), 1000);
        };
        window.handlePricingClick = (p) => showMessage(`Selected ${p} plan. Redirecting...`, "success");
        window.openVideoModal = () => {
            document.getElementById('video-modal').classList.remove('hidden');
            document.getElementById('video-modal').classList.add('flex');
            document.body.style.overflow = 'hidden';
        };
        window.closeVideoModal = () => {
            document.getElementById('video-modal').classList.add('hidden');
            document.body.style.overflow = '';
        };

        // 4. Mobile Nav
        document.getElementById('mobile-menu-btn').onclick = () => document.getElementById('mobile-menu').classList.toggle('hidden');
