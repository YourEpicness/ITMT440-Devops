const ITEM_DATA = [
  {
    id: 1,
    title: 'Electronics',
    routeName: 'electronics',
    items: [
      {
        id: 1,
        name: 'Apple Airpods',
        // imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        imageUrl: "/images/shop-img/electronics/airpods.jpg",
        price: "Trade"
      },
      {
        id: 2,
        name: 'Dell Lenovo Laptop',
        // imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        imageUrl: "/images/shop-img/electronics/collegelaptop.jpg",
        price: 18
      },
      {
        id: 3,
        name: 'Microwave',
        // imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        imageUrl: "/images/shop-img/electronics/microwave.jpg",
        price: 35
      },
      {
        id: 4,
        name: '24inch Monitor',
        // imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        imageUrl: "/images/shop-img/electronics/monitor.jpg",
        price: 25
      },
      {
        id: 5,
        name: 'Keyboard',
        // imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        imageUrl: "/images/shop-img/electronics/green-beanie.png",
        price: 18
      },
      {
        id: 6,
        name: 'Mouse',
        // imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        imageUrl: "/images/shop-img/electronics/palm-tree-cap.png",
        price: 14
      },
      {
        id: 7,
        name: 'Headphones',
        // imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        imageUrl: "/images/shop-img/electronics/red-beanie.png",
        price: 18
      },
      {
        id: 8,
        name: 'Earbuds',
        // imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        imageUrl: "/images/shop-img/electronics/wolf-cap.png",
        price: 14
      },
      {
        id: 9,
        name: 'Webcam',
        // imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        imageUrl: "/images/shop-img/electronics/blue-snapback.png",
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Clothing',
    routeName: 'clothing',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        imageUrl: "/images/shop-img/clothing/adidas-nmd.png",
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        // imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        imageUrl: "/images/shop-img/clothing/yeezy.png",
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        // imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        imageUrl: "/images/shop-img/clothing/black-converse.png",
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        // imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        imageUrl: "/images/shop-img/clothing/white-nike-high-tops.png",
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        // imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        imageUrl: "/images/shop-img/clothing/nikes-red.png",
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        // imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        imageUrl: "/images/shop-img/clothing/nike-brown.png",
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        // imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        imageUrl: "/images/shop-img/clothing/nike-funky.png",
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        // imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        imageUrl: "/images/shop-img/clothing/timberlands.png",
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'education',
    routeName: 'education',
    items: [
      {
        id: 18,
        name: 'College Backpack',
        // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        imageUrl: "/images/shop-img/education/genericbackpack.jpg",
        price: 20
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        // imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        imageUrl: "/images/shop-img/education/blue-jean-jacket.png",
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        // imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        imageUrl: "/images/shop-img/education/grey-jean-jacket.png",
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        // imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        imageUrl: "/images/shop-img/education/brown-shearling.png",
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        // imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        imageUrl: "/images/shop-img/education/brown-trench.png",
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        imageUrl: "/images/shop-img/womens/blue-tank.png",
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        // imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        imageUrl: "/images/shop-img/womens/floral-blouse.png",
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        // imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        imageUrl: "/images/shop-img/womens/floral-skirt.png",
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        // imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        imageUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        // imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        imageUrl: "/images/shop-img/womens/striped-sweater.png",
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        // imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        imageUrl: "/images/shop-img/womens/yellow-track-suit.png",
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        // imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        imageUrl: "/images/shop-img/womens/white-vest.png",
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        imageUrl: "/images/shop-img/mens/camo-vest.png",
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        // imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        imageUrl: "/images/shop-img/mens/floral-shirt.png",
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Shirt',
        // imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        imageUrl: "/images/shop-img/mens/long-sleeve.png",
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        // imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        imageUrl: "/images/shop-img/mens/pink-shirt.png",
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        // imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        // imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        imageUrl: "/images/shop-img/mens/polka-dot-shirt.png",
        price: 25
      }
    ]
  }
];

export default ITEM_DATA;
