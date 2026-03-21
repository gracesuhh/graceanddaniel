import type { ReactNode } from 'react'
import Navigation from '../components/Navigation'
import './faq.css'

type FAQ = {
  question: string
  answer: string | ReactNode
}

export default function FAQPage() {
  const faqs: FAQ[] = [
    {
      question: 'What time should I arrive?',
      answer: 'We recommend coming by 4:45 PM so you have time to settle in before the ceremony starts.',
    },
    {
      question: 'Can I bring my kids or a +1?',
      answer: 'If your invitation includes a +1, the RSVP form will automatically prompt you for their details. To keep the celebration relaxed and comfortable for everyone, our wedding will be adults only. Thank you so much for understanding — we can\'t wait to celebrate with you!',
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
    {
      question: 'Is there a hotel we can stay at nearby?',
      answer: (
        <>
          <p>
            We are blocking Ayres Suites hotel near Ontario airport. You can book through{' '}
            <a
              href="https://reservations.travelclick.com/12633?groupID=5211115"
              target="_blank"
              rel="noopener noreferrer"
            >
              this link
            </a>{' '}
            under Grace &amp; Daniel&apos;s Wedding. The block will last until 4/9. You may still book at the hotel after 4/9, but our rates may change.
          </p>
          <p>
            The hotel offers complimentary breakfast and parking. It also offers complimentary scheduled shuttle rides to and from Ontario International Airport as well as to and from The Christmas House on day of wedding if enough parties have booked. We will let you know closer to the date for those who&apos;ve booked at the hotel.
          </p>
          <p>Please reach out to Grace or Daniel if you have any questions!</p>
        </>
      ),
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
                    <div className="faq-answer">{faq.answer}</div>
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

