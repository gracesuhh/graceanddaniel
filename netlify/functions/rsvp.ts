import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { appendToGoogleSheets } from './googleSheets'

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
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

        // Save to Google Sheets
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
                message: 'RSVP saved successfully to Google Sheets',
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
