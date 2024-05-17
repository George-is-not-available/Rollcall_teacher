import React from 'react';

const AdComponent = ({ showAd, handleCloseAd }) => {
  if (!showAd) return null;

  const adUrl = "http://tp.9377s.com/1489582/";
  const imageUrl = `${process.env.PUBLIC_URL}/AD.png`; // 使用 PUBLIC_URL 来引用 public 文件夹中的图片

  return (
    <a href={adUrl} target="_blank" rel="noopener noreferrer" style={styles.adContainer}>
      <img src={imageUrl} alt="广告图片" style={styles.adImage} />
      <div style={styles.closeButtonContainer}>
        <button onClick={handleCloseAd} style={styles.closeButton}>关闭</button>
      </div>
    </a>
  );
};

const styles = {
  adContainer: {
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "300px",
    height: "200px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "left 0.5s ease-in-out",
    zIndex: "9999",
    textDecoration: "none",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  adImage: {
    width: "280px",
    marginBottom: "20px",
  },
  closeButtonContainer: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  closeButton: {
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
  },
};

export default AdComponent;
