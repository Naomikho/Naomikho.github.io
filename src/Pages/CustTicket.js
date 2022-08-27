import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

class Ticket extends React.Component {
    //declare states
    constructor(props) {
        super(props);
        this.state = {
            latestServingNo: "",
            lastIssuedNo: "",
            counterStatus: ["online", "online", "online", "online"],
            counter: ["", "", "", ""]
        };
    }

    //fetch data here


    //for status, use circle icon then use color props
    //success = green, disabled = grey
    //red use sx={{ color: red[500] }}
    renderStatusColor(counterNo) {
        if (this.state.counterStatus[counterNo - 1] == "online" && this.state.counter[counterNo - 1] != "")
            return <CircleIcon sx={{ color: red[500] }}></CircleIcon>
        else if (this.state.counterStatus[counterNo - 1] == "online" && this.state.counter[counterNo - 1] == "")
            return <CircleIcon color="success"></CircleIcon>
        else
            return <CircleIcon color="disabled"></CircleIcon>
    }

    render() {
        return (
            <div>
                <br></br><br></br><br></br><br></br>
                <h1>Customer View</h1>
                <br></br>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >

                    <Grid item xs={6}>
                        <Card sx={{ minWidth: 450, maxWidth: 450 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Now Serving: {this.state.latestServingNo != "" ? this.state.latestServingNo : "Queue has not started"}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Last Number: {this.state.lastIssuedNo != "" ? this.state.lastIssuedNo : "Queue has not started"}
                                </Typography>
                                <Button onClick={() => { }}>Take a Number</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    style={{
                        background: "transparent",
                        display: "flex",
                        justifyContent: "center"
                      }}
                >

                    <Grid item xs={3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[0] == "online" ? "white" : "#d7dade" }}>
                                {this.renderStatusColor(1)}
                                <p class="textBlack">Counter 1</p>
                                <p class="textBlack">{this.state.counter[0] != "" ? this.state.counter[0] : "Not serving yet"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[1] == "online" ? "white" : "#d7dade" }}>
                                {this.renderStatusColor(2)}
                                <p class="textBlack">Counter 2</p>
                                <p class="textBlack">{this.state.counter[1] != "" ? this.state.counter[1] : "Not serving yet"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3} style={{justifyContent: "center", textAlign: "center"}}> 
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[2] == "online" ? "white" : "#d7dade" }}>
                                {this.renderStatusColor(3)}
                                <p class="textBlack">Counter 3</p>
                                <p class="textBlack">{this.state.counter[2] != "" ? this.state.counter[2] : "Not serving yet"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[3] == "online" ? "white" : "#d7dade" }}>
                                {this.renderStatusColor(4)}
                                <p class="textBlack">Counter 4</p>
                                <p class="textBlack">{this.state.counter[3] != "" ? this.state.counter[3] : "Not serving yet"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>)
    }

}

function CustTicket() {
    return <Ticket></Ticket>;
}

export default CustTicket();