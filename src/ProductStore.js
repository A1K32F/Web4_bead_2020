import EventEmitter from 'events'

class ProductStore extends EventEmitter{

    _products = [ ];

    emitChange(){
        this.emit('change')
    }

    addChangeListener(callback){
        this.on('change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('change',callback);
    }
}

export  default new ProductStore();