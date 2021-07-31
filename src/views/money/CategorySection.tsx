import styled from "styled-components";

const CategorySection = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;

      &.selected {
        background: #ffd833;
      }
    }
  }

`

export {CategorySection}