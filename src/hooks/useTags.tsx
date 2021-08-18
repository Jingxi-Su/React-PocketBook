import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";

const useTags = () => {//自定义hook必须use开头
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if (localTags.length === 0) {
            localTags = [
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'}
            ]
        }
        setTags(localTags)
    }, [])
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, tags)//组件挂载时执行
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
        setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
    const addTag = () => {
        const tagName = window.prompt('新标签名称为：');
        if (tagName !== null && tagName !== '') {
            setTags([...tags, {id: createId(), name: tagName}]);
        }
    };
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0]
        return tag ? tag.name : ''
    }
    return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag, getName}//后期可以研究为什么必须导出对象而不是数组
}

export {useTags}