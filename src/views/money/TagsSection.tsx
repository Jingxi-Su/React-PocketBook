import styled from "styled-components";
import React from "react";
import {useTags} from "../../useTags";
import {createId} from "../../lib/createId";

const Wrapper = styled.section`
  background: white;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: #ffd833;
      }
    }
  }

  > button {
    background: none;
    border: none;
    color: #666;
    padding: 2px 4px;
    margin-top: 8px;
  }
;

`

type Props = {
    value: number[];
    onChange: (selected: number[]) => void
}//加入新的类型selected

const TagsSection: React.FunctionComponent<Props> = (props) => {
    const {tags, addTag} = useTags();//析构
    const selectedTagIds = props.value;
    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
            //如果tag已被选中，就复制所有没有被选中的tag，作为新的selectedTags
        } else {
            props.onChange([...selectedTagIds, tagId])
        }
    }
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={
                        () => {
                            onToggleTag(tag.id);
                        }
                    } className={getClass(tag.id)}
                    >{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    );
};


export {TagsSection}