# Production Setup Guide for RSVP Form

## Current Setup

Your RSVP form is configured to work in both development and production:

- **Development**: Uses Next.js API route (`/api/rsvp`) that writes directly to `rsvp-responses.csv` in your project root
- **Production**: Uses Netlify Function (`/.netlify/functions/rsvp`) that logs responses

## Important Notes

### CSV File Access in Production

**The current Netlify Function logs responses but doesn't write to a CSV file you can access directly.** This is because:
- Netlify Functions are serverless and don't have persistent file system access
- Static sites can't write files to the repository

### Options for Getting CSV Data in Production

You have several options:

#### Option 1: View Logs in Netlify Dashboard (Current Setup)
- Go to your Netlify site dashboard
- Navigate to **Functions** → **rsvp**
- View function logs to see CSV rows
- Manually copy/paste into your CSV file

#### Option 2: Email Notifications (Recommended)
Set up email notifications so you receive each RSVP submission via email. You can:
- Use a service like SendGrid, Mailgun, or Nodemailer
- Configure the Netlify Function to send emails with CSV data
- Set up automated emails to yourself with each submission

#### Option 3: Use a Form Service
Use a service like Formspree, Netlify Forms, or Google Forms that:
- Handles form submissions
- Provides CSV export functionality
- Stores data securely

#### Option 4: Database/Storage Service
Use a service like:
- **Airtable** - Easy CSV export
- **Google Sheets API** - Direct integration
- **Supabase** - Free database with CSV export
- **MongoDB Atlas** - Free tier available

## Testing Production Locally

To test the Netlify Function locally before deploying:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Run locally:
   ```bash
   netlify dev
   ```

3. Test the function at `http://localhost:8888/.netlify/functions/rsvp`

## Deployment Checklist

- [x] Netlify Function created (`netlify/functions/rsvp.ts`)
- [x] Form updated to use correct endpoint
- [x] `netlify.toml` configured
- [ ] Choose CSV data access method (see options above)
- [ ] Test form submission in production
- [ ] Verify responses are being captured

## Next Steps

1. **Deploy to Netlify** - Your current setup will work, but you'll need to check logs for responses
2. **Choose a data storage solution** - Pick one of the options above for easier CSV access
3. **Test thoroughly** - Submit test RSVPs to ensure everything works

Would you like me to help set up email notifications or integrate with a database/storage service?
