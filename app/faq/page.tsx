import Navigation from '../components/Navigation'
import './faq.css'

export default function FAQPage() {
  const faqs = [
    {
      question: 'What time should I arrive?',
      answer: 'We recommend coming by 4:45 PM so you have time to settle in before the ceremony starts.',
    },
    {
      question: 'Can I bring my kids or a +1?',
      answer: 'Your invitation will indicate whether a plus-one has been reserved for you. If you\'re unable to attend without your kids or a guest, we kindly ask for your understanding. To keep the celebration relaxed and comfortable for everyone, our wedding will be adults only. Thank you so much for understanding — we can\'t wait to celebrate with you!',
    },
    {
      question: 'Where should I park?',
      answer: 'Valet parking will be available upon arrival. If you plan on enjoying our open bar, we highly recommend using a rideshare service for a safe and stress-free evening.',
    },
    {
      question: 'What is the dress code?',
      answer: 'Garden Cocktail - Dress to impress, but keep comfort in mind! Think cocktail-appropriate outfits that are easy to move and dance in.',
    },
    {
      question: 'Will the ceremony and reception be indoors or outdoors?',
      answer: 'Both the ceremony and reception will be held outdoors in a beautiful garden setting. Please dress accordingly for the weather.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="faq-page">
        <div className="container">
          <section className="section">
            <h1 className="page-title">Frequently Asked Questions</h1>
            
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="faq-content">
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-footer">
              <p>Have another question? Feel free to reach out to us!</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

