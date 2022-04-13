import { Grid, Container } from "@mui/material";
import Auth from "../utils/auth";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>
            <img src="computer.png"
            height="145" width="185" alt="computer"/>
          </Item>
        </Box>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
