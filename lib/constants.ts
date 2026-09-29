// =============================================================================
// ByteSpace Landing Page — Static Data Constants
// =============================================================================

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Courses", href: "/courses", active: false },
  { label: "Creators", href: "/creators", active: false },
] as const;

export const NAV_ACTIONS = [
  { label: "Sign In", href: "/signin" },
  { label: "Join Us", href: "/join" },
] as const;

// -----------------------------------------------------------------------------
// Partner Logos
// -----------------------------------------------------------------------------
export const PARTNER_LOGOS = [
  { src: "/partner/partner-one.svg", alt: "Partner One", width: 167, height: 41 },
  { src: "/partner/partner-two.svg", alt: "Partner Two", width: 168, height: 41 },
  { src: "/partner/partner-3.svg", alt: "Partner Three", width: 168, height: 41 },
  { src: "/partner/partner-four.svg", alt: "Partner Four", width: 168, height: 41 },
  { src: "/partner/partner-five.svg", alt: "Partner Five", width: 169, height: 42 },
] as const;

// -----------------------------------------------------------------------------
// Course Tab Categories
// -----------------------------------------------------------------------------
export const COURSE_TABS = [
  { label: "Featured", active: true },
  { label: "Music", active: false },
  { label: "Drawing & Painting", active: false },
  { label: "Marketing", active: false },
  { label: "Animation", active: false },
  { label: "Social Media", active: false },
  { label: "UI/UX Design", active: false },
  { label: "Creative Marketing", active: false },
  { label: "Digital Illustration", active: false },
  { label: "Film & Video", active: false },
  { label: "Crafts", active: false },
  { label: "Freelance & Entrepreneurship", active: false },
  { label: "Graphic Design", active: false },
  { label: "Photography", active: false },
  { label: "Productivity", active: false },
  { label: "Web Development", active: false },
  { label: "Data Science", active: false },
  { label: "Cooking", active: false },
] as const;

// -----------------------------------------------------------------------------
// Courses
// -----------------------------------------------------------------------------
export const COURSES = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image: "/courses/courses-one.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    priceLabel: "/lifetime",
    rating: 4.5,
  },
  {
    title: "Build Digital Asset",
    author: "purepearl studio",
    image: "/courses/courses-two.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    priceLabel: "/lifetime",
    rating: 4.5,
  },
  {
    title: "the Power of Big Data",
    author: "purepearl studio",
    image: "/courses/courses-three.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    priceLabel: "/lifetime",
    rating: 4.5,
  },
  {
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    image: "/courses/courses-four.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    priceLabel: "/lifetime",
    rating: 4.5,
  },
  {
    title: "Mastering Money Management",
    author: "purepearl studio",
    image: "/courses/courses-five.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    priceLabel: "/lifetime",
    rating: 4.5,
  },
  {
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    image: "/courses/courses-six.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    priceLabel: "/lifetime",
    rating: 4.5,
  },
] as const;

// -----------------------------------------------------------------------------
// Explore Categories (larger cards)
// -----------------------------------------------------------------------------
export const EXPLORE_CATEGORIES = [
  { name: "Design", icon: "Pen" as const },
  { name: "Development", icon: "PhoneCode" as const },
  { name: "IT & Software", icon: "Laptop" as const },
  { name: "Business", icon: "Organization" as const },
  { name: "Marketing", icon: "AnyShare" as const },
  { name: "Photography", icon: "Photography" as const },
] as const;

// -----------------------------------------------------------------------------
// Growth Stats
// -----------------------------------------------------------------------------
export const GROWTH_STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
] as const;

// -----------------------------------------------------------------------------
// Creator Features
// -----------------------------------------------------------------------------
export const CREATOR_FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

// -----------------------------------------------------------------------------
// Testimonials
// -----------------------------------------------------------------------------
export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/avatar/avatar-one.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/avatar/avatar-two.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/avatar/avatar-three.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
] as const;

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------
export const FOOTER_BROWSE_COL1 = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
] as const;

export const FOOTER_BROWSE_COL2 = [
  "Development",
  "Marketing",
  "Photography",
  "Finance",
  "Sport",
] as const;

export const FOOTER_PLATFORM = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
] as const;

export const FOOTER_LEGAL = [
  "Privacy Policy",
  "Terms of Service",
  "Cookies Settings",
] as const;
