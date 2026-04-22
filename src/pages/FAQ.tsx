
import { QAItem, qaList } from '../data/qa'

export default function FAQ() {
  return (
    <div>
      <h1>FAQ</h1>
      <p>Preguntas y respuestas preparadas sobre JavaScript, TypeScript y conceptos relacionados.</p>
      <div className="faq-list">
        {qaList.map((q: QAItem, idx: number) => (
          <article key={idx} className="faq-item">
            <h3>{q.question}</h3>
            <p>{q.answer}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
