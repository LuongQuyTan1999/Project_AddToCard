import * as types from './../constants/ActionType'
var initialState = [
    {
        id: 1,
        name : 'Iphone 7 plus',
        image : '',
        description : 'San pham do apple san xuat',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id: 2,
        name : 'Samsung 7 plus',
        image : '',
        description : 'San pham do samsung san xuat',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id: 3,
        name : 'Glaxy 7 plus',
        image : '',
        description : 'San pham do galaxy san xuat',
        price : 1000,
        inventory : 20,
        rating : 5
    }
]

const products = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_PRODUCT:
            return state
        default : return state
    }
}
export default products