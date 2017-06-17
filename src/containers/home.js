/**
 * Created by colin on 2017/6/14.
 */

import React from 'react';
import { Component } from 'react';

import { connect } from 'react-redux';

@connect(state => ({
    page: state.page
}))
export default class HomeContainer extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.dispatch({
            type: 'Set',
            data: {
                name: 'Home'
            }
        });
    }

    render() {
        return (<div>欢迎来到首页，这里什么也没有。</div>)
    }
}