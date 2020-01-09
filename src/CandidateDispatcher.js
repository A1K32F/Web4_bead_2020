import {Dispatcher} from 'flux'
import CVStore from "./CVStore";

class CandidateDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            source : 'VIEW_ACTION',
            action : action
        });
    }
}

const dispatcher = new CandidateDispatcher();
dispatcher.register((data)=>{
    if(data.action.actionType !== 'EMPTY_CANDIDATE_LIST'){
        return;
    }
    CVStore._candidate = [];
    CVStore.emitChange();
});
dispatcher.register((data)=>{
    if(data.action.actionType !== 'INSERT_CANDIDATE'){
        return;
    }
    CVStore._candidate.push(data.action.payload);
    CVStore.emitChange();
});


export default dispatcher;




