import { FormEvent, useMemo, useState } from 'react'
import { qaList } from '../data/qa'

type Sender = 'user' | 'bot'

interface ChatMessage {
  id: number
  sender: Sender
  text: string
}

const STOP_WORDS = new Set([
  'de',
  'la',
  'el',
  'los',
  'las',
  'en',
  'y',
  'o',
  'un',
  'una',
  'que',
  'para',
  'con',
  'del',
  'al',
  'es',
  'son',
  'como',
  'cual',
  'cuales',
  'qué'
])

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function getKeywords(value: string): string[] {
  const normalized = normalizeText(value)

  return normalized
    .split(' ')
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word))
}

function scoreQuestion(userQuestion: string, candidateQuestion: string): number {
  const normalizedUser = normalizeText(userQuestion)
  const normalizedCandidate = normalizeText(candidateQuestion)

  if (!normalizedUser || !normalizedCandidate) {
    return 0
  }

  if (normalizedUser === normalizedCandidate) {
    return 1
  }

  if (normalizedCandidate.includes(normalizedUser) || normalizedUser.includes(normalizedCandidate)) {
    return 0.9
  }

  const userTokens = getKeywords(userQuestion)
  const candidateTokens = getKeywords(candidateQuestion)

  if (userTokens.length === 0 || candidateTokens.length === 0) {
    return 0
  }

  const candidateSet = new Set(candidateTokens)
  const matched = userTokens.filter((token) => candidateSet.has(token)).length

  return matched / Math.max(userTokens.length, candidateTokens.length)
}

export default function Ask() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'bot',
      text: 'Hola. Escribe tu pregunta y responderé usando la base de conocimiento de este proyecto.'
    }
  ])

  const suggestedQuestions = useMemo(() => qaList.slice(0, 4), [])

  const answerQuestion = (input: string): string => {
    const bestMatch = qaList
      .map((item) => ({
        item,
        score: scoreQuestion(input, item.question)
      }))
      .sort((a, b) => b.score - a.score)[0]

    if (!bestMatch || bestMatch.score < 0.2) {
      return 'No encontré una coincidencia clara. Prueba con otra formulación o revisa la sección FAQ para ver todas las preguntas disponibles.'
    }

    return bestMatch.item.answer
  }

  const submitQuestion = (input: string): void => {
    const cleanInput = input.trim()

    if (!cleanInput) {
      return
    }

    const nextUserMessage: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text: cleanInput
    }

    const nextBotMessage: ChatMessage = {
      id: Date.now() + 1,
      sender: 'bot',
      text: answerQuestion(cleanInput)
    }

    setMessages((prev) => [...prev, nextUserMessage, nextBotMessage])
    setQuestion('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    submitQuestion(question)
  }

  return (
    <div>
      <h1>Preguntar</h1>
      <p>El chatbot responde en función de las preguntas y respuestas cargadas en la base local.</p>

      <div className="chat-panel" aria-live="polite">
        {messages.map((message) => (
          <article key={message.id} className={`chat-message ${message.sender}`}>
            <p>{message.text}</p>
          </article>
        ))}
      </div>

      <form className="ask-box" onSubmit={handleSubmit}>
        <input
          aria-label="Escribe tu pregunta"
          placeholder="Ejemplo: ¿Qué es un microservicio?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      <div className="suggested-questions">
        <h3>Preguntas sugeridas</h3>
        <div className="suggested-list">
          {suggestedQuestions.map((item) => (
            <button key={item.question} type="button" onClick={() => submitQuestion(item.question)}>
              {item.question}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}