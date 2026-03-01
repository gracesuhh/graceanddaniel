import Navigation from '../components/Navigation'
import Image from 'next/image'
import './schedule.css'

export default function SchedulePage() {
  return (
    <>
      <Navigation />
      <main className="schedule-page">
        <div className="container">
          <section className="section">
            <h1 className="page-title">Schedule of Events</h1>
            
            <div className="schedule-timeline">
              <div className="timeline-item">
                <div className="timeline-time">4:30 PM</div>
                <div className="timeline-content">
                  <h3>Champagne Welcome</h3>
                  <p>Guests arrive and are welcomed</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">5:00 PM</div>
                <div className="timeline-content">
                  <h3>Ceremony</h3>
                  <p>We exchange vows</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">6:00 PM</div>
                <div className="timeline-content">
                  <h3>Cocktail Hour</h3>
                  <p>Drinks and hors d'oeuvres</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">6:30 PM</div>
                <div className="timeline-content">
                  <h3>Reception</h3>
                  <p>Dinner, dancing, and celebration</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section ceremony-details">
            <h2 className="section-title">Ceremony Details</h2>
            
            <div className="details-grid">
              <div className="detail-card">
                <div className="detail-icon">🌸</div>
                <h3>Ceremony Venue</h3>
                <p>
                  We've chosen to host a backyard-style wedding where we'll celebrate with all of 
                  our loved ones at The Christmas House Inn & Gardens.
                </p>
              </div>
              
              <div className="detail-card">
                <div className="detail-icon">👗</div>
                <h3>Dress Code</h3>
                <p>
                  Garden Cocktail - Dress to impress, but keep comfort in mind! Think cocktail-appropriate 
                  outfits that are easy to move and dance in.
                </p>
              </div>
              
              <div className="detail-card">
                <div className="detail-icon">🎉</div>
                <h3>Post-Ceremony</h3>
                <p>
                  After the ceremony, join us in the backyard for food, drinks, and dancing all night long. 
                  Come ready to party!
                </p>
              </div>
            </div>

            <div className="ceremony-image-wrapper">
              <Image
                src="/photos/schedule.jpg"
                alt="Ceremony"
                width={1200}
                height={600}
                className="ceremony-image"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

