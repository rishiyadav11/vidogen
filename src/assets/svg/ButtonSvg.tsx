const ButtonSvg = (white: boolean) => (
  <>
    <svg className="absolute top-0 left-0" width="21" height="44" viewBox="0 0 21 44">
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"}
        strokeWidth="2"
        d="M20,2 Q10,2 10,22 Q10,42 20,42"
      />
    </svg>

    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <rect width="100" height="44" rx="22" fill="white" />
      ) : (
        <>
          <rect y="0" width="100" height="2" fill="url(#btn-bottom)" rx="1" />
          <rect y="42" width="100" height="2" fill="url(#btn-top)" rx="1" />
        </>
      )}
    </svg>

    <svg className="absolute top-0 right-0" width="21" height="44" viewBox="0 0 21 44">
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right)"}
        strokeWidth="2"
        d="M0,2 Q10,2 10,22 Q10,42 0,42"
      />
    </svg>
  </>
);

export default ButtonSvg;
