---
home: true
title: Ibrahim Qadr
heroText: Ibrahim Qadr
tagline: Software Engineer
features:
  - title: Laravel Framework
    details: Expert in building scalable web applications with Laravel, following MVC architecture and best practices
  - title: RESTful API Development
    details: Specialized in creating robust APIs with proper authentication, validation, and documentation
  - title: Database Architecture
    details: Proficient in MySQL and Oracle database design, optimization, and complex query development
footer: Built with VuePress | Ibrahim Qadr - Laravel Developer
---

<div class="modern-portfolio">

## Profile

<div class="profile-card">
A passionate and detail-oriented Backend Developer and Software Engineer with strong knowledge in Laravel, PHP, and API development. Skilled in building scalable backend services, testing endpoints using Postman, and working with databases such as MySQL and Oracle. Always eager to learn new technologies, solve complex problems, and contribute to impactful software projects.
</div>

## Skills

<div class="skills-card">

### Core Skills:
- Public Relations
- Teamwork
- Critical Thinking

### Programming Languages:
- PHP, JavaScript, Java

### Frameworks & Tools:
- Laravel, Postman, Git

### Frontend:
- HTML, CSS

### Databases:
- MySQL, Oracle

### API Design:
- RESTful API development and testing
- Laravel Testing

</div>

## Education

<div class="education-card">
<h3>Software Engineering</h3>
<p><strong>College of Engineering | Salahaddin University</strong></p>
</div>

## Languages

<div class="languages-card">
<ul>
<li><strong>Kurdish:</strong> Native</li>
<li><strong>Arabic:</strong> B2</li>
<li><strong>English:</strong> B2</li>
</ul>
</div>

## Contact & Links

<div class="contact-card">
<div class="contact-info">
<div class="contact-item">
<strong>Phone:</strong> 0780 802 9896
</div>
<div class="contact-item">
<strong>Email:</strong> <a href="mailto:ibrahimqadr23@gmail.com">ibrahimqadr23@gmail.com</a>
</div>
<div class="contact-item">
<strong>Location:</strong> Erbil-Choman
</div>
<div class="contact-item">
<strong>GitHub:</strong> <a href="https://github.com/ibrahimsoftware1" target="_blank">github.com/ibrahimsoftware1</a>
</div>
</div>
</div>

</div>

<style>
:root {
  --primary-dark: #2C3E50;
  --primary-medium: #34495E;
  --neutral-medium: #7F8C8D;
  --neutral-light: #BDC3C7;
  --background-light: #ECFOF1;
  --text-dark: #2C3E50;
}

.modern-portfolio {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: #ECFOF1;
  min-height: 100vh;
}

.profile-card,
.skills-card,
.education-card,
.languages-card,
.contact-card {
  background: var(--neutral-light);
  border: 2px solid var(--neutral-medium);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(44, 62, 80, 0.1);
  color: var(--text-dark);
}

.skills-card h3 {
  color: var(--primary-dark);
  font-size: 1.1rem;
  margin: 1.5rem 0 0.8rem 0;
  border-bottom: 2px solid var(--neutral-medium);
  padding-bottom: 0.5rem;
}

.skills-card h3:first-of-type {
  margin-top: 0;
}

.education-card h3 {
  color: var(--primary-dark);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: #ECFOF1;
  border-radius: 8px;
  border: 2px solid #7F8C8D;
}

.contact-item .icon {
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

.contact-item a {
  color: var(--primary-dark);
  text-decoration: none;
  font-weight: 500;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --background-light: #2C3E50;
    --neutral-light: #34495E;
    --text-dark: #ECFOF1;
  }
  
  .modern-portfolio {
    background: var(--background-light);
    color: var(--text-dark);
  }
}

@media (max-width: 768px) {
  .modern-portfolio {
    padding: 1rem;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  
  .contact-item {
    padding: 0.6rem;
    border: 2px solid #BDC3C7;
    font-size: 0.9rem;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  .contact-item .icon {
    font-size: 1rem;
    min-width: 20px;
    flex-shrink: 0;
  }
  
  .contact-item strong {
    font-size: 0.9rem;
  }
}
</style>