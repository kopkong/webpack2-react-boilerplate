/**
 * Created by colin on 2017/6/17.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TextComponet from '../components/text';

import { connect } from 'react-redux';

@connect(state => ({
    page: state.page
}))
export default class NavContainer extends Component {
    render() {
        return (
            <div>
                <p>
                    Current Page Name is: <TextComponet text={this.props.page.name}/>
                </p>
            </div>
        )
    }
}