import CandidateDispatcher from './CandidateDispatcher'

class CVCandidateActions{

    emptyCVCandidate(){
        CandidateDispatcher.handleViewAction({
            actionType : 'EMPTY_CANDIDATE_LIST',
            payload : null
        })
    }

    insertCandidate(candidate){
        CandidateDispatcher.handleViewAction({
            actionType : 'INSERT_CANDIDATE',
            payload : candidate
        })
    }
}

export default new CVCandidateActions();