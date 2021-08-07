import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";
import NoMatch from "./views/NoMatch";
import styled from "styled-components";
import { TagEdit } from 'views/TagEdit';

const AppWrapper = styled.div`
  color: #333;
`

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route exact path="/tags/:tag">//精准匹配，不要模糊匹配
                        <TagEdit/>
                    </Route>
                    <Route exact path="/tags" exact={true}>
                        <Tags/>
                    </Route>
                    <Route exact path="/money">
                        <Money/>
                    </Route>
                    <Route exact path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from={"/"} to={"/money"}/>//默认路由
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;