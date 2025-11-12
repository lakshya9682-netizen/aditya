document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Phone = document.getElementById("phone").value;
    const Address = document.getElementById("address").value;
    const Qualification = document.getElementById("qualification").value;
    const Skills = document.getElementById("skills").value;
   
    const resumeData={
      Name,
      Email,
      Phone,
      Address,
      Qualification,
      Skills
    };

    let allResumes=JSON.parse(localStorage.getItem("records"));
    if (!Array.isArray(allResumes)) {
        allResumes = [];
    }
    
    allResumes.push(resumeData);
    localStorage.setItem("records",JSON.stringify(allResumes));
    console.log("Saved Data:",resumeData);
    console.log("All Resumes:",allResumes);

    document.getElementById("display-name").innerText = Name;
    document.getElementById("display-email").innerText = Email;
    document.getElementById("display-phone").innerText = Phone;
     document.getElementById("display-address").innerText = Address;
      document.getElementById("display-qualification").innerText =Qualification;
    document.getElementById("display-skills").innerText = Skills;
});