import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Card1 from "@mui/material/Card";

export default function PricingCards() {
  return (
    <Card1
      style={{ background: "white", marginTop: "50%" }}
      sx={{ maxWidth: 300, borderRadius: "10px" }}>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}>
        <Card size="lg" variant="outlined">
          <Chip size="sm" variant="outlined" color="neutral">
            BASIC
          </Chip>
          <Typography level="h2">Mobile</Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Video Quality: Good
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Resolution: 480p
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Devices you can watch: All
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              ₹100{" "}
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button
              variant="soft"
              color="neutral"
              endDecorator={<KeyboardArrowRight />}>
              Start now
            </Button>
          </CardActions>
        </Card>
        <Card
          size="lg"
          variant="solid"
          color="neutral"
          invertedColors
          sx={{ bgcolor: "neutral.900" }}>
          <Chip size="sm" variant="outlined">
            MOST POPULAR
          </Chip>
          <Typography level="h2">Standard</Typography>
          <Divider inset="none" />
          <List
            size="sm"
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              mx: "calc(-1 * var(--ListItem-paddingX))",
            }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Video Quality: Better
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Resolution: 1080p
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Devices you can watch: All
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              ₹500{" "}
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button endDecorator={<KeyboardArrowRight />}>Start now</Button>
          </CardActions>
        </Card>
      </Box>
    </Card1>
  );
}
