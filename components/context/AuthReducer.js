export default (state, action) => {
          switch(action.type){
                  case 'SIGN_UP':
                      return {
                          ...state,
                          isLoading: false,
                          userToken: action.payload,
                      }
                 case 'LOGIN':
                     return {
                          ...state,
                          isLoading: false,
                          userToken: action.payload,
                     }
                case 'LOGOUT':
                    return {
                       ...state,
                       isLoading: false,
                       userToken: null,

                }
                default: 
                return {
                    ...state,
                    isLoading: false,
                }
          }
}