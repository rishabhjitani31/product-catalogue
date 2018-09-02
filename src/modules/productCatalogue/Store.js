import { observable, computed } from "mobx";

class Store {
  @observable
  isCreateModalOpen = false;
  @observable
  productDataSource = [];

  @computed
  get sortedProductList() {
    return this.productDataSource.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
  }

  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        this.productDataSource.push(values);
        form.resetFields();
        this.isCreateModalOpen = false;
      }
    });
  };
}
export default new Store();
