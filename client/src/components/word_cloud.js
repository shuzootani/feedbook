import React from "react";
import ReactDOM from "react-dom";
import { get } from "../http";
import drawWordCloudWith from "../module/word_cloud_layout";
import { handleError } from "../error";
import { fetchMe } from "../actions/user";

const WordCloud = () => {
  const userId = () => {
    return location.pathname.match(/[0-9]+/)[0];
  };

  const renderWordCloud = () => {
    get(`/word_cloud?user_id=${userId()}`)
      .then(data => {
        drawWordCloudWith(data);
      })
      .catch(e => handleError(e));
  };

  return <div>{renderWordCloud()}</div>;
};

ReactDOM.render(<WordCloud />, document.querySelector("#word_cloud"));
