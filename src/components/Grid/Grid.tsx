import { useNavigate } from "react-router-dom";
import { Grid } from "@mantine/core";
import "./grid.scss";

function Griditem() {
  const navigate = useNavigate();

  return (
    <>
    
      <div className="grid-container">
        <Grid overflow="hidden">
          <Grid.Col
            span={{ base: 12, md: 6, lg: 3 }}
            className="grid-col"
            onClick={() => navigate("/basic")}
          >
            Basics
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} className="grid-col">
            2
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} className="grid-col">
            3
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} className="grid-col">
            4
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} className="grid-col">
            4
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} className="grid-col">
            4
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}

export default Griditem;
