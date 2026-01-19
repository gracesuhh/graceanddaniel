import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { appendToGoogleSheets } from '../../utils/googleSheets'

const CSV_FILE_PATH = path.join(process.cwd(), 'rsvp-responses.csv')

// CSV headers
const CSV_HEADERS = [
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

function ensureCSVFile() {
  // Check if file exists, if not create it with headers
  if (!fs.existsSync(CSV_FILE_PATH)) {
    const headers = CSV_HEADERS.join(',')
    fs.writeFileSync(CSV_FILE_PATH, headers + '\n')
  }
}

function escapeCSVValue(value: string): string {
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`
  }
  return value
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Save to local CSV file (for development)
    ensureCSVFile()
    const timestamp = new Date().toISOString()
    const row = [
      timestamp,
      escapeCSVValue(data.firstName || ''),
      escapeCSVValue(data.lastName || ''),
      escapeCSVValue(data.attending || ''),
      escapeCSVValue(data.email || ''),
      escapeCSVValue(data.mailingAddress || ''),
      escapeCSVValue(data.driving || ''),
      escapeCSVValue(data.favoriteSong || ''),
      escapeCSVValue(data.bringingPlusOne || ''),
      escapeCSVValue(data.plusOneFirstName || ''),
      escapeCSVValue(data.plusOneLastName || ''),
    ]
    const csvRow = row.join(',') + '\n'
    fs.appendFileSync(CSV_FILE_PATH, csvRow)

    // Also save to Google Sheets if credentials are available
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
    } catch (sheetsError) {
      // Log error but don't fail the request if Google Sheets fails
      console.error('Failed to save to Google Sheets (continuing anyway):', sheetsError)
    }

    return NextResponse.json({ success: true, message: 'RSVP saved successfully' })
  } catch (error) {
    console.error('Error saving RSVP:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save RSVP' },
      { status: 500 }
    )
  }
}
