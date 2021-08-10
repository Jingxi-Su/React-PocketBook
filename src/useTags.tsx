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
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    }
    const updateTag = (id: number, obj: { name: string }) => {
        //获取要修改的tag的下标
        const index = findTagIndex(id);
        //深拷贝tags
        //vue可以直接在原数据上修改，但react不支持这项功能，因为它认为数据不可变
        const tagsClone = JSON.parse(JSON.stringify(tags))
        //把tagsClone的第index个删掉，换成{id: id, name: obj.name}
        tagsClone.splice(index, 1, {id: id, name: obj.name})
        setTags(tagsClone)
    }
    const deleteTag = (id: number) => {
        //获取要删除的tag的下标
        const index = findTagIndex(id);
        //深拷贝tags
        //vue可以直接在原数据上修改，但react不支持这项功能，因为它认为数据不可变
        const tagsClone = JSON.parse(JSON.stringify(tags))
        //把tagsClone的第index个删掉
        tagsClone.splice(index, 1)
        setTags(tagsClone)
    }
    return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag}//后期可以研究为什么必须导出对象而不是数组
}

export {useTags}