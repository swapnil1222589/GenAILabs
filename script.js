        // 1. Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            }
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            });
        });

        // 2. Smooth Scroll for all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 64, // Subtract nav height
                        behavior: 'smooth'
                    });
                }
            });
        });

        // 3. Project View Logic
        function handleProjectView() {
            showMessage("Generating latest project report...", "info");
            setTimeout(() => {
                window.scrollTo({
                    top: document.querySelector('#solution').offsetTop - 80,
                    behavior: 'smooth'
                });
                showMessage("Success! Project data loaded.", "success");
            }, 1000);
        }

        // 4. Video Modal Logic
        const videoModal = document.getElementById('video-modal');
        function openVideoModal() {
            videoModal.classList.remove('hidden');
            videoModal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }

        function closeVideoModal() {
            videoModal.classList.add('hidden');
            videoModal.classList.remove('flex');
            document.body.style.overflow = ''; // Restore scroll
        }

        // 5. Refined Toast Notification
        function showMessage(text, type = "info") {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            const bgColor = type === "success" ? "bg-green-600" : type === "info" ? "bg-blue-600" : "bg-red-600";
            const icon = type === "success" ? "fa-check-circle" : "fa-info-circle";

            toast.className = `flex items-center gap-3 ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl z-[100] transform transition-all duration-300 translate-y-20 opacity-0 pointer-events-auto`;
            toast.innerHTML = `
                <i class="fas ${icon}"></i>
                <span class="font-medium">${text}</span>
            `;
            
            container.appendChild(toast);
            
            // Animate In
            setTimeout(() => {
                toast.classList.remove('translate-y-20', 'opacity-0');
            }, 100);

            // Animate Out & Remove
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // Keyboard listener for modal
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeVideoModal();
        });
