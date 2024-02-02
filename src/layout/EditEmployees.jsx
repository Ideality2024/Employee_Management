import React from 'react'
import './edit.css';
function EditEmployees() {
  return (
    <div>
    <h1 className="text-center mt-5 "> Edit Employee</h1>
  <div class="container card mb-3 mt-3 shadow raounded">
    <div class="row">
      <div class="col">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      </div>

      <div class="col">
      <label for="name">ID:</label>
      <input type="text" id="name" name="name" required />
      </div>
      <br />

       <div class="row">
      <div class="col">
      <label for="name">Role:</label>
      <input type="text" id="name" name="name" required />
      </div>

      <div class="col">
      <label for="name">Status:</label>
      <input type="text" id="name" name="name" required />
      </div>
      </div>

      <div class="row">
      <div class="col">
      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      </div>

      <div class="col">
      <label for="birthdate">Date Of Birth:</label>
      <input type="date" id="birthdate" name="birthdate" required />
      </div>
      </div>
      <div class="row">
      <div class="col">
      <label for="department">Department:</label>
      <select id="department" name="department" required>
        <option value="select">Select</option>
        <option value="software">Software Engineer</option>
        <option value="designer">UI/UX Designer</option>
        <option value="developer">Frontend Developer</option>
        <option value="developer">Backend Developer</option>
      </select>
      </div>

      <div class="col">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      </div>
      </div>
      
      <div class="row">
      <div class="col">
      <label for="phone">Mobile Number:</label>
      <input type="tel" id="phone" name="phone" required />
      </div>

      <div class="col">
      <label for="adress">Adress:</label>
      <input type="text" id="name" name="name" required />
      </div>
      </div>
      <div class="row">
      <div class="col">
      <label for="file">File Update:</label>
      <input type="file" id="file" name="file" accept=".pdf, .doc, .docx" />
      </div>
      </div>
      <div className="">
        <button type="submit" className="flex justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ">
          Submit
        </button>
        <button type="submit" className="flex justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
          Submit
        </button>
      </div>

    </div>
  </div>
  </div>
  )
}

export default EditEmployees
