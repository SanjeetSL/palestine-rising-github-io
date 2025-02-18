      function updateCountdown() {
            const eventDate = new Date('March 10, 2025 14:00:00').getTime();
            const now = new Date().getTime();
            const difference = eventDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerText = `Next Protest in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds!`;
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();
