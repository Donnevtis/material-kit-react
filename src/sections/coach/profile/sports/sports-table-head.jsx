import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

import { visuallyHidden } from './utils';

// ----------------------------------------------------------------------

export default function SportsTableHead({ order, orderBy, headLabel, onRequestSort }) {
  const onSort = (property) => (event) => {
    onRequestSort(event, property);
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[100],
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <StyledTableRow>
      {headLabel.map((headCell) => (
        <TableCell
          sx={{ fontWeight: 'Bold' }}
          key={headCell.id}
          sortDirection={orderBy === headCell.id ? order : false}
        >
          <TableSortLabel
            hideSortIcon
            active={orderBy === headCell.id}
            direction={orderBy === headCell.id ? order : 'asc'}
            onClick={onSort(headCell.id)}
          >
            {headCell.label}
            {orderBy === headCell.id ? (
              <Box sx={{ ...visuallyHidden }}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
      ))}
    </StyledTableRow>
  );
}

SportsTableHead.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
  headLabel: PropTypes.array,
  onRequestSort: PropTypes.func,
};
