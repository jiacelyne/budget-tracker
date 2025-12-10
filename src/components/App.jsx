import { useEffect, useState } from "react"
import Budget from "./Budget"
import Stock from "./Stock"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import "./App.css"

export default function App() {
  const [activeTab, setActiveTab] = useState("budget")
  const user = useAuthentication()

  return (
    <div className="App">
      <header>
        <span></span>
        <div className="header-controls">
          {user && (
            <div className="tab-buttons">
              {/* Tab buttons if needed */}
            </div>
          )}
          <div className="auth-section">
            {!user ? <SignIn /> : <SignOut />}
          </div>
        </div>
      </header>
      
      {!user ? (
        <div className="login-prompt">
          Please sign in to manage your budgets and track stocks
        </div>
      ) : (
        <>
          <div className="budget-container">
            <Budget />
          </div>
          <div className="Stock">
            <Stock />
          </div>
        </>
      )}
      <footer className="signature-footer">
        <div className="signature">
          <span className="made-by">Made by Jia and Cindy</span>
          <div className="signature-images">
            <img 
              src="https://i.pinimg.com/474x/90/e9/cf/90e9cf9f27cf2997d3bee434088906cb.jpg"
              alt="Momonga Christmas" 
              className="signature-image"
            />
            <img 
              src="https://i.pinimg.com/474x/fd/00/69/fd0069582379df3e57106a66bcbfbe13.jpg"
              alt="Hachiware Christmas" 
              className="signature-image"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}