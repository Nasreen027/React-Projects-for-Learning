const alertStyles = {
  success: {
    box: "bg-green-50 border-green-300 text-green-800",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  error: {
    box: "bg-red-50 border-red-300 text-red-800",
    icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  warning: {
    box: "bg-yellow-50 border-yellow-300 text-yellow-800",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
  info: {
    box: "bg-blue-50 border-blue-300 text-blue-800",
    icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
};

const AlertBox = ({ type = "success", title, message }) => {
  const style = alertStyles[type] || alertStyles.success;

  return (
    <div
      className={`flex items-start mt-3 gap-3 border rounded-lg p-4 ${style.box}`}
    >
      <svg
        className="w-5 h-5 mt-0.5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={style.icon}
        />
      </svg>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default AlertBox;
