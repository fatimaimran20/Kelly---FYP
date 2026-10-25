import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CallSimulator from './pages/CallSimulator'
import EscalationQueue from './pages/EscalationQueue'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-6 p-4 bg-gray-900 text-white">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/simulator">Call Simulator</NavLink>
        <NavLink to="/queue">Escalation Queue</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/simulator" element={<CallSimulator />} />
        <Route path="/queue" element={<EscalationQueue />} />
      </Routes>
    </BrowserRouter>
  )
}
