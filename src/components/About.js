import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import director_img from "./img/director-1.jpg"
import principal_img from "./img/Principal.jpg"
import vision from "./img/02-White.png"
import mission from "./img/03-White.png"
import pdf from "./assets/14.IQAC cell.pdf"
import quality from "./img/01-White.png"
import "./About.css";

const About = () => {
	return (
		<div className="about">
			<Header />
			<Home />
			<div className="about_ndc_main_content">
				<div className="left_side_content">
					<div className="top_img" >
						<img src="https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w" />
					</div>
					<div className="flex_content">
						<div className="middle_img">
							<img src="https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w" />
						</div>
						<div className="flex_content_box">
							<h2>ABOUT NDC</h2>
							<p>
								Nagarjuna Degree College is one of the blue-chip institutions in
								Bangalore with the state-of- the-art campus. Nagarjuna Degree
								College is managed by Nagarjuna Group of Institutions and is
								located in Yelahanka, 22 min drive from the Kempegowda
								International Airport, Bangalore.
							</p>
						</div>
					</div>
					<div className="bottom_img">
						<img src="https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w" />
					</div>
				</div>
				<div className="right_side_content">
					<div className="top_img">
						<img src="https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w" />
					</div>
					<div className="flex_content">
						<div className="flex_content_box right_content_box">
							<h2>HISTORY OF NDC</h2>
							<p>
								Nagarjuna Group of Institutions (NGI) stands as an icon for
								enriching education, ethics, practical learning for the benefit
								of the society and for the young aspiring youth of the country.
								The philosophy and its purpose have been rendered in its
								identity, expressing and committing to leadership and excellence
								in professional education and in our students' career.
							</p>
						</div>
						<div className="middle_img">
							<img src="https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w" />
						</div>
					</div>
					<div className="bottom_img">
						<img src="https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w" />
					</div>
				</div>
			</div>

			<div className="about_vision">
				<div className="about_vision_content">
					<div className="vision_box">
						<p>Leadership and Excellence in education</p>
						<div className="vision_img">
							<img src={vision} />
							<p>Vision</p>
						</div>
					</div>
					<div className="vision_box">
						<p>
							To impart total quality education replete with philosophy of
							blending human values and academic professionalism.
						</p>
						<div className="vision_img">
							<img src={mission} alt="mission" />
							<p>Mission</p>
						</div>
					</div>
					<div className="vision_box">
						<p>
							Cutting an edge an education with compliance in status quo,unique
							teaching dynamics and creating enthusastic individuals into
							responsible professionalism with ethical values.
						</p>
						<div className="vision_img">
							<img src={quality} alt="quality" />
							<p>Quality</p>
						</div>
					</div>
				</div>
			</div>

			<div className="about_gov_body">
				<div className="about_gov_body_sec1">
					<div className="about_gov_content1">
						<div className="gov_container_left">
							<div className="img_gov_section">
								<img src={director_img} />
								<div className="img_gov_content">
									<h4>PROF MANOHAR NARAJJI</h4>
									<p>DIRECTOR</p>
									<p>NGI</p>
								</div>
							</div>
							<div className="left_content">
								<p>
									I welcome you to the NDC experience. In this era of the joint
									venture, mergers and accusations, strategic alliances and
									unpredictable market conditions, the need of the hour is
									LEADERS with a global perspective. A prerequisite of
									leadership today is to look beyond the present, to be an
									innovator in business or a stimulant of change in society. NDC
									is recognized as a state leader in teaching and learning
									student relationship and wellbeing.
								</p>
							</div>
						</div>
						<div className="gov_container_right">
							<div className="img_gov_section">
								<img src={principal_img} alt="person" />
								<div className="img_gov_content">
									<h4>PROF DR HARISH BABU S</h4>
									<p>PRINCIPAL</p>
									<p>NDC</p>
								</div>
							</div>
							<div className="left_content">
								<p>
									Former Professor and HoD of the Department of Management
									Studies and Research centre at NMIT. He earned his Doctorate
									in Management from Bangalore University in 2013. He is an
									approved research guide for Ph.D programs of VTU and the
									University of Mysore, Three Scholars have been awarded Ph.D
									under his guidance from the University of Mysore. He has
									presented and published 60 research papers in National and
									International Journals, Some of his papers also have a good
									number of citations; he has authored 8 books on Financial
									Management, Accounting for Managers, Advanced Financial
									Management, Integrated marketing communication and Project
									Evaluation & Management. He has worked on various research
									Projects including a project funded by the ICSSR, New Delhi.
									He is also in the editorial board as a member for 8
									international Journals. Earlier, He was also the chairman of
									BoS and BoE for MBA program at NMIT. He is the member of BoS
									and BoE in several other reputed Colleges and Universities. He
									has conducted training programs for Management students,
									Executives and Managers. He is a recipient of an award from
									the President of India for his active involvement in Social
									service. He is a Life-time member of the National Institute of
									Personnel Management (NIPM), Global Management Teacher’s
									Consortium, etc.
									<br />
									Addition his achievements, supported students of MBA program
									in providing excellent placement opportunities for more than
									1000 MBA students.
								</p>
							</div>
						</div>
					</div>
					<div className="gov_table">
						<h1 className="gov_header">GOVERNING BODY</h1>
						<table>
							<tr>
								<th className="gov_head1">S.No</th>
								<th className="gov_head2">Name</th>
								<th className="gov_head2">Designation</th>
							</tr>
							<tr>
								<td>1.</td>
								<td>
									<p>Sri J.V. Ranga Raju, Chairman, NES,</p>
									<p>NES, Bengaluru</p>
								</td>
								<td>Chairman</td>
							</tr>
							<tr>
								<td>2.</td>
								<td>
									<p>Smt. Sridevi Ranga Raju, Founder Member</p>
									<p>NES, Bengaluru</p>
								</td>
								<td>Member</td>
							</tr>
							<tr>
								<td>3.</td>
								<td>
									Sri. J. Chaitanya Varma, Secretary, <p>NES, Bengaluru</p>
								</td>
								<td>Secretary</td>
							</tr>
							<tr>
								<td>4.</td>
								<td>
									Smt. Bhanu Chaitanya, Member,
									<p>NES, Bengaluru</p>
								</td>
								<td>Member</td>
							</tr>
							<tr>
								<td>5.</td>
								<td>
									Smt. Sowjanya, Jt. Secretary,
									<p>NES, Bengaluru</p>
								</td>
								<td>Joint Secretary</td>
							</tr>
							<tr>
								<td>6.</td>
								<td>
									Dr. K.S. Deshikachar, Sr Director,
									<p>NES, Bengaluru</p>
								</td>
								<td>Member</td>
							</tr>
							<tr>
								<td>7.</td>
								<td>
									Dr. S.G.Gopala Krishna, Director,
									<p>NES, Bengaluru</p>
								</td>
								<td>Member</td>
							</tr>
							<tr>
								<td>8.</td>
								<td>
									Prof Manohar Narajji, Director ,<p>NES, Bengaluru</p>
								</td>
								<td>Member</td>
							</tr>
							<tr>
								<td>9.</td>
								<td>
									Dr. Tejashwini, ,<p>BCU, Bengaluru</p>
								</td>
								<td>University Nominee</td>
							</tr>
							<tr>
								<td>10.</td>
								<td>
									Dr.S.Ramesh, Dean, MCC,
									<p>MCC, Bengaluru</p>
								</td>
								<td>Member</td>
							</tr>
							<tr>
								<td>11.</td>
								<td>
									Dr. Jayappa, Principal,
									<p>, R.B.N.M.S Bengaluru</p>
								</td>
								<td>Member</td>
							</tr>
							<tr>
								<td>12.</td>
								<td>
									Dr Gururaj Karajagi, Chairman,
									<p>ACT, Bengaluru</p>
								</td>
								<td>Member</td>
							</tr>
							<tr>
								<td>13.</td>
								<td>
									Dr. Harish Babu S, Principal, NDC,
									<p>NDC, Bengaluru</p>
								</td>
								<td>Member Secretary</td>
							</tr>
						</table>
					</div>

					<div className="iqac_button">
						{/* {/* <Link to='./assets/IQAC cell.pdf'}> */}
						<a href={pdf} target="_blank" download>
							<button type="button">IQAC</button>
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
