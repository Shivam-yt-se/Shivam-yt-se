import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import "./About.css";

const About = () => {
	return (
		<div>
			<Header />
			<Home />

			<div className="about_gov_body">
				<div className="about_gov_body_sec1">
					<div className="about_gov_content1">
						<div className="gov_container_left">
							<div className="img_gov_section">
								<img
									src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczg5LXRlZC0yMzk0LnBuZw.png?s=1BBZy9648jXrkEe49Fn0WYZfAXCYjuR3KGgLNlk3wlA"
									alt="person"
								/>
								<div className="img_gov_content">
									<h4>DR SG GOPAL KRISHNA</h4>
									<p>DIRECTOR</p>
									<p>NGI</p>
								</div>
							</div>
							<div className="left_content">
								<p>
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
									The point of using Lorem Ipsum is that it has a more-or-less
									normal distribution of letters, as opposed to using 'Content
									here, content here', making it look like readable English.
									Many desktop publishing packages and web page editors now use
									Lorem Ipsum as their default model text, and a search for
									'lorem ipsum' will uncover many web sites still in their
									infancy. Various versions have evolved over the years,
									sometimes by accident, sometimes on purpose (injected humour
									and the like).
								</p>
							</div>
						</div>
						<div className="gov_container_right">
							<div className="img_gov_section">
								<img
									src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczg5LXRlZC0yMzk0LnBuZw.png?s=1BBZy9648jXrkEe49Fn0WYZfAXCYjuR3KGgLNlk3wlA"
									alt="person"
								/>
								<div className="img_gov_content">
									<h4>DR SG GOPAL KRISHNA</h4>
									<p>DIRECTOR</p>
									<p>NGI</p>
								</div>
							</div>
							<div className="left_content">
								<p>
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
									The point of using Lorem Ipsum is that it has a more-or-less
									normal distribution of letters, as opposed to using 'Content
									here, content here', making it look like readable English.
									Many desktop publishing packages and web page editors now use
									Lorem Ipsum as their default model text, and a search for
									'lorem ipsum' will uncover many web sites still in their
									infancy. Various versions have evolved over the years,
									sometimes by accident, sometimes on purpose (injected humour
									and the like).
								</p>
							</div>
						</div>
					</div>
					<div className="gov_table">
						<h1 className="gov_header">GOVERNING BODY</h1>
						<table>
							<tr>
								<th>S.No</th>
								<th>Name</th>
								<th>Designation</th>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</table>
                    </div>
                    
                    <div className="iqac_button">
                        <button type="button">IQAC</button>
                    </div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
