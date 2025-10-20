# Fork the Bill - Next.js

This is the Next.js version of the Fork the Bill application, migrated from Create React App.

## Features

- **Receipt Upload**: Upload restaurant receipts and automatically extract items
- **Bill Splitting**: Easily split bills among multiple people
- **Real-time Updates**: See changes as others claim items
- **QR Code Sharing**: Share bills via QR codes
- **Mobile Optimized**: Fully responsive design
- **SEO Optimized**: Server-side rendering for better SEO

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React 19** for UI components
- **Axios** for API calls

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn
- Backend API server running on port 8080

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Update the API base URL if needed.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

- `NEXT_PUBLIC_API_BASE_URL`: Base URL for the backend API (default: http://localhost:8080)

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## API Integration

The app expects a backend API running on port 8080 (configurable via environment variables). The API should support:

- POST `/expense/upload` - Upload receipt image
- GET `/expense/:slug` - Get expense details
- POST `/expense/:slug/items/:itemId/claim` - Claim an item
- DELETE `/expense/:slug/items/:itemId/claim/:personId` - Unclaim an item
- PUT `/expense/:slug` - Update expense
- POST `/expense/:slug/people` - Add person to expense

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Migration from React App

This project was migrated from Create React App to Next.js. Key changes:

- File-based routing instead of React Router
- Server-side rendering for better SEO
- Improved performance with Next.js optimizations
- Better TypeScript integration
- Enhanced development experience

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details