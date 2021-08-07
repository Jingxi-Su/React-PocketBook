import {useState} from "react";

const useTags = () => {//自定义hook必须use开头
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    return {tags, setTags}//后期可以研究为什么必须导出对象而不是数组
    //缩写tags:tags,setTags:setTags
}

export {useTags}