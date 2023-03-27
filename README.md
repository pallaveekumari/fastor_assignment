# fastor_assignment

Deployed URL for the project = https://fastor-assignment.onrender.com

Information about the Project:-

* Api for login for employee/counselor  

   -api = https://fastor-assignment.onrender.com/employee/login
   
   -localhostAPI = http://localhost:8080/employee/login
   
   -payload in body = email,password
   
   -method = post

* Api for signup for employee/counselor

   -api = https://fastor-assignment.onrender.com/employee/signup
   
   -localhostAPI = http://localhost:8080/employee/signup
   
   -payload in body = name, email, password
   
   -method = post

* Api for enquiry form submission by the user

   -api = https://fastor-assignment.onrender.com/user/enquiryform
   
   -localhostAPI = http://localhost:8080/user/enquiryform
   
   -payload in body = name,email,course_interest
   
   -method = post

* Api to claim leads

   -api= https://fastor-assignment.onrender.com/leads/claimuser
   
   -localhostAPI = http://localhost:8080/leads/claimuser
   
   -payload in body = email of the user whom the loggedin employee/counsellor wants to claim.
   
   -headers= {Authorization: Bearer token} token of the loggedin employee.
   
   -method=post

* API to fetch unclaimed leads

   -api= https://fastor-assignment.onrender.com/leads/unclaimleads
   
   -localhostAPI = http://localhost:8080/leads/unclaimleads
   
   -method= get

* API to fetch leads claimed by logged in employee.

   -api = https://fastor-assignment.onrender.com/leads/claimleads
   
   -localhostAPI = http://localhost:8080/leads/claimleads
   
   -headers= {Authorization: Bearer token} token of the loggedin employee.
   
   -method = get
