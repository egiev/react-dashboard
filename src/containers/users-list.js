import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';

import Section from '../components/section';
import { fetchUser, addUser, deleteUser } from '../actions/action-users';

class UserList extends Component {
	constructor(){
		super();
		this.state = {
			firstname: '',
			lastname: ''
		}
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleAddUser = this.handleAddUser.bind(this);
	}

	componentDidMount() {
		this.props.fetchUser('http://localhost:5000/users/');
	}

	handleOnChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleAddUser() {
		this.props.addUser('http://localhost:5000/users/', this.state);
		this.setState({firstname: '', lastname: ''})
	}

	handleDeleteUser(id) {f
		this.props.deleteUser(`http://localhost:5000/users/${id}/`);
	}

	render() {
		const disabledButton = (this.state.firstname == '' || this.state.lastname == '') ? true : false;
		if(!this.props.users){
			return(
				<p>Fetching dataa....</p>
			)
		}

		return (
			<Section>	
				<div className="form-inline">
					<div className="form-group">
						<input type="text" name="firstname" className="form-control" value={this.state.firstname} 
												placeholder="firstname" onChange={this.handleOnChange}/>
					</div>
					<div className="form-group">
						<input type="text" name="lastname" className="form-control" value={this.state.lastname}
												placeholder="lastname" onChange={this.handleOnChange}/>
					</div>
					<button type="button" className="btn btn-primary" disabled={disabledButton} onClick={this.handleAddUser}>Add</button>
				</div>
				<hr/>
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Firstname</th>
							<th>Lastname</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{ this.props.users.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.firstname}</td>
								<td>{user.lastname}</td>
								<td>
									<button className="btn btn-info btn-xs" type="button">edit</button>
									<button className="btn btn-danger btn-xs" type="button" onClick={() => this.handleDeleteUser(user.id)}>delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchUser: fetchUser,
		addUser: addUser,
		deleteUser: deleteUser
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList)