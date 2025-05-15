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
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Stripe Payment
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
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
