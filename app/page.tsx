import Navigation from "./components/Navigation";
import Countdown from "./components/Countdown";
import Image from "next/image";
import "./page.css";

export default function Home() {
  const faqs = [
    {
      question: "What time should I arrive?",
      answer:
        "We recommend coming by 4:30 PM so you have time to settle in before the ceremony starts.",
    },
    {
      question: "Can I bring my kids or a +1?",
      answer:
        "We will be asking for your +1's information, and they will be receiving the invite directly from us via email and will need to RSVP themselves. To keep the celebration relaxed and comfortable for everyone, our wedding will be adults only. Thank you so much for understanding — we can't wait to celebrate with you!",
    },
    {
      question: "Where should I park?",
      answer:
        "Valet parking will be available upon arrival. If you plan on enjoying our open bar, we highly recommend using a rideshare service for a safe and stress-free evening.",
    },
    {
      question: "What is the dress code?",
      answer:
        "Garden Cocktail - Dress to impress, but keep comfort in mind! Think cocktail-appropriate outfits that are easy to move and dance in. Please note there will be some grass, so choose your shoes accordingly.",
    },
    {
      question: "Will the ceremony and reception be indoors or outdoors?",
      answer:
        "Both the ceremony and reception will be held outdoors in a beautiful garden setting. Please dress accordingly for the weather.",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="wedding-page">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-image-wrapper">
            <Image
              src="/photos/header.jpg"
              alt="Grace & Daniel"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-names">
              <span className="hero-name">GRACE</span>
              <span className="hero-ampersand-wrapper">
                <Image
                  src="/icons/ampersand.png"
                  alt="&"
                  width={200}
                  height={200}
                  className="hero-ampersand"
                  priority
                />
              </span>
              <span className="hero-name">DANIEL</span>
            </h1>
            <p className="hero-date">May 9, 2026</p>
          </div>
        </section>

        {/* Countdown Filler Section */}
        <section className="section countdown-filler-section">
          <div className="container">
            <div className="countdown-filler-content">
              <Countdown />
              <p className="countdown-intro">Until we say "I do"</p>
            </div>
          </div>
        </section>

        {/* Our Love Story Section */}
        <section id="love-story" className="section love-story-section">
          <div className="container">
            <h2 className="story-title">OUR LOVE STORY</h2>

            <div className="story-content">
              <div className="story-image-wrapper">
                <Image
                  src="/photos/ourlovestory.jpg"
                  alt="Grace & Daniel"
                  width={600}
                  height={800}
                  className="story-image"
                  loading="lazy"
                />
              </div>

              <div className="story-text">
                <p className="story-paragraph">
                  To most people's surprise, our love story began when we were
                  just twelve years old, in middle school band—Daniel in the
                  back on the drums, and Grace on the flute. We didn't start off
                  liking each other, though Daniel may have thought Grace was
                  cute (Grace will neither confirm nor deny). At the time, we
                  were simply two kids making music and navigating middle
                  school.
                </p>
                <p className="story-paragraph">
                  We grew closer toward the end of high school and stayed
                  friends through college. We didn't hang out often, but when we
                  did, it felt easy—probably because we already knew each
                  other's embarrassing phases and life stories. Daniel took a
                  chance once in college, hoping their friendship might turn
                  into something more, but timing had other plans. Years later,
                  while Daniel was in grad school, life gave him a second
                  opportunity—and this time, Grace said yes.
                </p>
                <p className="story-paragraph">
                  Eight years later, through many seasons of life, that
                  long-standing friendship has grown into a partnership full of
                  love, laughter, and patience. Today, we're building a life
                  together, growing our family with our pup Ceci, and still
                  grateful that middle school band somehow got it right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filler Section */}
        <section className="section filler-section">
          <div className="container">
            <div className="filler-content">
              <div className="filler-image-wrapper filler-image-left">
                <Image
                  src="/photos/pic1.jpg"
                  alt="Grace & Daniel"
                  width={600}
                  height={800}
                  className="filler-image"
                  loading="lazy"
                />
              </div>
              <div className="filler-image-wrapper filler-image-right">
                <Image
                  src="/photos/pic2.jpg"
                  alt="Food"
                  width={600}
                  height={600}
                  className="filler-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ceremony Details Section */}
        <section id="ceremony" className="section ceremony-details-section">
          <div className="container">
            <h2 className="section-title">THE CEREMONY</h2>

            <div className="details-grid">
              <div className="detail-card">
                <div className="detail-icon">
                  <Image
                    src="/icons/icon1.png"
                    alt="Ceremony Venue"
                    width={80}
                    height={80}
                    className="detail-icon-image"
                    loading="lazy"
                  />
                </div>
                <h3>Ceremony Venue</h3>
                <p>
                  We've chosen to host a backyard-style wedding where we'll
                  celebrate with all of our loved ones at The Christmas House
                  Inn & Gardens.
                </p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <Image
                    src="/icons/icon2.png"
                    alt="Dress Code"
                    width={80}
                    height={80}
                    className="detail-icon-image"
                    loading="lazy"
                  />
                </div>
                <h3>Dress Code</h3>
                <p>
                  Garden Cocktail - Dress to impress, but keep comfort in mind!
                  Think cocktail-appropriate outfits that are easy to move and
                  dance in.
                </p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <Image
                    src="/icons/icon3.png"
                    alt="Post-Ceremony"
                    width={80}
                    height={80}
                    className="detail-icon-image"
                    loading="lazy"
                  />
                </div>
                <h3>Post-Ceremony</h3>
                <p>
                  After the ceremony, join us in the backyard for food, drinks,
                  and dancing all night long. Come ready to party!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="section schedule-section">
          <div className="container">
            <div className="schedule-content">
              <div className="schedule-left">
                <h2 className="schedule-title">
                  SCHEDULE
                  <br />
                  OF EVENTS
                </h2>

                <div className="schedule-timeline">
                  <div className="timeline-item">
                    <div className="timeline-time">4:30 PM</div>
                    <div className="timeline-content">
                      <h3>Arrival & Welcome</h3>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-time">5:00 PM</div>
                    <div className="timeline-content">
                      <h3>Ceremony</h3>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-time">6:00 PM</div>
                    <div className="timeline-content">
                      <h3>Cocktail Hour</h3>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-time">6:30 PM</div>
                    <div className="timeline-content">
                      <h3>Reception</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="schedule-image-wrapper">
                <Image
                  src="/photos/schedule.jpg"
                  alt="Schedule"
                  width={800}
                  height={1000}
                  className="schedule-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gifts Section */}
        <section id="gifts" className="section gifts-section">
          <div className="container">
            <h2 className="gifts-header">
              Your presence is truly the best gift we could ask for.
            </h2>

            <div className="gifts-content">
              <div className="gift-image-wrapper gift-image-left">
                <Image
                  src="/photos/gifts3.jpg"
                  alt="Gifts"
                  width={400}
                  height={400}
                  className="gift-image"
                  loading="lazy"
                />
              </div>

              <div className="gifts-text-wrapper">
                <p className="gifts-intro">
                  We are so grateful for your love and support and truly feel we
                  already have everything we need.
                </p>
                <p className="gifts-message">
                  As such, we will not be having a traditional registry. If you
                  feel inclined, a contribution toward our future together would
                  mean so much to us.
                </p>
                <p className="gifts-message">
                  Most importantly, we are simply excited to celebrate this
                  special day with you.
                </p>

                <div className="payment-section">
                  <div className="venmo-image-wrapper">
                    <Image
                      src="/photos/venmo.jpeg"
                      alt="Venmo QR Code"
                      width={200}
                      height={200}
                      className="venmo-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="payment-info">
                    <p className="payment-details">Venmo or Zelle: Grace Suh</p>
                    <p className="payment-details">@GraceSuh | 714-335-3622</p>
                  </div>
                </div>
              </div>

              <div className="gift-image-wrapper gift-image-right">
                <Image
                  src="/photos/gifts2.jpg"
                  alt="Gifts"
                  width={400}
                  height={400}
                  className="gift-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section faq-section">
          <div className="container">
            <div className="faq-content-wrapper">
              <h2 className="faq-title">
                FREQUENTLY
                <br />
                ASKED
                <br />
                QUESTIONS
              </h2>

              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
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
            </div>
          </div>
        </section>

        {/* Footer Filler Section */}
        <section className="section footer-filler-section">
          <div className="container">
            <div className="footer-filler-content">
              <Image
                src="/photos/footer.jpg"
                alt="Footer"
                width={1200}
                height={800}
                className="footer-filler-image"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section id="rsvp" className="section rsvp-section">
          <div className="container">
            <h2 className="section-title">RSVP</h2>
            <p className="section-subtitle">
              We can't wait to celebrate with you!
              <br></br>Kindly RSVP by <b>March 21</b> to help us finalize all
              the details for our big day.
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
          </div>
        </section>
      </main>
    </>
  );
}
