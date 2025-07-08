export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "fruit_tree", label: "Fruit Tree" },
      { id: "shade_tree", label: "Shade Tree" },
      { id: "evergreen_tree", label: "Evergreen Tree" },
      { id: "flowering_tree", label: "Flowering tree" },
      { id: "indoor_tree", label: "Indoor Tree" },
    ],
  },
  {
    label: "Variety",
    name: "variety",
    componentType: "select",
    options: [
      // Fruit Trees
      { id: "apple_tree", label: "Apple Tree" },
      { id: "lemon_tree", label: "Lemon Tree" },
      { id: "avocado_tree", label: "Avocado Tree" },
      { id: "cherry_tree", label: "Cherry Tree" },
      { id: "fig_tree", label: "Fig Tree" },
      
      // Shade Trees
      { id: "oak_tree", label: "Oak Tree" },
      { id: "maple_tree", label: "Maple Tree" },
      { id: "weeping_willow", label: "Weeping Willow" },
      { id: "tulip_tree", label: "Tulip Tree" },
      { id: "london_plane_tree", label: "London Plane Tree" },
      
      // Evergreen Trees
      { id: "blue_spruce", label: "Blue Spruce" },
      { id: "arborvitae", label: "Arborvitae" },
      { id: "italian_cypress", label: "Italian Cypress" },
      { id: "douglas_fir", label: "Douglas Fir" },
      { id: "juniper", label: "Juniper" },
      
      // Flowering Trees
      { id: "dogwood", label: "Dogwood" },
      { id: "magnolia", label: "Magnolia" },
      { id: "crape_myrtle", label: "Crape Myrtle" },
      { id: "redbud", label: "Redbud" },
      { id: "cherry_blossom", label: "Cherry Blossom" },
      
      // Indoor Trees
      { id: "fiddle_leaf_fig", label: "Fiddle Leaf Fig" },
      { id: "money_tree", label: "Money Tree" },
      { id: "rubber_plant", label: "Rubber Plant" },
      { id: "dragon_tree", label: "Dragon Tree" },
      { id: "norfolk_island_pine", label: "Norfolk Island Pine" }
    ]
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "fruit_tree",
    label: "Fruit Tree",
    path: "/shop/listing",
  },
  {
    id: "shade_tree",
    label: "Shade Tree",
    path: "/shop/listing",
  },
  {
    id: "evergreen_tree",
    label: "Evergreen Tree",
    path: "/shop/listing",
  },
  {
    id: "flowering_tree",
    label: "Flowering Tree",
    path: "/shop/listing",
  },
  {
    id: "indoor_tree",
    label: "Indoor Tree",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Fruit Tree",
  women: "Shade Tree",
  kids: "Evergreen Tree",
  accessories: "Flowering Tree",
  footwear: "Indoor Tree",
};

export const brandOptionsMap = {
  // Fruit Trees
  apple_tree: "Apple Tree",
  lemon_tree: "Lemon Tree",
  avocado_tree: "Avocado Tree",
  cherry_tree: "Cherry Tree",
  fig_tree: "Fig Tree",

  // Shade Trees
  oak_tree: "Oak Tree",
  maple_tree: "Maple Tree",
  weeping_willow: "Weeping Willow",
  tulip_tree: "Tulip Tree",
  london_plane_tree: "London Plane Tree",

  // Evergreen Trees
  blue_spruce: "Blue Spruce",
  arborvitae: "Arborvitae",
  italian_cypress: "Italian Cypress",
  douglas_fir: "Douglas Fir",
  juniper: "Juniper",

  // Flowering Trees
  dogwood: "Dogwood",
  magnolia: "Magnolia",
  crape_myrtle: "Crape Myrtle",
  redbud: "Redbud",
  cherry_blossom: "Cherry Blossom",

  // Indoor Trees
  fiddle_leaf_fig: "Fiddle Leaf Fig",
  money_tree: "Money Tree",
  rubber_plant: "Rubber Plant",
  dragon_tree: "Dragon Tree",
  norfolk_island_pine: "Norfolk Island Pine"
}

export const filterOptions = {
  category: [
    { id: "fruit_tree", label: "Fruit Tree" },
    { id: "shade_tree", label: "Shade Tree" },
    { id: "evergreen_tree", label: "Evergreen Tree" },
    { id: "flowering_tree", label: "Flowering tree" },
    { id: "indoor_tree", label: "Indoor Tree" },
  ],
  variety: [
    // Fruit Trees
    { id: "apple_tree", label: "Apple Tree" },
    { id: "lemon_tree", label: "Lemon Tree" },
    { id: "avocado_tree", label: "Avocado Tree" },
    { id: "cherry_tree", label: "Cherry Tree" },
    { id: "fig_tree", label: "Fig Tree" },
    
    // Shade Trees
    { id: "oak_tree", label: "Oak Tree" },
    { id: "maple_tree", label: "Maple Tree" },
    { id: "weeping_willow", label: "Weeping Willow" },
    { id: "tulip_tree", label: "Tulip Tree" },
    { id: "london_plane_tree", label: "London Plane Tree" },
    
    // Evergreen Trees
    { id: "blue_spruce", label: "Blue Spruce" },
    { id: "arborvitae", label: "Arborvitae" },
    { id: "italian_cypress", label: "Italian Cypress" },
    { id: "douglas_fir", label: "Douglas Fir" },
    { id: "juniper", label: "Juniper" },
    
    // Flowering Trees
    { id: "dogwood", label: "Dogwood" },
    { id: "magnolia", label: "Magnolia" },
    { id: "crape_myrtle", label: "Crape Myrtle" },
    { id: "redbud", label: "Redbud" },
    { id: "cherry_blossom", label: "Cherry Blossom" },
    
    // Indoor Trees
    { id: "fiddle_leaf_fig", label: "Fiddle Leaf Fig" },
    { id: "money_tree", label: "Money Tree" },
    { id: "rubber_plant", label: "Rubber Plant" },
    { id: "dragon_tree", label: "Dragon Tree" },
    { id: "norfolk_island_pine", label: "Norfolk Island Pine" }
  ]
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];