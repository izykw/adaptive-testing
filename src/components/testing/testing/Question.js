import { Col, Row } from 'reactstrap';
import React from 'react';
import { Answers } from './Answers';

export function Question({ question, type, answers }) {
	return (
		<>
			<Row>
				<h3 className="border border-1 border-secondary rounded p-4 text-primary text-center">
					{question}
				</h3>
			</Row>
			<Row>
				<Col md="8">
					<Answers type={type} answers={answers}/>
				</Col>
				<Col md="4">
					<img src="/"
							 alt="картинка к вопросу"
							 style={{ height: '230px', width: '300px' }}
							 className="d-none shadow_element border border-secondary rounded"/>
				</Col>
			</Row>
		</>
	);
}