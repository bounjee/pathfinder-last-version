import React from 'react'

const tripPage = () => {
  return (
    // ## NAVBAR SECTION ##
<>
    <navbar className='navbar'>
        <div className='navbar-logo'>
        <a href='#'><img src={pathfinderLogo} alt="Pathfinder Icon" className="icon" />  Pathfinder</a>
        </div>
        <div className='navbar-community'>
            <a href='#'>Topluluk Rotaları</a>
            </div>
        <div className='navbar-profile'>
        <a href='#'>Profil</a>

        </div>
    </navbar>

        {/* // ## MAIN SECTION ## */}

    <main className='main-section'>
        <div className='main-components'>
            <div className='main-text'>Rotanızı Planlayın!</div>
            
            <div className='trip-section'>
                <div className='trip-text'>Nereye gitmek istersiniz?</div>
                <div className='trip-date'>Yolculuk tarihini belirtiniz.</div>

                <div className='activities-section'>
                    <div className='activities-text'>Gezeceğiniz yerde neler yapmak istersiniz?</div>
                    <div className='activities'>Kültürel & Tarihi Gezi</div>
                    <div className='activities'>Alışveriş</div>
                    <div className='activities'>Resim & Sanat Etkinlikleri</div>
                    <div className='activities'>Gastronomi Etkinlikleri</div>
                    <div className='activities'>Eğlence & Gece Hayatı</div>
                </div>
            </div>
        </div>
        <div className='trip-btn'>Sonraki Sayfa</div>
    </main>


{/* // ## FOOTER SECTION ## */}

<footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/about">Hakkımızda</a></li>
            <li><a href="/services">Servislerimiz</a></li>
            <li><a href="/contact">İletişim</a></li>
          </ul>
        </div>
        <div className="footer-socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='social-icons'>
        <FaLinkedin size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='social-icons'>
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='social-icons'>
        <FaTwitter size={24} />
      </a>
    </div>
        <div className="footer-copyright">
          <p>2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>

    </>
  )
}

export default tripPage