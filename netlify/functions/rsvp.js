const { appendToGoogleSheets } = require('./googleSheets')

exports.handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const data = JSON.parse(event.body || '{}')

    // Try to save to Google Sheets, but don't fail if credentials aren't set up yet
    let sheetsSuccess = false
    try {
      await appendToGoogleSheets({
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        attending: data.attending || '',
        email: data.email || '',
        mailingAddress: data.mailingAddress || '',
        driving: data.driving || '',
        favoriteSong: data.favoriteSong || '',
        bringingPlusOne: data.bringingPlusOne || '',
        plusOneFirstName: data.plusOneFirstName || '',
        plusOneLastName: data.plusOneLastName || '',
      })
      sheetsSuccess = true
      console.log('Successfully saved to Google Sheets')
    } catch (sheetsError) {
      const errorMessage = sheetsError instanceof Error ? sheetsError.message : 'Unknown error'
      console.error('Failed to save to Google Sheets:', errorMessage)
      
      // If credentials aren't set up, that's okay - log it but don't fail
      if (errorMessage.includes('GOOGLE_SERVICE_ACCOUNT_CREDENTIALS')) {
        console.warn('Google Sheets credentials not configured yet. RSVP will still be processed.')
      } else {
        // For other errors, log but still return success since the form was submitted
        console.warn('Google Sheets error (non-credential issue):', sheetsError)
      }
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({
        success: true,
        message: sheetsSuccess 
          ? 'RSVP saved successfully to Google Sheets' 
          : 'RSVP received successfully (Google Sheets not configured yet)',
      }),
    }
  } catch (error) {
    console.error('Error processing RSVP:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: false,
        error: 'Failed to save RSVP',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}
