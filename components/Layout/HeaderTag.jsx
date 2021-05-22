import React from "react";

const HeaderTag = ({tags}) => {
  console.log("tags", tags);
  return (
    <div>
      {tags?.map(item => {
        return (
          <div>{item.title}</div>
        );
      })}
    </div>
  );
}

export default HeaderTag;