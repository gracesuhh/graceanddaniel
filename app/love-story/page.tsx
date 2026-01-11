import Navigation from '../components/Navigation'
import Image from 'next/image'
import './love-story.css'

export default function LoveStoryPage() {
  return (
    <>
      <Navigation />
      <main className="love-story-page">
        <div className="container">
          <section className="section">
            <h1 className="page-title">Our Love Story</h1>
            
            <div className="story-content">
              <div className="story-image-wrapper">
                <Image
                  src="/photos/ourlovestory.jpg"
                  alt="Grace & Daniel"
                  width={600}
                  height={800}
                  className="story-image"
                />
              </div>
              
              <div className="story-text">
                <p className="story-paragraph">
                  Write a paragraph that tells your story as a couple. You can include details like how you met, 
                  your journey together, and what makes your relationship unique. This is your chance to share 
                  your personality and connect with your guests, giving them a glimpse into your love story and 
                  what this special day means to you.
                </p>
                <p className="story-paragraph">
                  You can add more paragraphs here to tell more of your story. Share memorable moments, 
                  adventures you've had together, or what you're most looking forward to in your future together.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

