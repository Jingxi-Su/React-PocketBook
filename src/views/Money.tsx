import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "./money/TagsSection";
import {NoteSection} from "./money/NoteSection";
import {CategorySection} from "./money/CategorySection";
import {NumberPadSection} from "./money/NumberPadSection";
import {useRecords} from "../hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

const defaultFormdata={
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}

function Money() {
    const [selected, setSelected] = useState(defaultFormdata)
    const {addRecord} = useRecords()
    const onChange = (obj: Partial<typeof selected>) => {//obj是selected的部分类型，用typeof获取值（selected）的类型
        setSelected({...selected, ...obj})
    }
    const submit = () => {
        if(addRecord(selected)){
            addRecord(selected)
            alert('保存成功')
            setSelected(defaultFormdata)
        }
    }
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                         onChange={(tagIds) => onChange({tagIds})}/>
            <NoteSection value={selected.note}
                         onChange={(note) => onChange({note})}/>
            <CategorySection value={selected.category}
                             onChange={(category) => onChange({category})}/>
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => onChange({amount})}
                              onOk={submit}/>
        </MyLayout>
    )
}

export default Money;