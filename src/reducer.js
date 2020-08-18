export const initialState={
    basket:[
        // {
        // id: "325435435",
        // title:"Apple iPad Pro 2019 27.94 cm (11 inch) Wi-Fi Tablet 256 GB, Silver",
        // price: 80560,
        // rating: 4,
        // image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4-MCpI4UgYDJVC6bVTH5JHUp9UIX3t57Bw8vaCOBB_6S1hScQ3ySwSyCIP5d4VQmGzJU9hy0Eaa8&usqp=CAc"

        // },

        // {
        //     id: "45890785",
        //     title:"Apple iPad Pro 2020 27.94 cm (11 inch) Wi-Fi Tablet 256 GB, Silver",
        //     price: 80560,
        //     rating: 4,
        //     image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4-MCpI4UgYDJVC6bVTH5JHUp9UIX3t57Bw8vaCOBB_6S1hScQ3ySwSyCIP5d4VQmGzJU9hy0Eaa8&usqp=CAc"
    
        //     }


],
user: null,
};

//reduce basically takes the function
export const getBasketTotal= (basket)=>basket?.reduce((amount, item)=>item.price+ amount, 0);
    const reducer=(state, action)=> {
        console.log(action);
        switch(action.type){
            case "SET_USER":
                return{
                    ...state,
                    //set the user to whatever the action of user..
                    user: action.user
                }
            case 'ADD_TO_BASKET':
                return {
                    //below code returns whatever is the current state
                    ...state,
                    basket:[...state.basket, action.item]
                }
            case 'REMOVE_FROM_BASKET':

            //logic for removing item from basket
            let newBasket= [...state.basket];

            //go and check all of the basketItems and check if the basketItem id ===action.id
            const index= state.basket.findIndex((basketItem)=>basketItem.id===action.id);

            if(index>=0){
               //item exists in basket, remove it... 
            // go to the index 1 and cut it(splice it)
            newBasket.splice(index, 1);
            }else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket`
                )
            }

            return {...state, basket: newBasket};
            default:
                return state;

           
        }
        
    }

    export default reducer;
