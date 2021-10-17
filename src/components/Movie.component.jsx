import React, { Fragment, useState } from 'react';
import {
    Switch,
    Link,
    Route,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  
export function Movie() {
    let { movieId } = useParams();
    return (
        <h1>movies works { movieId }</h1>
    );
}