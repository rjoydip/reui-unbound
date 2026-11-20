import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

// Apply the stored theme before the first paint to avoid a flash.
const storedTheme = localStorage.getItem("reui-demo-theme")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
const initialDark = storedTheme ? storedTheme === "dark" : prefersDark
document.documentElement.classList.toggle("dark", initialDark)
document.documentElement.style.colorScheme = initialDark ? "dark" : "light"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
