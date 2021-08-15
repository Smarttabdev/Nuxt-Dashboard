
export default {

    watch: {
        '$auth.loggedIn': {
           handler() {
                 console.log('NON LOCAL LOGIN');
           },
           deep: true
        }
     },

}