import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "./money/TagsSection";
import {NoteSection} from "./money/NoteSection";
import {CategorySection} from "./money/CategorySection";
import {NumberPadSection} from "./money/NumberPadSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;

`
type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0
    })
    return (
        <MyLayout>
            {selected.tags.join(',')}
            <hr/>
            {selected.note}
            <hr/>
            {selected.category}
            <hr/>
            {selected.amount}
            <TagsSection value={selected.tags}
                         onChange={(tags) => setSelected({...selected, tags: tags})}/>
            <NoteSection value={selected.note}
                         onChange={(note) => setSelected({...selected, note: note})}/>
            <CategorySection value={selected.category}
                             onChange={(category) => setSelected({...selected, category: category})}/>
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => setSelected({...selected, amount: amount})}
                              onOk={() => {
                              }}/>
        </MyLayout>
    )
}

export default Money;