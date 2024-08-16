import React from 'react'

const mealAndbudgetPage = () => {
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
           <div className='meal-preferences-section'>
            <div className='meal-preferences-text'>Yemek Tercihleriniz</div>
            <div className='meal-preferences-subtext'>Seyahatinize dahil etmek istediğiniz yemekleri, bütçenizi ve tercih ettiğiniz yemek türünü seçin.</div>
            <div className='foods-section'>
                <div className='food-preferences'>Tatlı Yemekler</div>
                <div className='food-preferences'>Tuzlu Yemekler</div>
                <div className='food-preferences'>Et Yemekleri</div>
                <div className='food-preferences'>Vejeteryan & Vegan Yemekler</div>
                <div className='food-preferences'>Alerjiniz varsa belirtiniz.</div>
            </div>
            
            <div className='budget-section'>
                <div className='budget-level-text'>Bütçenizi belirtiniz</div>
                <div className='budget-level-subtext'>Bütçe düzeyine göre en az veya daha pahalı restoranları seçeceğiz.</div>
                <div className='budget-box'>Ucuz Pahalı yeri</div>
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

export default mealAndbudgetPage