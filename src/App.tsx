import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Ask from './pages/Ask'

type Page = 'home' | 'faq' | 'ask'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <div className="app">
      <NavBar onNavigate={setPage} current={page} />
      <main className="container">
        {page === 'home' && <Home />}
        {page === 'faq' && <FAQ />}
        {page === 'ask' && <Ask />}
      </main>
    </div>
  )
}
