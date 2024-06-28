import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function SportsTableToolbar() {
  return (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(2, 1, 0, 3),
        // ...{
        //   color: 'primary.main',
        //   bgcolor: 'primary.lighter',
        // },
      }}
    >
      {' '}
      <Typography component="div" variant="subtitle1">
        Kinds of sports
      </Typography>
      <Tooltip title="Add">
        <IconButton>
          <Iconify icon="eva:plus-circle-fill" />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}
