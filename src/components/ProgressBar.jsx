import React from 'react';
import { Box, LinearProgress, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled LinearProgress
const StyledLinearProgress = styled(LinearProgress)(({ theme, width }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${LinearProgress.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${LinearProgress.bar}`]: {
    borderRadius: 5,
    backgroundColor: width > 0 ? theme.palette.primary.main : theme.palette.grey[theme.palette.mode === 'light' ? 300 : 700],
  },
}));

const Progress = () => {
  const categories = [
    { hashtag: 'investment', amount: 89.24, percentage: 70 },
    { hashtag: 'transfer', amount: 441.45, percentage: 10 },
  ];

  const tags = [
    '#teamwork',
    '#design',
    '#project',
    '16+',
  ];

  return (
    <Box className="progress bg" sx={{ display: 'flex', background: '', padding: 3, borderRadius: 2 }}>
      <Box sx={{ width: '65%', marginRight: 2 }}>
        <Typography variant="h6" color="white">Earning Categories</Typography>
        <Typography variant="caption" color="grey.300" sx={{ display: 'block', marginBottom: 3 }}>
          Lorem ipsum dolor sit amet
        </Typography>
        {categories.map((category, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="white" sx={{ fontWeight: 'bold' }}>
                {category.hashtag}
              </Typography>
              <Typography variant="body2" color="white">
                ${category.amount.toFixed(2)}
              </Typography>
            </Box>
            <StyledLinearProgress variant="determinate" value={category.percentage} />
          </Box>
        ))}
      </Box>
      <Box sx={{ width: '35%' }}>
        <Typography variant="h6" color="white">Others tag</Typography>
        <Typography variant="caption" color="grey.300" sx={{ display: 'block', marginBottom: 3 }}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Stack direction="column" spacing={1}>
          {tags.map((tag, index) => (
            <Typography key={index} variant="body2" color="white" sx={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '4px 8px', borderRadius: 1 }}>
              {tag}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Progress;
