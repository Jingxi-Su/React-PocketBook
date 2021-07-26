import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from={"/"} to={"/money"}/>//默认路由
                <Route path="*">
                    <Nomatch/>
                </Route>
            </Switch>
        </Router>
    );
}

function Nomatch() {
    return <div>页面不存在</div>
}

function Statistics() {
    return (
        <Layout>
            <h2>统计页面</h2>
        </Layout>
    )
}

function Tags() {
    return (
        <Layout>
            <h2>标签页面</h2>
        </Layout>
    )
}

function Money() {
    return (
        <Layout>
            <h2>记账页面</h2>
        </Layout>
    )
}

export default App;