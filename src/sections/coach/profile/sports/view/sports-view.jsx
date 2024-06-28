import { useState } from 'react';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import { sports } from 'src/_mock/sports';

import Scrollbar from 'src/components/scrollbar';

import SportsTableRow from '../sports-table-row';
import SportsTableHead from '../sports-table-head';
import { applyFilter, getComparator } from '../utils';
import SportsTableToolbar from '../sports-table-toolbar';

// ----------------------------------------------------------------------

export default function SportsCard() {
  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = sports.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const dataFiltered = applyFilter({
    inputData: sports,
    comparator: getComparator(order, orderBy),
  });

  return (
    <Card>
      <SportsTableToolbar />
      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }} component={Paper}>
          <Table sx={{ minWidth: 300 }} size="small">
            <SportsTableHead
              order={order}
              orderBy={orderBy}
              rowCount={sports.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
                { id: 'sport', label: 'Name of sport' },
                { id: 'qualification', label: 'Qualification' },
                { id: '' },
              ]}
            />
            <TableBody>
              {dataFiltered.map((row) => (
                <SportsTableRow
                  key={row.id}
                  sport={row.sport}
                  qualification={row.qualification}
                  handleClick={(event) => handleClick(event, row.name)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}
