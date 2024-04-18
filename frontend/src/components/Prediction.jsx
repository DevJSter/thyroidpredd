import React, { useState } from 'react';

const Thyroid = () => {
	const [formData, setFormData] = useState({
		age: '',
		TSH: '',
		pregnant: '0',
		T3: '',
		TT4: '',
		on_thyroxine: '0',
		T4U: '',
		FTI_measured: '0',
		tumor: '0',
		FTI: '',
	});

	const [prediction, setPrediction] =
		useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await fetch(
				'/thyroidpredict',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				const result = await response.text(); // Since the response is a string
				setPrediction(result);
			} else {
				console.error(
					'Failed to fetch prediction:',
					response.status,
					response.statusText
				);
				setPrediction(
					'Error occurred during prediction.'
				);
			}
		} catch (error) {
			console.error(
				'Error while fetching prediction:',
				error
			);
			setPrediction(
				'Error occurred during prediction.'
			);
		} finally {
			setLoading(false);
		}
	};

	const mainDiv = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	};

	const formContainerStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '60%',
		backgroundColor: '#f0f0f0', // Changed background color
		padding: '2rem', // Added padding
		borderRadius: '1rem', // Added border radius
	};

	const inputRowStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '15px', // Decreased margin
		alignItems: 'center',
		width: '100%',
	};

	const labelStyle = {
		marginRight: '10px',
		color: '#000080',
		textAlign: 'right',
		width: '30%',
		textAlign: 'left', // Changed text alignment
	};

	const inputStyle = {
		padding: '8px',
		borderRadius: '4px',
		border: '1px solid #000080',
		marginLeft: '5px', // Decreased margin
		width: '50%',
	};

	const selectStyle = {
		...inputStyle,
		width: '50%',
	};

	const buttonStyle = {
		background: 'green',
		color: '#ffffff',
		padding: '.75rem 5rem',
		cursor: 'pointer',
		borderRadius: '5px',
		border: 'none',
		marginTop: '10px',
	};

	const titleStyle = {
		color: '#000080',
		fontWeight: 'bold',
		fontSize: '28px',
		textAlign: 'center',
		margin: '25px 0', // Added margin
	};

	const predictionResultStyle = {
		textAlign: 'center',
		marginTop: '20px',
		marginBottom: '20px', // Added margin bottom
	};

	return (
		<div style={mainDiv}>
			<h1 style={titleStyle}>
				Thyroid Disease Detection
			</h1>
			<form
				onSubmit={handleSubmit}
				style={formContainerStyle}
			>
				<div style={inputRowStyle}>
					<label style={labelStyle}>Age:</label>
					<input
						type='number'
						name='age'
						value={formData.age}
						onChange={handleChange}
						style={inputStyle}
						required
					/>
				</div>

				<div style={inputRowStyle}>
					<label style={labelStyle}>
						Thyroid Stimulating Hormone Level:
					</label>
					<input
						type='number'
						name='TSH'
						value={formData.TSH}
						onChange={handleChange}
						style={inputStyle}
						required
					/>
				</div>

				<div style={inputRowStyle}>
					<label style={labelStyle}>
						Pregnant (Yes or No):
					</label>
					<select
						name='pregnant'
						value={formData.pregnant}
						onChange={handleChange}
						style={selectStyle}
						required
					>
						<option value='1'>Yes</option>
						<option value='0'>No</option>
					</select>
				</div>

				<div style={inputRowStyle}>
					<label style={labelStyle}>
						Triiodothyronine (T3):
					</label>
					<input
						type='number'
						name='T3'
						value={formData.T3}
						onChange={handleChange}
						style={inputStyle}
						required
					/>
				</div>

				<div style={inputRowStyle}>
					<label style={labelStyle}>
						FTI Measured (Yes or No):
					</label>
					<select
						name='FTI_measured'
						value={formData.FTI_measured}
						onChange={handleChange}
						style={selectStyle}
						required
					>
						<option value='1'>Yes</option>
						<option value='0'>No</option>
					</select>
				</div>

				<div style={inputRowStyle}>
					<label style={labelStyle}>
						Tumor (Yes or No):
					</label>
					<select
						name='tumor'
						value={formData.tumor}
						onChange={handleChange}
						style={selectStyle}
						required
					>
						<option value='1'>Yes</option>
						<option value='0'>No</option>
					</select>
				</div>

				<div style={inputRowStyle}>
					<label style={labelStyle}>
						Total Thyroxine (TT4):
					</label>
					<input
						type='number'
						name='TT4'
						value={formData.TT4}
						onChange={handleChange}
						style={inputStyle}
						required
					/>
				</div>

				<div style={inputRowStyle}>
					<label style={labelStyle}>
						On Thyroxine Medication (Yes or No):
					</label>
					<select
						name='on_thyroxine'
						value={formData.on_thyroxine}
						onChange={handleChange}
						style={selectStyle}
						required
					>
						<option value='1'>Yes</option>
						<option value='0'>No</option>
					</select>
				</div>

				<div style={inputRowStyle}>
					<label style={labelStyle}>
						T4U Measure:
					</label>
					<input
						type='number'
						name='T4U'
						value={formData.T4U}
						onChange={handleChange}
						style={inputStyle}
						required
					/>
				</div>

				{/* ... (add more fields as needed) */}

				<div style={inputRowStyle}>
					<label style={labelStyle}>
						Free Thyroxine Index (FTI):
					</label>
					<input
						type='number'
						name='FTI'
						value={formData.FTI}
						onChange={handleChange}
						style={inputStyle}
						required
					/>
				</div>

				<button
					type='submit'
					style={buttonStyle}
					disabled={loading}
				>
					{loading ? 'Predicting...' : 'Predict'}
				</button>
			</form>

			{prediction !== null && (
				<div style={predictionResultStyle}>
					<h2>Prediction Result:</h2>
					<p>{prediction}</p>
				</div>
			)}
		</div>
	);
};

export default Thyroid;
