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

import {APIURL, getReq, postCounterReq} from '../HelperFunc/QueueTicketAPI';

class Ticket extends React.Component {
    //declare states
    constructor(props) {
        super(props);
        this.state = {
            latestServingNo: "Queue has not started",
            lastIssuedNo: "Queue has not started",
            counterStatus: ["online", "online", "online", "online"],
            counter: ["", "", "", ""],
        };
    }

    // onMessage = (ev) => {
    //     let data = JSON.parse(ev.data);
    //     let test = JSON.parse(data);
    //     console.log(test);
    // }

    //fetch data here

    async componentDidMount() {
        // const ws = new WebSocket('wss://queue-ticketing-application.herokuapp.com/ws');
        
        // ws.onopen = () => {
        //     console.log('WebSocket Client Connected');
        //     ws.onclose = async function (event) {
        //         console.log('disconnected');
        //     };
        //     ws.onmessage = this.onMessage
        //     ws.send('ping');
        //     this.setState({
        //         ws: ws,
        //     });
        // };
    }

    componentWillUnmount() {
        // const { ws } = this.state;
        // ws.close();
    }


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
                                    {/*“No tickets in the waiting queue”*/}
                                    Now Serving: {this.state.latestServingNo}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Last Number: {this.state.lastIssuedNo}
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
                                <p class="textBlack">{this.state.counter[0] != "" ? this.state.counter[0] : "Not serving"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[1] == "online" ? "white" : "#d7dade" }}>
                                {this.renderStatusColor(2)}
                                <p class="textBlack">Counter 2</p>
                                <p class="textBlack">{this.state.counter[1] != "" ? this.state.counter[1] : "Not serving"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3} style={{justifyContent: "center", textAlign: "center"}}> 
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[2] == "online" ? "white" : "#d7dade" }}>
                                {this.renderStatusColor(3)}
                                <p class="textBlack">Counter 3</p>
                                <p class="textBlack">{this.state.counter[2] != "" ? this.state.counter[2] : "Not serving"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[3] == "online" ? "white" : "#d7dade" }}>
                                {this.renderStatusColor(4)}
                                <p class="textBlack">Counter 4</p>
                                <p class="textBlack">{this.state.counter[3] != "" ? this.state.counter[3] : "Not serving"}</p>
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