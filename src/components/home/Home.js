import React,{useState} from 'react'
import "./Home.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabLayout } from '../../common/TabLayout';
import { Introduction } from './tabs/Introduction';
import { PersonalInformation } from './tabs/PersonalInformation';
import { handleNextClick } from './utils/validations';

export const TAB_COUNT = 10

function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  return (
    <div className="right_div_hd">
      <div className="r_div">
        <form id="regForm" className="regForm" action="action_page.php" method="POST" encType="multipart/form-data">
          {/* One "tab" for each step in the form:  */}
          {/* test start! */}
          <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
            <TabList>
              <Tab >&bull;</Tab>
              <Tab >&bull;</Tab>
              <Tab >&bull;</Tab>
              <Tab >&bull;</Tab>
              <Tab >&bull;</Tab>
              <Tab >&bull;</Tab>
              <Tab >&bull;</Tab>
              <Tab >&bull;</Tab>
              <Tab >&bull;</Tab>
              <Tab >&bull;</Tab>
            </TabList>
            <TabPanel>
              <TabLayout>
                <Introduction  />
              </TabLayout>
            </TabPanel>
            <TabPanel>
              <TabLayout>
                  <PersonalInformation formData={formData} setFormData={setFormData} />
                </TabLayout>
            </TabPanel>
            <TabPanel>
              <div className="tab pg-mrgn ">
                <div className="form-group-change">
                  <label htmlFor="usr">Phone No.</label>
                  <input className="form-control" placeholder="What's the best phone number to reach you ?..." autoComplete="off" title="What's the best phone number to reach you" name="mobile" />
                </div>
                <div className="form-group-change">
                  <label htmlFor="usr">Date:</label>
                  <input className="form-control" type="date" id="datepicker2" placeholder="What's the soonest date you can start ?..." autoComplete="off" title="What's the soonest date you can start" name="start" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab pg-mrgn">
                <div className="form-group tab-form-group">
                  <label htmlFor="usr">Can you accept a job on a short notice ?:</label>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="check1">
                      <input type="radio" className="form-check-input" id="check1" name="short_notice" defaultValue="Yes" />Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="check2">
                      <input type="radio" className="form-check-input" id="check2" name="short_notice" defaultValue="No" />No
                    </label>
                  </div>
                </div>
                <div className="form-group tab-form-group">
                  <label htmlFor="usr">How many hourse can you work per week?:</label>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="check1">
                      <input type="radio" className="form-check-input" id="check1" name="hrs_working" defaultValue="Fewer than 5 hours" />Fewer than 5 hours
                    </label>
                    <label className="form-check-label" htmlFor="check1">
                      <input type="radio" className="form-check-input" id="check1" name="hrs_working" defaultValue="5-10 hours" />5-10
                      hours
                    </label>
                    <label className="form-check-label" htmlFor="check1">
                      <input type="radio" className="form-check-input" id="check1" name="hrs_working" defaultValue="10-20 hours" />10-20 hours
                    </label>
                    <label className="form-check-label" htmlFor="check1">
                      <input type="radio" className="form-check-input" id="check1" name="hrs_working" defaultValue="More than 20 hours" />More than 20 hours
                    </label>
                    <label className="form-check-label" htmlFor="check1">
                      <input type="radio" className="form-check-input" id="check1" name="hrs_working" defaultValue="I am willing to work full-time if available" />I am willing to work full-time if available
                    </label>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab pg-mrgn">
                <div className="form-group tab-form-group fmch2">
                  <label htmlFor="usr">Which market are you in ?</label>
                  <p><input type="radio" className="form-check-input" id="check1" name="market[]" defaultValue="Phoenix" />Phoenix</p>
                  <p><input type="radio" className="form-check-input" id="check1" name="market[]" defaultValue="Atlanta" />Atlanta</p>
                  <p><input type="radio" className="form-check-input" id="check1" name="market[]" defaultValue="Charlotte" />Charlotte
                  </p>
                  <p><input type="radio" className="form-check-input" id="check1" name="market[]" defaultValue="Raleigh" />Raleigh</p>
                  <p><input type="radio" className="form-check-input" id="check1" name="market[]" defaultValue="Dallas" />Dallas</p>
                  <p><input type="radio" className="form-check-input" id="check1" name="market[]" defaultValue="Tampa" />Tampa</p>
                  <p><input type="radio" className="form-check-input" id="check1" name="market[]" defaultValue="Austin" />Austin</p>
                  <p><input type="radio" className="form-check-input" id="check1" name="market[]" defaultValue="Las Vegas" />Las Vegas
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab pg-mrgn">
                <div className="wrk_date change">
                  <label>What days and times are you available for work?</label>
                  <div className="col-lg-12 wrk_dt_div">
                    <label htmlFor="usr" />
                    <label htmlFor="usr">Morning</label>
                    <label htmlFor="usr">Afternoon</label>
                    <label htmlFor="usr">Evening</label>
                  </div>
                  <div className="col-lg-12 wrk_dt_div ">
                    <div className="form-group wrkdiv_fmr_grp ">
                      <label htmlFor="usr">Monday</label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="m1" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="m2" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="m3" />
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 wrk_dt_div ">
                    <div className="form-group">
                      <label htmlFor="usr">Tuesday</label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="t1" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="t2" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="t3" />
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 wrk_dt_div">
                    <div className="form-group">
                      <label htmlFor="usr">Wednesday</label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="w1" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="w2" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="w3" />
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 wrk_dt_div">
                    <div className="form-group">
                      <label htmlFor="usr">Thursday</label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="th1" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="th2" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="th3" />
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 wrk_dt_div">
                    <div className="form-group">
                      <label htmlFor="usr">Friday</label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="f1" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="f2" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="f3" />
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 wrk_dt_div">
                    <div className="form-group">
                      <label htmlFor="usr">Saturday</label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="s1" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="s2" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="s3" />
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 wrk_dt_div">
                    <div className="form-group">
                      <label htmlFor="usr">Sunday</label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="su1" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="su2" />
                      </label>
                      <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className id="check1" name="work_availability[]" defaultValue="su3" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab  pg-mrgn">
                <div className="form-group tab-form-group">
                  <label htmlFor="usr">Please see below an example document showing required auto insurance coverage.Wreno
                    requires $100k/$300k/$100k limits for your personal automobile policy as part of our own insurance
                    requirements.
                    Please upload a copy of your insurance for proof of unexpired coverage ?:</label>
                  <ul className="page6-cont">
                    <li>$100,000 for injuries to each person</li>
                    <li>$300,000 for injuries total for each accident</li>
                    <li>$100,000 for property damage for each accident</li>
                  </ul>
                  <img className="col-lg-12" src="/images/Auto Insurance.png" />
                  <span>
                    <input type="file" name="myfile" required />
                    <br />If you do not currently have these limits, you may increase your coverage by calling your carrier
                    and requesting them<br />
                    Note: additional charges may be incurred for increasing your coverage. At this time, Wreno does not
                    reimburse
                    for personal insurance or vehicle expenses
                    <br />
                  </span>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab  last-mrgn">
                <div className="video_div">
                  <div className="vd_div">
                    <p style={{ fontweight: "normal" }}> Please follow the link below to book your interview. Wreno reserves
                      the right to cancel or reschedule the interview if your auto insurance does not meet our
                      requirements.</p>
                    <div className="ifm_div">
                      <iframe className="responsive-iframe" src="https://www.youtube.com/embed/fpUyXKVoggA" />
                    </div>
                  </div>
                </div>
                {/* {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/B2kyb1yUbqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe> */}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab last-mrgn">
                <div className="team_cndtn">
                  <div style={{ fontSize: '16px' }}>Terms &amp; Conditions:</div>
                  <span style={{ fontWeight: 'normal' }}>
                    <label className="form-check-label" htmlFor="check1">
                      <input type="checkbox" className="form-check-input" id="check1" name="checkbox" defaultValue="Yes" required />
                    </label>By submitting this form, you consent that you have read and understand the job description
                    below. You also confirm that you meet the minimum qualifications listed below.
                    {/* {/*                    <a type="button" className="collapsible">*/}
                    {/*You also confirm that you meet the minimum qualifications</a> */}
                  </span>
                  <div className="content">
                    <span>ESSENTIAL FUNCTIONS</span>
                    <span>The essential functions include but are not limited to:</span>
                    <ul>
                      <li style={{ paddingBottom: '0.9%' }}>Complete home renovation, repair, and maintenance skills training
                        courses</li>
                      <li style={{ paddingBottom: '0.9%' }}>Attend in-person workshops and on-the-job training to provide
                        repair, maintenance, and renovation services on residential real estate according to a set of
                        quality standards</li>
                      <li style={{ paddingBottom: '0.9%' }}> Provide in-person and virtual quality control visits and
                        progress/condition inspections, including taking photos and videos of homes according to a set of
                        requirements</li>
                      <li style={{ paddingBottom: '0.9%' }}> Provide renovation services including but not limited to:
                        handyman-like tasks, interior and exterior home cleaning, pool servicing, landscaping, drywall
                        repair, paint touch-up, and flooring installation</li>
                      <li style={{ paddingBottom: '0.9%' }}> Provide ad-hoc services such as yard sign management, lockbox/smart
                        lock management, specialized assisting in home renovations/project services</li>
                      <li style={{ paddingBottom: '0.9%' }}>Performs additional duties as assigned</li>
                    </ul>
                    <p>MINIMUM QUALIFICATIONS</p>
                    <ul>
                      <li style={{ paddingBottom: '0.9%' }}>High School Diploma or GED</li>
                      <li style={{ paddingBottom: '0.9%' }}>Eagerness to learn new skills and try new tasks</li>
                      <li style={{ paddingBottom: '0.9%' }}> Self-starter who enjoys working in both independent and team
                        settings</li>
                      <li style={{ paddingBottom: '0.9%' }}> Great communication ability and responsiveness</li>
                      <li style={{ paddingBottom: '0.9%' }}> Well-organized and apt in problem-solving</li>
                      <li style={{ paddingBottom: '0.9%' }}>Interested in a career in construction, real estate, property
                        technology, and hands on work</li>
                      <li style={{ paddingBottom: '0.9%' }}>You must have a smartphone, a valid driver's license, an acceptable
                        driving record, and have access to a vehicle with proper registration and insurance. You will be
                        traveling to different job sites.</li>
                    </ul>
                    <p>PHYSICAL DEMANDS AND WORK ENVIRONMENT</p>
                    <ul>
                      <li style={{ paddingBottom: '0.9%' }}>The physical demands described here are representative of those that
                        must be met by an employee to successfully perform the essential functions of the position. </li>
                      <li style={{ paddingBottom: '0.9%' }}>Reasonable accommodations may be made to enable individuals with
                        disabilities to perform the functions.</li>
                      <li style={{ paddingBottom: '0.9%' }}> While performing the duties of this position, the employee is
                        regularly required to talk or hear. The employee frequently is required to use hands or fingers
                        and perform repetitive motions. The employee is frequently required to stand; walk; push; pull;
                        squat; bend; reach with hands and arms; or carry. The employee must occasionally lift and/or move
                        up to 49 pounds.</li>
                      <li style={{ paddingBottom: '0.9%' }}> Specific vision abilities required by this position include close
                        vision, distance vision, peripheral vision, and the ability to adjust focus. The noise level in
                        the work environment is usually moderate. If it gets noisy, we provide hearing protection if you
                        need it. The employee is occasionally required to travel (20%) therefore exposure to moving
                        mechanical parts, vehicles, and common transportation related elements is present.</li>
                      <li style={{ paddingBottom: '0.9%' }}> Wreno is an Equal Opportunity Employer.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
            <div className="tab">
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
            </div>
            </TabPanel>
          </Tabs>

          
        </form>
      </div>
      <div className="pn">            
            <button className="previous" type="button" id="prevBtn" onClick={() => setSelectedTab((selectedTab + TAB_COUNT - 1) % TAB_COUNT )} >Previous</button>
            <div className="divIDClass2">
              <button className="next" type="button" id="nextBtn" onClick={() => handleNextClick(selectedTab, setSelectedTab, formData)}>Next</button>

            </div>
            <div className="divIDClass">
              <input type="submit" name="submit" value="Submit" className="next btn btn-success" />
            </div>
          </div>
    </div>
  )
}

export default Home