import React from "react";
import { SF_TOASTBUSTERS } from "../../../Assets/Assets";

const ToastbustersDescription = () => {
  return (
    <div className="animate-me">
      <a
        href={SF_TOASTBUSTERS.websites}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>SF Toastbusters</h3>
      </a>
      <p className="margin-top-normal">
        VP of Membership | VP of PR | Sergeant at Arms
      </p>
      <p>
        <a
          href="https://sftoastbusters.weebly.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.sftoastbusters.com
        </a>
      </p>
      <p className="margin-top-normal">
        A Toastmaster chapter in San Francisco.
      </p>
    </div>
  );
};

export default ToastbustersDescription;
