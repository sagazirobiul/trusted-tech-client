import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddReview from '../AddReview/AddReview';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';

const UserDashboard = () => {
    return (
        <Switch>
            <Route exact path="/dashboard"><Book/></Route>
            <Route exact path="/dashboard/book"><Book/></Route>
            <Route exact path="/dashboard/book/:id"><Book/></Route>
            <Route exact path="/dashboard/booking"><BookingList/></Route>
            <Route exact path="/dashboard/review"><AddReview/></Route>
        </Switch>
    );
};

export default UserDashboard;