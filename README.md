🌐 TripGenius — AI Trip Planner Powered by Gemini 🧠✈️
Smart. Stylish. Supercharged by AI.
Plan smarter, travel better. TripGenius takes your travel goals and turns them into beautifully crafted, personalized itineraries using Gemini AI. From city explorers to weekend wanderers, this full-stack app helps you plan trips effortlessly with a clean, responsive UI and real-time cloud storage — all in one place.

✨ Key Features
🧠 Gemini AI Integration
 Instantly generate custom travel itineraries based on destination, days, budget, and traveler type.


⚡ Lightning-Fast React Interface
 A smooth, dynamic, and responsive UI powered by React + TailwindCSS.


☁️ Firebase Cloud Backend
 Securely store trip plans, user sessions, and AI responses with seamless Firebase integration.


💅 Beautiful UI
 Built with TailwindCSS for a modern look and mobile-first design experience.



🧰 Tech Stack
Frontend
Backend/Database
AI Model
Styling
React
Firebase
Gemini AI
TailwindCSS


🚀 Getting Started
✅ Prerequisites
Node.js


Firebase project (with config)


Access to Gemini AI API


🔧 Installation
bash
CopyEdit
git clone https://github.com/yourusername/TripGenius-AI-Trip-planner.git
cd TripGenius-AI-Trip-planner
npm install

🛠️ Configuration
Create a .env file at the root:
env
CopyEdit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key

Note: This app uses Vite. Use VITE_ prefix for env variables.
▶️ Run Locally
bash
CopyEdit
npm run dev

Visit: http://localhost:5173

📁 Project Structure
bash
CopyEdit
TripGenius-AI-Trip-planner
├── public
├── src
│   ├── components       # Reusable UI components
│   ├── pages            # App views (CreateTrip, ViewTrip)
│   ├── service          # Gemini & Firebase logic
│   ├── styles           # Tailwind config / customizations
│   ├── App.jsx
│   └── main.jsx
├── .env
└── README.md


🤝 Contribute
Love travel + code? Feel free to fork, contribute, or suggest new features via PRs and issues!

📜 License
Licensed under the MIT License.

Start building AI-powered journeys today — because great trips should be as smart as they are fun! 🧳🌴

