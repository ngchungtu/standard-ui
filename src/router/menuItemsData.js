export const menuItemsData = [
    {
      title: "Product",
      url: "/product-detail",
    },
    {
      title: "Cart",
      url: "/cart",
    },
    {
      title: "Cart Result",
      url: "/cart-result",
    },
    {
      title: "Services",
      url: "/services",
      submenu: [
        {
          title: "Web Design",
          url: "web-design",
        },
        {
          title: "Web Development",
          url: "web-dev",
          submenu: [
            {
              title: "Frontend",
              url: "frontend",
            },
            {
              title: "Backend",
              submenu: [
                {
                  title: "NodeJS",
                  url: "node",
                },
                {
                  title: "PHP",
                  url: "php",
                },
              ],
            },
          ],
        },
        {
          title: "SEO",
          url: "seo",
        },
      ],
    },
    {
      title_popup: "Giỏ hàng",
      popup: true,
      url: "/cart",
    },
    {
      title: "About",
      url: "/about",
    },
  ];