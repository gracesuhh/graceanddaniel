'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import { PLUS_ONE_LIST } from '../data/plusOneList'
import './rsvp.css'

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    attending: '',
    email: '',
    mailingAddress: '',
    driving: '',
    favoriteSong: '',
    bringingPlusOne: '',
    plusOneFirstName: '',
    plusOneLastName: '',
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const checkIfOnPlusOneList = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim()
    // Normalize both strings: trim, lowercase, and remove extra spaces
    const normalizedFullName = fullName.toLowerCase().replace(/\s+/g, ' ').trim()
    return PLUS_ONE_LIST.some(
      (name) => name.toLowerCase().replace(/\s+/g, ' ').trim() === normalizedFullName
    )
  }

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName) {
        alert('Please enter both first and last name.')
        return
      }
      setCurrentStep(2)
    } else if (currentStep === 2) {
      if (!formData.attending) {
        alert('Please select whether you will be attending.')
        return
      }
      if (formData.attending === 'no') {
        handleSubmit('Thank you for your response. We\'re sorry you won\'t be able make it!')
        return
      }
      // If attending, move to next step
      setCurrentStep(3)
    } else if (currentStep === 3) {
      // Validate required fields
      if (!formData.email || !formData.mailingAddress || !formData.driving || !formData.favoriteSong) {
        alert('Please fill in all required fields.')
        return
      }
      
      const hasPlusOneOption = checkIfOnPlusOneList()
      if (hasPlusOneOption) {
        setCurrentStep(4) // Ask about +1
      } else {
        handleSubmit('Thank you for your RSVP. We\'re excited to celebrate with you soon!')
      }
    } else if (currentStep === 4) {
      if (!formData.bringingPlusOne) {
        alert('Please select whether you will be bringing a +1.')
        return
      }
      if (formData.bringingPlusOne === 'no') {
        handleSubmit('Thank you for your RSVP. We\'re excited to celebrate with you soon!')
        return
      }
      setCurrentStep(5) // Ask for +1 details
    } else if (currentStep === 5) {
      if (!formData.plusOneFirstName || !formData.plusOneLastName) {
        alert('Please enter your +1\'s first and last name.')
        return
      }
      handleSubmit('Thank you for your RSVP. We\'re excited to celebrate with you soon!')
    }
  }

  const handleSubmit = async (message: string) => {
    try {
      // Determine API endpoint based on environment
      // In development, use Next.js API route
      // In production, use Netlify Function
      // Check if we're on localhost (development) or production
      const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      const apiUrl = isDevelopment 
        ? '/api/rsvp' 
        : '/.netlify/functions/rsvp'

      // Send data to API endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          attending: formData.attending,
          email: formData.email,
          mailingAddress: formData.mailingAddress,
          driving: formData.driving,
          favoriteSong: formData.favoriteSong,
          bringingPlusOne: formData.bringingPlusOne,
          plusOneFirstName: formData.plusOneFirstName,
          plusOneLastName: formData.plusOneLastName,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setSubmissionMessage(message)
      } else {
        throw new Error('Failed to save RSVP')
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      alert('There was an error saving your RSVP. Please try again.')
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main className="rsvp-page">
          <div className="container">
            <section className="section">
              <h1 className="page-title">RSVP</h1>
              <div className="rsvp-form-wrapper">
                <div className="submission-success">
                  <p className="success-message">{submissionMessage}</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    )
  }

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
              <form className="rsvp-form" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                {/* Step 1: Name */}
                {currentStep === 1 && (
                  <div className="form-step">
                    <h2 className="form-step-title">Step 1 of 5</h2>
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        What is your first name? <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        What is your last name? <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="btn-primary">
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Attending */}
                {currentStep === 2 && (
                  <div className="form-step">
                    <h2 className="form-step-title">Step 2 of 5</h2>
                    <div className="form-group">
                      <label className="form-label">
                        Will you be joining our celebration? <span className="required">*</span>
                      </label>
                      <div className="radio-group">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="attending"
                            value="yes"
                            checked={formData.attending === 'yes'}
                            onChange={(e) => handleRadioChange('attending', e.target.value)}
                            className="radio-input"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="attending"
                            value="no"
                            checked={formData.attending === 'no'}
                            onChange={(e) => handleRadioChange('attending', e.target.value)}
                            className="radio-input"
                          />
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={handleBack} className="btn-secondary">
                        Back
                      </button>
                      <button type="submit" className="btn-primary">
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Details */}
                {currentStep === 3 && (
                  <div className="form-step">
                    <h2 className="form-step-title">
                      Step 3 of {checkIfOnPlusOneList() ? '5' : '3'}
                    </h2>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        What is your email address? <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mailingAddress" className="form-label">
                        What is your physical mailing address? <span className="required">*</span>
                      </label>
                      <textarea
                        id="mailingAddress"
                        name="mailingAddress"
                        value={formData.mailingAddress}
                        onChange={handleInputChange}
                        className="form-textarea"
                        rows={4}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Will you be driving your own car? <span className="required">*</span>
                      </label>
                      <p className="form-subtext">
                        Valet parking will be available for guests who RSVP early. Availability is limited, and we encourage rideshare for anyone planning to enjoy our open bar.
                      </p>
                      <div className="radio-group">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="driving"
                            value="yes"
                            checked={formData.driving === 'yes'}
                            onChange={(e) => handleRadioChange('driving', e.target.value)}
                            className="radio-input"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="driving"
                            value="no"
                            checked={formData.driving === 'no'}
                            onChange={(e) => handleRadioChange('driving', e.target.value)}
                            className="radio-input"
                          />
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="favoriteSong" className="form-label">
                        What is your favorite song to dance to? <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="favoriteSong"
                        name="favoriteSong"
                        value={formData.favoriteSong}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={handleBack} className="btn-secondary">
                        Back
                      </button>
                      <button type="submit" className="btn-primary">
                        {checkIfOnPlusOneList() ? 'Next' : 'Submit'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: +1 Option (only for people on the list) */}
                {currentStep === 4 && (
                  <div className="form-step">
                    <h2 className="form-step-title">Step 4 of 5</h2>
                    <div className="form-group">
                      <label className="form-label">
                        Will you be bringing a +1? <span className="required">*</span>
                      </label>
                      <div className="radio-group">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="bringingPlusOne"
                            value="yes"
                            checked={formData.bringingPlusOne === 'yes'}
                            onChange={(e) => handleRadioChange('bringingPlusOne', e.target.value)}
                            className="radio-input"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="bringingPlusOne"
                            value="no"
                            checked={formData.bringingPlusOne === 'no'}
                            onChange={(e) => handleRadioChange('bringingPlusOne', e.target.value)}
                            className="radio-input"
                          />
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={handleBack} className="btn-secondary">
                        Back
                      </button>
                      <button type="submit" className="btn-primary">
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 5: +1 Details */}
                {currentStep === 5 && (
                  <div className="form-step">
                    <h2 className="form-step-title">Step 5 of 5</h2>
                    <div className="form-group">
                      <label htmlFor="plusOneFirstName" className="form-label">
                        What is your +1's First Name? <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="plusOneFirstName"
                        name="plusOneFirstName"
                        value={formData.plusOneFirstName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="plusOneLastName" className="form-label">
                        What is your +1's Last Name? <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="plusOneLastName"
                        name="plusOneLastName"
                        value={formData.plusOneLastName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={handleBack} className="btn-secondary">
                        Back
                      </button>
                      <button type="submit" className="btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
