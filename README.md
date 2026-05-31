# Thriftly – Project Summary
## What is it?
A web-based thrift store where users can buy and sell pre-loved items. Built with plain HTML/CSS/JS frontend + Supabase as the backend (database + auth + storage).
## Tech Stack
- Frontend: HTML, CSS, JavaScript (no framework)
- Backend: Supabase (PostgreSQL database, Auth, Storage)
- Fonts: Google Fonts (Playfair Display, DM Sans, Space Mono)
- Hosted locally via VS Code Live Server
## File Structure
```
thrift-store/
├── index.html        → Home page
├── login.html        → Login
├── signup.html       → Sign up
├── sell.html         → Post a listing
├── cart.html         → Shopping cart
├── profile.html      → User profile
├── categories.html   → Browse by category
├── css/style.css     → All styling
└── js/
    ├── supabase.js   → DB connection + helpers
    ├── app.js        → Shared product card logic
    ├── auth.js       → Login/signup functions
    ├── home.js       → Home page data loading
    ├── sell.js       → Sell form + image upload
    ├── cart.js       → Cart logic + checkout
    └── profile.js    → Orders, favorites, settings 
```
| Table | Purpose |
| :---: | :---: |
| profiles | Stores name, phone, address per user |
| products | Selling product listings — title, price, category, image, status |
| categories | Electronics, Fashion, Household, Games & Toys, Bookscart | 
| Items | a user has added to cart | 
|favorites |Items a user has hearted |
|orders| Completed purchases|
## Pages & Features
1. Login / Signup (login.html, signup.html)
- Email + password auth via Supabase Auth
- On signup → auto-creates a row in profiles table
- Redirects to home on success
- Shows error messages inline
2. Home (index.html)
- Search bar — filters products by title in real time
- Category chips — quick links to Electronics, Fashion etc.
- Trending Now — horizontal scroll row of older listings
- Just Listed — 4-column grid of newest listings
- Sold items appear faded + SOLD OUT badge
- Tap any card → compact detail modal with Add to Cart
3. Categories (categories.html)
- Filter chips for each category
- Can combine category filter + search
- Shows item count per filter
- Same 4-column product grid
4. Sell (sell.html)
- Upload photos → stored in Supabase Storage bucket (product-images)
- Fill in: title, description, category, condition, price, size/dimension, pickup address
- Submits to products table with seller_id = logged-in user
5. Cart (cart.html)
- Shows all items user added
- Remove individual items
- Shows subtotal + total
- Checkout → creates rows in orders, marks products as sold, clears cart
6. Profile (profile.html)
- Orders tab — all past purchases with status badges (pending / delivered / cancelled)
- Favorites tab — grid of hearted items
- Settings tab — edit name, phone, address + change password + sign out
## How to Run
1. Open thrift-store/ folder in VS Code
2. Install Live Server extension
3. Right-click index.html → Open with Live Server
4. Opens at http://127.0.0.1:5500




