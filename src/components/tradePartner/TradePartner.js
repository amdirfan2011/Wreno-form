import React,{useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TradePartner.css';

function TradePartner() {
    const [selectedTab, setSelectedTab] = useState(0);
    const tabCount = 9;

    return (
        <div className="right_div_hd">
            <div className="r_div">
                <form id="fupForm" className="regForm" method="POST" encType="multipart/form-data">
                    <p>Allow 72 hours for processing and someone on our team will reach out to you.</p>
                    <br />
                    <div className="statusMsg" />
                    <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)} >
                        <TabList>
                            <Tab>&bull;</Tab>
                            <Tab>&bull;</Tab>
                            <Tab>&bull;</Tab>
                            <Tab>&bull;</Tab>
                            <Tab>&bull;</Tab>
                            <Tab>&bull;</Tab> 
                            <Tab>&bull;</Tab>
                            <Tab>&bull;</Tab>
                            <Tab>&bull;</Tab>
                        </TabList>
                        <TabPanel><div className="tab">
                            <div className="form-group-change">
                                <label htmlFor="usr">Business name:</label>
                                <input type="text" className="form-control" id="usr" name="business_name" />
                            </div>
                            {/* <div class="form-group-change ">*/}
                            {/*  <label for="usr">Email:</label>*/}
                            {/*  <input type="text" class="form-control" id="usr" name="username">*/}
                            {/*</div>*/}
                            <div className="form-group-change ">
                                <label htmlFor="usr">Business Owner's name:</label>
                                <input type="text" className="form-control" id="usr" name="name" />
                            </div>
                            <div className="form-group-change">
                                <label htmlFor="usr">Best Contect email:</label>
                                <input type="text" className="form-control" id="usr" name="email" />
                            </div>
                        </div></TabPanel>
                        <TabPanel><div className="tab">
                            <div className="form-group-change ">
                                <label htmlFor="usr">Business or owner's phone number:</label>
                                <input type="text" className="form-control" id="usr" name="mobile" />
                            </div>
                            <div className="form-group-change2 ">
                                <label htmlFor="usr">What cities do you operate in?</label><br />
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="cities[]" defaultValue="Phoenix" />Phoenix
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check2">
                                        <input type="checkbox" className="form-check-input" id="check2" name="cities[]" defaultValue="Atlanta" />Atlanta
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="cities[]" defaultValue="Charlotte" />Charlotte
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="cities[]" defaultValue="Raleigh" />Raleigh
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check2">
                                        <input type="checkbox" className="form-check-input" id="check2" name="cities[]" defaultValue="Dallas" />Dallas
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="cities[]" defaultValue="Tampa" />Tampa
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="cities[]" defaultValue="Austin" />Austin
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="cities[]" defaultValue="Las Vegas" />Las Vegas
                                    </label>
                                </div>
                            </div>
                        </div></TabPanel>
                        <TabPanel><div className="tab">
                            <div className="form-group-change2 fmch2 ">
                                <label htmlFor="usr">What service do you provide? Choose all that apply.</label><br />
                                {/*<div class="form-check">*/}
                                {/*    <label class="form-check-label" for="check1">*/}
                                {/*      <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something" checked>Phoenix*/}
                                {/*    </label>*/}
                                {/*  </div>*/}
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check2">
                                        <input type="checkbox" className="form-check-input" id="check2" name="service[]" defaultValue="Appliance Repair / Installation" />Appliance Repair / Installation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Carpentry" />Carpentry
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="service[]" defaultValue="Carpet Repar / Replacement" />Carpet Repar / Replacement
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check2">
                                        <input type="checkbox" className="form-check-input" id="check2" name="service[]" defaultValue="Demolition" />Demolition
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="DryWall Hanging" />DryWall
                                        Hanging
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Cleaning(refresh / deep)" />Cleaning(refresh / deep)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Electrical" />Electrical
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Fencing Repair / Replacement" />Fencing Repair / Replacement
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Fixture Repair / Installation" />Fixture Repair / Installation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Flooring Repair / Installation" />Flooring Repair / Installation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Foundation" />Foundation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Handyman (drywall repair, paint touch-up, general repair)" />Handyman (drywall repair, paint
                                        touch-up, general repair)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Junk Removal / Trash out" />Junk Removal / Trash out
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Landscaping" />Landscaping
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Locksmith" />Locksmith
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Masonry" />Masonry
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Mold Remediation" />Mold
                                        Remediation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Plumbing" />Plumbing
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Paint Interior / Exterior" />Paint Interior / Exterior
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Pool Repair & Remodeling" />Pool Repair &amp; Remodeling
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Pool Service & Maintenance" />Pool Service &amp; Maintenance
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Pressure Washing" />Pressure
                                        Washing
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Roofing" />Roofing
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Siding Repair / Replacement" />Siding Repair / Replacement
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Smell or Odor Elimination" />Smell or Odor Elimination
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="service[]" defaultValue="Window Repair / Replacement" />Window Repair / Replacement
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                    {/* TODO ned to change ===========> onClick="showMe2('div2')" */}
                                        <input type="checkbox" className="form-check-input" name="c2" />Other:
                                    </label>
                                    <input type="text" className="form-control othr_inpt" id="usr" name="service[]" defaultValue=" " />
                                </div>
                                <div id="div2" style={{ display: 'none' }}>
                                    <input type="text" className="form-control" id="usr" name="service[]" defaultValue=" " />
                                </div>
                            </div>
                        </div></TabPanel>
                        <TabPanel><div className="tab">
                            <div className="form-group-change1">
                                <p style={{ fontWeight: 'normal' }}>Do you have any relevant required trade licensing? Please upload all
                                    your trade licenses below.</p>
                                <div>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button className="btn">Upload a file</button>
                                    <input type="file" name="docum" />
                                </div>
                            </div>
                            <div className="form-group-change2 ">
                                <label htmlFor="usr">We require at least $300,000 per occurrence business coverage limits for General
                                    Liability insurance (subject to further requirements depending on trade) and Worker’s Compensation if
                                    you have W2 employees. You will be required to meet or exceed these insurance requirements in order to
                                    be able to work with us. No exceptions are made.</label><br />
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="radio" className="form-check-input" id="check1" name="insurance" defaultValue="Yes" defaultChecked required />Yes, I have reviewed the requirements and understand that I will need to carry insurance
                                        that meets or exceeds the listed requirements.
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check2">
                                        <input type="radio" className="form-check-input" id="check2" name="insurance" defaultValue="No" disabled />No
                                    </label>
                                </div>
                            </div>
                        </div></TabPanel>
                        <TabPanel><div className="tab">
                            <div className="form-group-change1">
                                <p style={{ fontWeight: 'normal' }}>Please see below an example Certificate of Insurance. Please add<span className="wre-llc"> "Wreno Home Services, LLC"</span> and address (15333 North Pima Road, Suite 305,
                                    Scottsdale, Arizona 85260) as an additional insured under "Certificate Holder" on your general
                                    liability policy and upload a copy of the file here.
                                    (<b style={{ color: 'red' }}>Upload Only PDF Format</b>)</p>
                                <img className="col-lg-12" src="/images/TradeCOI.png" />
                                <div>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button className="btn">Upload a file</button>
                                    <input type="file" id="file" name="file" />
                                </div>
                            </div>
                        </div></TabPanel>
                        <TabPanel><div className="tab">
                            <div className="form-group-change2 ">
                                <label htmlFor="usr">Can you provide same day or next day service?</label><br />
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="day_service[]" defaultValue="Yes,Same day" />Yes,Same day
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="day_service[]" defaultValue="Yes, Next day" />Yes, Next day
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="day_service[]" defaultValue="I need more than 48 hours to complete jobs upon assignment" />I need more than 48 hours to
                                        complete jobs upon assignment
                                    </label>
                                </div>
                            </div>
                            <div className="form-group-change2 ">
                                <label htmlFor="usr">How many jobs can you take on a weekly basis?</label><br />
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="job[]" defaultValue="1-4" />1-4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="job[]" defaultValue="5-10" />5-10
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="job[]" defaultValue="10+" />10+
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check2">
                                    {/*TODO need to change==============  onClick="showMe('div1')" */}
                                        <input type="checkbox" className="form-check-input" id="check2"  name="c1" defaultValue="others" />others
                                    </label>
                                    {/* <input type="text" class="form-control" id="usr" name="username"> */}
                                </div>
                                <div id="div1" style={{ display: 'none' }}>
                                    <input type="text" className="form-control" id="usr" name="job[]" defaultValue=" " />
                                </div>
                            </div>
                        </div></TabPanel>
                        <TabPanel><div className="tab">
                            <div className="video_div">
                                <div className="vd_div">
                                    <p style={{ fontWeight: 'normal' }}>Please follow the link below to book a time for your HR onboarding and
                                        mobile app training. We will send you your HR paperwork and a mobile app training video ahead of the
                                        meeting. Please watch the training video and complete necessary HR paperwork ahead of time. .</p>
                                    <div className="ifm_div">
                                        <iframe className="responsive-iframe" src="https://www.youtube.com/embed/fpUyXKVoggA" />
                                    </div>
                                </div>
                            </div>
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/B2kyb1yUbqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe> */}
                        </div></TabPanel>
                        <TabPanel><div className="tab">
                            <div className="form-group-change " style={{ width: '100%' }}>
                                <p style={{ fontWeight: 'normal' }}>
                                    Wreno reserves the right to cancel or reschedule this meeting if the Certificate of Insurance does not
                                    show the required minimum coverage limits and / or Wreno Home Services, LLC is not added under the
                                    "Certificate Holder".
                                </p>
                            </div>
                        </div></TabPanel>
                        <TabPanel>
            <div className=" text-center">
              <div className=" thank-cont">
              <img className="like_pic" src="/images/like.png" />
               
              <h2 className="display-3">Thank You!</h2>
              <p className="lead">We're reviewing your application <br></br> We'll reachout within 72 hours, if there is anything missing
              </p>
              <p className="lead">
                <a className="btn btn-sm like-bt" href="test_file_2.php" role="button">Go to homepage</a>
              </p>
            </div>
            </div>
            </TabPanel>
                    </Tabs>
                   
                </form>

            </div>
            <div className="pn">
                        <button className="previous" type="button" id="prevBtn" onClick={() => setSelectedTab((selectedTab + tabCount - 1) % tabCount )}>Previous</button>
                        <div className="divIDClass2">
                            <button className="next" type="button" id="nextBtn" onClick={() => setSelectedTab((selectedTab + 1) % tabCount )}>Next</button>
                        </div>
                        <div className="divIDClass">
                            <input type="submit" name="submit" defaultValue="Submit" className="next btn btn-success" />
                        </div>
                    </div>
        </div>
    )
}

export default TradePartner