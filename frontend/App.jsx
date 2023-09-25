import { useState } from "react";
import "./App.css";
import { api } from "./api";
import { useAction, useFindMany } from "@gadgetinc/react";
import { Paper, Grid, Card, Stack, CircularProgress, TextField, MenuItem, FormControl, Button, LinearProgress, Alert } from "@mui/material";

const App = () => {
  // set up React state to handle form inputs
  const [name, setName] = useState("");
  const [similar, setSimilar] = useState("");
  const [type, setType] = useState("grass");

  // the useAction hook is used to call the Gadgemon create action
  const [{ data: newGadgemon, fetching: creatingGadgemon, error: createError }, createGadgemon] = useAction(api.gadgemon.create);
  // the useFindMany hook is used to read records from the Gadgemon model
  const [{ data: myGadgemon, fetching: fetchingGadgemon }] = useFindMany(api.gadgemon);

  // the createGadgetmon function defined with the useAction hook is called when the form is submitted
  const onSubmit = async (event) => {
    event.preventDefault();
    await createGadgemon({
      gadgemon: {
        name,
        similar,
        type,
      },
    });
  };

  return (
    <Paper>
      {createError && (
        <Alert severity="error">
          <code>{createError.message}</code>
        </Alert>
      )}
      <Grid container spacing={2} p={2}>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <form onSubmit={onSubmit}>
              <Stack spacing={2}>
                <h2>Gadgémon factory</h2>
                <TextField
                  label="Name"
                  size="small"
                  fullWidth
                  variant="outlined"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  disabled={creatingGadgemon}
                />
                <TextField
                  label="Looks like a..."
                  size="small"
                  fullWidth
                  variant="outlined"
                  value={similar}
                  onChange={(event) => setSimilar(event.target.value)}
                  required
                  disabled={creatingGadgemon}
                />
                <TextField value={type} onChange={(e) => setType(e.target.value)} select label="Type" required disabled={creatingGadgemon}>
                  <MenuItem value={"grass"}>Grass</MenuItem>
                  <MenuItem value={"water"}>Water</MenuItem>
                  <MenuItem value={"fire"}>Fire</MenuItem>
                </TextField>

                <Button variant="contained" disabled={creatingGadgemon} type="submit">
                  Create Gadgémon
                </Button>

                {creatingGadgemon && (
                  <Stack spacing={1}>
                    <span>Creating new Gadgémon!</span>
                    <LinearProgress />
                  </Stack>
                )}
                {newGadgemon?.sprite && (
                  <Card variant="outlined">
                    <img src={newGadgemon.sprite.url} />
                  </Card>
                )}
              </Stack>
            </form>
          </FormControl>
        </Grid>
        <Grid item xs={10}>
          <Stack spacing={2}>
            <h2>My Gadgémon</h2>
            <Grid container>
              {fetchingGadgemon && <CircularProgress />}
              {myGadgemon?.map((gadgemon, i) => (
                <Grid item xs={3} key={`gadgemon_${i}`} px={1} pt={0} pb={2}>
                  <Card variant="outlined">
                    <Grid container direction="column" alignItems="center">
                      <b>{gadgemon.name}</b>
                      <img src={gadgemon.sprite?.url} />
                      the "{gadgemon.type} {gadgemon.similar}" Gadgémon
                    </Grid>
                  </Card>
                </Grid>
              ))}
              {myGadgemon?.length === 0 && <b>Start by creating a Gadgémon!</b>}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default App;