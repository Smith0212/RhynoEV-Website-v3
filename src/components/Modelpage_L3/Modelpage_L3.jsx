import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './Modelpage_L3.css';

const Modelpage_L3 = () => {
  const vehicleDetails = [
    { specification: 'Battery', value: '2.7Kwh' },
    { specification: 'Battery features', value: 'LFP with 1500 cycles Active Balancing Waterproof (IP67)' },
    { specification: 'Battery warranty', value: '3 Years' },
    { specification: 'Charging time', value: '4 hours (12A)' },
    { specification: 'Motor', value: '1500W' },
    { specification: 'Max speed', value: '55 km/h' },
    { specification: 'Warranty on electronics', value: '1 year' },
    { specification: 'Max range (@30km/h)', value: '150 km' },
    { specification: 'Max range (@45km/h)', value: '110 km' },
    { specification: 'Max range (@full speed)', value: '90 km' },
    { specification: 'Other key benefits', value: 'Fire-safe battery Range prediction Comfortable ride Stable and safe' },
  ];

  return (
    <div className="table" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <TableContainer component={Paper}>
        <Table aria-label="model specifications table" className="table-container">
          <TableHead>
            <TableRow>
              <TableCell className="header-cell">Specification</TableCell>
              <TableCell className="header-cell">Rhyno SE03</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicleDetails.map((detail) => (
              <TableRow key={detail.specification}>
                <TableCell className="spec-cell">{detail.specification}</TableCell>
                <TableCell className="data-cell">{detail.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Modelpage_L3;
