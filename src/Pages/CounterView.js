import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { red } from '@mui/material/colors';

import {APIURL, getReq, postCounterReq} from '../HelperFunc/QueueTicketAPI';

class Counter extends React.Component {
    //declare states
    constructor(props) {
        super(props);
        this.state = { counterStatus: [true, true, true, true] };
    }

    //fetch data here
    async componentDidMount(){
        
    }

    returnToggleMessage(status) {
        if (status == true) return "Go Offline"
        else return "Go Online"
    }

    async resetQueue(){
        var msg = await getReq('clear');
        alert(msg);
    }

    async toggleOnline(counterNo) {
        var response = await postCounterReq('toggleOnline', counterNo);
        if (response != null && response.includes("Counter") && response.includes("is now"))
        {
            this.setState(state => {
                const counterStatus = state.counterStatus.map((item, index) => {
                  if (index == (counterNo - 1)) {
                    return !item;
                  } else {
                    return item;
                  }
                });
          
                return {
                    counterStatus,
                };
              });
        }
    }

    async compCurr(counterNo) {
        var msg = await postCounterReq('compCurr', counterNo);
        alert(msg);
    }

    async callNext(counterNo) {
        var msg = await postCounterReq('callNext', counterNo);
        alert(msg);
    }

    render() {
        return (
            <div class = "textAlignCenter">
                <br></br><br></br><br></br><br></br>
                <h1>Counter Management</h1>
                <Button sx={{ color: red[500] }} onClick = {() => {this.resetQueue()}}>Clear and Reset Queue</Button>
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
                            <CardContent>
                                Counter 1<br></br>
                                <Button onClick={() => this.toggleOnline(1)}>{this.returnToggleMessage(this.state.counterStatus[0])}</Button><br></br>
                                <Button onClick={() => this.compCurr(1)}>Comp Curr</Button><br></br>
                                <Button onClick={() => this.callNext(1)}>Call Next</Button><br></br>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent>
                                Counter 2<br></br>
                                <Button onClick={() => this.toggleOnline(2)}>{this.returnToggleMessage(this.state.counterStatus[1])}</Button><br></br>
                                <Button onClick={() => this.compCurr(2)}>Comp Curr</Button><br></br>
                                <Button onClick={() => this.callNext(2)}>Call Next</Button><br></br>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent>
                                Counter 3<br></br>
                                <Button onClick={() => this.toggleOnline(3)}>{this.returnToggleMessage(this.state.counterStatus[2])}</Button><br></br>
                                <Button onClick={() => this.compCurr(3)}>Comp Curr</Button><br></br>
                                <Button onClick={() => this.callNext(3)}>Call Next</Button><br></br>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} style={{justifyContent: "center", textAlign: "center"}}>
                    <Card className = "counter">
                            <CardContent>
                                Counter 4<br></br>
                                <Button onClick={() => this.toggleOnline(4)}>{this.returnToggleMessage(this.state.counterStatus[3])}</Button><br></br>
                                <Button onClick={() => this.compCurr(4)}>Comp Curr</Button><br></br>
                                <Button onClick={() => this.callNext(4)}>Call Next</Button><br></br>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>);
    }
}

function CounterView() {
    return <Counter></Counter>;
}

export default CounterView();