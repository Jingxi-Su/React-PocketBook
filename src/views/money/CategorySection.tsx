import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
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

const CategorySection: React.FunctionComponent = () => {
    const categoryMap={'-':'支出','+':'收入'}
    type Keys=keyof typeof categoryMap
    const [categoryList] = useState<Keys[]>(['-', '+'])
    //相当于const [categoryList] = useState<('-'|'+')[]>(['-', '+'])
    const [category, setCategory] = useState('-')
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c=>
                    <li className={category === c ? 'selected' : ''}
                        onClick={() => setCategory(c)}>
                        {categoryMap[c]}
                    </li>
                )}
            </ul>
        </Wrapper>
    )
}

export {CategorySection}