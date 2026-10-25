# Kelly

A self-improving code-switched Urdu–English voice assistant with learned escalation for telecom support. Final Year Project, Fall 2026.

## Team
- Fatima Imran
- Malaika Dar
- Muhammad Saad Ahmed

## Project structure
- `frontend/`: React + Vite + Tailwind web app (dashboard, call simulator, escalation queue)
- `backend/`: FastAPI backend (coming soon)
- `data/`: datasets and annotation guidelines
- `docs/`: proposal and notes

## Run the frontend
Requires [Node.js](https://nodejs.org) (LTS).

```bash
cd frontend
npm install
npm run dev
```

Then open the link shown in the terminal (usually http://localhost:5173).

## Git workflow
- Never work directly on `main`.
- Create your own branch: `git checkout -b your-branch-name`
- Commit and push your branch, then open a pull request.
- Only edit your own page files to avoid merge conflicts.
