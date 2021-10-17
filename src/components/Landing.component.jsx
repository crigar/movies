import React, { Fragment, useState, useRef } from 'react';
import { Filter } from './Filter.component';

import {
    useRouteMatch
  } from "react-router-dom";
export function Landing() {
    let match = useRouteMatch();

    return (
        <Fragment>
            <Filter/>
        </Fragment>
        
    );
}