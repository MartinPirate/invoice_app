import {createStore} from 'vuex'

export default createStore({
    state: {
        invoiceModal: null,
        modalActive: null,  /*collect way to update a state is through mutations*/
    },
    mutations: {
        TOGGLE_INVOICE(state) {
            state.invoiceModal = !state.invoiceModal
        },
        TOGGLE_MODAL(state){
            console.log(state.modalActive)
            state.modalActive = !state.modalActive
            console.log(state.modalActive)


        }
    },
    actions: {},
    modules: {}
})
