import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const users = [
    { name: "Suresh", title: "CEO", id: 1},
    { name: "VP2", title: "VP", id: 3, manager_id: "1"},
    { name: "SrDr1", title: "Sr Dir", id: 4, manager_id: "2"},
    { name: "SrDr2", title: "Sr Dir", id: 5, manager_id: "3"},
    { name: "Dir1", title: "Dir", id: 6, manager_id: "5"},
    { name: "VP1", title: "VP", id: 2, manager_id: "1"}
]

/*
const sortReportee = () => {
    users.sort((user1, user2) => parseInt(user1.manager_id) - parseInt(user2.manager_id))
}

let reporteeMap = []

reporteeMap.push(users[0])

const prepareReporteeMap = (managerId) => {
    users.filter(user => parseInt(user.manager_id) === managerId).map(r => {
        reporteeMap.push(r)
        prepareReporteeMap(r.id)
    })
}

prepareReporteeMap(users[0].id)

//const reporteeMap = users.map(user => users.filter(u => parseInt(u.manager_id) === user.id))
*/

console.log(users.sort((user1, user2) => parseInt(user1.manager_id) - parseInt(user2.manager_id)))

ReactDOM.render(
  <React.StrictMode>
    <App users={users} reporteeMap={users.sort((user1, user2) => parseInt(user1.manager_id) - parseInt(user2.manager_id))} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
