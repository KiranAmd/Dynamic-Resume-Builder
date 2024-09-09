// Function to generate resume dynamically
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var summary = document.getElementById('summary').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <h3>Professional Summary</h3>\n        <p>").concat(summary, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    var resumeDisplay = document.getElementById('resumeDisplay');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
        resumeDisplay.style.display = 'block';
    }
}
