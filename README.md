# My Portfolio – Express × Vite × Tailwind

## Vist at [https://proco-rphopkins.github.io/Portfolio/](https://proco-rphopkins.github.io/Portfolio/)

A quick two-tier test app you can run entirely in Google Cloud Shell (or any Node 18+ setup).

---

## Prerequisites
* Node.js ≥ 18 installed (Cloud Shell already has it)
* At least two terminal tabs (three is more comfortable)

---

## 1  Backend API (Express)

```bash
cd gcs-demo/backend
npm install        # first time only
npm run dev        # starts Express at http://localhost:4000
```

## 2 Tailwind CLI watcher (CSS build)
### open a second terminal
cd gcs-demo/frontend
npm run build:css  # keeps watching; writes src/output.css on every save
# add "&" to run it in the background if you prefer:
# npm run build:css &


## 3 Front-end (Vite)
# same terminal as step 2 or a third one
cd gcs-demo/frontend
npm run dev        # serves the UI at http://localhost:5173

## | Port | Purpose        | How to open in Cloud Shell |
| ---- | -------------- | ------------------------------------- |
| 4000 | Express API    | Web Preview ▸ **Change port…** ▸ 4000 |
| 5173 | Vite front-end | Web Preview ▸ **Change port…** ▸ 5173 |

## One-liner (optional) - Run check
### If you have the concurrently package installed, you can launch everything at once:
npm i -g concurrently
concurrently -c green,cyan,magenta \
  "cd gcs-demo/backend && npm run dev" \
  "cd gcs-demo/frontend && npm run build:css" \
  "cd gcs-demo/frontend && npm run dev"
