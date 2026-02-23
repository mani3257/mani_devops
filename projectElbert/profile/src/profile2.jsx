export default function Profile2() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" alt="Profile" className="profile-image" />
        <h2>Priya Sharma</h2>
        <p className="job-title">UX/UI Designer</p>
      </div>
      <div className="profile-details">
        <p><strong>Experience:</strong> 6+ years</p>
        <p><strong>Skills:</strong> Figma, Adobe XD, Prototyping, User Research</p>
        <p><strong>Location:</strong> Hyderabad, Andhra Pradesh</p>
        <p><strong>About:</strong> Creative designer focused on creating intuitive and beautiful user experiences. Passionate about inclusive design for Indian users.</p>
      </div>
    </div>
  );
}
