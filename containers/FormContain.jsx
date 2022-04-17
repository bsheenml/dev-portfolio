import React from "react";
import FormsPage from "../components/FormsPage";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";



const FormContain = (formData) => {
	return (
		<section className="section pb-0 bg-white my-5">
			<Container>
				<FormsPage/>
			</Container>
			
		</section>
	);
};

export default FormContain;
