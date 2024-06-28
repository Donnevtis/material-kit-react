import { useState } from 'react';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import { calendars } from 'src/_mock/calendars';

import Scrollbar from 'src/components/scrollbar';

import { applyFilter, getComparator } from '../utils';
import CalendarsTableRow from '../calendars-table-row';
import CalendarsTableHead from '../calendars-table-head';
import CalendarsTableToolbar from '../calendars-table-toolbar';

// ----------------------------------------------------------------------

export default function CalendarCard() {
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
      const newSelecteds = calendars.map((n) => n.name);
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
    inputData: calendars,
    comparator: getComparator(order, orderBy),
  });

  return (
    <Card>
      <CalendarsTableToolbar />
      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }} component={Paper}>
          <Table sx={{ minWidth: 300 }} size="small">
            <CalendarsTableHead
              order={order}
              orderBy={orderBy}
              rowCount={calendars.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
                { id: 'address', label: 'Calendar ID' },
                { id: 'name', label: 'Calendar name' },
                { id: '' },
              ]}
            />
            <TableBody>
              {dataFiltered.map((row) => (
                <CalendarsTableRow
                  key={row.id}
                  calendar={row}
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
