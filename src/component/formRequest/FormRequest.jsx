import { Button, Modal, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import "./FormRequest.scss";
function FormRequest() {
  const [value, setValue] = useState("option1");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Modal
      open="true"
      title={
        <div>
          <img src="https://cdn.dribbble.com/userupload/13160510/file/original-57ed6d83e8919f069a08973b01db421d.jpg?resize=1200x496&vertical=center" />
          <h4>Let's get your request ready to send</h4>
        </div>
      }
      centered
      footer={[<Button type="primary">Send Request</Button>]}
    >
      <div>
        <h3>What are your looking to design... </h3>
        <TextArea
          // showCount
          // maxLength={20}
          placeholder="e.g. landing page, iOS icon"
          autoSize
        />
      </div>
      <div>
        <h3>How urgent is your request</h3>
        <Radio.Group
          onChange={onChange}
          value={value}
          className="my-radio-group"
        >
          <Radio value="option1" className="radio-custom">
            ASAP
          </Radio>
          <Radio value="option2" className="radio-custom">
            Within the next month
          </Radio>
          <Radio value="option3" className="radio-custom">
            No urgent
          </Radio>
        </Radio.Group>
      </div>
      <div>
        <h3>Tell us more about the project</h3>
        <TextArea
          rows={8}
          placeholder="Looking to add another landing page to my current Webflow site..."
        />
      </div>
    </Modal>
  );
}

export default FormRequest;
