# Laravel Projects & API Development

<div class="projects-intro">
Showcase of Laravel applications and RESTful API projects demonstrating backend development expertise, clean code practices, and scalable architecture design.
</div>

## Featured Laravel Project

<div class="main-project">
<div class="project-header">
<h3><span class="laravel-badge">Laravel</span> Ticket Management API</h3>
<div class="project-links">
<a href="https://github.com/ibrahimsoftware1/laravel-ticket-api" class="github-link" target="_blank">
<span class="github-icon">📁</span> View Repository
</a>
</div>
</div>

<div class="project-overview">
<p>A comprehensive RESTful API built with Laravel for managing support tickets. This project demonstrates advanced Laravel concepts including authentication, authorization, database relationships, and API resource management.</p>
</div>

<div class="tech-stack">
<span class="tech-item laravel">Laravel 10.x</span>
<span class="tech-item php">PHP 8.2</span>
<span class="tech-item mysql">MySQL 8.0</span>
<span class="tech-item sanctum">Laravel Sanctum</span>
<span class="tech-item eloquent">Eloquent ORM</span>
</div>

### Core Features

<div class="features-list">
<div class="feature-item">
<div class="feature-icon">🔐</div>
<div class="feature-content">
<h4>Authentication & Authorization</h4>
<p>Laravel Sanctum implementation with token-based authentication and role-based access control for different user types.</p>
</div>
</div>

<div class="feature-item">
<div class="feature-icon">🎫</div>
<div class="feature-content">
<h4>Ticket Management System</h4>
<p>Complete CRUD operations for tickets with status tracking, priority levels, category management, and assignment functionality.</p>
</div>
</div>

<div class="feature-item">
<div class="feature-icon">👥</div>
<div class="feature-content">
<h4>User Role Management</h4>
<p>Multi-role system supporting customers, agents, and managers with granular permissions and access controls.</p>
</div>
</div>

<div class="feature-item">
<div class="feature-icon">�</div>
<div class="feature-content">
<h4>API Resource Transformation</h4>
<p>Laravel API Resources for consistent JSON responses with proper data transformation and relationship loading.</p>
</div>
</div>

<div class="feature-item">
<div class="feature-icon">�</div>
<div class="feature-content">
<h4>Advanced Filtering & Search</h4>
<p>Eloquent-based filtering system with search capabilities, pagination, and sorting options for efficient data retrieval.</p>
</div>
</div>

<div class="feature-item">
<div class="feature-icon">�</div>
<div class="feature-content">
<h4>API Documentation</h4>
<p>Comprehensive API documentation with endpoint descriptions, request/response examples, and authentication guidelines.</p>
</div>
</div>
</div>

### API Endpoints Overview

<div class="api-section">
<div class="endpoint-category">
<h4>Authentication Endpoints</h4>
<div class="endpoints">
<code class="endpoint post">POST /api/auth/register</code>
<code class="endpoint post">POST /api/auth/login</code>
<code class="endpoint post">POST /api/auth/logout</code>
<code class="endpoint get">GET /api/auth/user</code>
</div>
</div>

<div class="endpoint-category">
<h4>Ticket Management</h4>
<div class="endpoints">
<code class="endpoint get">GET /api/tickets</code>
<code class="endpoint post">POST /api/tickets</code>
<code class="endpoint get">GET /api/tickets/{id}</code>
<code class="endpoint put">PUT /api/tickets/{id}</code>
<code class="endpoint delete">DELETE /api/tickets/{id}</code>
</div>
</div>

<div class="endpoint-category">
<h4>Administrative Functions</h4>
<div class="endpoints">
<code class="endpoint post">POST /api/tickets/{id}/assign</code>
<code class="endpoint patch">PATCH /api/tickets/{id}/status</code>
<code class="endpoint get">GET /api/users/{id}/tickets</code>
</div>
</div>
</div>

### Technical Implementation

<div class="implementation-details">
<div class="detail-item">
<h5>Laravel Architecture</h5>
<ul>
<li>MVC pattern with service layer separation</li>
<li>Repository pattern for data access</li>
<li>Custom middleware for API authentication</li>
<li>Form request validation with custom rules</li>
</ul>
</div>

<div class="detail-item">
<h5>Database Design</h5>
<ul>
<li>Eloquent relationships with proper foreign keys</li>
<li>Database migrations with proper indexing</li>
<li>Seeders for development data</li>
<li>Optimized queries with eager loading</li>
</ul>
</div>

<div class="detail-item">
<h5>Testing & Quality</h5>
<ul>
<li>PHPUnit test coverage for API endpoints</li>
<li>Postman collection for manual testing</li>
<li>Code following PSR-12 standards</li>
<li>Error handling with proper HTTP status codes</li>
</ul>
</div>
</div>
</div>

## Additional Backend Projects

<div class="other-projects">

<div class="project-card">
<div class="project-info">
<h4><span class="database-badge">Database</span> MySQL Optimization Projects</h4>
<p>Various database optimization projects focusing on query performance, index optimization, and schema design for high-traffic applications.</p>
</div>
<div class="project-tech">
<span class="mini-tech mysql">MySQL</span>
<span class="mini-tech performance">Performance Tuning</span>
<span class="mini-tech indexing">Database Indexing</span>
</div>
</div>

<div class="project-card">
<div class="project-info">
<h4><span class="api-badge">API</span> Third-party Integration Services</h4>
<p>Laravel-based services for integrating with external APIs, handling authentication, rate limiting, and data transformation.</p>
</div>
<div class="project-tech">
<span class="mini-tech laravel">Laravel</span>
<span class="mini-tech guzzle">Guzzle HTTP</span>
<span class="mini-tech oauth">OAuth 2.0</span>
</div>
</div>

<div class="project-card">
<div class="project-info">
<h4><span class="php-badge">PHP</span> Custom Framework Components</h4>
<p>Development of custom PHP components and packages for Laravel applications, focusing on reusable and maintainable code.</p>
</div>
<div class="project-tech">
<span class="mini-tech php">PHP 8.2</span>
<span class="mini-tech composer">Composer</span>
<span class="mini-tech psr">PSR Standards</span>
</div>
</div>

</div>

## Development Expertise

<div class="expertise-grid">
<div class="expertise-item">
<h4>Laravel Framework</h4>
<div class="skill-level">
<div class="skill-bar" data-level="95"></div>
<span class="level-text">Expert Level</span>
</div>
<ul class="skill-details">
<li>Advanced Eloquent ORM usage</li>
<li>Service Container & Dependency Injection</li>
<li>Custom Artisan Commands</li>
<li>Event & Listener Implementation</li>
</ul>
</div>

<div class="expertise-item">
<h4>RESTful API Development</h4>
<div class="skill-level">
<div class="skill-bar" data-level="90"></div>
<span class="level-text">Advanced</span>
</div>
<ul class="skill-details">
<li>API Resource Transformation</li>
<li>Authentication & Authorization</li>
<li>Rate Limiting & Throttling</li>
<li>API Documentation & Testing</li>
</ul>
</div>

<div class="expertise-item">
<h4>Database Management</h4>
<div class="skill-level">
<div class="skill-bar" data-level="88"></div>
<span class="level-text">Advanced</span>
</div>
<ul class="skill-details">
<li>MySQL Query Optimization</li>
<li>Database Schema Design</li>
<li>Migration Strategies</li>
<li>Performance Monitoring</li>
</ul>
</div>
</div>

---

<div class="contact-section">
<h3>Interested in Laravel Development?</h3>
<p>I'm available for Laravel projects, API development, and backend consulting. Let's discuss how I can help with your next project.</p>
<div class="contact-links">
<a href="/contact/" class="contact-btn primary">Get In Touch</a>
<a href="/skills/" class="contact-btn secondary">View Full Skills</a>
</div>
</div>

<style>
.projects-intro {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--secondary-color);
  text-align: center;
  margin: 2rem auto;
  max-width: 600px;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 8px;
}

.main-project {
  background: var(--bg-primary);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem 0;
  box-shadow: var(--shadow-lg);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-header h3 {
  margin: 0;
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 600;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.github-link:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.github-icon {
  font-size: 1rem;
}

.project-overview {
  color: var(--secondary-color);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  border-left: 4px solid var(--accent-color);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
}

.tech-item {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tech-item.laravel { background: #ff2d20; }
.tech-item.php { background: #777bb4; }
.tech-item.mysql { background: #4479a1; }
.tech-item.sanctum { background: #ff6b35; }
.tech-item.eloquent { background: #ff2d20; }

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.feature-item {
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
  display: flex;
  gap: 1rem;
}

.feature-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  border-color: var(--primary-color);
}

.feature-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.feature-content h4 {
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.feature-content p {
  color: var(--secondary-color);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

.api-section {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.endpoint-category {
  margin-bottom: 1.5rem;
}

.endpoint-category:last-child {
  margin-bottom: 0;
}

.endpoint-category h4 {
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.endpoints {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.endpoint {
  background: var(--bg-primary);
  color: var(--text-color);
  padding: 0.5rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  border: 1px solid var(--bg-tertiary);
}

.endpoint.get { border-left: 4px solid #10b981; }
.endpoint.post { border-left: 4px solid #3b82f6; }
.endpoint.put { border-left: 4px solid #f59e0b; }
.endpoint.patch { border-left: 4px solid #8b5cf6; }
.endpoint.delete { border-left: 4px solid #ef4444; }

.implementation-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.detail-item {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
}

.detail-item h5 {
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.detail-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-item li {
  color: var(--secondary-color);
  font-size: 0.9rem;
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1rem;
}

.detail-item li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

.other-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.project-card {
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
}

.project-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.project-info h4 {
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.project-info p {
  color: var(--secondary-color);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.mini-tech {
  padding: 4px 8px;
  background: var(--bg-tertiary);
  color: var(--secondary-color);
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.mini-tech.mysql { background: #4479a1; color: white; }
.mini-tech.laravel { background: #ff2d20; color: white; }
.mini-tech.php { background: #777bb4; color: white; }

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.expertise-item {
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.expertise-item h4 {
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.skill-level {
  margin-bottom: 1rem;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.skill-bar::after {
  content: '';
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  width: var(--level, 0%);
  border-radius: 4px;
  transition: width 2s ease;
}

.skill-bar[data-level="95"]::after { width: 95%; }
.skill-bar[data-level="90"]::after { width: 90%; }
.skill-bar[data-level="88"]::after { width: 88%; }

.level-text {
  font-size: 0.85rem;
  color: var(--secondary-color);
  font-weight: 500;
}

.skill-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-details li {
  color: var(--secondary-color);
  font-size: 0.9rem;
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1rem;
}

.skill-details li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

.contact-section {
  background: var(--primary-color);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  margin: 3rem 0;
}

.contact-section h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.contact-section p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-btn {
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.contact-btn.primary {
  background: var(--accent-color);
  color: white;
}

.contact-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.contact-btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* Badge styles */
.laravel-badge, .api-badge, .php-badge, .database-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: white;
}

.laravel-badge { background: #ff2d20; }
.api-badge { background: #10b981; }
.php-badge { background: #777bb4; }
.database-badge { background: #3b82f6; }

@media (max-width: 768px) {
  .features-list {
    grid-template-columns: 1fr;
  }
  
  .implementation-details {
    grid-template-columns: 1fr;
  }
  
  .other-projects {
    grid-template-columns: 1fr;
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .endpoints {
    grid-template-columns: 1fr;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .contact-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
