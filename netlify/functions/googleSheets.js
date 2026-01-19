const { google } = require('googleapis')

// Google Sheets configuration
const SPREADSHEET_ID = '1-KdN836m3I5IKyzPotV0SHwe-Z7zSc04tgkpiTfGBfo'
const SHEET_NAME = 'rsvp responses' // Change if your sheet has a different name

// Headers for the spreadsheet
const HEADERS = [
  'Timestamp',
  'First Name',
  'Last Name',
  'Attending',
  'Email',
  'Mailing Address',
  'Driving',
  'Favorite Song',
  'Bringing +1',
  '+1 First Name',
  '+1 Last Name',
]

/**
 * Authenticate with Google Sheets API using service account
 */
async function getAuthClient() {
  // Check for service account credentials in environment variable
  const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS

  if (!credentialsJson) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_CREDENTIALS environment variable is not set')
  }

  const credentials = JSON.parse(credentialsJson)

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  return auth
}

/**
 * Append RSVP data to Google Sheets
 */
async function appendToGoogleSheets(data) {
  try {
    const auth = await getAuthClient()
    const sheets = google.sheets({ version: 'v4', auth })

    // Prepare the row data
    const timestamp = new Date().toISOString()
    const row = [
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.attending || '',
      data.email || '',
      data.mailingAddress || '',
      data.driving || '',
      data.favoriteSong || '',
      data.bringingPlusOne || '',
      data.plusOneFirstName || '',
      data.plusOneLastName || '',
    ]

    // Check if headers exist, if not, add them
    const headerRange = `${SHEET_NAME}!A1:${String.fromCharCode(64 + HEADERS.length)}1`
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: headerRange,
    })

    const hasHeaders = headerResponse.data.values && headerResponse.data.values.length > 0

    if (!hasHeaders) {
      // Add headers
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [HEADERS],
        },
      })
    }

    // Append the new row
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:A`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row],
      },
    })

    console.log('Successfully appended to Google Sheets')
  } catch (error) {
    console.error('Error appending to Google Sheets:', error)
    throw error
  }
}

module.exports = { appendToGoogleSheets }
