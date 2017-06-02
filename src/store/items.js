const percentageDiscount = {
  type: 'percDiscount',
  amount: 20,
  text: '20%',
};

const multipleFree = {
  type: 'multipleFree',
  every: 3,
  free: 1,
  text: '3 per 2'
}

const tshirts = [
  { id: 1, price: 18.90, discount: percentageDiscount, name: 'Zombies', imageUrl: 'https://www.crazydogtshirts.com/pub/media/catalog/product/cache/a35124ad21628a4151f1b7b2207a9a15/z/o/zombies-eat-brains-1100_2.jpg' },
  { id: 2, price: 16.90, name: 'BaCoN', imageUrl: 'https://www.crazydogtshirts.com/pub/media/catalog/product/cache/a35124ad21628a4151f1b7b2207a9a15/b/a/baconchemm.jpg' },
  { id: 3, price: 14.90, discount: multipleFree, name: 'Crows', imageUrl: 'https://www.crazydogtshirts.com/pub/media/catalog/product/cache/a35124ad21628a4151f1b7b2207a9a15/c/r/crowsbeforehoesm.jpg' },
  { id: 4, price: 10.90, name: 'Name Triangles', imageUrl: 'https://www.crazydogtshirts.com/pub/media/catalog/product/cache/a35124ad21628a4151f1b7b2207a9a15/t/r/trianglenamesnavymen_1_.jpg' },
  { id: 5, price: 13, name: 'I\'m Awesome', imageUrl: 'https://www.crazydogtshirts.com/pub/media/catalog/product/cache/a35124ad21628a4151f1b7b2207a9a15/m/y/my-boss-thinks-im-awesome-1100.jpg' },
  { id: 6, price: 11.50, name: 'Ironman', imageUrl: 'https://www.crazydogtshirts.com/pub/media/catalog/product/cache/a35124ad21628a4151f1b7b2207a9a15/f/e/fe-man-1100.jpg' },
  { id: 7, price: 12.90, name: 'Gravity', imageUrl: 'https://www.crazydogtshirts.com/pub/media/catalog/product/cache/a35124ad21628a4151f1b7b2207a9a15/g/r/gravity.jpg' },
  { id: 8, price: 14.90, name: 'You\'re', imageUrl: 'https://www.crazydogtshirts.com/pub/media/catalog/product/cache/a35124ad21628a4151f1b7b2207a9a15/p/r/proper-use-of-youre-1100.jpg' },
  { id: 9, price: 16.90, name: 'Hates Flossing', imageUrl: 'https://www.crazydogtshirts.com/pub/media/catalog/product/cache/a35124ad21628a4151f1b7b2207a9a15/t/r/trexhatesflossingm.jpg' }
]

export default tshirts.reduce((acc, tshirt) => {
  acc[tshirt.id] = tshirt
  return acc
}, {});
