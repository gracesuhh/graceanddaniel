# Grace & Daniel Wedding Website

A beautiful, modern wedding website for Grace Suh & Daniel Chang's special day on May 9, 2026.

## Features

- **Home Page** with countdown timer to the wedding date
- **RSVP Page** with email collection for guests and plus-ones
- **Our Love Story** page to share your journey together
- **Schedule of Events** page with ceremony details
- **FAQ Page** with common questions and answers
- **Gifts Page** with payment information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

- `/app` - Next.js app directory with pages and components
- `/public/photos` - Wedding photos used throughout the site
- `/app/components` - Reusable React components (Navigation, Countdown)
- Each page has its own directory with page component and styles

## Customization

- Update the wedding date in `/app/components/Countdown.tsx` (currently set to May 9, 2026)
- Edit page content in respective page files in `/app/[page-name]/page.tsx`
- Modify styles in CSS files or `/app/globals.css`
- Replace photos in `/public/photos/` directory

## RSVP Functionality

The RSVP form currently logs submissions to the console. To enable actual email collection, you'll need to:
1. Set up a backend API endpoint
2. Update the form submission handler in `/app/rsvp/page.tsx`
3. Consider using a service like Formspree, SendGrid, or a custom API route

