/**
 * Created by colin on 2017/6/14.
 */

import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
    page: state.page
}))
export default class NoMatchContainer extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'Set',
            data: {
                name: 'NoMatch'
            }
        });
    }

    render() {
        return (<div>一般来说你不应该来这里，既然来了你也别留着。</div>)
    }
}