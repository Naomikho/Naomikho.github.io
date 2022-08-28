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
            queue: sessionStorage.getItem("queue")?sessionStorage.getItem("queue"):[],
            latestServingNo: sessionStorage.getItem("latestServingNo")?sessionStorage.getItem("latestServingNo"):"Queue has not started",
            lastIssuedNo: sessionStorage.getItem("lastIssuedNo")?sessionStorage.getItem("latestServingNo"):"Queue has not started",
            counter: sessionStorage.getItem("counter")?sessionStorage.getItem("counter"):["","","",""],
            counterStatus: sessionStorage.getItem("counterStatus")?sessionStorage.getItem("counterStatus"):[true,true,true,true],
        };
        console.log(this.state);
    }

    // onMessage = (ev) => {
    //     let data = JSON.parse(ev.data);
    //     let jsonBody = JSON.parse(data);
            // this.setState(
            //     {
            //         queue: jsonBody.queue,
            //         latestServingNo: jsonBody.latestServingNo,
            //         lastIssuedNo: jsonBody.lastIssuedNo == "-001"?"Queue has not started":jsonBody.lastIssuedNo,
            //         counter: jsonBody.counter,
            //         counterStatus: jsonBody.counterStatus,
            //     }
            // );     
    // }

    //fetch data here

    async componentDidMount() {
        this.fetchView();
        this.interval = setInterval(() => this.fetchView(), 60000);
        // const ws = new WebSocket('ws://127.0.0.1:8000/ws');
        
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

    async componentWillUnmount() {
        sessionStorage.clear();
        // const { ws } = this.state;
        // ws.close();
    }

    async fetchView(){
        const jsonBody = await getReq('custView');
        if (jsonBody != null)
        {
            this.setState(
                {
                    queue: jsonBody.queue,
                    latestServingNo: jsonBody.latestServingNo,
                    lastIssuedNo: jsonBody.lastIssuedNo == "-001"?"Queue has not started":jsonBody.lastIssuedNo,
                    counter: jsonBody.counter,
                    counterStatus: jsonBody.counterStatus,
                }
            );
            sessionStorage.setItem("queue", jsonBody.queue);
            sessionStorage.setItem("latestServingNo", jsonBody.latestServingNo);
            sessionStorage.setItem("lastIssuedNo", jsonBody.lastIssuedNo == "-001"?"Queue has not started":jsonBody.lastIssuedNo);
            sessionStorage.setItem("counter", jsonBody.counter);
            sessionStorage.setItem("counterStatus", jsonBody.counterStatus);
        }
        else
            console.log("custView JSON is null.");
        console.log(jsonBody.counterServing);
    }

    async getTicket(){
        var msg = await getReq('newTicket');
        alert(msg);
    }

    //for status, use circle icon then use color props
    //success = green, disabled = grey
    //red use sx={{ color: red[500] }}
    renderStatusColor(counterNo) {
        if (this.state.counterStatus[counterNo - 1] && this.state.counter[counterNo - 1])
            return <CircleIcon sx={{ color: red[500] }}></CircleIcon>
        else if (this.state.counterStatus[counterNo - 1] && !this.state.counter[counterNo - 1])
            return <CircleIcon color="success"></CircleIcon>
        else
            return <CircleIcon color="disabled"></CircleIcon>
    }

    checkQueue(){
        if (this.state.queue == null || this.state.queue.length == 0)
        {
            return "No tickets in the waiting queue";
        }
        else
            return ""
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
                                <p>{this.checkQueue()}</p>
                                <Typography gutterBottom variant="h5" component="div">
                                    Now Serving: {this.state.latestServingNo}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Last Number: {this.state.lastIssuedNo}
                                </Typography>
                                <Button onClick={() => {this.getTicket()}}>Take a Number</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br></br><br></br>
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
                            <CardContent style={{ backgroundColor: this.state.counterStatus[0] ? "white" : "#aaabad" , minHeight: "150px"}}>
                                {console.log(this.state)}
                                {this.renderStatusColor(1)}
                                <p class="textBlack">Counter 1</p>
                                <p class="textBlack">{this.state.counter[0] ? this.state.counter[0] : "Not serving"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[1] ? "white" : "#aaabad", minHeight: "150px"}}>
                                {this.renderStatusColor(2)}
                                <p class="textBlack">Counter 2</p>
                                <p class="textBlack">{this.state.counter[1] ? this.state.counter[1] : "Not serving"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3} style={{justifyContent: "center", textAlign: "center"}}> 
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[2] ? "white" : "#aaabad", minHeight: "150px" }}>
                                {this.renderStatusColor(3)}
                                <p class="textBlack">Counter 3</p>
                                <p class="textBlack">{this.state.counter[2] ? this.state.counter[2] : "Not serving"}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent style={{ backgroundColor: this.state.counterStatus[3] ? "white" : "#aaabad", minHeight: "150px" }}>
                                {this.renderStatusColor(4)}
                                <p class="textBlack">Counter 4</p>
                                <p class="textBlack">{this.state.counter[3] ? this.state.counter[3] : "Not serving"}</p>
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