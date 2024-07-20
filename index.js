const jobListings = [
    { title: 'Web Developer', type: 'fullTime', location: 'Bangalore', salary: 60000 },
    { title: 'Frontend Developer', type: 'fullTime', location: 'Chennai', salary: 50000 },
    { title: 'Full Stack Developer', type: 'fullTime', location: 'Bangalore', salary: 80000 },
    { title: 'Web Developer', type: 'fullTime', location: 'Chennai', salary: 50000 },
    { title: 'Frontend Developer', type: 'hybrid', location: 'Bangalore', salary: 40000 },
    { title: 'Full Stack Developer', type: 'hybrid', location: 'Chennai', salary: 70000 },
    { title: 'Web Developer', type: 'hybrid', location: 'Chennai', salary: 40000 }
];

document.addEventListener('DOMContentLoaded', function () {
    const jobTypeFilter = document.getElementById('jobType');
    const locationFilter = document.getElementById('location');
    const salaryFilter = document.getElementById('salary');
    const salaryValue = document.getElementById('salaryValue');
    const filterBtn = document.getElementById('filterbtn');
    const jobListingsContainer = document.getElementById('joblistings');

    // Initial render with all job listings
    renderJobListings(jobListings);

    // Add event listener to the filter button
    filterBtn.addEventListener('click', function () {
        filterJobListings();
    });

    // Update salary value display when the range input changes
    salaryFilter.addEventListener('input', function () {
        salaryValue.textContent = salaryFilter.value;
    });

    // Function to render job listings
    function renderJobListings(jobs) {
        jobListingsContainer.innerHTML = '';

        jobs.forEach(job => {
            const listingDiv = document.createElement('div');
            listingDiv.innerHTML = `<h3>${job.title}</h3><p>Type: ${job.type}</p><p>Location: ${job.location}</p><p>Salary: ${job.salary}</p>`;
            jobListingsContainer.appendChild(listingDiv);
        });
    }

    // Function to filter job listings based on user input
    function filterJobListings() {
        const jobType = jobTypeFilter.value;
        const location = locationFilter.value.toLowerCase();
        const salary = parseInt(salaryFilter.value);

        const filteredJobs = jobListings.filter(job => {
            return (jobType === 'all' || job.type === jobType) && job.location.toLowerCase().includes(location) && job.salary >= salary;
        });

        renderJobListings(filteredJobs);
    }
});