import Nav from "./Nav";
import React, {useEffect, useRef} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

type Props = {
    className?: string
    scrollTop?: number//问号表示该参数可以不传
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const mainRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        setTimeout(()=>{
            if (!mainRef.current) {
                return
            }
            mainRef.current.scrollTop = props.scrollTop!//感叹号表示该参数不可能为空
        },0)//设置延迟是因为刚进入页面时滚动条还未加载出来，本代码可能无效。（0表示尽快）
    }, [props.scrollTop])
    return (
        <Wrapper>
            <Main ref={mainRef} className={props.className}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}

Layout.defaultProps = {//默认参数设置
    scrollTop: 0
}

export default Layout;