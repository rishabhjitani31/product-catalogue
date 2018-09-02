import { observable, computed } from "mobx";


class Store {
  @observable
  isCreateModalOpen = false;
  @observable
  productDataSource = [];
  @observable
  count = 0;
  @observable
  selectedProductsList = [];

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
        this.count++;
        values.id = this.count;
        this.productDataSource.push(values);
        form.resetFields();
        this.isCreateModalOpen = false;
      }
    });
  };

  onProductSelect = product => {
    if (this.selectedProductsList.findIndex(p => p.id === product.id) > -1) {
      this.selectedProductsList = this.selectedProductsList.filter(p => {
       return  p.id !== product.id;
      });
    } else {

      this.selectedProductsList.push(product);
    }
  };
}
export default new Store();
