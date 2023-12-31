import * as React from "react";
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow} from "@mui/material";
import capitalizeFirstLetter from "../../functions/capitalize";
import "../../styles/ViewMui.css";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

export default function TableScrollable({ rows, element }) {
  interface Column {
    id: typeof element | "actions";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
  }

  const columns: readonly Column[] = [
    { id: element, label: capitalizeFirstLetter(element), minWidth: 170 },
    { id: "actions", label: "Actions", minWidth: 50 },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={"table.scrollable"}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column, columnIndex) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ position: "relative", zIndex: 1 }}>
                          {columnIndex === 1 ? ( // Check if it's the second column
                            <div style={{ display: "flex", gap: "1em" }}>
                              <UpdateModal element={element} id= {row.id}/>
                              <DeleteModal element={element} id= {row.id}/>
                            </div>
                          ) : // Render the value from the data for other columns
                          column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
