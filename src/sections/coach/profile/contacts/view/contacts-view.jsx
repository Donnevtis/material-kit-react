import { useState } from 'react';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import { contacts } from 'src/_mock/contacts';

import Scrollbar from 'src/components/scrollbar';

import ContactsTableRow from '../contacts-table-row';
import { applyFilter, getComparator } from '../utils';
import ContactsTableHead from '../contacts-table-head';
import ContactsTableToolbar from '../contacts-table-toolbar';

// ----------------------------------------------------------------------

export default function ContactsCard() {
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
      const newSelecteds = contacts.map((n) => n.name);
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
    inputData: contacts,
    comparator: getComparator(order, orderBy),
  });

  return (
    <Card>
      <ContactsTableToolbar />
      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }} component={Paper}>
          <Table sx={{ minWidth: 300 }} size="small">
            <ContactsTableHead
              order={order}
              orderBy={orderBy}
              rowCount={contacts.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
                { id: 'type', label: 'Type of contact' },
                { id: 'value', label: 'Value' },
                { id: 'value', label: 'Show in profile' },
                { id: 'value', label: 'Notifications' },
                { id: '' },
              ]}
            />
            <TableBody>
              {dataFiltered.map((row) => (
                <ContactsTableRow
                  key={row.id}
                  contact={row}
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
