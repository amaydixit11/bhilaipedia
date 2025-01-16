import { FeaturedArticle } from '@/components/home/FeaturedArticle';
import { NewsSection } from '@/components/home/NewsSection';
import { QuickStats } from '@/components/home/QuickStats';
import { getRecentNews } from '@/data/sample';
import HeroSection from '@/components/home/HeroComponent';
import DidYouKnow from '@/components/home/DidYouKnow';
import OnThisDay from '@/components/home/OnThisDay';
import CategoryBrowser from '@/components/home/CategoryBrowser';

export default function HomePage() {
  const recentNews = getRecentNews(5);
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <FeaturedArticle />
            <DidYouKnow />
            <QuickStats />
          </div>
          {/* Right Column */}
          <div className="space-y-8">
            <NewsSection items={recentNews} />
            <OnThisDay />
            <CategoryBrowser />
          </div>
        </div>
      </div>
    </>
  );
}

// "Create a frontend for an application called **Bhilaipedia**, a Wikipedia-style platform designed for internal use at IIT Bhilai. The application aims to store, organize, and display over 5,000 articles, complete with categories, version control, and role-based permissions. Here's a detailed breakdown of the requirements:

// ---

// ### **1. Tech Stack**  
// - **Language**: TypeScript  
// - **Framework**: Next.js  
// - **Styling**: TailwindCSS with ShadCN/UI components for consistent and modern UI design.  
// - **State Management**: Zustand for lightweight and scalable state management.  
// - **API Handling**: TanStack Query for efficient API requests and caching.  
// - **Authentication**: Supabase Auth for secure user authentication with role-based access.  
// - **Forms**: React Hook Form for intuitive and validated form handling.  

// ---

// ### **2. Features**  

// #### **Core Pages**  
// 1. **Home Page**:  
//    - A clean interface with a search bar for finding articles quickly.  
//    - Popular articles, recently updated articles, and featured categories displayed in a grid layout.  

// 2. **Article View Page**:  
//    - Displays article content with version history and the ability to rollback to previous versions (admin only).  
//    - Tags, categories, and related articles shown at the bottom.  

// 3. **Article Editor**:  
//    - Rich text editor to allow contributors to create and edit articles.  
//    - Support for adding images, links, and tables.  
//    - Display real-time markdown preview.  

// 4. **Categories Page**:  
//    - List all categories hierarchically with the number of articles in each.  
//    - Clicking on a category navigates to a filtered list of articles under it.  

// 5. **User Profile Page**:  
//    - Displays the user’s contributions, including articles created or edited.  
//    - Role-based access permissions (e.g., Admin, Editor, Viewer) shown on the profile.  

// 6. **Search Results Page**:  
//    - Displays search results with support for filtering by category, tags, or date.  

// ---

// #### **Navigation**  
// - Top navigation bar with links to Home, Categories, and User Profile.  
// - Breadcrumb navigation on article pages.  

// ---

// ### **3. Authentication and Role-Based Features**  
// - **Authentication**:  
//   - Supabase Auth integrated for secure sign-in using institute email IDs.  
//   - Restrict access based on roles:  
//     - **Admin**: Can manage users, edit all articles, and view version history.  
//     - **Editor**: Can edit and create articles within assigned categories.  
//     - **Viewer**: Can only view articles.  

// ---

// ### **4. Functional Details**  
// - **Search Bar**: Implement a search bar with ElasticSearch integration for fast and relevant results.  
// - **Article Versioning**:  
//   - Display a list of previous versions with timestamps and author names.  
//   - Allow admins to rollback to specific versions.  

// ---

// ### **5. State Management**  
// - Use Zustand to manage the theme (light/dark), authentication state, and other shared states like the currently selected category.  

// ---

// ### **6. API Integration**  
// - Fetch articles, categories, and user data from a RESTful backend.  
// - Use TanStack Query for efficient API calls and data caching.

// ---

// ### **7. Project Structure**  
// - Use a modular and scalable directory structure:  
//   ```
//   ├── components/    # Shared UI components  
//   ├── context/       # Context providers (e.g., ThemeContext)  
//   ├── hooks/         # Reusable hooks  
//   ├── pages/         # Next.js pages  
//   ├── public/        # Static assets  
//   ├── store/         # Zustand state stores  
//   ├── styles/        # Global styles  
//   ├── utils/         # Utility functions  
//   ├── lib/           # External libraries (e.g., Supabase client)  
//   ```  

// ---

// ### **8. Additional Requirements**  
// - Ensure the code follows best practices for accessibility (e.g., semantic HTML, ARIA attributes).  
// - Use TypeScript strictly to ensure type safety throughout the project.  
// - Provide well-commented and clean code for maintainability.  

// Generate the frontend codebase based on these specifications, ensuring it is ready for seamless integration with the backend API."