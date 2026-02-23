export default function Profile3() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="Profile" className="profile-image" />
        <h2>Arjun Singh</h2>
        <p className="job-title">Data Scientist</p>
      </div>
      <div className="profile-details">
        <p><strong>Experience:</strong> 7+ years</p>
        <p><strong>Skills:</strong> Python, Machine Learning, SQL, TensorFlow</p>
        <p><strong>Location:</strong> Visakhapatnam, Andhra Pradesh</p>
        <p><strong>About:</strong> Results-driven data scientist specializing in building predictive models for healthcare and agriculture sectors in India.</p>
      </div>
    </div>
  );
}
