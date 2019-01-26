import {SaveUser} from '../database';

export const saveToDB = (user) => {
    console.log('saving user');
    SaveUser(user);
}