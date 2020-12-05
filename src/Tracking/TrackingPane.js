import { getSubmittedApplications } from '../duck/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
} from 'carbon-components-react';
import { push as pushRoute } from 'connected-react-router';
import {PageRoutes} from '../Constants/constants';
export const TrackingPane = () => {
    const dispatch = useDispatch();
    const data = useSelector(getSubmittedApplications);
    const navigateToHome = () =>{
        dispatch(pushRoute(PageRoutes.Home));
    }

    const headers = [
        {
            key: 'id',
            header: 'ApplicationId',
        },
        {
            key: 'status',
            header: 'Status',
        },
        {
            key: 'College',
            header: 'College',
        },
        {
            key: 'City',
            header: 'City',
        },
    ];
    return (
        <div>
            <div>
            <span style={{textDecoration:'underline',cursor:'pointer'}} onClick={navigateToHome}>Home</span>
            </div>
        <DataTable rows={data} headers={headers}>
            {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                <Table {...getTableProps()}>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableHeader {...getHeaderProps({ header })}>
                                    {header.header}
                                </TableHeader>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow {...getRowProps({ row })}>
                                {row.cells.map((cell) => (
                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </DataTable>
        </div>
    )
};