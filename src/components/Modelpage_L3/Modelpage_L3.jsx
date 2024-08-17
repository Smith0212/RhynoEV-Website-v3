import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import './Modelpage_L3.css';

const Modelpage_L3 = ({ specifications }) => {
  return (
    <div className="tableMD">
      <TableContainer className="table-containerMD">
        <Table aria-label="table">
          <TableBody>
            {specifications.map((row, index) => (
              <TableRow key={row.specification} className={index % 2 === 0 ? 'highlight-row' : ''}>
                <TableCell className="spec-cellMD">{row.specification}</TableCell>
                <TableCell className="data-cellMD">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Modelpage_L3;
