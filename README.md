# KUDANS - Koç University Dance Club Website

This is the official website for KUDANS, the Koç University Dance Club. The website showcases the club's activities, events, team members, and provides information about upcoming festivals.

## Features

- **Homepage**: Engaging hero banner with upcoming festival information, mission statement, and previous festival highlights
- **Events Calendar**: Interactive calendar connected to Google Calendar for upcoming events
- **Team Profiles**: Showcase of dancers participating in upcoming performances
- **Past Festivals Gallery**: Archive of previous dance events and performances
- **Contact Form**: Interactive form with validation for inquiries
- **Board of Directors**: Information about the club's leadership team
- **Blog Section**: Latest news, stories, and updates from the club
- **Kudans Carnival**: Dedicated page for the upcoming festival with schedule and ticket information
- **Clothing Orders**: Merchandise ordering system for KUDANS branded apparel

## Technologies Used

- **Next.js**: React framework for building the frontend
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling and responsive design
- **React Components**: Custom components for reusability

## Project Structure

```
kudans-website/
├── app/                  # Main application code
│   ├── components/       # Reusable components
│   ├── blog/             # Blog pages
│   ├── board/            # Board of directors page
│   ├── carnival/         # Carnival event page
│   ├── clothing/         # Merchandise ordering page
│   ├── contact/          # Contact page
│   ├── events/           # Events calendar page
│   ├── festivals/        # Past festivals page
│   ├── team/             # Team members page
│   ├── types/            # TypeScript type definitions
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Main layout component
│   └── page.tsx          # Homepage
├── public/               # Static assets
│   ├── images/           # Image files
│   └── videos/           # Video files
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/kudans-website.git
cd kudans-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Deployment

The site can be deployed to various platforms including Vercel, Netlify, or any hosting service that supports Next.js applications.

## License

This project is developed for KUDANS - Koç University Dance Club.

## Contact

For any questions regarding this project, please contact [kudans@example.com](mailto:kudans@example.com). 