import Navigation from '../components/Navigation'
import './rsvp.css'

export default function RSVPPage() {
  return (
    <>
      <Navigation />
      <main className="rsvp-page">
        <div className="container">
          <section className="section">
            <h1 className="page-title">RSVP</h1>
            <p className="page-subtitle">
              We can't wait to celebrate with you! Please let us know if you'll be joining us.
            </p>

            <div className="rsvp-form-wrapper">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdJ4n0V3aSL-cx1Fi3TFNR6xCrEhNgtSZ259SF5CaXVlVmNiA/viewform?embedded=true"
                width="100%"
                height="586"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="google-form-iframe"
              >
                Loading…
              </iframe>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

