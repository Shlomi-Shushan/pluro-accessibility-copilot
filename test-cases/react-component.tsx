"use client"

import type React from "react"
import { useState } from "react"

interface User {
  name: string
  avatar: string
}

const ReactAccessibilityTest: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user] = useState<User>({ name: "John Doe", avatar: "/avatar.jpg" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div className="react-test">
      <h1>React Accessibility Test</h1>

      {/* Missing alt */}
      <img src={user.avatar || "/placeholder.svg"} />

      {/* Good alt */}
      <img src={user.avatar || "/placeholder.svg"} alt={`${user.name} avatar`} />

      {/* Button without accessible name */}
      <button onClick={() => console.log("clicked")}>
        <span className="icon-close" />
      </button>

      {/* Button with accessible name */}
      <button onClick={() => console.log("clicked")} aria-label="Close modal">
        <span className="icon-close" />
      </button>

      {/* Form without labels */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>

      {/* Form with proper labels */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username-field">Username:</label>
        <input
          id="username-field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-describedby="username-help"
        />
        <div id="username-help">Enter your username</div>

        <label htmlFor="password-field">Password:</label>
        <input
          id="password-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-describedby="password-help"
        />
        <div id="password-help">Enter your password</div>

        <button type="submit">Login</button>
      </form>

      {/* Missing heading hierarchy */}
      <h1>Main Title</h1>
      <h3>Skipped H2</h3>

      {/* Hebrew text without direction */}
      <p>שלום עולם</p>

      {/* Hebrew text with proper direction */}
      <p dir="rtl">שלום עולם</p>
    </div>
  )
}

export default ReactAccessibilityTest
