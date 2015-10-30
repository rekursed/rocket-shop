/**
 * Created by rakib on 30/10/15.
 */

/*
@returns true or false if the user is an admin
 */

isAdmin = function () {

    var loggedInUser = Meteor.user();

    var result = false;
    if(loggedInUser){
        if (Roles.userIsInRole(loggedInUser, ['admin','Administrator'])){
            result = true;
        }
    }
    return result;
}