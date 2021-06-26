import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Review from '../Review/Review';
import ReviewForm from '../Review/ReviewForm';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Profile from '../../Profile/Profile';

const UserDashboard = () => {
    return (
        <Switch>
            <Route exact path="/dashboard/profile"><Profile/></Route>
            <Route exact path="/dashboard/book"><Book/></Route>
            <Route exact path="/dashboard/book/:id"><Book/></Route>
            <Route exact path="/dashboard/booking"><BookingList/></Route>
            <Route exact path="/dashboard/review"><Review/></Route>
            <Route exact path="/dashboard/review/:id"><ReviewForm/></Route>
        </Switch>
    );
};

export default UserDashboard;