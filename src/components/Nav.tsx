import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333333%;
      text-align: center;

      > a {
        display: flex;
        padding: 4px;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: goldenrod;
          .icon{
            fill: goldenrod;//icon自带颜色所以本句无用，启用方式见webpack.config.js中的svgo options注释
          }
        }
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tag"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistic"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>)
}

export default Nav;