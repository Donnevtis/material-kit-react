import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';
// ----------------------------------------------------------------------

export default function AvatarEditor({ src }) {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const ButtonIcon = styled(IconButton)(({ theme }) => ({
    opacity: 0,
    transition: 'opacity .2s ease',
    '&:hover': {
      opacity: 100,
    },
  }));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Avatar
        src={src}
        alt="avatar"
        sx={{
          width: 136,
          height: 136,
          border: '1px dashed',
        }}
      />
      <ButtonIcon component="label" sx={{ position: 'absolute', width: 136, height: 136 }}>
        <Iconify icon="eva:camera-outline" width={50} color="white" />
        <VisuallyHiddenInput type="file" />
      </ButtonIcon>
    </Box>
  );
}

AvatarEditor.propTypes = {
  src: PropTypes.string,
};
