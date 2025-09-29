# 🚀 Projects

<div class="projects-portfolio">

<div class="project-card">
<h2>🎫 Laravel Ticket API</h2>
<p><strong>GitHub:</strong> <a href="https://github.com/ibrahimsoftware1" target="_blank">github-Repo...</a></p>
<p>A fully functional RESTful API for managing support tickets in Laravel. The system includes:</p>
<ul>
<li>User authentication (login, logout, token-based access)</li>
<li>Role-based access for users and managers</li>
</ul>
</div>

<div class="project-card">
<h2>🍽️ Restaurant Management API</h2>
<p><strong>GitHub:</strong> <a href="https://github.com/ibrahimsoftware1" target="_blank">github-Repo...</a></p>
<p>A RESTful API for managing a restaurant's operations including users, roles, tables, categories, menu items, orders, and order items.</p>
<ul>
<li>Built with Laravel and Sanctum for secure authentication</li>
<li>Supports role-based access control with granular permissions for admin, manager, chef, and waiter roles</li>
</ul>
</div>

<div class="project-card">
<h2>💬 RESTful Social Media & Chat API with Real-Time Broadcasting</h2>
<p><strong>GitHub:</strong> <a href="https://github.com/ibrahimsoftware1" target="_blank">github-Repo...</a></p>
<p>A scalable Laravel-based RESTful API for real-time messaging with social features. Built with Laravel Sanctum authentication, Laravel Reverb for WebSocket broadcasting, and comprehensive user management.</p>

<h3>Key Features:</h3>
<ul>
<li>Supports both private and group conversations with real-time message delivery</li>
<li>Typing indicators and social networking capabilities</li>
<li>Authentication & Authorization</li>
<li>Real-Time Messaging</li>
<li>User Management</li>
<li>Social Features</li>
<li>Broadcasting & Events</li>
<li>API Architecture</li>
</ul>
</div>

</div>

<style>
.projects-portfolio {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: #ECFOF1;
  min-height: 100vh;
}

.project-card {
  background: #BDC3C7;
  border: 2px solid #7F8C8D;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(44, 62, 80, 0.1);
  transition: all 0.3s ease;
  color: #2C3E50;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(44, 62, 80, 0.2);
  border-color: #2C3E50;
  background: #7F8C8D;
  color: #FFFFFF;
}

.project-card:hover h2,
.project-card:hover h3 {
  color: #FFFFFF;
}

.project-card:hover a {
  color: #FFFFFF !important;
}

.project-card h2 {
  color: #2C3E50;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-card h3 {
  color: #34495E;
  font-size: 1.1rem;
  margin: 1.5rem 0 0.8rem 0;
  border-bottom: 2px solid #7F8C8D;
  padding-bottom: 0.5rem;
}

.project-card ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.project-card li {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.project-card a {
  color: #2C3E50;
  text-decoration: none;
  font-weight: 500;
}

.project-card a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .projects-portfolio {
    padding: 1rem;
  }
  
  .project-card {
    padding: 1.5rem;
  }
}
</style>