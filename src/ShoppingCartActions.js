import ProductDispatcher from './ProductDispatcher'

class ShoppingCartActions{

    emptyShoppingCart(){
        ProductDispatcher.handleViewAction({
            actionType : 'EMPTY_PRODUCT_LIST',
            payload : null
        })
    }

    insertProduct(product){
        ProductDispatcher.handleViewAction({
            actionType : 'INSERT_PRODUCT',
            payload : product
        })
    }
}

export default new ShoppingCartActions();