// import {graphql} from 'msw';
// import {QueryKeys} from '../queryClient';
// import {uuidv4} from 'msw/lib/types/utils/internal/uuidv4';
// import {v4} from 'uuid';
// import GET_PRODUCTS from '../graphql/products';
//
// const mock_products = Array.from({length: 10}, (_, i) => ({
//   id: v4(),
//   name: `Product ${i}`,
//   price: i * 10,
// }));
// export const handlers = [
//     graphql.query(GET_PRODUCTS, (req, res, ctx) => {
//         return res(
//           ctx.data({
//             products: mock_products,
//           }),
//       );
//     }),
// ]
//
