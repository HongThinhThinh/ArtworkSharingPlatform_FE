import { CheckOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./GoPro.scss";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/counterSlice";

const includedFeatures = [
  "Find jobs on all over server",
  "Creative oppoturnity",
  "Easy to access & contact with customer",
  "Manage your works simply!",
];

export default function GoPro() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goCreator = async () => {
    try {
      const response = await api.put("/goCreator", {});
      console.log(response.data.data);
      dispatch(login(response.data.data));
      alertSuccess("You are now a creator!");
      navigate("/creator-manage/artworks");
    } catch (err) {
      alertFail(err.response.data);
    }
  };
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };
  const props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div className="go-pro bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-24">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let's become a creator
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            If you want to be a creator. Just give us a little bit about your
            inspiration. Let's be a part of Cremo's community. We need your
            distribution.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none ">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900"></h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Let's experiment with the first step to become a creator. How
              about uploading your first artwork in Cremo!
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">
                What’s included if you become to Cremo's creator
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckOutlined />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-2xl sm:text-center">
          <Form
            className="form"
            name="form_item_path"
            layout="vertical"
            onFinish={goCreator}
          >
            <Checkbox onChange={onChange}>
              I agree with Cremo{" "}
              <Link to="" className="about__detail">
                Terms of Service
              </Link>
              ,{" "}
              <Link to="" className="about__detail">
                Privacy Policy
              </Link>
              , and our default{" "}
              <Link to="" className="about__detail">
                Notification Settings
              </Link>
            </Checkbox>

            <Button
              className="form__submit"
              htmlType="submit"
              disabled={!checked}
              enable={checked}
              style={
                checked && {
                  backgroundColor: "rgb(0, 105, 167)",
                  color: "white",
                }
              }
            >
              Become to Creator
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
