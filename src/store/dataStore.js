import { observable, action } from "mobx";

class DataStore {
  @observable name = 0;
  @observable list = [];
  @action
  setName = async () => {
    this.name += 1;
    this.list.push(this.name);
  };
}

export default new DataStore();
