# Google Sheets Integration Setup

Your RSVP form is now configured to save responses directly to your Google Sheet!

## Step 1: Create a Google Cloud Project and Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Enable the Google Sheets API:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in:
   - Service account name: `wedding-rsvp` (or any name)
   - Service account ID: auto-generated
   - Click "Create and Continue"
   - Skip the optional steps and click "Done"

## Step 3: Create and Download Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" → "Create new key"
4. Choose "JSON" format
5. Click "Create" - this will download a JSON file
6. **Save this file securely** - you'll need it in the next step

## Step 4: Share Your Google Sheet with the Service Account

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1-KdN836m3I5IKyzPotV0SHwe-Z7zSc04tgkpiTfGBfo/edit
2. Click the "Share" button (top right)
3. In the downloaded JSON file, find the `client_email` field (it looks like: `something@project-id.iam.gserviceaccount.com`)
4. Copy that email address
5. Paste it into the "Share" dialog with **Editor** permissions
6. Click "Send"

## Step 5: Add Credentials to Netlify

1. Open the JSON file you downloaded in Step 3
2. Copy the entire contents of the JSON file
3. Go to your Netlify site dashboard
4. Navigate to **Site settings** → **Environment variables**
5. Add a new variable:
   - **Key**: `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS`
   - **Value**: Paste the entire JSON content (it should start with `{` and end with `}`)
6. Click "Save"

## Step 6: Add Credentials for Local Development (Optional)

If you want to test Google Sheets integration locally:

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add this line:
   ```
   GOOGLE_SERVICE_ACCOUNT_CREDENTIALS='{"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}'
   ```
   (Replace with your actual JSON, but keep it as a single-line string)

3. **Important**: Add `.env.local` to `.gitignore` if it's not already there (to keep credentials secure)

## Step 7: Deploy and Test

1. Commit and push your changes to GitHub
2. Netlify will automatically deploy
3. Test the RSVP form - submissions should appear in your Google Sheet!

## Troubleshooting

### "GOOGLE_SERVICE_ACCOUNT_CREDENTIALS environment variable is not set"
- Make sure you added the environment variable in Netlify
- Redeploy your site after adding the variable

### "The caller does not have permission"
- Make sure you shared the Google Sheet with the service account email
- The service account needs **Editor** permissions

### "Requested entity was not found"
- Check that the spreadsheet ID is correct: `1-KdN836m3I5IKyzPotV0SHwe-Z7zSc04tgkpiTfGBfo`
- Make sure the sheet name is correct (default is "Sheet1")

## Security Notes

- ⚠️ **Never commit the service account JSON file to Git**
- ⚠️ The `.env.local` file is already in `.gitignore`
- ✅ Environment variables in Netlify are encrypted
- ✅ Service account has limited permissions (only to your specific sheet)

## Your Google Sheet

Your RSVP responses will be saved to:
https://docs.google.com/spreadsheets/d/1-KdN836m3I5IKyzPotV0SHwe-Z7zSc04tgkpiTfGBfo/edit

The sheet will automatically have headers added on the first submission, and each new RSVP will be appended as a new row.
