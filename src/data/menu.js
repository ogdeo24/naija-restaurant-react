export const MENU = [
  { name:"Party Jollof", price:14, desc:"Smoky tomato rice + plantain",
    img:"https://niyis.co.uk/cdn/shop/articles/NIGERIAN_JOLLOF_RICE_5624df8e-b726-4d62-8a2e-44a565feb504.jpg?v=1738276335" },
  { name:"Beef Suya", price:12, desc:"Spicy grilled skewers",
    img:"https://cheflolaskitchen.com/wp-content/uploads/2023/01/nigerian-suya-34-1024x717.jpg.webp" },
  { name:"Egusi Soup", price:15, desc:"Melon seed stew, spinach",
    img:"https://images.squarespace-cdn.com/content/v1/614f831e90f08045038b4dae/9a18e8d0-efc6-4ca6-aa4c-656f7d53cd4e/Recipe-for-Egusi-Soup.png" },
  { name:"Pounded Yam", price:6, desc:"Paired with soup",
    img:"https://travelandmunchies.com/wp-content/uploads/2025/03/IMG_9666-scaled.jpg" },
  { name:"Moi-Moi", price:8, desc:"Steamed bean pudding",
    img:"https://pulses.org/images/com_yoorecipe/422/moi-moi-rollup.jpg" },
  { name:"Puff-Puff", price:6, desc:"Fried dough balls",
    img:"https://allnigerianfoods.com/wp-content/uploads/puff_puff_recipe-500x500.jpg" },
];

export const GALLERY = [...MENU.map(m=>m.img)];
