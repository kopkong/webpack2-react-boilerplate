/**
 * Created by colin on 2017/6/13.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import TextComponent from 'components/text';

ReactDOM.render(
    <HashRouter>
        <div>
            项目已启动！<TextComponent/>
        </div>
    </HashRouter>
,
    document.getElementById('app')
);

