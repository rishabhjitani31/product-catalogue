import React from "react";
import { observer } from "mobx-react";
import {
  Modal,
  Form,
  Input,
  Button,
  InputNumber,
  Select,
  Upload,
  Icon
} from "antd";
import store from "./Store";

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

const normFile = e => {
  if (Array.isArray(e)) {
  }
  return e && e.fileList;
};

const CreateProduct = ({ form, form: { getFieldDecorator } }) => {
  return (
    <Modal
      title="Create Products"
      visible={store.isCreateModalOpen}
      footer={null}
      onCancel={() => (store.isCreateModalOpen = false)}
    >
      <Form onSubmit={e => store.handleSubmit(e, form)}>
        <FormItem {...formItemLayout} label="Product Name">
          {getFieldDecorator("name", {
            rules: [
              { required: true, message: "Please Enter the product Name" }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Product Price">
          {getFieldDecorator("price", {
            rules: [
              { required: true, message: "Please Enter the product Price" }
            ]
          })(<InputNumber />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Product Description">
          {getFieldDecorator("description", {
            rules: [
              {
                required: true,
                message: "Please Enter the product description"
              }
            ]
          })(<TextArea rows={4} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Product Condition">
          {getFieldDecorator("condition", {
            rules: [
              { required: true, message: "Please Select the product Condition" }
            ]
          })(
            <Select>
              <Option value="New">New</Option>
              <Option value="Used">Used</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Product Image">
          {getFieldDecorator("image", {
            valuePropName: "fileList",
            getValueFromEvent: normFile,
            rules: [
              {
                required: true,
                message: "Please upload the image"
              }
            ]
          })(
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              multiple={false}
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </FormItem>

        <div style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default Form.create()(observer(CreateProduct));
