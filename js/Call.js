class Call {

    callStatus = {
        calling: "calling",
        accepted: "accepted",
        ongoing: "ongoing",
        ended: "ended"
    } 

    /* Base values for a message */
    duration;
    callID;
    timeStart;
    timeEnd;
    callerID;
    receiverID;
    status;

    init(callerDetails) {
       
        let {
            callerID,
            receiverID
        } = callerDetails;

        self.timeStart = new Date();
        self.callerID = callerID;
        self.receiverID = receiverID;
        this.status = this.callStatus.calling;

    }

    placeCall(){

        // ...

        this.status = this.callStatus.accepted

        // ...

        this.status = this.callStatus.ongoing
    }

    endCall(){

        this.status = this.callStatus.ended
        
    }

}