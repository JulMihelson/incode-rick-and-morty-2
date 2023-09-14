import {
  ExclamationCircleOutlined,
  MoreOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import React from "react";
import { FloatButton } from "antd";

const ActiveBtn = () => (
  <>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{
        right: 94,
      }}
      icon={<MoreOutlined />}
    >
      <FloatButton icon={<ExclamationCircleOutlined />} />
      <FloatButton icon={<VerticalAlignBottomOutlined />} />
    </FloatButton.Group>
  </>
);
export default ActiveBtn;
