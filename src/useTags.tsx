import {useState} from "react";

const useTags = () => {//自定义hook必须use开头
    const [tags, setTags] = useState<{ id: number; name: string }[]>([
        {id: 1, name: '衣'},
        {id: 2, name: '食'},
        {id: 3, name: '住'},
        {id: 4, name: '行'}
    ]);
    return {tags, setTags}//后期可以研究为什么必须导出对象而不是数组
}

export {useTags}