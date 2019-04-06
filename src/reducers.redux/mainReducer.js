export default (state = {}, action) => {
    let source, flag;
    switch (action.type) {
        case 'UPDATE_SEARCH':
            return {
                storage:{
                    ...state['storage'],
                    filter: action.text
                }
            };

        case 'CLEAR_SEARCH':
            return {
                storage: {
                    ...state['storage'],
                    filter: ''
                }
            };
        case 'DECREASE':
            source = state.storage['selected'];
            source.forEach(function(item, ind){
                if(action.index===ind){
                    if (!source[ind]['num']){
                        source.splice(ind, 1);
                    }else{
                        source[ind]['num']--;
                    }
                }
            });
  
            return {
                storage:{
                    ...state['storage'],
                    selected:[
                        ...source
                    ]
                }
            };
            break;
        case 'ADD_CARD':
            source = state.storage['selected'];
            flag = 0;
            source.forEach(function(item, ind){
                    if(action.name===item.name){
                            source[ind]['num']++;
                            flag = 1;
                    }
                }
            );
            if (!flag){
                source.push({name: action.name, image: action.image, num: 0});
            }
            return {
                storage:{
                    ...state.storage,
                    selected:[
                        ...source
                    ]
                }
            };
        default:
            return state;
    }
};