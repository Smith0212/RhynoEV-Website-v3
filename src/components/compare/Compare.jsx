import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './Compare.css';

const Compare = () => {
  const rows = [
    { specification: 'Battery', se03Lite: '1.8Kwh', se03: '2.7Kwh', se03Max: '2.7Kwh' },
    { specification: 'Battery features', se03Lite: 'LFP with 1500 cycles Active Balancing Waterproof (IP67)', se03: 'LFP with 1500 cycles Active Balancing Waterproof (IP67)', se03Max: 'LFP with 1500 cycles Active Balancing Waterproof (IP67)' },
    { specification: 'Battery warranty', se03Lite: '3 years', se03: '3 Years', se03Max: '3 Years' },
    { specification: 'Charging time', se03Lite: '3 hours (12A)', se03: '4 hours (12A)', se03Max: '4 hours (12A)' },
    { specification: 'Motor', se03Lite: '1500W', se03: '1500W', se03Max: '2000W' },
    { specification: 'Max speed', se03Lite: '55 km/h', se03: '55 km/h', se03Max: '65 km/h' },
    { specification: 'Warranty on electronics', se03Lite: '1 year', se03: '1 year', se03Max: '1 year' },
    { specification: 'Max range (@30km/h)', se03Lite: '100 km', se03: '150 km', se03Max: '120 km' },
    { specification: 'Max range (@45km/h)', se03Lite: '90 km', se03: '110 km', se03Max: '100 km' },
    { specification: 'Max range (@full speed)', se03Lite: '60 km', se03: '90 km', se03Max: '80 km' },
    { specification: 'Other key benefits', se03Lite: 'Fire-safe Battery Range prediction Comfortable ride Stable and safe', se03: 'Fire-safe battery Range prediction Comfortable ride Stable and safe', se03Max: 'Fire-safe battery Range prediction Comfortable ride Stable and safe' },
  ];

  return (
    <div className="table" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <TableContainer component={Paper}>
        <Table aria-label="comparison table" className="table-container">
          <TableHead>
            <TableRow>
              <TableCell className="header-cell">Specification</TableCell>
              <TableCell className="header-cell">Rhyno SE03 Lite</TableCell>
              <TableCell className="header-cell">Rhyno SE03</TableCell>
              <TableCell className="header-cell">Rhyno SE03 Max</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.specification}>
                <TableCell className="spec-cell">{row.specification}</TableCell>
                <TableCell className="data-cell">{row.se03Lite}</TableCell>
                <TableCell className="data-cell">{row.se03}</TableCell>
                <TableCell className="data-cell">{row.se03Max}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Compare;
