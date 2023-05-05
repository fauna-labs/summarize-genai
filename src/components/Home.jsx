import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('');
  const [openQuestion, setQuestion] = useState(false);

  const generateSummary = (type) => {
    return type;
  }

  const askQuestionToDoc = () => {}

  return (
    <div className="container">
      <div className="card">
        <form>
          <label htmlFor="url">🌐 Enter URL: </label>
          <input 
            type="url" 
            name="url" 
            required 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          {
            openQuestion ? (
              <div className="question-container">
                <label htmlFor="url"> Write you question </label>
                <input 
                  type="text"
                />
                <button onClick={askQuestionToDoc}>Submit</button>
                <button onClick={e => {
                  e.preventDefault();
                  setQuestion(false)
                }}>Back</button>
              </div>
            ) : (
              <div className="button-container">
                <button onClick={e => {
                  e.preventDefault();
                  generateSummary('summary')
                }}>Generate Sumary</button>
                <button onClick={e => {
                  e.preventDefault();
                  generateSummary('point-form')
                }}>Generate Sumary (Point Form)</button>
                <button onClick={e => {
                  e.preventDefault();
                  setQuestion(true)
                }}>Ask a Question 🙋</button>
              </div>
            ) 
          }
        </form>
      </div>
    </div>
  )
}
