import React from 'react';
import {useDispatch } from 'react-redux';
import { push as pushRoute } from 'connected-react-router';
import {PageRoutes} from '../Constants/constants';
export const LandingPage = () => {
    const dispatch = useDispatch();
const navigateToApply = () =>{
    dispatch(pushRoute(PageRoutes.Apply));
}
const navigateToTrack = () =>{
    dispatch(pushRoute(PageRoutes.Track));
}
    return (
        <div>
            <span style={{textDecoration:'underline',cursor:'pointer'}} onClick={navigateToApply}>Apply</span>
            <p></p>
            <span style={{textDecoration:'underline',cursor:'pointer'}} onClick={navigateToTrack}>Track</span>
        </div>
    )
}