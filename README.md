# LabelZoom

A mobile app that helps users read small text on product labels using OCR technology.

## Features

- 📱 Mobile-first design optimized for product label scanning
- 🔍 OCR technology to extract text from images
- 🔐 Secure authentication with Clerk
- 💳 Premium features with Stripe integration
- 🗄️ Data persistence with Supabase

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/labelzoom.git
cd labelzoom
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c21vb3RoLXdoYWxlLTIwLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_3m8GhkjmNJtc0DFQiu9rNVRKX9gwLxaoReU0pWCK4R

# Stripe Payment
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=pk_test_51ROQrBPqrY4hwEjUzeY6dPPoHWPVORnULC1MrglxbsTyvmBnMQuzBwY8L1PVQrgJcQHBzi1YNtILCj3SKxYv99la00XDqGeg8p

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=(https://fpvruuhiglrxbydshfga.supabase.co)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwdnJ1dWhpZ2xyeGJ5ZHNoZmdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzM5NTIsImV4cCI6MjA2Mjg0OTk1Mn0.pGJeLxybYqFuYdvTSw59qDOLASInrjgIlsGrYQ5o-GY
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Payments**: Stripe
- **Database**: Supabase
- **OCR**: Tesseract.js

## Project Structure

```
labelzoom/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   └── Button.tsx
│   │   └── Camera.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── middleware.ts
├── package.json
└── README.md
```

## Environment Variables

To run this project, you'll need to set up accounts with:

1. **Clerk** ([https://clerk.com](https://clerk.com))
   - Create a new application
   - Get your API keys from the dashboard

2. **Stripe** ([https://stripe.com](https://stripe.com))
   - Create a new account
   - Get your API keys from the dashboard
   - Create a product and get the price ID

3. **Supabase** ([https://supabase.com](https://supabase.com))
   - Create a new project
   - Get your project URL and anon key

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@labelzoom.com or open an issue in the GitHub repository.
