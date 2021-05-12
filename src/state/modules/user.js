export default {
   state: {
     name: ""
   },
   mutations: {
     setName (state,name) {
       console.log(state);
       state.name=name;
     }
   },
   actions:{
     setName(context,name){
       debugger;
      context.commit('setName',name);
     }
     
   }
 }