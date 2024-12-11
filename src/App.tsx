import './App.css'
import Dashboard from './components/Dashboard'

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Dashboard />
    </div>
  )
}

export default App