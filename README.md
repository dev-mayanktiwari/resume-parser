# 🧠 AI Resume Parser

A smart, full-stack AI-powered resume parser that reads raw resume text and converts it into clean, structured JSON profiles. Built with a modern tech stack and powered by prompt engineering and schema validation, this app is perfect for hiring platforms, ATS tools, or anyone who wants to automate resume analysis.

## 🌐 Live Demo

🔗 [Live Site](https://resumeparser.mayanktiwari.tech)  
📂 [Frontend GitHub](https://github.com/dev-mayanktiwari/resume-parser/tree/main/backend)  
🧠 [Backend GitHub](https://github.com/dev-mayanktiwari/resume-parser/tree/main/frontend)

## 🚀 Tech Stack

### 🖥️ Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS, ShadCN UI
- **Deployment:** Vercel

### ⚙️ Backend
- **Runtime:** Node.js
- **Server:** Express.js
- **Validation:** Zod
- **AI Integration:** Gemini
- **Deployment:** Custom Server
- **Testing:** Postman


## ✨ Features

- Parse resumes into structured JSON
- Extracts personal details, education, experience, skills, languages, etc.
- Normalizes degree types and specializations (B.Tech, BA, BSc, etc.)
- Handles engineering, arts, science, commerce, and interdisciplinary backgrounds
- Accepts PDF copy-pasted text or raw input from any format
- Integrates easily into any hiring system or ATS pipeline

---

## 📦 Folder Structure

    .
    ├── backend                 # Express API Backend
    ├── frontend                # Next.js Frontend
    └── README.md




## 🧑‍💻 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/dev-mayanktiwari/resume-parser.git
cd resume-parser
```
### 2. Setup Backend
```bash
cd backend
npm install
```
### 3. Create a .env file and add your Gemini API key
```bash
PORT=3000
ENV=development
GEMINI_API_KEY=
```
Backend will run on http://localhost:3000

### 4. Setup Frontend

```bash
cd ../frontend
pnpm install
```
### 3. Create a .env file and add your backend base URL
```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000/api/v1
```

Frontend will run on http://localhost:3001


## 🔁 API Usage

### Endpoint
```bash
POST /api/v1/parse/text
Content-Type: application/json
```
### Sample Request Body
```bash
{
  "text": "Paste your full resume text here..."
}
```
### Sample Output
```bash
{
  "candidate_name": "John Doe",
  "candidate_email": "john.doe@email.com",
  "candidate_phone": ["+1-1234567890"],
  "candidate_address": "New York, USA",
  "candidate_summary": "Experienced full-stack developer...",
  "candidate_skills": ["React", "Node.js", "AWS"],
  "candidate_language": "English",
  "candidate_spoken_languages": ["English", "Spanish"],
  "candidate_honors_and_awards": ["Second Place - Hackathon"],
  "candidate_courses_and_certifications": ["AWS Certified Developer"],
  "education_qualifications": [
    {
      "start_date": "2018",
      "end_date": "2022",
      "degree_type": "Bachelor's Degree or equivalent",
      "school_name": "MIT",
      "specialization_subjects": "Computer Science Engineering"
    }
  ],
  "projects": [
    {
      "project_name": "SmartDraw",
      "project_description": "A collaborative whiteboard app...",
      "skills_used": ["WebSockets", "React", "Express"]
    }
  ],
  "positions": [
    {
      "position_name": "Frontend Lead",
      "company_name": "GFG Student Chapter",
      "start_date": "2022-08",
      "end_date": "Present",
      "job_details": "Managed frontend development and mentorship.",
      "skills": ["React", "Leadership"]
    }
  ]
}
```

## 🧪 Testing With Postman
	1.	Open Postman
	2.	Create a new POST request
	3.	URL: http://localhost:3000/api/v1/parse/text
	4.	Headers:
                Content-Type: application/json
	5.	Body (raw JSON):
            {
                "text": "Paste the resume text here..."
            }

## 🤝 Contributing

Pull requests are welcome!
If you’d like to contribute major features, please open an issue first to discuss the design.


## 📄 License

MIT License © 2025 Mayank Tiwari


## 📫 Contact

Built with ❤️ by Mayank Tiwari
Have questions or want to collaborate? Reach out on [LinkedIn](https://www.linkedin.com/in/devmayanktiwari/)
