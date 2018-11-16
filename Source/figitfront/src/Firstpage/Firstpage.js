import React from 'react';
import './FirstpageStyle.css';

class Firstpage extends React.Component {
    state = {

    }

    constructor(props){
        super(props);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state);
    }

    render(){
    return( <div className={this.props.className}>
                <div class="topnav">
                    <a class="active" href="C:\Users\desai\Desktop\bootland.html"><img src="C:/Users/desai/Desktop/logo2.png" alt="Smiley face"/></a>
                        <div class="topnav-right">
                            <a href="C:/Users/desai/Desktop/help.html">Help</a>
                            <a href="C:/Users/desai/Desktop/about.html">About</a>
                        </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div class="header">
                    <p>Analysing Git.</p>
                    <p>Simplified.</p>
                </div>
                <div class="container-fluid">
                    <div class="form-group">  
                        <form action="#" onSubmit={(e)=>{this.onSubmit(e)}}>
                            <div class="d-flex justify-content-center">
                                <input type="text" class="form-control" id="usr" value="jhg" name="username" onfocus="" ></input>
                            </div>
                            <br/>
                            <div class="d-flex justify-content-center">
                                <button type="submit" class="button"><span>Get Started</span></button>
                            </div>
                            <br/>
                            <div class="d-flex justify-content-center">
                                <a href="#">or Sign In</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );  
    }
}

export default Firstpage;