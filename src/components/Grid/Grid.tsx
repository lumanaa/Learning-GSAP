import { Grid } from '@mantine/core'
import './grid.scss';


function Griditem() {
  return (
   <div className="grid-container" >
     <Grid overflow='hidden' >
     <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>Basics</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
   </div>
  )
}

export default Griditem