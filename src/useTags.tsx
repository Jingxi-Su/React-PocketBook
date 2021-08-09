import {useState} from "react";
import {createId} from "./lib/createId";

const defaultTags = [//防止每次调用，id都会重新生成
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
]

const useTags = () => {//自定义hook必须use开头
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    return {tags, setTags, findTag}//后期可以研究为什么必须导出对象而不是数组
}

export {useTags}