import React from "react";
import "./workprocess.css";


function WorkProcess() {
  return (
    <div className="work-container">
        <div className="work-caption">
            <div>Work Process</div>
        </div>
        <div className="work-content-container">
            <div className="work-content first">
                <div className="order-number">
                    <p>1</p>
                </div>
                <div className="work-discription">
                    <p><span className="red">You</span> Send an Inquiry with Rough Measurements of the Opening</p>
                </div>
            </div>
            <div className="work-content">
                <div className="order-number">
                    <p>2</p>
                </div>
                <div className="work-discription">
                    <p><span className="red">We</span>Prepare the Approximate Quote</p>
                </div>
            </div>
            <div className="work-content">
                <div className="order-number">
                    <p>3</p>
                </div>
                <div className="work-discription">
                    <p><span className="red">You</span>  Meet Our Specialist for an Onsite Consultation & Estimate</p>
                </div>
            </div>
            <div className="work-content">
                <div className="order-number">
                    <p>4</p>
                </div>
                <div className="work-discription">
                    <p><span className="red">We</span> Send a Proposal & Collect a Deposit</p>
                </div>
            </div>
            <div className="work-content">
                <div className="order-number">
                    <p>5</p>
                </div>
                <div className="work-discription">
                    <p><span className="red">You</span>  Customize the Design and Approve the Drawings</p>
                </div>
            </div>
            <div className="work-content last">
                <div className="order-number">
                    <p>6</p>
                </div>
                <div className="work-discription">
                    <p><span className="red">We</span> Fabricate & Install Your New Partition</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkProcess;
