import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { userCollumns } from "../../libs/model.js";
import { getRandomData } from "../../libs/data.js";

export default function UserManagerView() {
    const [loading, setLoading] = React.useState(false);
    const data = getRandomData();
    return (
        <div style={{ height: "35rem", width: "60rem" }}>
            <DataGrid
                rows={data}
                columns={userCollumns}
                loading={loading}
                slots={{ toolbar: GridToolbar }}
            />
        </div>
    );
}
