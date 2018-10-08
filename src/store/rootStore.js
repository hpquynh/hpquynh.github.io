import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'


function configStore() {
    return createStore(
        rootReducer
    )
}

export default configStore()
