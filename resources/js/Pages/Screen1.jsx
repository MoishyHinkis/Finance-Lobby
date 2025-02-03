import React, { useCallback, useEffect, useState } from "react";
import Layout from "./Layout";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import { router } from "@inertiajs/react";
import { debounce } from "lodash";

const Screen1 = ({ records }) => {
    console.log(records.data);

    const [searchVal, setSearchVal] = useState("");

    const submit = useCallback(
        debounce((searchVal) => {
            router.get("screen-1", { searchVal });
        }, 300),
        []
    );

    useEffect(() => {
        if (searchVal) submit(searchVal);
    }, [searchVal]);

    return (
        <Layout>
            <form onSubmit={() => submit(searchVal)}>
                <TextField
                    onChange={(e) => setSearchVal(e.target.value)}
                    value={searchVal}
                    type="search"
                    label={"search bar"}
                />
            </form>
            <Table>
                <TableHead></TableHead>
                <TableBody>
                    {records.data.map(({ id, title, notes, status }, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{id}</TableCell>
                                <TableCell>{title}</TableCell>
                                <TableCell>{status}</TableCell>
                                <TableCell>{notes}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Layout>
    );
};

export default Screen1;
