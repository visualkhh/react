import {atom, selectorFamily, useRecoilValue} from 'recoil';

const cartState = atom({
    key: 'cartState',
    default: new Map()
})

export const useCartItem = selectorFamily({
    key: 'cartItem',
    get: (id: string) => ({get}) => {
        const carts = get(cartState);
        return carts.get(id);
    }
})
//
// const useCartItem = (id: string) => {
//     const carts = useRecoilValue(cartState);
//     return carts.get(id);
// }