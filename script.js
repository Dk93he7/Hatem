* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
}


body {
    background: #0f172a;
    color: #fff;
    direction: rtl;
    overflow-x: hidden;
    scroll-behavior: smooth;
}


.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    background: rgba(30, 30, 30, 0.95);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}


.logo {
    font-family: 'Amiri', serif;
    font-size: 32px;
    font-weight: 700;
    color: #ffd700;
    text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}


.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}


.nav-links li a {
    color: #e0e0e0;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 0.3s ease;
}


.nav-links li a:hover, .nav-links li a.active {
    color: #fff;
    background-color: #00d4ff;
}


.hero {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #1e1e1e;
    padding: 120px 20px 50px;
    position: relative;
    z-index: 1;
}


.hero-content {
    max-width: 700px;
}


.hero-content img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 4px solid #00d4ff;
}


.hero-content h1 {
    font-family: 'Amiri', serif;
    font-size: 52px;
    font-weight: 700;
    color: #ffd700;
    text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
    margin-bottom: 20px;
}


.hero-content .bio {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.6;
    color: #e0e0e0;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}


.hero-content .info-bar {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    background: linear-gradient(135deg, #2a2a2a, #1e1e1e);
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;
}


.hero-content .info-bar p {
    font-size: 20px;
    font-weight: 400;
    color: #e0e0e0;
    display: flex;
    align-items: center;
    gap: 10px;
}


.hero-content .info-bar i {
    color: #00d4ff;
    font-size: 22px;
}


.btn {
    padding: 15px 35px;
    background-color: #00d4ff;
    color: #fff;
    text-decoration: none;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 600;
    transition: background-color 0.3s ease;
}


.btn:hover {
    background-color: #0096cc;
}


.section {
    padding: 80px 50px;
    text-align: center;
    background: #0f172a;
}


.section h2 {
    font-size: 40px;
    font-weight: 700;
    color: #00d4ff;
    margin-bottom: 40px;
}


.personal-info-content {
    max-width: 900px;
    margin: 0 auto;
    background: #1e1e1e;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 30px;
}


.personal-info-content .info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    background: #2a2a2a;
    padding: 15px 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}


.personal-info-content .info-item:hover {
    transform: translateY(-5px);
}


.personal-info-content .info-item i {
    color: #00d4ff;
    font-size: 24px;
}


.personal-info-content .info-item p {
    font-size: 20px;
    font-weight: 400;
    color: #e0e0e0;
    margin: 0;
}


.skills-content {
    max-width: 1100px;
    margin: 0 auto;
    background: #1e1e1e;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 30px;
}


.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    justify-items: center;
}


.skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}


.progress-circle {
    position: relative;
    width: 120px;
    height: 120px;
}


.progress-circle svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
}


.progress-circle .circle-bg {
    fill: none;
    stroke: #2a2a2a;
    stroke-width: 10;
}


.progress-circle .circle-fg {
    fill: none;
    stroke: #00d4ff;
    stroke-width: 10;
    stroke-linecap: round;
    transition: stroke-dashoffset 1s ease-in-out;
}


.progress-circle .percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: 600;
    color: #e0e0e0;
}


.skill-item p {
    font-size: 18px;
    font-weight: 400;
    color: #e0e0e0;
}


.languages-content {
    max-width: 700px;
    margin: 0 auto;
    background: #1e1e1e;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 30px;
}


.languages-content p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
    color: #e0e0e0;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
}


.languages-content i {
    color: #00d4ff;
    font-size: 22px;
}


.services-grid, .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 20px;
}


.service-card, .portfolio-card {
    background: #1e1e1e;
    padding: 25px;
    border-radius: 10px;
    transition: transform 0.3s ease;
}


.service-card:hover, .portfolio-card:hover {
    transform: translateY(-10px);
}


.service-card i {
    font-size: 50px;
    color: #00d4ff;
    margin-bottom: 15px;
}


.service-card h3, .portfolio-card h3 {
    font-size: 26px;
    font-weight: 600;
    color: #e0e0e0;
    margin-bottom: 10px;
}


.service-card p, .portfolio-card p {
    font-size: 18px;
    color: #e0e0e0;
}


.portfolio-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
}


.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}


.contact-form input, .contact-form textarea {
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #2a2a2a;
    color: #fff;
    font-size: 18px;
}


.contact-form input:focus, .contact-form textarea:focus {
    outline: none;
    border: 2px solid #00d4ff;
}


.contact-form textarea {
    resize: vertical;
    min-height: 150px;
}


.back-to-top {
    position: fixed;
    bottom: 50px;
    left: 20px;
    background-color: #00d4ff;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-decoration: none;
    opacity: 0;
    transition: opacity 0.3s ease;
}


.back-to-top.show {
    opacity: 1;
}


.back-to-top:hover {
    background-color: #0096cc;
}


.footer {
    text-align: center;
    padding: 30px;
    background-color: #1e1e1e;
}


.social-links {
    margin-top: 10px;
}


.social-links a {
    color: #00d4ff;
    font-size: 26px;
    margin: 0 15px;
    transition: color 0.3s ease;
}


.social-links a:hover {
    color: #0096cc;
}


@media (max-width: 768px) {
    .navbar {
        padding: 15px 20px;
        justify-content: center;
    }


    .nav-links {
        gap: 8px;
    }


    .nav-links li a {
        font-size: 14px;
        padding: 8px 10px;
    }


    .hero-content h1 {
        font-size: 40px;
    }


    .hero-content .bio, .hero-content .info-bar p {
        font-size: 18px;
    }


    .hero-content img {
        width: 140px;
        height: 140px;
    }


    .hero-content .info-bar {
        padding: 15px;
        flex-direction: column;
    }


    .section {
        padding: 50px 20px;
    }


    .section h2 {
        font-size: 32px;
    }


    .progress-circle {
        width: 100px;
        height: 100px;
    }


    .progress-circle .percentage {
        font-size: 18px;
    }
}


@media (max-width: 480px) {
    .hero-content h1 {
        font-size: 32px;
    }


    .hero-content .bio, .hero-content .info-bar p {
        font-size: 16px;
    }


    .hero-content img {
        width: 120px;
        height: 120px;
    }


    .btn {
        padding: 12px 25px;
        font-size: 16px;
    }


    .progress-circle {
        width: 80px;
        height: 80px;
    }


    .progress-circle .percentage {
        font-size: 16px;
    }


    .hero-content .info-bar {
        flex-direction: column;
        padding: 10px;
    }
}
