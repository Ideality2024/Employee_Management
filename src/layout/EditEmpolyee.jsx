import React from 'react';
import './EditEmployee.css'; // Import your CSS file

function EditEmployee() {
    return (
        <div className="edit-employee-container">
            <div className="form-container">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="Name" className="input-field" />

                <label htmlFor="id">Id:</label>
                <input type="text" id="id" name="Id" className="input-field" />

                <label htmlFor="role">Role:</label>
                <input type="text" id="role" name="Role" className="input-field" />

                <label htmlFor="status inline">Status:</label>
                {/* <input type="text" id="status" name="Status" className="input-field inline " /> */}
                <select className="flex-col inline-block">
                    <option>Present</option>
                    <option>Absent</option>
                </select>
                <br/>

                <label htmlFor="gender inline">Gender:</label>
                {/* <input type="text" id="gender" name="Gender" className="input-field" /> */}
                <select className="flex-col inline">
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <br/>

                <label htmlFor="dob">Date Of Birthday:</label>
                <input type="date" id="dob" name="DateOfBirth" className="input-field" />

                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="Department" className="input-field" />

                <label htmlFor="email">E-mail:</label>
                <input type="text" id="email" name="E-mail" className="input-field" />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="PhoneNumber" className="input-field" />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="Address" className="input-field" />

                <div className="button-container">
                    <button className="btn btn-primary" type="button">Add Employee</button>
                    <button className="btn btn-primary" type="button">Remove Employee</button>
                </div>
            </div>
        </div>
    );
}

export default EditEmployee;
