'use client';

const Footer: React.FC = () => {
    return (
      <footer>
        <p>&copy; 2024 AIT NLP laboratory</p>
        <style jsx>{`
          footer {
            text-align: center;
            padding: 1rem;
            background: #333;
            color: white;
            position: fixed;
            width: 100%;
            bottom: 0;
          }
        `}</style>
      </footer>
    );
  };
  
  export default Footer;
  