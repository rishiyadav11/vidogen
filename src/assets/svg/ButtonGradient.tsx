const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#A8E6CF" />
          <stop offset="100%" stopColor="#56C596" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#B2F7EF" />
          <stop offset="50%" stopColor="#66DE93" />
          <stop offset="100%" stopColor="#38B000" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#28A745" />
          <stop offset="100%" stopColor="#C2F970" />
        </linearGradient>
        <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#57CC99" />
          <stop offset="100%" stopColor="#38A3A5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
