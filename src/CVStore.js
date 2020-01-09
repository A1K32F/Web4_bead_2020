import EventEmitter from 'events'

class CVStore extends EventEmitter{

    _candidate = [ ];

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

export  default new CVStore();