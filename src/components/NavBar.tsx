

export default function NavBar({ onNavigate, current }: { onNavigate: (p: any) => void; current: string }) {
  return (
    <nav className="nav">
      <div className="nav-brand">Chatbot Q&A</div>
      <div className="nav-links">
        <button className={current === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Inicio</button>
        <button className={current === 'faq' ? 'active' : ''} onClick={() => onNavigate('faq')}>FAQ</button>
        <button className={current === 'ask' ? 'active' : ''} onClick={() => onNavigate('ask')}>Preguntar</button>
      </div>
    </nav>
  )
}
