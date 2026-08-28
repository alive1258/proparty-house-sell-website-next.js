export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  {
    display: "Properties",
    href: "/properties",
    children: [
      { display: "Buy a Home", href: "/properties?intent=buy" },
      { display: "Rent a Home", href: "/properties?intent=rent" },
      { display: "Invest", href: "/properties?intent=invest" },
      { display: "New Developments", href: "/properties?intent=new" },
    ],
  },
  {
    display: "Services",
    href: "/services",
    children: [
      { display: "Buying Guide", href: "/services/buying" },
      { display: "Selling Guide", href: "/services/selling" },
      { display: "Property Management", href: "/services/management" },
      { display: "Mortgage Calculator", href: "/services/mortgage-calculator" },
    ],
  },
  {
    display: "Company",
    href: "/about",
    children: [
      { display: "About Us", href: "/about" },
      { display: "Our Agents", href: "/about/agents" },
      { display: "Careers", href: "/about/careers" },
      { display: "News & Press", href: "/about/news" },
    ],
  },
  {
    display: "Resources",
    href: "/blog",
    children: [
      { display: "Blog", href: "/blog" },
      { display: "FAQs", href: "/#faq" },
      { display: "Buyer's Guide", href: "/resources/buyers-guide" },
    ],
  },
  { display: "Contact", href: "/contact" },
];

// TODO: replace with the brokerage's real phone number/hours
export const CONTACT_PHONE = "+1 (202) 555-0198";
export const OPEN_HOURS = "Mon - Sat, 9am - 6pm";
