import React from "react";
import { observer } from "mobx-react";
import store from "./Store";
import { Form, Icon, Input, Button, Checkbox, Modal} from 'antd';

const FormItem = Form.Item;


const CreateTickets = props => {
  const { getFieldDecorator } = props.form;
  return (
    <Modal
      title="Add Products"
      visible={store.isCreateModalOpen}
      onOk={() => store.onCreateTickets(props.form)}
      okText="Submit"
      cancelText="cancel"
      onCancel={() => (store.isCreateModalOpen = false)}
    >
      <Form  className="login-form">
        <FormItem>
          {getFieldDecorator('productName', {
            rules: [{ required: true, message: 'Please Enter the Procduct Name ' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Product Name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('productDescription', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Product Description" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('productPrice', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Product Price" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('productImage', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Product Image" />
          )}
        </FormItem>
      </Form>
    </Modal>
  );
};
export default Form.create()(observer(CreateTickets));
