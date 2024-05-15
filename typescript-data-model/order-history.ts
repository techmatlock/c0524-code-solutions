interface OrderProps {
  orderDate: string;
  total: number;
  shipTo: string;
  title: string;
  author: string;
  viewItem?: boolean;
  deliverDate: string;
  returnDate: string;
  review?: string;
  buyAgain?: boolean;
}

const orderHistory: OrderProps[] = [
  {
    orderDate: '2020-04-08',
    total: 37,
    shipTo: '8732 Yorkshire St. New Hampshire, 92807',
    title: 'JavaScript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    deliverDate: '2020-08-08',
    returnDate: '2020-07-09',
  },
];

console.log(orderHistory[0]);
