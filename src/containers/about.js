/**
 * Created by colin on 2017/6/14.
 */

import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
    page: state.page
}))
export default class AboutContainer extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'Set',
            data: {
                name: 'About'
            }
        });
    }

    render() {
        return (
            <div>
                关于什么呢，其实什么也没有。
            </div>
        )
    }
}