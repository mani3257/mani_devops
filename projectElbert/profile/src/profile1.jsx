export default function Profile1() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Profile" className="profile-image" />
        <h2>Rajesh Kumar</h2>
        <p className="job-title">Senior Full Stack Developer</p>
      </div>
      <div className="profile-details">
        <p><strong>Experience:</strong> 8+ years</p>
        <p><strong>Skills:</strong> React, Node.js, Python, AWS</p>
        <p><strong>Location:</strong> Hyderabad, Andhra Pradesh</p>
        <p><strong>About:</strong> Passionate developer with expertise in building scalable web applications. Leading technical teams at a major IT company in Hyderabad.</p>
      </div>
    </div>
  );
}
