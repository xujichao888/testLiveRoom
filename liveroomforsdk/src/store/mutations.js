import * as types from './mutations-type'

const mutations = {
  [types.SET_ONLINE_CONTROL_ALL_HIDE](state) {
    state.onlineList.forEach(item => {
        item.positionIsShow = false
    });
  },
  [types.SET_ONLINE_CONTROL_ONE](state,num) {
    let lastnum = state.lastNum;
    console.log(lastnum)
    console.log(num)
    if(lastnum!=-1 && lastnum!=num){
        this.commit('SET_ONLINE_CONTROL_ALL_HIDE')
    }
    state.onlineList[num].positionIsShow = !state.onlineList[num].positionIsShow ;
    state.lastNum = num;
  }

}

export default mutations