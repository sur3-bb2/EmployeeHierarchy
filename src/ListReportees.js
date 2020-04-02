import React from "react";

export const ListReportee = ({ managerId, users }) => {
    return(
        <React.Fragment>
            {
                users
                    .filter(user => user.manager_id === managerId)
                    .map((user, index) => <div key={index}>{`${user.name}`}</div>)
            }
        </React.Fragment>
    )
}