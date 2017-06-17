/**
 * Created by colin on 2017/6/14.
 */

import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
    page: state.page
}))

export default class DashboardContainer extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'Set',
            data: {
                name: 'Dashboard'
            }
        });
    }

    render() {
        return (<div>这里是仪表盘，具体有什么要凭你的想象了️。</div>)
    }
}