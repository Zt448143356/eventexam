const mutations = {
  setLogin(state, info) {
    if (info) {
      state.Login = true;
    } else {
      state.Login = false;
    }
  },
  setLoginData(state,LoginData){
    state.email = LoginData.email;
    state.name =LoginData.name;
    state.imageUrl =LoginData.headImg;
  }
}

export default mutations

