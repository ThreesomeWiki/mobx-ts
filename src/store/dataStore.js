import { observable, action } from "mobx";

class DataStore {
  @observable name = 0;
  @observable list = [1, 2];
  @action
  setName = async () => {
    const ret = await fetch("http://47.103.44.99/").then((res) => res.text());
    console.log("ret", ret);
    this.name += 1;
    this.list.push(this.name);
  };
}

export default new DataStore();
