function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerTop">
          <div className="footerBrand">
            <span className="footerName">Mdoughy Yanis</span>
            <span className="footerTagline">Étudiant à Epitech Paris</span>
          </div>
        </div>

        <div className="footerBottom">
          <span className="muted">© {new Date().getFullYear()} Mdoughy Yanis</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
